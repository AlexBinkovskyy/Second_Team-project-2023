let shoppingCartItems = {
  "email": "",
  "products": [
    {
      "productId": "",
      "amount": 1
    }
  ]
}

export function setDefaultFilterParams(){
  const filterParams = {
    keyword: null,
    category: null,
    page: 1,
    limit: 6,
  };
  localStorage.setItem('filterParams', JSON.stringify(filterParams));
  return getFilterParams();
}

export function setNewFilterParams(filterParams){
  localStorage.setItem('filterParams', JSON.stringify(filterParams));
}

if (!JSON.parse(localStorage.getItem('shoppingCartItems'))) {
  localStorage.setItem('shoppingCartItems', JSON.stringify(shoppingCartItems));
}

export function getCartItemsQuantity() {
  return (JSON.parse(localStorage.getItem('shoppingCartItems')).length);
}

export function getFilterParams(){
  return JSON.parse(localStorage.getItem('filterParams'))
}