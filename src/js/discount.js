import axios from 'axios';
import references from './references';
import image from '../images/sprite.svg#icon-shopping-cart'
import { getProdByDiscount } from './query';


const productDiscount = document.querySelector('.discount-products-item')

export function renderProductDiscount(data) {
    productDiscount.insertAdjacentHTML("beforeend", markup(data));  
}

 function markup(arr) {
    return arr
    .map(({_id, name, img, price }) => `
        <li class="discount-product">
         <div class="discount-card" id="${_id}">
          <svg class="discount-svg" width="60" height="60">
    <use href="./images/sprite.svg#icon-discount"></use>
            <img class="discount-img"src="${img}" alt="${name}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${name}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${price}</p>
                <button class="discount-buy buy-btn" type="button">
  <svg class="discount-buy-svg" width="18" height="18">
    <use href="./images/sprite.svg#icon-shopping-cart"></use>
  </svg>
</button>
</div> 
            </div>
            </div>
        </li>
    `).join("")
}
  
            
