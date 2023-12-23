export let filterParams = {
  keyword: null,
  category: null,
  page: 1,
  limit: 6,
};
let shoppingCartItems = []

localStorage.setItem('filterParams', JSON.stringify(filterParams));

if (!JSON.parse(localStorage.getItem('shoppingCartItems'))) {
  localStorage.setItem('shoppingCartItems', JSON.stringify(shoppingCartItems));
}

export function getCartItemsQuantity() {
  return (JSON.parse(localStorage.getItem('shoppingCartItems')).length);
}

export function updateCartItems(product) {
  localStorage.setItem('shoppingCartItems', JSON.stringify(product));
}

console.log(getCartItemsQuantity());