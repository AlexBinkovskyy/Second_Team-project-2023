import discountSvg from '../images/icons/discount.svg';
import shoppingSvg from '../images/icons/shopping-cart.svg';

const productList = document.querySelector('.product-list');

export function renderProductList(data) {
  productList.innerHTML = createMarkup(data.results);
}

function createMarkup(arr) {
  return arr
    .map(
      ({ _id, name, img, category, price, size, is10PercentOff, popularity }) =>
        `
        <div class="all-product-card" id="${_id}">
         <img class="all-discount-svg
         ${is10PercentOff.toString().replace('false', 'visually-hidden')}
          " 
        src="${discountSvg}" alt="discount-icon" width="60" height="60"/>
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
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${price}</h3>
            <button class="all-product-btn buy-btn" type="button">
                <img class="all-buy-svg" src="${shoppingSvg}" alt="shop-icon" width="18" height="18"/>
               
            </button>
          </div>
        </div>
      `
    )
    .join('');
}
