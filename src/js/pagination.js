import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import axios from 'axios';
import { getProdByParams } from './query';
import { renderProductList } from './product-list';
import references from './references';

// Перша
export async function pagination() {
    const container = document.getElementById('pagination-container');
    const itemsPerPage = 6; // Количество товаров на странице
    let currentPage = 1;
  
    try {
      const response = await getProdByParams(currentPage, itemsPerPage);
      const totalItems = response.data.totalCount;
  
      renderProductList(response.data);
  
      const pagination = new Pagination(container, {
        totalItems: totalItems,
        itemsPerPage: itemsPerPage,
        visiblePages: 5,
        page: currentPage,
      });
  
      pagination.on('afterMove', async (event) => {
        currentPage = event.page;
        const newResponse = await getProdByParams(currentPage, itemsPerPage);
        renderProductList(newResponse.data);
      });
    } catch (error) {
      console.error('error:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', async () => {
    await createPagination();
  });
//Друга
// export async function pagination() {
//     const productList = document.querySelector('.product-list');
//     const container = document.getElementById('tui-pagination-container');
  
//     let page = 1; 
  
//     async function onPageChanged(event) {
//       page = event.page; 
  
//       const limit = event.itemsPerPage;
  
//       try {
//         const response = await getProdByParams(page, limit);
//         const totalItems = response.data.totalCount;
  
//         renderProductList(response.data); 
  
//         const pagination = new Pagination(container, {
//           totalItems: totalItems,
//           itemsPerPage: limit,
//           visiblePages: 5,
//           page: page,
//         });
  
//         pagination.on('afterMove', onPageChanged);
//       } catch (error) {
//         console.error('Failed to fetch data:', error);
//       }
//     }
  
//     onPageChanged({ page, itemsPerPage: 6 }); 
//   }

  
//Третя
    
//   const startBtn = document.querySelector("#startBtn"),
//   endBtn = document.querySelector("#endBtn"),
//   prevNext = document.querySelectorAll(".prevNext"),
//   numbers = document.querySelectorAll(".pagination-link");
// let currentStep = 0;


// const updateBtn = () => {

//   if (currentStep === 4) {
//     endBtn.disabled = true;
//     prevNext[1].disabled = true;
//   } else if (currentStep === 0) {

//     startBtn.disabled = true;
//     prevNext[0].disabled = true;
//   } else {
//     endBtn.disabled = false;
//     prevNext[1].disabled = false;
//     startBtn.disabled = false;
//     prevNext[0].disabled = false;
//   }
// };


// numbers.forEach((number, numIndex) => {
//   number.addEventListener("click", (e) => {
//     e.preventDefault();

//     currentStep = numIndex;

//     document.querySelector(".active").classList.remove("active");

//     number.classList.add("active");
//     updateBtn(); 
//   });
// });


// prevNext.forEach((button) => {
//   button.addEventListener("click", (e) => {

//     currentStep += e.target.id === "next" ? 1 : -1;
//     numbers.forEach((number, numIndex) => {

//       number.classList.toggle("active", numIndex === currentStep);
//       updateBtn();
//     });
//   });
// });


// startBtn.addEventListener("click", () => {
//   document.querySelector(".active").classList.remove("active");

//   numbers[0].classList.add("active");
//   currentStep = 0;
//   updateBtn(); 
//   endBtn.disabled = false;
//   prevNext[1].disabled = false;
// });


// endBtn.addEventListener("click", () => {

//   document.querySelector(".active").classList.remove("active");

//   numbers[4].classList.add("active");
//   currentStep = 4;
//   updateBtn(); 
//   startBtn.disabled = false;
//   prevNext[0].disabled = false;
// });
  
