import discountSvg from '../images/icons/discount.svg';
import shoppingSvg from '../images/icons/shopping-cart.svg';
import { getProdByParams } from './query';
import { filterForm } from './filter';
import { setDefaultFilterParams } from './localStorage';
import { checkFilterParams } from './filter';
import { showProductModal } from './product-list-modal.js';

const productList = document.querySelector('.product-list');
const productModalWindow = document.querySelector('.product-modal-window');

export function renderProductList(data) {
  productList.innerHTML = createMarkup(data.results);

  const productModalOpen = document.querySelector('.product-modal-open');

  console.log(productModalOpen);

  productModalOpen.addEventListener(
    'click',
    showProductModal(productModalOpen)
  );
}

function createMarkup(arr) {
  return arr
    .map(
      ({ _id, name, img, category, price, size, is10PercentOff, popularity }) =>
        `
        <li class="all-product-card" id="${_id}">
          <div class="product-modal-open">
            <img
              class="all-discount-svg ${is10PercentOff
                .toString()
                .replace('false', 'visually-hidden')
                .replace('true', '')}"
              src="${discountSvg}"
              alt="discount-icon"
              width="60"
              height="60"
            />
            <img src="${img}" alt="${name}" loading="lazy" class="all-product-pic" />
            <h3 class="all-product-name header-three">${name}</h3>
            <div class="all-product-info regular-text">
              <p class="all-info-item">
                <span class="all-info-title"> Category: </span>
                ${category.replaceAll('_', ' ')}
              </p>
              <p class="all-info-item">
                <span class="all-info-title"> Size: </span>
                ${size}
              </p>
              <p class="all-info-item">
                <span class="all-info-title"> Popularity: </span>
                ${popularity}
              </p>
            </div>
          </div>
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${price}</h3>
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
        </li>
        `
    )
    .join('');
}

function onClick(event) {
  event.preventDefault();
  getProdByParams()
    .then(({ data }) => {
      renderProductList(data);
    })
    .catch(error => console.log(error));
  filterForm.reset();
  setDefaultFilterParams();
  checkFilterParams();
}

export function createEmptyMarkup() {
  const emptyQuery = `<h3>Nothing was found for the selected <a href="" class="link js-link">filters...</a></h3>
  <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>`;
  productList.innerHTML = emptyQuery;
  const emptySetLink = document.querySelector('.js-link');
  emptySetLink.addEventListener('click', onClick);
}
