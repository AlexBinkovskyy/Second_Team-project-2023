import{a as u}from"./vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();const h="https://food-boutique.b.goit.study/api/products/",b="categories",v="popular",S="discount",n={MAIN_URL:h,categories:b,popular:v,discount:S};let $=1,d=6;async function P(){return window.innerWidth>=1440?d=9:window.innerWidth>=768?d=8:d=6,await u(`${n.MAIN_URL}?page=${$}&limit=${d}`)}async function w(){return await u(`${n.MAIN_URL}/${n.popular}?limit=5`)}async function L(){return await u(`${n.MAIN_URL}/${n.discount}`)}async function G(t){return await u(`${n.MAIN_URL}/${t}`)}async function A(){return await u(`${n.MAIN_URL}/${n.categories}`)}const N=document.querySelector(".popular-product-list");function I(t){N.insertAdjacentHTML("beforeend",_(t))}function _(t){return t.map(({_id:e,name:i,img:s,category:o,size:r,popularity:c})=>`
          <li class="popular-product-item" id="${e}">
            <img src="${s}" alt="${i}" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <h3 class="popular-product-name">${i}</h3>
              <div class="info-item-description">
              <p class="info-item">
              <span class="info-title"> Category: </span>
              ${o.replace("_"," ")}
            </p>
            <p class="info-item">
              <span class="info-title"> Size: </span>
              ${r}
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
      `).join("")}window.addToCart=function(t){const e=JSON.parse(localStorage.getItem("cart"))||{};if(e[t])alert("This product is already in your cart!");else{e[t]=!0,localStorage.setItem("cart",JSON.stringify(e)),alert("Product added to cart!");const i=document.querySelector(`button[data-product-id="${t}"]`);i.innerHTML="&#10003;",i.disabled=!0}};const C="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",M="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",O=document.querySelector(".discount-products-item");function j(t){O.insertAdjacentHTML("beforeend",T(t))}function T(t){return t.map(({_id:e,name:i,img:s,price:o})=>`
        <li class="discount-product">
         <div class="discount-card" id="${e}">
         <img class="discount-svg" src="${C}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${s}" alt="${i}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${i}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${o}</p>
                <button class="discount-buy buy-btn" type="button">
                <img class="discount-buy-svg" src="${M}" alt="shop-icon" width="18" height="18"/>
  </svg>
</button>
</div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}const q=document.querySelector(".product-list");function k(t){q.innerHTML=B(t.results)}function B(t){return t.map(({_id:e,name:i,img:s,category:o,price:r,size:c,is10PercentOff:K,popularity:y})=>`
        <div class="product-card" id="${e}">
         <img src="${s}" alt="${i}" loading="lazy" class="product-pic" />        
         <h3 class="product-name header-three">${i}</h3>
         <div class="product-info regular-text">
            <p class="info-item">
            <span class="info-title"> Category: </span>
            ${o.replace("_"," ")}
            </p>
            <p class="info-item">
            <span class="info-title"> Size: </span>
            ${c}
            </p>
            <p class="info-item">
            <span class="info-title"> Popularity: </span>
            ${y}
            </p>
          </div>
          <div class="purchaise-box">
            <h3 class="product-price header-three">&#36;${r}</h3>
            <button type="button" class="buy-btn">Buy</button>
          </div>
        </div>
      `).join("")}let F={email:"",products:[{productId:"",amount:1}]};function m(){const t={keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:6};return localStorage.setItem("filterParams",JSON.stringify(t)),f()}function l(t){localStorage.setItem("filterParams",JSON.stringify(t))}JSON.parse(localStorage.getItem("shoppingCartItems"))||localStorage.setItem("shoppingCartItems",JSON.stringify(F));function D(){return JSON.parse(localStorage.getItem("shoppingCartItems")).length}function f(){return JSON.parse(localStorage.getItem("filterParams"))}const J=document.querySelector(".cart-number");J.insertAdjacentHTML("beforeend",D());const p=document.querySelector("#filterForm");p.addEventListener("submit",Z);const x=document.querySelector("#categories");p.elements.filterCategories.addEventListener("change",R);p.elements.filterMethod.addEventListener("change",U);let a;function g(){a=f()?f():m()}g();function z(t){x.insertAdjacentHTML("afterbegin",E(t))}function E(t){const e=t.map(i=>`
    <option value="${i}" class="js-option">${i}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function Z(t){t.preventDefault();const{filterInput:e,filterCategories:i,filterMethod:s="A-Z"}=t.target.elements;H(e,i)}function H(t,e){t.value.trim().length?t.value.trim()?(a.keyword=t.value.trim(),e.value!==""&&(a.category=e.value),l(a)):e.value&&(a.category=e.value.trim(),l(a)):(p.reset(),m(),g())}function R(t){t.preventDefault(),a.category=t.target.value.replace(" ","_"),l(a)}function U(t){if(t.preventDefault(),console.log(t.target.value),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?a.byABC=!0:a.byABC=!1,l(a);return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?a.byPrice=!0:a.byPrice=!1,l(a);return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?a.byPopularity=!0:a.byPopularity=!1,l(a);return}else if(t.target.value==="Show_all"){m();return}}function W(){const t=document.querySelector(".subscription-form"),e=document.querySelector(".footer-form-input");t.addEventListener("submit",function(i){i.preventDefault();const s=e.value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s)){alert("Будь ласка, введіть коректну адресу електронної пошти.");return}fetch(t.action,{method:t.method,headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s})}).then(r=>{if(r.status===201)return r.json();throw r.status===409?new Error("Підписка вже існує"):new Error("Щось пішло не так. Спробуйте пізніше.")}).then(r=>{alert(r.message),e.value=""}).catch(r=>{alert(r.message)})})}L().then(({data:t})=>{j(t)}).catch(t=>console.log(t));P().then(({data:t})=>{k(t)}).catch(t=>console.log(t));w().then(({data:t})=>{I(t)}).catch(t=>console.log(t));A().then(({data:t})=>{z(t.toString().replaceAll("_"," ").split(","))}).catch(t=>console.log(t));W();export{G as g};
//# sourceMappingURL=main-85fff296.js.map
