import{s as P,a as d,b as i,c as L,d as k,e as w}from"./assets/sprite-163abfe1.js";import"./assets/vendor-a61d8330.js";const m="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",A=document.querySelector(".popular-product-list");function C(t){A.insertAdjacentHTML("beforeend",T(t))}function T(t){return t.map(({_id:e,name:a,img:l,category:n,size:g,popularity:h})=>`
          <li class="popular-product-item" id="${e}">
         <img class="discount-svg" src="${m}" alt="discount-icon" width="60" height="60"/>
            <img src="${l}" alt="${a}" width="56" height="56" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <h3 class="popular-product-name">${a}</h3>
              <div class="info-item-description">
              <p class="info-item">
              <span class="info-title"> Category: </span>
              ${n.replace("_"," ")}
            </p>
            <p class="info-item">
              <span class="info-title"> Size: </span>
              ${g}
            </p>
            <p class="info-item-pop">
              <span class="info-title"> Popularity: </span>
              ${h}
            </p>
            </div>
            </div>
            <div class="popular-btn">
            <button type="button" class="popular-buy buy-btn" onclick="addToCart('${e}')">
            <svg class="img-icon"  width="12" height="12">
            <use href="${P}#icon-shopping-cart"></use></svg>
            </button>
            </div>
          </li>
      `).join("")}window.addToCart=function(t){const e=JSON.parse(localStorage.getItem("cart"))||{};if(e[t])alert("This product is already in your cart!");else{e[t]=!0,localStorage.setItem("cart",JSON.stringify(e)),alert("Product added to cart!");const a=document.querySelector(`[data-product-id="${t}"]`);a.innerHTML='<svg class="img-icon" width="12" height="12"><use href="${shoppingSvg}#check-icon"></use></svg>',a.disabled=!0}};const y="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",_=document.querySelector(".discount-products-item");function j(t){_.insertAdjacentHTML("beforeend",q(t))}function q(t){return t.map(({_id:e,name:a,img:l,price:n})=>`
        <li class="discount-product">
         <div class="discount-card" id="${e}">
         <img class="discount-svg" src="${m}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${l}" alt="${a}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${a}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${n}</p>
                <button class="discount-buy buy-btn" type="button">
                <img class="discount-buy-svg" src="${y}" alt="shop-icon" width="18" height="18"/>
  </svg>
</button>
</div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}let M={email:"",products:[]};function p(){const t={keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:6};return localStorage.setItem("filterParams",JSON.stringify(t)),r()}function c(t){localStorage.setItem("filterParams",JSON.stringify(t))}JSON.parse(localStorage.getItem("shoppingCartItems"))||localStorage.setItem("shoppingCartItems",JSON.stringify(M));function N(){return JSON.parse(localStorage.getItem("shoppingCartItems")).products.length}function r(){return JSON.parse(localStorage.getItem("filterParams"))}const I=document.querySelector(".cart-number");I.insertAdjacentHTML("beforeend",N());const u=document.querySelector("#filterForm");u.addEventListener("submit",E);const B=document.querySelector("#categories");u.elements.filterCategories.addEventListener("change",z);u.elements.filterMethod.addEventListener("change",F);let o;function f(){o=r()?r():p()}f();function D(t){B.insertAdjacentHTML("afterbegin",x(t))}function x(t){const e=t.map(a=>`
    <option value="${a}" class="js-option">${a}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function E(t){t.preventDefault();const{filterInput:e,filterCategories:a}=t.target.elements;O(e,a)}function O(t,e){t.value.trim().length?t.value.trim()?(o.keyword=t.value.trim(),e.value!==""&&(o.category=e.value),c(o),i(r()).then(a=>{if(console.log(a),a.data.results.length)s(a.data);else if(!Array.isArray(a.data.results)||!a.data.results.length){b();return}}).catch(a=>console.log(a))):e.value&&(o.category=e.value.trim(),c(o),i(r()).then(a=>{if(a.data.results.length)s(a.data);else return}).catch(a=>console.log(a))):(p(),f(),d().then(({data:a})=>{s(a)}).catch(a=>console.log(a)),u.reset())}function z(t){t.preventDefault(),t.target.value==="Show all"&&(d().then(({data:e})=>{s(e)}).catch(e=>console.log(e)),u.reset()),o.category=t.target.value.replaceAll(" ","_"),c(o),i(r()).then(e=>{if(e.data.results.length)s(e.data);else if(!Array.isArray(e.data.results)||!e.data.results.length){b();return}}).catch(e=>console.log(e))}function F(t){if(t.preventDefault(),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?o.byABC=!0:o.byABC=!1,c(o),i(r()).then(e=>{if(e.data.results.length)s(e.data);else return}).catch(e=>console.log(e));return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?o.byPrice=!0:o.byPrice=!1,c(o),i(r()).then(e=>{if(e.data.results.length)s(e.data);else return}).catch(e=>console.log(e));return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?o.byPopularity=!0:o.byPopularity=!1,c(o),i(r()).then(e=>{if(e.data.results.length)s(e.data);else return}).catch(e=>console.log(e));return}else if(t.target.value==="Show_all"){p();return}}const v=document.querySelector(".product-list");function s(t){v.innerHTML=J(t.results)}function J(t){return t.map(({_id:e,name:a,img:l,category:n,price:g,size:h,is10PercentOff:S,popularity:$})=>`
        <div class="all-product-card" id="${e}">
         <img class="all-discount-svg
         ${S.toString().replace("false","visually-hidden")}
          " 
        src="${m}" alt="discount-icon" width="60" height="60"/>
         <img src="${l}" alt="${a}" loading="lazy" class="all-product-pic" />
         <h3 class="all-product-name header-three">${a}</h3>
         <div class="all-product-info regular-text">
            <p class="all-info-item">
            <span class="all-info-title"> Category: </span>
            ${n.replaceAll("_"," ")}
            </p>
            <p class="all-info-item">
            <span class="all-info-title"> Size: </span>
            ${h}
            </p>
            <p class="all-info-item">
            <span class="all-info-title"> Popularity: </span>
            ${$}
            </p>
          </div>
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${g}</h3>
            <button class="all-product-btn buy-btn" type="button">
                <img class="all-buy-svg" src="${y}" alt="shop-icon" width="18" height="18"/>
               
            </button>
          </div>
        </div>
      `).join("")}function H(t){t.preventDefault(),d().then(({data:e})=>{s(e)}).catch(e=>console.log(e)),u.reset(),p(),f()}function b(){const t=`<h3>Nothing was found for the selected <a href="" class="link js-link">filters...</a></h3>
  <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>`;v.innerHTML=t,document.querySelector(".js-link").addEventListener("click",H)}function Z(t){const e=document.querySelector(".modal-text");e.innerText=t;const a=document.querySelector("[data-modal]");a.classList.remove("is-hidden");const l=document.querySelector("[data-modal-close]");l.onclick=function(){a.classList.add("is-hidden")},window.onclick=function(n){n.target===a&&a.classList.add("is-hidden")}}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".subscription-form").addEventListener("submit",function(e){e.preventDefault();const a=document.querySelector(".footer-form-input").value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a)){Z("Будь ласка, введіть коректну адресу електронної пошти.");return}})});document.getElementById("loader-container");L().then(({data:t})=>{j(t)}).catch(t=>console.log(t));d().then(({data:t})=>{s(t)}).catch(t=>console.log(t));k().then(({data:t})=>{C(t)}).catch(t=>console.log(t));w().then(({data:t})=>{D(t.toString().replaceAll("_"," ").split(","))}).catch(t=>console.log(t));
//# sourceMappingURL=commonHelpers2.js.map
