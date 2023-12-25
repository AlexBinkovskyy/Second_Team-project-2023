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

const loaderContainer = document.getElementById('loader-container');

getProdByDiscount()
  .then(({ data }) => {
    renderProductDiscount(data);
  })
  .catch(error => console.log(error));

getProdByParams()
  .then(({ data }) => {
    renderProductList(data);
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

const body = document.body;

export function showLoader() {
  body.classList.add('no-scroll');
  loaderContainer.classList.remove('visually-hidden');
}

export function hideLoader() {
  body.classList.remove('no-scroll');
  loaderContainer.classList.add('visually-hidden');
}
