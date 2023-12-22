import { getProdByParams } from './query';

const productList = document.querySelector('.product-list');

// getProdByParams()
//   .then(({ data }) => {
//     renderPoductList(data);
//   })
//   .catch(error => console.log(error));

export function renderPoductList(data) {
  productList.insertAdjacentHTML('beforeend', createMarkup(data.results));
}

function createMarkup(arr) {
  return arr
    .map(
      ({ _id, name, img, category, price, size, is10PercentOff, popularity }) =>
        `
        <div class="product-card" id="${_id}">
        <img src="${img}" alt="${name}" loading="lazy" class="product-pic" />
        <h3 class="product-name">${name}</h3>
        <div class="product-info">
            <p class="info-item">
            <span class="info-title"> Category: </span>
            ${category}
            </p>
            <p class="info-item">
            <span class="info-title"> Size: </span>s
            ${size}
            </p>
            <p class="info-item">
            <span class="info-title"> Popularity: </span>
            ${popularity}
            </p>
        </div>
        <h3 class="product-price">&#36;${price}</h3>
        <button type="button" calss="buy-btn">Buy</button>
        </div>
      `
    )
    .join('');
}
