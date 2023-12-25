import{s as S,a as m,b as n,c as P,d as $,e as C}from"./assets/sprite-3f928b9b.js";import"./assets/vendor-f9e4276b.js";const L=document.querySelector(".popular-product-list");function w(t){L.insertAdjacentHTML("beforeend",A(t))}function A(t){return t.map(({_id:e,name:a,img:s,category:l,size:u,popularity:d})=>`
          <li class="popular-product-item" id="${e}">
            <img src="${s}" alt="${a}" width="56" height="56" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <h3 class="popular-product-name">${a}</h3>
              <div class="info-item-description">
              <p class="info-item">
              <span class="info-title"> Category: </span>
              ${l.replace("_"," ")}
            </p>
            <p class="info-item">
              <span class="info-title"> Size: </span>
              ${u}
            </p>
            <p class="info-item-pop">
              <span class="info-title"> Popularity: </span>
              ${d}
            </p>
            </div>
            </div>
            <div class="popular-btn">
            <button type="button" class="popular-buy buy-btn" onclick="addToCart('${e}')">
            <svg class="img-icon"  width="12" height="12">
            <use href="${S}#icon-shopping-cart"></use></svg>
            </button>
            </div>
          </li>
      `).join("")}window.addToCart=function(t){const e=JSON.parse(localStorage.getItem("cart"))||{};if(e[t])alert("This product is already in your cart!");else{e[t]=!0,localStorage.setItem("cart",JSON.stringify(e)),alert("Product added to cart!");const a=document.querySelector(`button[data-product-id="${t}"]`);a.innerHTML="&#10003;",a.disabled=!0}};const f="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",h="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",_=document.querySelector(".discount-products-item");function T(t){_.insertAdjacentHTML("beforeend",q(t))}function q(t){return t.map(({_id:e,name:a,img:s,price:l})=>`
        <li class="discount-product">
         <div class="discount-card" id="${e}">
         <img class="discount-svg" src="${f}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${s}" alt="${a}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${a}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${l}</p>
                <button class="discount-buy buy-btn" type="button">
                <img class="discount-buy-svg" src="${h}" alt="shop-icon" width="18" height="18"/>
  </svg>
</button>
</div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}const M=document.querySelector(".product-list");function r(t){M.innerHTML=N(t.results)}function N(t){return t.map(({_id:e,name:a,img:s,category:l,price:u,size:d,is10PercentOff:v,popularity:b})=>`
        <div class="all-product-card" id="${e}">
         <img class="all-discount-svg
         ${v.toString().replace("false","visually-hidden")}
          " 
        src="${f}" alt="discount-icon" width="60" height="60"/>
         <img src="${s}" alt="${a}" loading="lazy" class="all-product-pic" />
         <h3 class="all-product-name header-three">${a}</h3>
         <div class="all-product-info regular-text">
            <p class="all-info-item">
            <span class="all-info-title"> Category: </span>
            ${l.replaceAll("_"," ")}
            </p>
            <p class="all-info-item">
            <span class="all-info-title"> Size: </span>
            ${d}
            </p>
            <p class="all-info-item">
            <span class="all-info-title"> Popularity: </span>
            ${b}
            </p>
          </div>
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${u}</h3>
            <button class="all-product-btn buy-btn" type="button">
                <img class="all-buy-svg" src="${h}" alt="shop-icon" width="18" height="18"/>
               
            </button>
          </div>
        </div>
      `).join("")}let j={email:"",products:[]};function g(){const t={keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:6};return localStorage.setItem("filterParams",JSON.stringify(t)),p()}function i(t){localStorage.setItem("filterParams",JSON.stringify(t))}JSON.parse(localStorage.getItem("shoppingCartItems"))||localStorage.setItem("shoppingCartItems",JSON.stringify(j));function k(){return JSON.parse(localStorage.getItem("shoppingCartItems")).products.length}function p(){return JSON.parse(localStorage.getItem("filterParams"))}const I=document.querySelector(".cart-number");I.insertAdjacentHTML("beforeend",k());const c=document.querySelector("#filterForm");c.addEventListener("submit",x);const B=document.querySelector("#categories");c.elements.filterCategories.addEventListener("change",F);c.elements.filterMethod.addEventListener("change",J);let o;function y(){o=p()?p():g()}y();function D(t){B.insertAdjacentHTML("afterbegin",O(t))}function O(t){const e=t.map(a=>`
    <option value="${a}" class="js-option">${a}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function x(t){t.preventDefault();const{filterInput:e,filterCategories:a}=t.target.elements;z(e,a)}function z(t,e){t.value.trim().length?t.value.trim()?(o.keyword=t.value.trim(),e.value!==""&&(o.category=e.value),i(o),n(o).then(a=>{if(a.data.results.length)r(a.data);else return}).catch(a=>console.log(a))):e.value&&(o.category=e.value.trim(),i(o),n(o).then(a=>{if(a.data.results.length)r(a.data);else return}).catch(a=>console.log(a))):(c.reset(),g(),y(),m())}function F(t){t.preventDefault(),o.category=t.target.value.replaceAll(" ","_"),i(o),n(o).then(e=>{if(e.data.results.length)r(e.data);else return}).catch(e=>console.log(e))}function J(t){if(t.preventDefault(),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?o.byABC=!0:o.byABC=!1,i(o),n(o).then(e=>{if(e.data.results.length)r(e.data);else return}).catch(e=>console.log(e));return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?o.byPrice=!0:o.byPrice=!1,i(o),n(o).then(e=>{if(e.data.results.length)r(e.data);else return}).catch(e=>console.log(e));return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?o.byPopularity=!0:o.byPopularity=!1,i(o),n(o).then(e=>{if(e.data.results.length)r(e.data);else return}).catch(e=>console.log(e));return}else if(t.target.value==="Show_all"){g();return}}function E(t){const e=document.querySelector(".modal-text");e.innerText=t;const a=document.querySelector("[data-modal]");a.classList.remove("is-hidden");const s=document.querySelector("[data-modal-close]");s.onclick=function(){a.classList.add("is-hidden")},window.onclick=function(l){l.target===a&&a.classList.add("is-hidden")}}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".subscription-form").addEventListener("submit",function(e){e.preventDefault();const a=document.querySelector(".footer-form-input").value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a)){E("Будь ласка, введіть коректну адресу електронної пошти.");return}})});document.addEventListener("DOMContentLoaded",async()=>{await createPagination()});P().then(({data:t})=>{T(t)}).catch(t=>console.log(t));m().then(({data:t})=>{r(t)}).catch(t=>console.log(t));$().then(({data:t})=>{w(t)}).catch(t=>console.log(t));C().then(({data:t})=>{D(t.toString().replaceAll("_"," ").split(","))}).catch(t=>console.log(t));
//# sourceMappingURL=commonHelpers2.js.map
