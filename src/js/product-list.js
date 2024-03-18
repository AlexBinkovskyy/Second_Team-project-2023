import discountSvg from '../images/icons/discount.svg';
import shoppingSvg from '../images/icons/shopping-cart.svg';
import { getProdByParams } from './query';
import { filterForm } from './filter';
import { setDefaultFilterParams } from './localStorage';
import { checkFilterParams } from './filter';
import { showProductModal } from './product-list-modal.js';
import check from '../images/icons/check-ico.svg';
import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';
import { getProdByQuery } from './query';
import { updateCartBtns } from './main';

const container = document.getElementById('tui-pagination-container');
let currentPage = 1;

const productList = document.querySelector('.product-list');
const tuiPagination = document.querySelector('.pagination');


export async function renderProductList({ results, perPage, totalPages }) {
  tuiPagination.classList.remove('visually-hidden');

  productList.innerHTML = createMarkup(results);

  const productModalOpen = document.querySelectorAll('.product-modal-open');
  productModalOpen.forEach(element => {
    element.addEventListener('click', showProductModal(element));
  });

  if (!tuiPagination.getAttribute('data-initialized')) {
    const instance = new Pagination(container, {
      totalItems: perPage * totalPages,
      itemsPerPage: perPage,
      visiblePages: 5,
      centerAlign: true,
      template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
          '</a>',
      },
    });

    instance.on('beforeMove', async event => {
      currentPage = event.page;
      try {
        const { data: newData } = await getProdByQuery({
          page: currentPage,
          limitPerPage: perPage,
        });
        renderProductList(newData);
        updateCartBtns();
      } catch (err) {
        console.log(err);
      }
    });

    tuiPagination.setAttribute('data-initialized', 'true');
  }
}

function createMarkup(arr) {
  return arr
    .map(
      ({ _id, name, img, category, price, size, is10PercentOff, popularity }) =>
        `
        <li class="all-product-card product-modal-open js-product-card" id="${_id}" data-id=${_id}>
          <div>
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
            <button class="all-product-btn buy-btn js-buy-btn" type="button">
              <img
                class="all-buy-svg js-btn-first-ico"
                src="${shoppingSvg}"
                alt="shop-icon"
                width="18"
                height="18"
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
  const emptyQuery = `
  <div class="product-search-error">
  <h3 class="product-search-title header-three">Nothing was found for the selected <a href="" class="product-search-link link js-link">filters...</a></h3>
  <p class="product-search-text">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
  </div>
  `;
  productList.innerHTML = emptyQuery;
  const emptySetLink = document.querySelector('.js-link');
  emptySetLink.addEventListener('click', onClick);
  tuiPagination.classList.add('visually-hidden');
}
