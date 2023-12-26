import { getProdByParams } from './query';
import { getProdByPopular } from './query';
import { getProdByDiscount } from './query';
import { getProdByID } from './query';
import { getProdByCategories } from './query';
import { renderPopularProduct } from './popular-product';
import { renderProductDiscount } from './discount';
import { renderProductList } from './product-list';
import { renderFilterSelect } from './filter';
import { getCartItems } from './localStorage.js';
import { showModalMessage } from './footer.js';
import Pagination from 'tui-pagination';
import { getProdByQuery } from './query';

const container = document.getElementById('tui-pagination-container');
const instance = new Pagination(container, {});

getProdByDiscount()
  .then(({ data }) => {
    renderProductDiscount(data);
  })
  .catch(error => console.log(error));

  getProdByParams().then(({ data, data: { perPage, totalPages } }) => {
    renderProductList(data);
    const container = document.getElementById('tui-pagination-container');
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
          '<span class="tui-ellip">...</span>' +
          '</a>',
      },
    });
  
    instance.on('beforeMove', async (event) => {
      const newPage = event.page;
      try {
        const { data: newData } = await getProdByQuery({ page: newPage, limitPerPage: perPage });
        renderProductList(newData);
      } catch (err) {
        console.log(err);
      }
    });
  });
  
getProdByPopular()
  .then(({ data }) => {
    renderPopularProduct(data);
  })
  .catch(error => console.log(error));

getProdByCategories()
  .then(({ data }) => {
    renderFilterSelect(data.toString().replaceAll('_', ' ').split(','));
  })
  .catch(error => console.log(error));

// showModalMessage();

/**
    |============================
    | Loader starts
    |============================
  */

const loaderContainer = document.getElementById('loader-container');
const main = document.querySelector('.main');
const body = document.body;

window.addEventListener('load', function () {
  const loadingScreen = document.querySelector('.loader-container');

  // Array of asynchronous functions
  const asyncFunctions = [
    getProdByDiscount,
    getProdByParams,
    getProdByPopular,
    getProdByCategories,
  ];

  // Show loading screen
  main.classList.add('visually-hidden');
  body.classList.add('no-scroll');
  loadingScreen.classList.remove('visually-hidden');

  // Execute all asynchronous functions
  Promise.all(asyncFunctions.map(fn => fn()))
    .then(() => {
      // All asynchronous functions completed
      main.classList.remove('visually-hidden');
      loadingScreen.classList.add('visually-hidden'); // Hide loading screen
      body.classList.remove('no-scroll');
    })
    .catch(error => {
      console.error('Error in asynchronous operation:', error);
      loadingScreen.classList.add('visually-hidden'); // Hide loading screen even in case of an error
      body.classList.remove('no-scroll');
    });
});

//export function hideLoader() {
//body.classList.remove('no-scroll');
//loaderContainer.classList.add('visually-hidden');
//}

/**
    |============================
    | Loader ends
    |============================
  */
