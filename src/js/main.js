import { getProdByPopular } from './query';
import { getProdByDiscount } from './query';
import { getProdByCategories } from './query';
import { renderPopularProduct } from './popular-product';
import { renderProductDiscount } from './discount';
import { renderFilterSelect } from './filter';
import { getCartItems } from './localStorage.js';
import { addProductToCart, setEmailToOrderInfo } from './workWithCart.js';
import 'tui-pagination/dist/tui-pagination.css';

getProdByDiscount()
  .then(({ data }) => {
    renderProductDiscount(data);
    updateCartBtns();
  })
  .catch(error => console.log(error));

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

const mainContainer = document.querySelector('.js-main-container');
const mainModalContainer = document.querySelector('.product-modal-window');

mainContainer.addEventListener('click', addCart);
mainModalContainer.addEventListener('click', addCart);

function addCart(e) {
  if (e.target.classList.contains('js-buy-btn')) {
    let parent = e.target.closest('.js-product-card');
    addProductToCart(parent.dataset.id);
    updateCartBtns();
    document.querySelector('.js-cart-numbers').textContent =
      getCartItems().products.length;
  }
}

function addedToCartProduct(id) {
  const allProductsById = document.querySelectorAll(
    `.js-product-card[data-id="${id}"]`
  );
  const iconName = '';

  if (!allProductsById.length) {
    return;
  }

  allProductsById.forEach(obj => {
    const btn = obj.querySelector('.js-buy-btn');
    btn.style.backgroundColor = '#6D8434';
    btn.style.cursor = 'default';
    btn.querySelector('.js-btn-first-ico').style.display = 'none';
    btn.querySelector('.js-btn-second-ico').style.display = 'block';
    btn.disabled = true;
  });
}

export function updateCartBtns() {
  getCartItems().products.forEach(product => {
    addedToCartProduct(product.id);
  });
}
