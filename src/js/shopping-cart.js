// import iconSvg from './image/icons.svg';

// Довільний масив продуктів
// const arrCart = [
//   {
//     _id: '640c2dd963a319ea671e383b',
//     name: 'Ackee',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png',
//     category: 'Fresh_Produce',
//     price: 8.99,
//     size: '16 oz',
//     is10PercentOff: false,
//     popularity: 0,
//   },
//   {
//     _id: '640c2dd963a319ea671e3864',
//     name: 'Black Beans',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3864.png',
//     category: 'Pantry_Items',
//     price: 1.99,
//     size: '16oz',
//     is10PercentOff: false,
//     popularity: 0,
//   },
//   {
//     _id: '640c2dd963a319ea671e37ad',
//     name: 'Black Olives',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ad.png',
//     category: 'Fresh_Produce',
//     price: 3.99,
//     size: '1 jar (16 oz)',
//     is10PercentOff: false,
//     popularity: 0,
//   },
// ];

// створення карттки в кошику
// const list = document.querySelector('.js-cart-list');
// list.insertAdjacentHTML('beforeend', createCartProduct(arrCart));

// function createCartProduct(arr) {
//   return arr
//     .map(({ _id, name, img, category, price, size }) => {
//       const cleanedCategory = category.replace(/_/g, ' ');

//       return `<li class="selectedProduct" data-id=${_id}>
//             <div class="product-picture">
//                 <img src="${img}" alt="${name}" class="" loading="lazy" />
//             </div>

//             <div class="product-info-container">

//             <div class="info-header">
//                 <h2 class="product-name">${name}</h2>
//                 <button class="delete-btn">
//                     <svg class="" width="20" height="20">
//                     <use href="${iconSvg}#icon-Cross_close"></use>
//                     </svg>
//                 </button>
//             </div>

//             <div class="product-info">
//                 <p class="info-quality-category"> Category: <span class="info-value">${cleanedCategory}</span>
//                 </p>
//                 <p class="info-quality"> Size:<span class="info-value">${size}</span></p>
//             </div>
//             <div class="price">$
//             <span>${price}</span>
//             </div>
//             </div>
//         </li>`;
//     })
//     .join('');
// }

// функція яка відмалює товари в кошику якщо масив в localeStorage не пустий

// function fullCart() {
//   if (arr.length !== 0) {
//     блок_коду_пустого_кошику.style.display = 'none';
//     блок_коду_не_пустого_кошику.style.display = 'flex';
//     список_в_ul.insertAdjacentHTML('beforeend', createCartProduct(arr));
//   } else {
//     блок_коду_пустого_кошику.style.display = 'flex';
//     блок_коду_не_пустого_кошику.style.display = 'none';
//   }
// }
