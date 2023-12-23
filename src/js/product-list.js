import { getProdByParams } from './query';

const productList = document.querySelector('.product-list');

export function renderProductList(data) {
  productList.insertAdjacentHTML('beforeend', createMarkup(data.results));
}

function createMarkup(arr) {
  return arr
    .map(
      ({ _id, name, img, category, price, size, is10PercentOff, popularity }) =>
        `
        <div class="product-card" id="${_id}">
         <img src="${img}" alt="${name}" loading="lazy" class="product-pic" />        
         <h3 class="product-name header-three">${name}</h3>
         <div class="product-info regular-text">
            <p class="info-item">
            <span class="info-title"> Category: </span>
            ${category.replace('_', ' ')}
            </p>
            <p class="info-item">
            <span class="info-title"> Size: </span>
            ${size}
            </p>
            <p class="info-item">
            <span class="info-title"> Popularity: </span>
            ${popularity}
            </p>
          </div>
          <div class="purchaise-box">
            <h3 class="product-price header-three">&#36;${price}</h3>
            <button type="button" class="buy-btn">Buy</button>
          </div>
        </div>
      `
    )
    .join('');
}

// const heightOutput = document.querySelector('#height');
// const widthOutput = document.querySelector('#width');
// function reportWindowSize() {
//   heightOutput.textContent = window.innerHeight;
//   widthOutput.textContent = window.innerWidth;
// }
// window.onresize = reportWindowSize;

// if (window.innerWidth >= 1440) {
//   console.log(1440);
//   limitPerPage = 9;
// } else if (window.innerWidth >= 768) {
//   console.log(768);
//   limitPerPage = 8;
// } else {
//   console.log(375);
//   limitPerPage = 6;
// }
