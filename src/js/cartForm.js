import { getCartItems } from "./localStorage";
import { setEmailToOrderInfo } from "./workWithCart";
// import { postOrder } from "./query";

const form = document.querySelector('.cart-form');
const modalCloseBtn = document.querySelector('.js-modal-close');
const modal = document.querySelector('.cart-modal-bg');

console.log("Hello");
// console.log("Modal js");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  setEmailToOrderInfo(form.elements['email'].value);

  const order = getCartItems();
  // console.log(order);
  // postOrder(order);  
  modalOpen();
});
modalCloseBtn.addEventListener('click', modalClose);

function modalOpen() {  
  modal.classList.remove('hiden');
}
function modalClose() {
  modal.classList.add('hiden');
}
