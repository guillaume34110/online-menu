#!/usr/bin/env bash
set -euo pipefail

# Losslessly preprocess PNG files (color reduction, metadata removal),
# optimize them with pngcrush, and export WebP variants while removing the PNG originals.

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  script_name="$(basename "$0")"
  cat <<EOF
Usage: $script_name [DIRECTORY]

Optimizes every PNG inside DIRECTORY (defaults to this script's folder):
  - Quantize colors to PNG_COLOR_LEVELS per channel (default 32 -> ~32k colors)
  - Strip metadata
  - Optimize with pngcrush
  - Export lossless WebP next to the original, then delete the PNG

Dependencies: pngcrush, ImageMagick (magick or convert), cwebp
EOF
  exit 0
fi

if ! command -v pngcrush >/dev/null 2>&1; then
  echo "Error: pngcrush is not installed. Install it (e.g. 'brew install pngcrush') and retry." >&2
  exit 1
fi

if command -v magick >/dev/null 2>&1; then
  convert_cmd=(magick)
elif command -v convert >/dev/null 2>&1; then
  convert_cmd=(convert)
else
  echo "Error: ImageMagick (magick or convert) is required." >&2
  exit 1
fi

if ! command -v cwebp >/dev/null 2>&1; then
  echo "Error: cwebp is not installed. Install it (e.g. 'brew install webp') and retry." >&2
  exit 1
fi

target_dir="${1:-$(cd "$(dirname "$0")" && pwd)}"

if [[ ! -d "$target_dir" ]]; then
  echo "Error: directory not found: $target_dir" >&2
  exit 1
fi

channel_levels="${PNG_COLOR_LEVELS:-32}"
if ! [[ "$channel_levels" =~ ^[0-9]+$ ]] || (( channel_levels < 2 )); then
  echo "Warning: invalid PNG_COLOR_LEVELS='$channel_levels'. Falling back to 32." >&2
  channel_levels=32
fi
if (( channel_levels > 256 )); then
  echo "Warning: PNG_COLOR_LEVELS capped at 256 levels per channel." >&2
  channel_levels=256
fi

tmp_dir="$(mktemp -d)"
trap 'rm -rf "$tmp_dir"' EXIT

while IFS= read -r -d '' image_path; do
  base_dir="$(dirname "$image_path")"
  base_name="$(basename "$image_path")"
  stem="${base_name%.*}"

  processed_png="$(mktemp "$tmp_dir/preprocessed.XXXXXX.png")"
  optimized_png="$(mktemp "$tmp_dir/pngcrush.XXXXXX.png")"
  tmp_webp="$(mktemp "$tmp_dir/webp.XXXXXX.webp")"

  echo "Processing $image_path"

  convert_args=(
    "${convert_cmd[@]}"
    "$image_path"
    -strip
    -colorspace sRGB
    -posterize "$channel_levels"
    +dither
    -depth 8
  )
  convert_args+=("$processed_png")

  if ! "${convert_args[@]}" >/dev/null 2>&1; then
    echo "  ✗ Failed to preprocess $image_path" >&2
    rm -f "$processed_png" "$optimized_png" "$tmp_webp"
    continue
  fi

  if [[ ! -s "$processed_png" ]]; then
    echo "  ✗ Preprocessing yielded an empty file for $image_path" >&2
    rm -f "$processed_png" "$optimized_png" "$tmp_webp"
    continue
  fi

  if ! pngcrush -q -reduce -brute -rem alla -rem text \
      "$processed_png" "$optimized_png" >/dev/null 2>&1; then
    echo "  ✗ pngcrush failed on $image_path" >&2
    rm -f "$processed_png" "$optimized_png" "$tmp_webp"
    continue
  fi

  if [[ ! -s "$optimized_png" ]]; then
    echo "  ✗ pngcrush produced an empty file for $image_path" >&2
    rm -f "$processed_png" "$optimized_png" "$tmp_webp"
    continue
  fi

  webp_path="$base_dir/$stem.webp"
  if ! cwebp -quiet -lossless -z 9 "$optimized_png" -o "$tmp_webp"; then
    echo "  ✗ WebP conversion failed for $image_path" >&2
    rm -f "$processed_png" "$optimized_png" "$tmp_webp"
    continue
  fi

  if ! mv "$tmp_webp" "$webp_path"; then
    echo "  ⚠ Failed to write WebP for $image_path; keeping original PNG" >&2
    rm -f "$processed_png" "$optimized_png" "$tmp_webp"
    continue
  fi

  if rm -f "$image_path"; then
    echo "  ✓ Generated $webp_path (removed original PNG)"
  else
    echo "  ⚠ Generated $webp_path, but failed to delete original PNG" >&2
  fi

  rm -f "$processed_png" "$optimized_png"
done < <(find "$target_dir" -type f -iname '*.png' -print0)
