/**
 * Module de gestion statique des QR codes
 */
import { EVENTS, onEvent } from './utils.js';
import { translate } from './i18n.js';

const QR_PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <rect width="200" height="200" fill="#ffffff"/>
    <g fill="#111111">
      <rect x="0" y="0" width="60" height="60" rx="4"/>
      <rect x="140" y="0" width="60" height="60" rx="4"/>
      <rect x="0" y="140" width="60" height="60" rx="4"/>
      <rect x="52" y="52" width="24" height="24"/>
      <rect x="100" y="28" width="24" height="24"/>
      <rect x="120" y="88" width="20" height="20"/>
      <rect x="84" y="120" width="24" height="24"/>
      <rect x="148" y="148" width="20" height="20"/>
      <rect x="28" y="100" width="20" height="20"/>
    </g>
    <text x="50%" y="92%" font-family="sans-serif" font-size="18" fill="#555555" text-anchor="middle">QR mock</text>
  </svg>
`);

let isModalOpen = false;

const renderStaticQRCode = () => {
  const menuElement = document.getElementById('qr-menu');
  if (!menuElement) {
    return;
  }

  menuElement.innerHTML = `
    <img src="${QR_PLACEHOLDER}" data-i18n-attr="alt:qr.menu.alt" alt="${translate('qr.menu.alt')}" />
    <div class="qr-url">${window.location.href}</div>
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
