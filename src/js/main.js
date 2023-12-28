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
// import { showModalMessage } from './footer.js';
import { addProductToCart } from './workWithCart.js';
import shoppingSvg from '../images/sprite.svg';
import Pagination from 'tui-pagination';
import { getProdByQuery } from './query';
import 'tui-pagination/dist/tui-pagination.css';
import { setupSubscriptionForm } from './footer.js';

setupSubscriptionForm();
const container = document.getElementById('tui-pagination-container');
const instance = new Pagination(container, {});

getProdByDiscount()
  .then(({ data }) => {
    renderProductDiscount(data);
    updateCartBtns();
  })
  .catch(error => console.log(error));

getProdByParams().then(({ data, data: { perPage, totalPages } }) => {
  renderProductList(data);
  updateCartBtns();
  const container = document.getElementById('tui-pagination-container');
  const instance = new Pagination(container, {
    totalItems: perPage * totalPages,
    itemsPerPage: perPage,
    visiblePages: 5,
    centerAlign: true,
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong id="tui-page-btn"class="tui-page-btn tui-is-selected">{{page}}</strong>',
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
    const newPage = event.page;
    try {
      const { data: newData } = await getProdByQuery({
        page: newPage,
        limitPerPage: perPage,
      });
      renderProductList(newData);
      updateCartBtns();
    } catch (err) {
      console.log(err);
    }
  });
});

getProdByPopular()
  .then(({ data }) => {
    renderPopularProduct(data);
    updateCartBtns();
  })
  .catch(error => console.log(error));

getProdByCategories()
  .then(({ data }) => {
    renderFilterSelect(data.toString().replaceAll('_', ' ').split(','));
    updateCartBtns();
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

// window.addEventListener('load', function () {
//   const loadingScreen = document.querySelector('.loader-container');

//   // Array of asynchronous functions
//   const asyncFunctions = [
//     getProdByDiscount,
//     getProdByParams,
//     getProdByPopular,
//     getProdByCategories,
//   ];

//   // Show loading screen
//   main.classList.add('visually-hidden');
//   body.classList.add('no-scroll');
//   loadingScreen.classList.remove('visually-hidden');

//   // Execute all asynchronous functions
//   Promise.all(asyncFunctions.map(fn => fn()))
//     .then(() => {
//       // All asynchronous functions completed
//       main.classList.remove('visually-hidden');
//       loadingScreen.classList.add('visually-hidden'); // Hide loading screen
//       body.classList.remove('no-scroll');
//     })
//     .catch(error => {
//       console.error('Error in asynchronous operation:', error);
//       loadingScreen.classList.add('visually-hidden'); // Hide loading screen even in case of an error
//       body.classList.remove('no-scroll');
//     });
// });

//export function hideLoader() {
//body.classList.remove('no-scroll');
//loaderContainer.classList.add('visually-hidden');
//}

/**
    |============================
    | Loader ends
    |============================
  */

// const productCard = document.querySelector('js-product-card');
// const buyBtn = document.querySelector('js-buy-btn');
const mainContainer = document.querySelector('.js-main-container');

// loadBuyBtnsState();

// function loadBuyBtnsState() {
//   console.log(1);
//   const ls = getCartItems();
//   console.log(ls);
// }

mainContainer.addEventListener('click', e => {
  // console.log("Click");
  if (e.target.classList.contains('js-buy-btn')) {
    let parent = e.target.closest('.js-product-card');
    // console.log("click buy", parent.dataset.id);
    addProductToCart(parent.dataset.id);
    // addedToCartProduct(parent.dataset.id);
    updateCartBtns();
    document.querySelector(".js-cart-numbers").textContent = getCartItems().products.length;
  }
});

function addedToCartProduct(id) {
  const allProductsById = document.querySelectorAll(
    `.js-product-card[data-id="${id}"]`
  );
  const iconName = '';

  if (!allProductsById.length) {
    return
  }

  // console.log(allProductsById);
  allProductsById.forEach(obj => {
    const btn = obj.querySelector('.js-buy-btn');
    btn.style.backgroundColor = "#6D8434";
    btn.style.cursor = "default";
    btn.querySelector(".js-btn-first-ico").style.display = "none";
    btn.querySelector(".js-btn-second-ico").style.display = "block";
    // btn.innerHTML = `<svg class="img-icon" width="12" height="12" style="stroke:"#fff""><use href="${shoppingSvg}#${iconName}"></use></svg>`;
    btn.disabled = true;
    // console.log(btn);
  });
}
//some

// console.log(getCartItems());

function updateCartBtns() {
  getCartItems().products.forEach((product) => {
    // console.log(product.id);
    addedToCartProduct(product.id);
  })
}


