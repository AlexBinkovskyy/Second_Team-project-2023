import { getProdByID } from './query';
import shoppingSvg from '../images/icons/shopping-cart.svg';
import  check  from '../images/icons/check-ico.svg';

const productModalContent = document.querySelector('.product-modal-content');
const body = document.querySelector('body');

export function showProductModal(element) {
  const refs = {
    openModalBtn: element,
    closeModalBtn: document.querySelector('.product-modal-close'),
    modal: document.querySelector('.product-backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModalOpen);
  refs.closeModalBtn.addEventListener('click', toggleModalClose);

  function toggleModalOpen(event) {
    // body.style.overflow = 'hidden';
    // refs.modal.classList.remove('is-hidden');
    // logModal(event.currentTarget);

    const allProductBtn = document.querySelector('.all-product-btn');
    const allBuySvg = document.querySelector('.all-buy-svg');

    if (event.target === allProductBtn) {
      // console.log('allProductBtn');
      // event.preventDefault();
    } else if (event.target === allBuySvg) {
      // console.log('allBuySvg');
      // event.preventDefault();
    } else {
      body.style.overflow = 'hidden';
      refs.modal.classList.remove('is-hidden');
      logModal(event.currentTarget);
      // console.log('Render');
    }
    // console.log(allProductBtn);
    // console.log(allBuySvg);
  }

  function toggleModalClose() {
    body.style.overflow = 'visible';
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
    <div class="modal-card-content" id="${object._id}" data-id="${object._id}">
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
        <button class="modal-product-btn buy-btn js-buy-btn js-btn-first-ico" type="button">
          <p class="modal-product-btn-text">Add to</p>
          <img
            class="all-buy-svg"
            src="${shoppingSvg}"
            alt="shop-icon"
          />
        </button>
             <button class="all-product-btn btn-check buy-btn js-btn-second-ico" type="button">
              <img
                class="all-buy-svg"
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
