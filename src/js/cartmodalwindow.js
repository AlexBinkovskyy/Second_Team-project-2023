const form = document.querySelector('.cart-form');
const modalCloseBtn = document.querySelector('.js-modal-close');
const modal = document.querySelector('.cart-modal-bg');

// console.log("Modal js");

form.addEventListener('submit', modalOpen);
modalCloseBtn.addEventListener('click', modalClose);

function modalOpen(e) {
  e.preventDefault();
  modal.classList.remove('hiden');
}
function modalClose() {
  modal.classList.add('hiden');
}
