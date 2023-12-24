import{a as y,b as v,c as b,d as S}from"./assets/query-9091648c.js";import"./assets/vendor-f9e4276b.js";const P=document.querySelector(".popular-product-list");function $(t){P.insertAdjacentHTML("beforeend",C(t))}function C(t){return t.map(({_id:e,name:a,img:s,category:r,size:n,popularity:c})=>`
          <li class="popular-product-item" id="${e}">
            <img src="${s}" alt="${a}" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <h3 class="popular-product-name">${a}</h3>
              <div class="info-item-description">
              <p class="info-item">
              <span class="info-title"> Category: </span>
              ${r.replace("_"," ")}
            </p>
            <p class="info-item">
              <span class="info-title"> Size: </span>
              ${n}
            </p>
            <p class="info-item-pop">
              <span class="info-title"> Popularity: </span>
              ${c}
            </p>
            </div>
            </div>
            <button type="button" class="popular buy-btn" onclick="addToCart('${e}')"><svg class="koshik" width="12" height="12">
            <use href="./images/sprite.svg#icon-shopping-cart"></use>
          </svg>
            <button>
          </li>
      `).join("")}window.addToCart=function(t){const e=JSON.parse(localStorage.getItem("cart"))||{};if(e[t])alert("This product is already in your cart!");else{e[t]=!0,localStorage.setItem("cart",JSON.stringify(e)),alert("Product added to cart!");const a=document.querySelector(`button[data-product-id="${t}"]`);a.innerHTML="&#10003;",a.disabled=!0}};const p="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",m="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",L=document.querySelector(".discount-products-item");function A(t){L.insertAdjacentHTML("beforeend",_(t))}function _(t){return t.map(({_id:e,name:a,img:s,price:r})=>`
        <li class="discount-product">
         <div class="discount-card" id="${e}">
         <img class="discount-svg" src="${p}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${s}" alt="${a}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${a}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${r}</p>
                <button class="discount-buy buy-btn" type="button">
                <img class="discount-buy-svg" src="${m}" alt="shop-icon" width="18" height="18"/>
  </svg>
</button>
</div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}const w=document.querySelector(".product-list");function T(t){w.innerHTML=k(t.results)}function k(t){return t.map(({_id:e,name:a,img:s,category:r,price:n,size:c,is10PercentOff:f,popularity:h})=>`
        <div class="all-product-card" id="${e}">
         <img class="all-discount-svg
         ${f.toString().replace("false","visually-hidden")}
          " 
        src="${p}" alt="discount-icon" width="60" height="60"/>
         <img src="${s}" alt="${a}" loading="lazy" class="all-product-pic" />
         <h3 class="all-product-name header-three">${a}</h3>
         <div class="all-product-info regular-text">
            <p class="all-info-item">
            <span class="all-info-title"> Category: </span>
            ${r.replaceAll("_"," ")}
            </p>
            <p class="all-info-item">
            <span class="all-info-title"> Size: </span>
            ${c}
            </p>
            <p class="all-info-item">
            <span class="all-info-title"> Popularity: </span>
            ${h}
            </p>
          </div>
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${n}</h3>
            <button class="all-product-btn buy-btn" type="button">
                <img class="all-buy-svg" src="${m}" alt="shop-icon" width="18" height="18"/>
               
            </button>
          </div>
        </div>
      `).join("")}let q={email:"",products:[]};function d(){const t={keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:6};return localStorage.setItem("filterParams",JSON.stringify(t)),u()}function i(t){localStorage.setItem("filterParams",JSON.stringify(t))}JSON.parse(localStorage.getItem("shoppingCartItems"))||localStorage.setItem("shoppingCartItems",JSON.stringify(q));function M(){return JSON.parse(localStorage.getItem("shoppingCartItems")).products.length}function u(){return JSON.parse(localStorage.getItem("filterParams"))}const N=document.querySelector(".cart-number");N.insertAdjacentHTML("beforeend",M());const l=document.querySelector("#filterForm");l.addEventListener("submit",B);const j=document.querySelector("#categories");l.elements.filterCategories.addEventListener("change",O);l.elements.filterMethod.addEventListener("change",z);let o;function g(){o=u()?u():d()}g();function I(t){j.insertAdjacentHTML("afterbegin",x(t))}function x(t){const e=t.map(a=>`
    <option value="${a}" class="js-option">${a}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function B(t){t.preventDefault();const{filterInput:e,filterCategories:a,filterMethod:s="A-Z"}=t.target.elements;D(e,a)}function D(t,e){t.value.trim().length?t.value.trim()?(o.keyword=t.value.trim(),e.value!==""&&(o.category=e.value),i(o)):e.value&&(o.category=e.value.trim(),i(o)):(l.reset(),d(),g())}function O(t){t.preventDefault(),o.category=t.target.value.replace(" ","_"),i(o)}function z(t){if(t.preventDefault(),console.log(t.target.value),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?o.byABC=!0:o.byABC=!1,i(o);return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?o.byPrice=!0:o.byPrice=!1,i(o);return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?o.byPopularity=!0:o.byPopularity=!1,i(o);return}else if(t.target.value==="Show_all"){d();return}}function F(t){const e=document.querySelector(".modal-text");e.innerText=t;const a=document.querySelector("[data-modal]");a.classList.remove("is-hidden");const s=document.querySelector("[data-modal-close]");s.onclick=function(){a.classList.add("is-hidden")},window.onclick=function(r){r.target===a&&a.classList.add("is-hidden")}}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".subscription-form").addEventListener("submit",function(e){e.preventDefault();const a=document.querySelector(".footer-form-input").value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a)){F("Будь ласка, введіть коректну адресу електронної пошти.");return}})});y().then(({data:t})=>{A(t)}).catch(t=>console.log(t));v().then(({data:t})=>{T(t)}).catch(t=>console.log(t));b().then(({data:t})=>{$(t)}).catch(t=>console.log(t));S().then(({data:t})=>{I(t.toString().replaceAll("_"," ").split(","))}).catch(t=>console.log(t));
//# sourceMappingURL=commonHelpers2.js.map
