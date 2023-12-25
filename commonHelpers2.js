import{s as y,a as v,b,c as S,d as $}from"./assets/sprite-77e1cee7.js";import"./assets/vendor-f9e4276b.js";const P=document.querySelector(".popular-product-list");function C(t){P.insertAdjacentHTML("beforeend",L(t))}function L(t){return t.map(({_id:a,name:e,img:s,category:r,size:l,popularity:c})=>`
          <li class="popular-product-item" id="${a}">
            <img src="${s}" alt="${e}" width="56" height="56" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <h3 class="popular-product-name">${e}</h3>
              <div class="info-item-description">
              <p class="info-item">
              <span class="info-title"> Category: </span>
              ${r.replace("_"," ")}
            </p>
            <p class="info-item">
              <span class="info-title"> Size: </span>
              ${l}
            </p>
            <p class="info-item-pop">
              <span class="info-title"> Popularity: </span>
              ${c}
            </p>
            </div>
            </div>
            <div class="popular-btn">
            <button type="button" class="popular-buy buy-btn" onclick="addToCart('${a}')">
            <svg class="img-icon"  width="12" height="12">
            <use href="${y}#icon-shopping-cart"></use></svg>
            </button>
            </div>
          </li>
      `).join("")}window.addToCart=function(t){const a=JSON.parse(localStorage.getItem("cart"))||{};if(a[t])alert("This product is already in your cart!");else{a[t]=!0,localStorage.setItem("cart",JSON.stringify(a)),alert("Product added to cart!");const e=document.querySelector(`button[data-product-id="${t}"]`);e.innerHTML="&#10003;",e.disabled=!0}};const p="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",g="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",I=document.querySelector(".discount-products-item");function w(t){I.insertAdjacentHTML("beforeend",A(t))}function A(t){return t.map(({_id:a,name:e,img:s,price:r})=>`
        <li class="discount-product">
         <div class="discount-card" id="${a}">
         <img class="discount-svg" src="${p}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${s}" alt="${e}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${e}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${r}</p>
                <button class="discount-buy buy-btn" type="button">
                <img class="discount-buy-svg" src="${g}" alt="shop-icon" width="18" height="18"/>
  </svg>
</button>
</div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}const _=document.querySelector(".product-list");function N(t){_.innerHTML=T(t.results)}function T(t){return t.map(({_id:a,name:e,img:s,category:r,price:l,size:c,is10PercentOff:f,popularity:h})=>`
        <div class="all-product-card" id="${a}">
         <img class="all-discount-svg
         ${f.toString().replace("false","visually-hidden")}
          " 
        src="${p}" alt="discount-icon" width="60" height="60"/>
         <img src="${s}" alt="${e}" loading="lazy" class="all-product-pic" />
         <h3 class="all-product-name header-three">${e}</h3>
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
            <h3 class="all-product-price header-three">&#36;${l}</h3>
            <button class="all-product-btn buy-btn" type="button">
                <img class="all-buy-svg" src="${g}" alt="shop-icon" width="18" height="18"/>
               
            </button>
          </div>
        </div>
      `).join("")}let M={email:"",products:[]};function d(){const t={keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:6};return localStorage.setItem("filterParams",JSON.stringify(t)),u()}function i(t){localStorage.setItem("filterParams",JSON.stringify(t))}JSON.parse(localStorage.getItem("shoppingCartItems"))||localStorage.setItem("shoppingCartItems",JSON.stringify(M));function q(){return JSON.parse(localStorage.getItem("shoppingCartItems")).products.length}function O(t,a=1){const e=j();e.products.find(({id:s})=>t!==s)||(e.products.push({ID:t,amount:a}),localStorage.setItem("shoppingCartItems",JSON.stringify(e)))}function j(){return JSON.parse(localStorage.getItem("shoppingCartItems"))}function u(){return JSON.parse(localStorage.getItem("filterParams"))}const k=document.querySelector(".cart-number");k.insertAdjacentHTML("beforeend",q());const n=document.querySelector("#filterForm");n.addEventListener("submit",B);const D=document.querySelector("#categories");n.elements.filterCategories.addEventListener("change",F);n.elements.filterMethod.addEventListener("change",E);let o;function m(){o=u()?u():d()}m();function J(t){D.insertAdjacentHTML("afterbegin",x(t))}function x(t){const a=t.map(e=>`
    <option value="${e}" class="js-option">${e}</option>
    `);return a.unshift('<option value="" disabled selected>Categories</option>'),a.join("")}function B(t){t.preventDefault();const{filterInput:a,filterCategories:e,filterMethod:s="A-Z"}=t.target.elements;z(a,e)}function z(t,a){t.value.trim().length?t.value.trim()?(o.keyword=t.value.trim(),a.value!==""&&(o.category=a.value),i(o)):a.value&&(o.category=a.value.trim(),i(o)):(n.reset(),d(),m())}function F(t){t.preventDefault(),o.category=t.target.value.replace(" ","_"),i(o)}function E(t){if(t.preventDefault(),console.log(t.target.value),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?o.byABC=!0:o.byABC=!1,i(o);return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?o.byPrice=!0:o.byPrice=!1,i(o);return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?o.byPopularity=!0:o.byPopularity=!1,i(o);return}else if(t.target.value==="Show_all"){d();return}}function Z(t){const a=document.querySelector(".modal-text");a.innerText=t;const e=document.querySelector("[data-modal]");e.classList.remove("is-hidden");const s=document.querySelector("[data-modal-close]");s.onclick=function(){e.classList.add("is-hidden")},window.onclick=function(r){r.target===e&&e.classList.add("is-hidden")}}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".subscription-form").addEventListener("submit",function(a){a.preventDefault();const e=document.querySelector(".footer-form-input").value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e)){Z("Будь ласка, введіть коректну адресу електронної пошти.");return}})});document.addEventListener("DOMContentLoaded",async()=>{await createPagination()});O("640c2dd963a319ea671e383b");v().then(({data:t})=>{w(t)}).catch(t=>console.log(t));b().then(({data:t})=>{N(t)}).catch(t=>console.log(t));S().then(({data:t})=>{C(t)}).catch(t=>console.log(t));$().then(({data:t})=>{J(t.toString().replaceAll("_"," ").split(","))}).catch(t=>console.log(t));
//# sourceMappingURL=commonHelpers2.js.map
