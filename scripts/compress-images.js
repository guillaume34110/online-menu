#!/usr/bin/env node

import { execFile } from 'child_process';
import { createHash, randomUUID } from 'crypto';
import { promises as fs } from 'fs';
import os from 'os';
import path from 'path';
import { promisify } from 'util';
import { fileURLToPath } from 'url';

const execFileAsync = promisify(execFile);
const targetBytes = getTargetBytes();
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');
const imagesDir = resolveImagesDir();
const supportedExts = new Set(['.png', '.webp', '.jpg', '.jpeg']);

async function main() {
  await ensureMagick();
  let imageFiles = await collectImages(imagesDir);
  if (!imageFiles.length) {
    console.log(`No images found under ${path.relative(repoRoot, imagesDir)}.`);
    return;
  }

  const { uniqueFiles, duplicatesRemoved } = await removeDuplicateFiles(imageFiles);
  imageFiles = uniqueFiles;

  if (duplicatesRemoved.length) {
    console.log(`Removed ${duplicatesRemoved.length} duplicate file(s).`);
    duplicatesRemoved.forEach(({ duplicate, original }) => {
      console.log(`  - ${formatRelativePath(duplicate)} (same as ${formatRelativePath(original)})`);
    });
    console.log('');
  }

  let compressedCount = 0;
  let skippedCount = 0;
  const failures = [];

  for (const filePath of imageFiles) {
    const relativePath = path.relative(repoRoot, filePath);
    const originalStats = await fs.stat(filePath);
    const originalSize = originalStats.size;

    if (originalSize <= targetBytes) {
      skippedCount += 1;
      continue;
    }

    try {
      const result = await compressImage(filePath, originalSize);
      compressedCount += 1;
      logCompression(relativePath, originalSize, result);
    } catch (err) {
      failures.push({ filePath: relativePath, error: err });
      console.error(`✗ Failed to compress ${relativePath}: ${err.message}`);
    }
  }

  console.log('');
  console.log('Done.');
  console.log(`Compressed: ${compressedCount}`);
  console.log(`Already OK: ${skippedCount}`);
  if (failures.length) {
    console.log(`Failures: ${failures.length}`);
    failures.forEach(({ filePath, error }) => {
      console.log(`  - ${filePath}: ${error.message}`);
    });
    process.exitCode = 1;
  }
}

function getTargetBytes() {
  const arg = process.argv.find((value) => value.startsWith('--target='));
  if (!arg) {
    return 800 * 1024;
  }

  const kbValue = Number.parseInt(arg.split('=')[1], 10);
  if (Number.isNaN(kbValue) || kbValue <= 0) {
    throw new Error('Invalid --target value. Provide a positive integer size in kilobytes.');
  }

  return kbValue * 1024;
}

function resolveImagesDir() {
  const arg = process.argv.find((value) => value.startsWith('--dir='));
  if (arg) {
    const provided = arg.split('=')[1];
    return path.resolve(process.cwd(), provided);
  }
  return path.resolve(repoRoot, 'assets/images');
}

async function ensureMagick() {
  try {
    await execFileAsync('magick', ['-version']);
  } catch (error) {
    throw new Error('ImageMagick (magick) is required but was not found on PATH.');
  }
}

async function collectImages(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      const nested = await collectImages(entryPath);
      files.push(...nested);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (supportedExts.has(ext)) {
        files.push(entryPath);
      }
    }
  }

  return files;
}

async function removeDuplicateFiles(filePaths) {
  const hashToPath = new Map();
  const duplicates = [];
  const uniqueFiles = [];

  for (const filePath of filePaths) {
    const hash = await computeHash(filePath);
    const existing = hashToPath.get(hash);
    if (!existing) {
      hashToPath.set(hash, filePath);
      uniqueFiles.push(filePath);
    } else {
      duplicates.push({ duplicate: filePath, original: existing });
    }
  }

  for (const { duplicate } of duplicates) {
    await fs.unlink(duplicate).catch(() => {});
  }

  return { uniqueFiles, duplicatesRemoved: duplicates };
}

async function compressImage(filePath, originalSize) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.png') {
    return compressPng(filePath, originalSize);
  }
  if (ext === '.webp') {
    return compressWebp(filePath, originalSize);
  }
  if (ext === '.jpg' || ext === '.jpeg') {
    return compressJpeg(filePath, originalSize);
  }
  throw new Error(`Unsupported file extension: ${ext}`);
}

async function compressPng(filePath, originalSize) {
  const baseArgs = [
    '-strip',
    '-define',
    'png:compression-level=9',
    '-define',
    'png:compression-strategy=1',
    '-define',
    'png:exclude-chunk=all'
  ];
  const minScale = 5;
  let low = minScale;
  let high = 100;
  let bestCandidate = null;

  while (low <= high) {
    const scale = Math.ceil((low + high) / 2);
    const args = [...baseArgs];
    if (scale !== 100) {
      args.push('-resize', `${scale}%`);
    }

    const candidate = await runConvert(filePath, args, '.png');
    candidate.scale = scale;

    if (candidate.size <= targetBytes) {
      bestCandidate = await pickBetterCandidate(bestCandidate, candidate, (left, right) => {
        if (right.scale !== left.scale) {
          return right.scale > left.scale;
        }
        return right.size < left.size;
      });
      low = scale + 1;
    } else {
      await fs.unlink(candidate.path).catch(() => {});
      high = scale - 1;
    }
  }

  if (!bestCandidate) {
    for (let scale = minScale - 1; scale >= 1; scale -= 1) {
      const args = [...baseArgs, '-resize', `${scale}%`];
      const candidate = await runConvert(filePath, args, '.png');
      candidate.scale = scale;
      if (candidate.size <= targetBytes) {
        bestCandidate = candidate;
        break;
      }
      await fs.unlink(candidate.path).catch(() => {});
    }
  }

  if (!bestCandidate) {
    throw new Error('Unable to reduce below target size while retaining PNG format.');
  }

  await fs.copyFile(bestCandidate.path, filePath);
  await fs.unlink(bestCandidate.path).catch(() => {});

  return {
    bytes: bestCandidate.size,
    method: bestCandidate.scale === 100 ? 'lossless' : `resize-${bestCandidate.scale}`,
    quality: null,
    scale: bestCandidate.scale
  };
}

async function compressWebp(filePath, originalSize) {
  const baseArgs = [
    '-strip',
    '-define',
    'webp:method=6',
    '-define',
    'webp:use-sharp-yuv=true'
  ];

  let bestCandidate = null;

  const qualityCandidate = await tryWebpQualitySearch(filePath, baseArgs);
  if (qualityCandidate) {
    bestCandidate = qualityCandidate;
  }

  if (!bestCandidate) {
    bestCandidate = await tryWebpScaleSearch(filePath, baseArgs);
  }

  if (!bestCandidate) {
    throw new Error('Unable to reduce below target size with WebP re-encoding.');
  }

  await fs.copyFile(bestCandidate.path, filePath);
  await fs.unlink(bestCandidate.path).catch(() => {});

  return {
    bytes: bestCandidate.size,
    method: bestCandidate.scale === 100 ? `quality-${bestCandidate.quality}` : `quality-${bestCandidate.quality}-resize-${bestCandidate.scale}`,
    quality: bestCandidate.quality,
    scale: bestCandidate.scale
  };
}

async function tryWebpQualitySearch(filePath, baseArgs) {
  let low = 60;
  let high = 100;
  let bestCandidate = null;

  while (low <= high) {
    const quality = Math.floor((low + high) / 2);
    const args = [...baseArgs, '-quality', String(quality)];
    const candidate = await runConvert(filePath, args, '.webp');
    candidate.quality = quality;
    candidate.scale = 100;

    if (candidate.size <= targetBytes) {
      bestCandidate = await pickBetterCandidate(bestCandidate, candidate, (left, right) => {
        if (right.quality !== left.quality) {
          return right.quality > left.quality;
        }
        return right.size < left.size;
      });
      low = quality + 1;
    } else {
      await fs.unlink(candidate.path).catch(() => {});
      high = quality - 1;
    }
  }

  return bestCandidate;
}

async function tryWebpScaleSearch(filePath, baseArgs) {
  let low = 60;
  let high = 100;
  let bestCandidate = null;

  while (low <= high) {
    const scale = Math.ceil((low + high) / 2);
    const args = [...baseArgs, '-quality', '90'];
    if (scale !== 100) {
      args.push('-resize', `${scale}%`);
    }
    const candidate = await runConvert(filePath, args, '.webp');
    candidate.scale = scale;
    candidate.quality = 90;

    if (candidate.size <= targetBytes) {
      bestCandidate = await pickBetterCandidate(bestCandidate, candidate, (left, right) => {
        if (right.scale !== left.scale) {
          return right.scale > left.scale;
        }
        if (right.quality !== left.quality) {
          return right.quality > left.quality;
        }
        return right.size < left.size;
      });
      low = scale + 1;
    } else {
      await fs.unlink(candidate.path).catch(() => {});
      high = scale - 1;
    }
  }

  if (!bestCandidate) {
    for (let scale = 59; scale >= 25; scale -= 1) {
      const args = [...baseArgs, '-quality', '85', '-resize', `${scale}%`];
      const candidate = await runConvert(filePath, args, '.webp');
      candidate.scale = scale;
      candidate.quality = 85;
      if (candidate.size <= targetBytes) {
        return candidate;
      }
      await fs.unlink(candidate.path).catch(() => {});
    }
  }

  return bestCandidate;
}

async function compressJpeg(filePath) {
  const baseArgs = ['-strip'];
  let low = 60;
  let high = 100;
  let bestCandidate = null;

  while (low <= high) {
    const quality = Math.floor((low + high) / 2);
    const args = [...baseArgs, '-quality', String(quality)];
    const candidate = await runConvert(filePath, args, '.jpg');
    candidate.quality = quality;
    candidate.scale = 100;

    if (candidate.size <= targetBytes) {
      bestCandidate = await pickBetterCandidate(bestCandidate, candidate, (left, right) => {
        if (right.quality !== left.quality) {
          return right.quality > left.quality;
        }
        return right.size < left.size;
      });
      low = quality + 1;
    } else {
      await fs.unlink(candidate.path).catch(() => {});
      high = quality - 1;
    }
  }

  if (!bestCandidate) {
    throw new Error('Unable to reduce below target size with JPEG re-encoding.');
  }

  await fs.copyFile(bestCandidate.path, filePath);
  await fs.unlink(bestCandidate.path).catch(() => {});

  return {
    bytes: bestCandidate.size,
    method: `quality-${bestCandidate.quality}`,
    quality: bestCandidate.quality,
    scale: 100
  };
}

async function runConvert(inputPath, args, forcedExt) {
  const ext = forcedExt ?? path.extname(inputPath);
  const tmpPath = path.join(os.tmpdir(), `menu-compress-${randomUUID()}${ext}`);
  const convertArgs = ['convert', inputPath, ...args, tmpPath];
  await execFileAsync('magick', convertArgs);
  const stats = await fs.stat(tmpPath);
  return { path: tmpPath, size: stats.size };
}

async function pickBetterCandidate(current, candidate, comparator) {
  if (!current) {
    return candidate;
  }
  const keepCandidate = comparator(current, candidate);
  if (keepCandidate) {
    await fs.unlink(current.path).catch(() => {});
    return candidate;
  }
  await fs.unlink(candidate.path).catch(() => {});
  return current;
}

function logCompression(relativePath, originalSize, result) {
  const originalText = formatBytes(originalSize);
  const newText = formatBytes(result.bytes);
  const savedRatio = ((1 - result.bytes / originalSize) * 100).toFixed(1);
  const method = result.method;
  console.log(`✓ ${relativePath}: ${originalText} → ${newText} (${savedRatio}% smaller, ${method})`);
}

async function computeHash(filePath) {
  const data = await fs.readFile(filePath);
  return createHash('sha256').update(data).digest('hex');
}

function formatBytes(bytes) {
  const units = ['B', 'KB', 'MB'];
  let size = bytes;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }
  return `${size.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}

function formatRelativePath(filePath) {
  return path.relative(repoRoot, filePath) || filePath;
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
