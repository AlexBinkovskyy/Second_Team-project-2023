import { getCartItems } from './localStorage';
import { removeAllProductsFromCart, setEmailToOrderInfo } from './workWithCart';
import { postOrder } from './query';
import { updateCartPage } from './shopping-cart';
// import { postOrder } from "./query";

const form = document.querySelector('.cart-form');
const modalCloseBtn = document.querySelectorAll('.js-modal-close');
const modal = document.querySelector('.success-modal');
const modalFail = document.querySelector('.fail-modal');

console.log('Hello');
// console.log("Modal js");

form.addEventListener('submit', e => {
  e.preventDefault();
  setEmailToOrderInfo(form.elements['email'].value);

  const orderObj = getCartItems();
  orderObj.products = orderObj.products.map(({ id, amount }) => {
    return { productId: id, amount: amount };
  });

  postOrder(orderObj)
    .then(data => {
      if(data.status === 201){
        console.log(data.data.message);
        modalOpen(true);
        removeAllProductsFromCart();
        updateCartPage();
      } else {
        modalOpen(false)
      }
    })
    .catch(err => {
      modalOpen(false)
    });

  
});

modalCloseBtn.forEach(el => el.addEventListener('click', modalClose));

function modalOpen(bool) {
  if(bool){
    modal.classList.remove('hiden');
  } else {
    modalFail.classList.remove('hiden');
  }
  
}
function modalClose(bool) {
  modal.classList.add('hiden');
  modalFail.classList.add('hiden');
}
