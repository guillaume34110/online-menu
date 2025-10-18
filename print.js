/**
 * Module de gestion de l'impression des modals
 */

export const initPrint = () => {
  const qrModal = document.getElementById('qr-modal');
  const textMenuModal = document.getElementById('text-menu-modal');
  const qrPrintButton = document.getElementById('footer-qr-print');
  const textMenuPrintButton = document.getElementById('footer-text-menu-print');

  // Observer pour détecter l'ouverture/fermeture de la modal QR
  if (qrModal && qrPrintButton) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'hidden') {
          const isHidden = qrModal.hasAttribute('hidden');
          qrPrintButton.style.display = isHidden ? 'none' : 'inline-flex';
        }
      });
    });

    observer.observe(qrModal, { attributes: true, attributeFilter: ['hidden'] });

    qrPrintButton.addEventListener('click', () => {
      window.print();
    });
  }

  // Observer pour détecter l'ouverture/fermeture de la modal menu textuel
  if (textMenuModal && textMenuPrintButton) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'hidden') {
          const isHidden = textMenuModal.hasAttribute('hidden');
          textMenuPrintButton.style.display = isHidden ? 'none' : 'inline-flex';
        }
      });
    });

    observer.observe(textMenuModal, { attributes: true, attributeFilter: ['hidden'] });

    textMenuPrintButton.addEventListener('click', () => {
      window.print();
    });
  }
};

export default {
  initPrint
};
