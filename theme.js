/**
 * Module de gestion des thèmes visuels
 */
/**
 * Module de thème cyclique : applique un thème en fonction de l'heure.
 */
const AVAILABLE_THEMES = ['morning', 'day', 'sunset', 'night'];
const DEFAULT_THEME = 'day';
const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes

let currentTheme = null;
let refreshTimer = null;

const hasDocument = typeof document !== 'undefined';
const hasWindow = typeof window !== 'undefined';

const setThemeClass = (theme) => {
  if (!hasDocument || !document.body) {
    return;
  }

  const resolvedTheme = AVAILABLE_THEMES.includes(theme) ? theme : DEFAULT_THEME;

  if (currentTheme === resolvedTheme) {
    return;
  }

  document.body.classList.remove(...AVAILABLE_THEMES.map(value => `theme-${value}`));
  document.body.classList.add(`theme-${resolvedTheme}`);
  currentTheme = resolvedTheme;
};

const getThemeForCurrentHour = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 11) return 'morning';
  if (hour >= 11 && hour < 17) return 'day';
  if (hour >= 17 && hour < 21) return 'sunset';
  return 'night';
};

const applyCyclicTheme = () => {
  setThemeClass(getThemeForCurrentHour());
};

const startThemeScheduler = () => {
  if (!hasWindow) {
    return;
  }

  if (refreshTimer) {
    window.clearInterval(refreshTimer);
  }
  refreshTimer = window.setInterval(applyCyclicTheme, REFRESH_INTERVAL);
};

export const initTheme = () => {
  applyCyclicTheme();
  startThemeScheduler();

  if (hasDocument) {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        applyCyclicTheme();
      }
    });
  }
};

export default {
  initTheme
};
