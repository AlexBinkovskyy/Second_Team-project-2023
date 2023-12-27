import { getProdByID } from './query';
import shoppingSvg from '../images/icons/shopping-cart.svg';

const productModalContent = document.querySelector('.product-modal-content');
const productModalWindow = document.querySelector('.product-modal-window');

export function showProductModal(element) {
  const refs = {
    openModalBtn: element,
    closeModalBtn: document.querySelector('.product-modal-close'),
    modal: document.querySelector('.product-backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModalOpen);
  refs.closeModalBtn.addEventListener('click', toggleModalClose);

  function toggleModalOpen() {
    refs.modal.classList.remove('is-hidden');
    logModal(event.currentTarget);
  }

  function toggleModalClose() {
    productModalContent.innerHTML = `
    <div class="product-modal-content">Loading...</div>
    `;
    refs.modal.classList.add('is-hidden');
  }
}

function logModal(obj) {
  getProdByID(obj.id)
    .then(({ data }) => {
      const productModalContent = document.querySelector(
        '.product-modal-content'
      );
      productModalContent.innerHTML = renderProductModal(data);
    })
    .catch(error => console.log(error));
}

function renderProductModal(object) {
  return `
    <div class="modal-card-content">
      <img
        src="${object.img}"
        alt="${object.name}"
        loading="lazy"
        class="all-product-pic"
      />
      <h3 class="all-product-name header-three">${object.name}</h3>
      <div class="all-product-info regular-text">
        <p class="all-info-item">
          <span class="all-info-title"> Category: </span>
          ${object.category.replaceAll('_', ' ')}
        </p>
        <p class="all-info-item">
          <span class="all-info-title"> Size: </span>
          ${object.size}
        </p>
        <p class="all-info-item">
          <span class="all-info-title"> Popularity: </span>
          ${object.popularity}
        </p>
      </div>
      <div class="all-purchaise-box">
        <h3 class="all-product-price header-three">&#36;${object.price}</h3>
        <button class="all-product-btn buy-btn" type="button">
          <img
            class="all-buy-svg"
            src="${shoppingSvg}"
            alt="shop-icon"
            width="18"
            height="18"
          />
        </button>
      </div>
    </div>
  `;
}
