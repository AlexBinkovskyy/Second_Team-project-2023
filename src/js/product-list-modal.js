export function showProductModal(element) {
  const refs = {
    openModalBtn: element,
    closeModalBtn: document.querySelector('.product-modal-close'),
    modal: document.querySelector('.product-backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModalOpen);
  refs.closeModalBtn.addEventListener('click', toggleModalClose);

  function toggleModalOpen() {
    refs.modal.classList.toggle('is-hidden');

    logModal(event.currentTarget);
  }

  function toggleModalClose() {
    refs.modal.classList.toggle('is-hidden');
  }
}

function logModal(obj) {
  const productModalContent = document.querySelector('.product-modal-content');
  console.log(obj);
}

function createProductModal() {}
