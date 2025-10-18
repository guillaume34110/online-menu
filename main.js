import { initI18n } from './i18n.js';
import { initTheme } from './theme.js';
import { initMenu } from './menu.js';
import { initQRCode } from './qrcode.js';
import { initTextMenu } from './textmenu.js';
import { initPrint } from './print.js';

const bootApplication = () => {
  initI18n();
  initTheme();
  initMenu();
  initQRCode();
  initTextMenu();
  initPrint();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootApplication);
} else {
  bootApplication();
}
