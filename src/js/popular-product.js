

const popularProduct = document.querySelector('.popular-product-list');

export function renderPopularProduct(data) {
  popularProduct.insertAdjacentHTML('beforeend', markup(data));
}

function markup(arr) {
  return arr
    .map(
      ({ _id, name, img, category, size, popularity }) => `
          <li class="popular-product-item" id="${_id}">
            <img src="${img}" alt="${name}" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <h3 class="popular-product-name">${name}</h3>
              <div class="info-item-description">
              <p class="info-item">
              <span class="info-title"> Category: </span>
              ${category.replace('_', ' ')}
            </p>
            <p class="info-item">
              <span class="info-title"> Size: </span>
              ${size}
            </p>
            <p class="info-item-pop">
              <span class="info-title"> Popularity: </span>
              ${popularity}
            </p>
            </div>
            </div>
            <button type="button" class="popular buy-btn" onclick="addToCart('${_id}')"><svg class="koshik" width="12" height="12">
            <use href="./images/sprite.svg#icon-shopping-cart"></use>
          </svg>
            <button>
          </li>
      `
    )
    .join('');
}

// Зробити функцію глобальною
window.addToCart = function(productId) {
  const cart = JSON.parse(localStorage.getItem('cart')) || {};

  if (cart[productId]) {
    alert('This product is already in your cart!');
  } else {
    cart[productId] = true;
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');

    // Отримати кнопку за допомогою productId та змінити її на іконку "✓"
    const addToCartButton = document.querySelector(`button[data-product-id="${productId}"]`);
    addToCartButton.innerHTML = '&#10003;';
    addToCartButton.disabled = true;
  }
};