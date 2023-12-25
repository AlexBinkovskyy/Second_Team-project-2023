import { getProdByIDWithParams } from './query';
import icons from '../images/sprite.svg';

const list = document.querySelector('.js-cart-list');
const arrCart = [
  {
    email: '',
    products: [
      {
        id: '640c2dd963a319ea671e383b',
        amount: 1,
      },
      {
        id: '640c2dd963a319ea671e3864',
        amount: 1,
      },
      // {
      //   id: '640c2dd963a319ea671e37ad',
      //   amount: 1,
      // },
    ],
  },
];

spawnCardProducts(arrCart[0].products);

function spawnCardProducts(products) {
  generateCardListMarkup(products, createCartProductMarkup).then(result => {
    list.insertAdjacentHTML('beforeend', result);
  });
}

/*  Параметри:
      1.productList - масив з продуктами      
        [{
          id: '640c2dd963a319ea671e383b',
          amount: 1,
        }]

      2.createElementMarkupFunc - Функція, що створює потрібну вам розмітку елемента.

    Повертає html розмітку продуктів
===================================================================================== */
async function generateCardListMarkup(productList, createElementMarkupFunc) {
  const products = await getCartProducts(productList);
  return products
    .map(product => {
      return createElementMarkupFunc(product);
    })
    .join('');
}

/*  Параметри:
      1.productList - масив з продуктами      
        [{
          id: '640c2dd963a319ea671e383b',
          amount: 1,
        }]

    Повертає масив даних з продуктів
===================================================================================== */
async function getCartProducts(productList) {
  return await Promise.all(
    productList.map(({ id }) =>
      getProdByIDWithParams(id).then(rqst => rqst.data)
    )
  );
}

// створення карттки в кошику
function createCartProductMarkup(product) {
  const { _id, name, img, category, price, size } = product;
  const cleanedCategory = category.replace(/_/g, ' ');

  return `
    <li class="selectedProduct" data-id=${_id}>
      <div class="product-picture">
          <img src="${img}" alt="${name}" class="" loading="lazy" />
      </div>

      <div class="product-info-container">

      <div class="info-header">
        <h2 class="product-name">${name}</h2>
        <button class="delete-btn">
          <svg class="" width="11.25" height="11.25">
            <use href="${icons}#icon-Cross_close"></use>
          </svg>
        </button>
      </div>

      <div class="product-info">
        <p class="info-quality-category"> Category: <span class="info-value">${cleanedCategory}</span></p>
        <p class="info-quality"> Size:<span class="info-value">${size}</span></p>
      </div>
        <div class="price">$
          <span>${price}</span>
        </div>
      </div>
  </li>`;
}
