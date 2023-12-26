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
import { handleSubscriptionError } from './query.js';
import { toggleModal } from './footer.js';
import Pagination from 'tui-pagination';

const container = document.getElementById('tui-pagination-container');
// const instance = new Pagination(container, { ... });

getProdByDiscount()
  .then(({ data }) => {
    renderProductDiscount(data);
  })
  .catch(error => console.log(error));

getProdByParams()
  .then(({ data }) => {
    renderProductList(data);
    // // // // TUI
  })
  .catch(error => console.log(error));

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
