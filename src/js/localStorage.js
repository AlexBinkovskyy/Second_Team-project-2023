import { filterParams } from "./filter";

let shoppingCartItems = []

export function setDefaultFilterParams(){
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