

const popularProduct = document.querySelector('.popular-product');

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
            <button type="button" class="buy-btn" onclick="addToCart('${_id}')"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
            <path d="M0.799219 0.600098C0.640089 0.600098 0.487476 0.663312 0.374955 0.775834C0.262433 0.888355 0.199219 1.04097 0.199219 1.2001C0.199219 1.35923 0.262433 1.51184 0.374955 1.62436C0.487476 1.73688 0.640089 1.8001 0.799219 1.8001H1.53122L1.71422 2.5333C1.71604 2.54174 1.71804 2.55014 1.72022 2.5585L2.53502 5.8165L1.99922 6.3517C1.24322 7.1077 1.77842 8.4001 2.84762 8.4001H7.99922C8.15835 8.4001 8.31096 8.33688 8.42348 8.22436C8.536 8.11184 8.59922 7.95923 8.59922 7.8001C8.59922 7.64097 8.536 7.48835 8.42348 7.37583C8.31096 7.26331 8.15835 7.2001 7.99922 7.2001H2.84762L3.44762 6.6001H7.39922C7.51061 6.60004 7.6198 6.56897 7.71453 6.51037C7.80927 6.45176 7.88582 6.36794 7.93562 6.2683L9.73562 2.6683C9.78132 2.57684 9.80289 2.47523 9.79829 2.3731C9.79369 2.27097 9.76307 2.17171 9.70933 2.08473C9.6556 1.99776 9.58053 1.92596 9.49125 1.87614C9.40198 1.82633 9.30145 1.80015 9.19922 1.8001H2.76722L2.58122 1.0543C2.54872 0.92455 2.47379 0.809383 2.36834 0.727091C2.2629 0.644799 2.13298 0.600101 1.99922 0.600098H0.799219ZM8.59922 9.9001C8.59922 10.1388 8.5044 10.3677 8.33561 10.5365C8.16683 10.7053 7.93791 10.8001 7.69922 10.8001C7.46052 10.8001 7.2316 10.7053 7.06282 10.5365C6.89404 10.3677 6.79922 10.1388 6.79922 9.9001C6.79922 9.6614 6.89404 9.43248 7.06282 9.2637C7.2316 9.09492 7.46052 9.0001 7.69922 9.0001C7.93791 9.0001 8.16683 9.09492 8.33561 9.2637C8.5044 9.43248 8.59922 9.6614 8.59922 9.9001ZM2.89922 10.8001C3.13791 10.8001 3.36683 10.7053 3.53561 10.5365C3.7044 10.3677 3.79922 10.1388 3.79922 9.9001C3.79922 9.6614 3.7044 9.43248 3.53561 9.2637C3.36683 9.09492 3.13791 9.0001 2.89922 9.0001C2.66052 9.0001 2.4316 9.09492 2.26282 9.2637C2.09404 9.43248 1.99922 9.6614 1.99922 9.9001C1.99922 10.1388 2.09404 10.3677 2.26282 10.5365C2.4316 10.7053 2.66052 10.8001 2.89922 10.8001Z" fill="#6D8434"/>
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