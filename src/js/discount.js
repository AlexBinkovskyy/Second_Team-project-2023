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
            <img class="discount-img"src="${img}" alt="${name}" loading="lazy">
            <div class="discount-text">
                <h3 class="discount-name">${name}</h3>
                <p class="discount-price">$${price}</p> 
            </div>
            </div>
        </li>
    `).join("")
}

