import axios from 'axios';
import references from './references';
import { getProdByDiscount } from './query';
import  discountSvg    from '../images/icons/discount.svg';
import  shoppingSvg   from '../images/icons/shopping-cart.svg';


const productDiscount = document.querySelector('.discount-products-item');


export function renderProductDiscount(data) {
    productDiscount.insertAdjacentHTML("beforeend", markup(data));  
}

 function markup(arr) {
    return arr
    .map(({_id, name, img, price }) => `
        <li class="discount-product">
         <div class="discount-card" id="${_id}">
         <img class="discount-svg" src="${discountSvg}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${img}" alt="${name}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${name}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${price}</p>
                <button class="discount-buy buy-btn" type="button">
                <img class="discount-buy-svg" src="${shoppingSvg}" alt="shop-icon" width="18" height="18"/>
  </svg>
</button>
</div> 
            </div>
            </div>
        </li>
    `).join("")
}
  


            
