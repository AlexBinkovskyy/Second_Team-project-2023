import axios from 'axios';
import references from './references';
import image from '../images/sprite.svg#icon-shopping-cart'
import { getProdByDiscount } from './query';

const productDiscount = document.querySelector('.discount-products-item')

// getProdByDiscount()
//     .then(({ data }) => {
//         productLust(data)
//     })
//     .catch(error => console.log(error))

// async function getDiscount() {
//     try {
//         const res = await axios.get('https://food-boutique.b.goit.study/api/products/discount');
//         return res;
//     }
//     catch (error) {
//     console.log(error)
//     }; 
// }
export function renderProductDiscount(data) {
    productDiscount.insertAdjacentHTML("beforeend", markup(data));  
}

 function markup(arr) {
    return arr
    .map(({ name, img, price }) => `
        <li class="discount-card">
            <img src="${img}" alt="${name}">
            <div class="discount-text">
                <h3 class="discount-name">${name}</h3>
                <p class="discount-price">$${price}</p> 
            </div>
        </li>
    `).join("")
}

