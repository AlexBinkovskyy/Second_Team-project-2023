import discountSvg from '../images/icons/discount.svg';
import shoppingSvg from '../images/sprite.svg';
import check from '../images/icons/check-ico.svg';

const popularProduct = document.querySelector('.popular-product-list');

export async function renderPopularProduct(data) {
  popularProduct.insertAdjacentHTML('beforeend', markup(data));
  const clickBtnBuy = document.querySelector('.click-buy');
  clickBtnBuy.addEventListener('click', () => {
    (clickBtnBuy.style.display = 'none'), (clickcheck.style.display = 'block');
  });
  const clickcheck = document.querySelector('.popular-check');
}

function markup(arr) {
  return arr
    .map(
      ({ _id, name, img, category, size, popularity }) => `
          <li class="popular-product-item product-modal-open js-product-card"  data-id="${_id}" id="${_id}">
            <img src="${img}" alt="${name}" width="56" height="56" loading="lazy" class="popular-product-pic"/>
            <div class="popular-product-info">
            <div class="popular-product-info-btn">
            <h3 class="popular-product-name">${name}</h3>
            <button type="button" class="popular-buy buy-btn js-buy-btn" >
              <svg class="img-icon js-btn-first-ico"  width="12" height="12">
                <use href="${shoppingSvg}#icon-shopping-cart"></use>
              </svg>
              <img class="popular-check-svg js-btn-second-ico" src="${check}" alt="shop-icon" width="12" height="12"/>
            </button>
              </div>
              <div class="info-item-description">
              <p class="info-item-title">
              <span class="info-title"> Category: </span>
              ${category.replace('_', ' ')}
            </p>
            <div class="popular-info">
            <p class="info-item info-size">
              <span class="info-title"> Size: </span>
              ${size}
            </p>
            <p class="info-item-pop">
              <span class="info-title"> Popularity: </span>
              ${popularity}
            </p>
            </div>
            </div>
            </div>
          </li>
      `
    )
    .join('');
}

// Змініть ваш код так, щоб він виглядав приблизно так
// window.addToCart = function (productId) {
//   const cart = JSON.parse(localStorage.getItem('cart')) || {};

//   if (cart[productId]) {
//     alert('This product is already in your cart!');
//   } else {
//     cart[productId] = true;
//     localStorage.setItem('cart', JSON.stringify(cart));
//     alert('Product added to cart!');

//     // Отримайте кнопку за допомогою productId та змініть її на іконку "✓"
//     const addToCartButton = document.querySelector(
//       `[data-product-id="${productId}"]`
//     );
//     addToCartButton.innerHTML =
//       '<svg class="img-icon" width="12" height="12"><use href="${shoppingSvg}#check-icon"></use></svg>';
//     addToCartButton.disabled = true;
//   }
// };
