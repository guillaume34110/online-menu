/**
 * Module de gestion statique des QR codes
 */
import { EVENTS, onEvent } from './utils.js';
import { translate } from './i18n.js';

const QR_IMAGE_PATH = './assets/qrCode.png';

const MENU_PUBLIC_URL = 'https://guillaume34110.github.io/online-menu/';

let isModalOpen = false;

const renderStaticQRCode = () => {
  const menuElement = document.getElementById('qr-menu');
  if (!menuElement) {
    return;
  }

  menuElement.innerHTML = `
    <img src="${QR_IMAGE_PATH}" data-i18n-attr="alt:qr.menu.alt" alt="${translate('qr.menu.alt')}" />
    <div class="qr-url">${MENU_PUBLIC_URL}</div>
  `;
};

/**
 * Ouvre la modal des QR codes
 */
const openQRModal = () => {
  const modal = document.getElementById('qr-modal');
  if (modal) {
    modal.classList.add('show');
    modal.removeAttribute('hidden');
    isModalOpen = true;
    renderStaticQRCode();
  }
};

/**
 * Ferme la modal des QR codes
 */
const closeQRModal = () => {
  const modal = document.getElementById('qr-modal');
  if (modal) {
    modal.classList.remove('show');
    modal.setAttribute('hidden', '');
    isModalOpen = false;
  }
};

/**
 * Initialise le module QR code
 */
export const initQRCode = () => {
  renderStaticQRCode();
  onEvent(EVENTS.LANGUAGE_CHANGED, renderStaticQRCode);
  
  // Gérer la fermeture de la modal
  const closeButton = document.getElementById('qr-modal-close');
  if (closeButton) {
    closeButton.addEventListener('click', closeQRModal);
  }

  const footerTrigger = document.getElementById('footer-qr-trigger');
  if (footerTrigger) {
    footerTrigger.addEventListener('click', openQRModal);
  }
  
  // Fermer la modal en cliquant à l'extérieur
  const modal = document.getElementById('qr-modal');
  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeQRModal();
      }
    });
  }
  
  // Fermer la modal avec la touche Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isModalOpen) {
      closeQRModal();
    }
  });
};

export default {
  initQRCode,
  openQRModal,
  closeQRModal
};
