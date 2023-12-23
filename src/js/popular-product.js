

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
            <p class="info-item">
              <span class="info-title"> Popularity: </span>
              ${popularity}
            </p>
            </div>
            </div>
            <button type="button" class="buy-btn" onclick="addToCart('${_id}')"><svg class="koshik" width="10" height="11" viewBox="0 0 10 11" fill="none">
            id="icon-shopping-cart" viewBox="0 0 32 32">
<path d="M4.141 1.694c-0.449 0-0.88 0.178-1.198 0.496s-0.496 0.749-0.496 1.198c0 0.449 0.179 0.88 0.496 1.198s0.749 0.496 1.198 0.496h2.067l0.517 2.070c0.005 0.024 0.011 0.048 0.017 0.071l2.301 9.199-1.513 1.511c-2.135 2.135-0.623 5.784 2.395 5.784h14.546c0.449 0 0.88-0.178 1.198-0.496s0.496-0.749 0.496-1.198-0.178-0.88-0.496-1.198c-0.318-0.318-0.749-0.496-1.198-0.496h-14.546l1.694-1.694h11.157c0.315-0 0.623-0.088 0.89-0.253s0.484-0.402 0.624-0.683l5.082-10.165c0.129-0.258 0.19-0.545 0.177-0.833s-0.1-0.569-0.251-0.814c-0.152-0.246-0.364-0.448-0.616-0.589s-0.536-0.215-0.825-0.215h-18.161l-0.525-2.106c-0.092-0.366-0.303-0.692-0.601-0.924s-0.665-0.359-1.042-0.359h-3.388zM26.165 27.953c0 0.674-0.268 1.32-0.744 1.797s-1.123 0.744-1.797 0.744c-0.674 0-1.32-0.268-1.797-0.744s-0.744-1.123-0.744-1.797c0-0.674 0.268-1.32 0.744-1.797s1.123-0.744 1.797-0.744c0.674 0 1.32 0.268 1.797 0.744s0.744 1.123 0.744 1.797zM10.071 30.494c0.674 0 1.32-0.268 1.797-0.744s0.744-1.123 0.744-1.797c0-0.674-0.268-1.32-0.744-1.797s-1.123-0.744-1.797-0.744-1.32 0.268-1.797 0.744c-0.477 0.477-0.744 1.123-0.744 1.797s0.268 1.32 0.744 1.797 1.123 0.744 1.797 0.744z"></path>
            </svg><button>
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