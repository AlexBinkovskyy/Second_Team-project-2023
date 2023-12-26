import { getProdByIDWithParams } from './query';
import icons from '../images/sprite.svg';
import { getCartItems } from './localStorage';
import {
  addProductToCart,
  setEmailToOrderInfo,
  removeAllProductsFromCart,
  removeProductFromCart,
} from './workWithCart';

const list = document.querySelector('.js-cart-list');
const formInput = document.querySelector('.cart-form-input');
const summ = document.querySelector('.js-total-summ');
const cartNumbersList = document.querySelectorAll('.js-cart-numbers');
const clearOrderBtn = document.querySelector('.js-clear-order-btn');

const cartBox = document.querySelector('.js-cart-box');
const emptyCart = document.querySelector('.js-empty-cart');


setEmailToOrderInfo('p@gmail.com');

let arrCart = getCartItems();
let totalSumm = 0;
drawCartPage();

list.addEventListener('click', e => {
  if (e.target.classList.contains('delete-btn')) {
    let parent = e.target.closest('.selectedProduct');
    // console.log(parent);
    removeProductFromCart(parent.dataset.id);
    drawCartPage();
  }
});

async function drawCartPage() {
  //масив з localStorage
  arrCart = getCartItems();
  // console.log(arrCart);

  summ.textContent = '$0';

  const amountElements = arrCart.products.length;
  switchSections(amountElements);

  if (amountElements) {
    list.innerHTML = '';
    //масив з Серверу
    const originProductList = await getCartProducts(arrCart.products);
    // console.log(originProductList);

    cartNumbersUpdate(cartNumbersList, amountElements);
    // console.log(cartBox);
    spawnCardProducts(originProductList);
    summ.textContent = '$' + getTotalSumm(originProductList);
  }
  
  // updateCartBasket();
  formInput.value = arrCart.email;
}

clearOrderBtn.addEventListener('click', () => {
  removeAllProductsFromCart();
  drawCartPage();
});

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
  return productList
    .map(product => {
      totalSumm += product.price;
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
      <div class="counter-container">
            <button class="counter-btn" type="button" data-action="decrement">
                -
            </button>
            <span class="counter-value data-counter">1</span>
            <button class="counter-btn" type="button" data-action="increment">
                +
            </button>
        </div>
  </li>`;
}

/**
  |============================
  | ЛІЧИЛЬНИК
  |============================
*/

let counter;

list.addEventListener('click', function (event) {
  // Перевірка кліку сурово по кнопкам + або -
  if (
    event.target.dataset.action === 'increment' ||
    event.target.dataset.action === 'decrement'
  ) {
    // Найшли обгортку лічильника
    const counterContainer = event.target.closest('.counter-container');

    // Найшли значення лічильника
    counter = counterContainer.querySelector('.counter-value');
  }

  // Перевірка чи елемент являється кнопкою плюс
  if (event.target.dataset.action === 'increment') {
    // Змінює текст в лічильнику, збільшує на 1
    counter.innerHTML = ++counter.innerHTML;
  }

  // Перевірка чи елемент являється кнопкою мінус
  if (event.target.dataset.action === 'decrement') {
    // Перевірка щоб лічильник був більше або рівний 1
    if (parseInt(counter.innerHTML) > 1) {
      // Змінює текст в лічильнику, зменьшує на 1
      counter.innerHTML = --counter.innerHTML;
    }
  }
});

/**
  |============================
  | ДОДАТКОВО ВИДАЛИТЬ ПРОДУКТ ЯКЩО ВІН БУДЕ МЕНШЕ 1
  |============================
*/
// else if (parseInt(counter.innerHTML) === 1) {
//       // Якщо лічильник дорівнює 1, видалити товар з кошика
//       let parentEl = event.target.closest('.selectedProduct');
//       removeProductFromCart(parentEl.dataset.id);
//       drawCartPage();
//     }

/**
  |============================
  | 
  |============================
*/
function switchSections(bool) {
  objHide(cartBox, emptyCart);
  if (bool) {
    objShow(cartBox);
  } else {
    objShow(emptyCart);
  }
}

function objShow(...objs) {
  objs.forEach(obj => {
    obj.classList.remove('hiden');
  });
}

function objHide(...objs) {
  objs.forEach(obj => {
    obj.classList.add('hiden');
  });
}

function cartNumbersUpdate(objs, number) {
  objs.forEach(obj => {
    obj.textContent = number;
  });
}

function getTotalSumm(products) {
  return products.reduce((sum, product) => {
    console.log(product);
    return sum + product.price;
  }, 0);
}
