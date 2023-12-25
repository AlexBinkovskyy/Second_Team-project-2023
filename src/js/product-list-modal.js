export function showProductModal(productModalOpen) {
  const refs = {
    openModalBtn: productModalOpen,
    closeModalBtn: document.querySelector('.product-modal-close'),
    modal: document.querySelector('.product-backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
}

export function renderProductModal(data) {
  createProductModal(data.results);
}

function createProductModal() {}
