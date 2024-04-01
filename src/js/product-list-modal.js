import { getProdByID } from './query';
import shoppingSvg from '../images/icons/shopping-cart.svg';
import check from '../images/icons/check-ico.svg';
import { updateCartBtns } from './main';

const productModalContent = document.querySelector('.product-modal-content');
const body = document.querySelector('body');

export function showProductModal(element) {
  const refs = {
    openModalBtn: element,
    closeModalBtn: document.querySelector('.product-modal-close'),
    modal: document.querySelector('.product-backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModalOpen);

  function toggleModalOpen(event) {
    if (event.target.tagName !== 'BUTTON') {
      body.style.overflow = 'hidden';
      refs.modal.classList.remove('is-hidden');
      logModal(event.currentTarget);
      window.addEventListener('keydown', toggleModalClose);
      refs.closeModalBtn.addEventListener('click', toggleModalClose);
    }
  }

  function toggleModalClose(event) {
    if (event.key === 'Escape' || event.currentTarget === refs.closeModalBtn) {
      body.style.overflow = 'visible';
      productModalContent.innerHTML = `
      <div class="product-modal-content">Loading...</div>
      `;
      refs.modal.classList.add('is-hidden');
      window.removeEventListener('keydown', toggleModalClose);
      refs.closeModalBtn.removeEventListener('click', toggleModalClose);
    }
  }
}

function logModal(obj) {
  getProdByID(obj.id)
    .then(({ data }) => {
      const productModalContent = document.querySelector(
        '.product-modal-content'
      );
      productModalContent.innerHTML = renderProductModal(data);
      updateCartBtns();
    })
    .catch(error => console.log(error));
}

function renderProductModal(object) {
  return `
  <div class="modal-card-content  js-product-card" id="${
    object._id
  }" data-id="${object._id}">
    <div class="modal-card-pic-info">
      <img
        src="${object.img}"
        alt="${object.name}"
        loading="lazy"
        class="all-product-pic"
      />
      <div>
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
            </div>
        </p>
        <p class="all-product-desc">
        ${object.desc}
        </p>
      </div>
    </div>
      <div class="all-purchaise-box">
        <h3 class="all-product-price header-three">&#36;${object.price}</h3>
        <button class="modal-product-btn buy-btn js-buy-btn" type="button">
          <p class="modal-product-btn-text js-buy-btn">Add to</p>
          <img
                class="all-buy-svg js-btn-first-ico"
            src="${shoppingSvg}"
            alt="shop-icon"
          />
              <img
                class="all-buy-svg js-btn-second-ico"
                src="${check}"
                alt="shop-icon"
                width="18"
                height="18"
              />
            </button>
      </div>
    </div>
  `;
}
