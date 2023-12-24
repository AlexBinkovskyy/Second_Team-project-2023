import{a as u}from"./vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();const y="https://food-boutique.b.goit.study/api/products/",v="categories",b="popular",$="discount",c={MAIN_URL:y,categories:v,popular:b,discount:$};let S=1,l=6;async function P(){return window.innerWidth>=1440?l=9:window.innerWidth>=768?l=8:l=6,await u(`${c.MAIN_URL}?page=${S}&limit=${l}`)}async function w(){return await u(`${c.MAIN_URL}/${c.popular}?limit=5`)}async function L(){return await u(`${c.MAIN_URL}/${c.discount}`)}async function N(){return await u(`${c.MAIN_URL}/${c.categories}`)}const j=document.querySelector(".popular-product-list");function I(t){j.insertAdjacentHTML("beforeend",A(t))}function A(t){return t.map(({_id:e,name:s,img:r,category:i,size:o,popularity:n})=>`
          <li class="popular-product-item" id="${e}">
            <img src="${r}" alt="${s}" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <h3 class="popular-product-name">${s}</h3>
              <div class="info-item-description">
              <p class="info-item">
              <span class="info-title"> Category: </span>
              ${i.replace("_"," ")}
            </p>
            <p class="info-item">
              <span class="info-title"> Size: </span>
              ${o}
            </p>
            <p class="info-item-pop">
              <span class="info-title"> Popularity: </span>
              ${n}
            </p>
            </div>
            </div>
            <button type="button" class="popular buy-btn" onclick="addToCart('${e}')"><svg class="koshik" width="12" height="12">
            <use href="./images/sprite.svg#icon-shopping-cart"></use>
          </svg>
            <button>
          </li>
      `).join("")}window.addToCart=function(t){const e=JSON.parse(localStorage.getItem("cart"))||{};if(e[t])alert("This product is already in your cart!");else{e[t]=!0,localStorage.setItem("cart",JSON.stringify(e)),alert("Product added to cart!");const s=document.querySelector(`button[data-product-id="${t}"]`);s.innerHTML="&#10003;",s.disabled=!0}};const C="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",M="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",O=document.querySelector(".discount-products-item");function T(t){O.insertAdjacentHTML("beforeend",k(t))}function k(t){return t.map(({_id:e,name:s,img:r,price:i})=>`
        <li class="discount-product">
         <div class="discount-card" id="${e}">
         <img class="discount-svg" src="${C}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${r}" alt="${s}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${s}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${i}</p>
                <button class="discount-buy buy-btn" type="button">
                <img class="discount-buy-svg" src="${M}" alt="shop-icon" width="18" height="18"/>
  </svg>
</button>
</div> 
            </div>
            </div>
        </li>
    `).join("")}const q=document.querySelector(".product-list");function F(t){q.insertAdjacentHTML("beforeend",_(t.results))}function _(t){return t.map(({_id:e,name:s,img:r,category:i,price:o,size:n,is10PercentOff:U,popularity:h})=>`
        <div class="product-card" id="${e}">
         <img src="${r}" alt="${s}" loading="lazy" class="product-pic" />        
         <h3 class="product-name header-three">${s}</h3>
         <div class="product-info regular-text">
            <p class="info-item">
            <span class="info-title"> Category: </span>
            ${i.replace("_"," ")}
            </p>
            <p class="info-item">
            <span class="info-title"> Size: </span>
            ${n}
            </p>
            <p class="info-item">
            <span class="info-title"> Popularity: </span>
            ${h}
            </p>
          </div>
          <div class="purchaise-box">
            <h3 class="product-price header-three">&#36;${o}</h3>
            <button type="button" class="buy-btn">Buy</button>
          </div>
        </div>
      `).join("")}let z={email:"",products:[{productId:"",amount:1}]};function f(){const t={keyword:null,category:null,page:1,limit:6};return localStorage.setItem("filterParams",JSON.stringify(t)),p()}function d(t){localStorage.setItem("filterParams",JSON.stringify(t))}JSON.parse(localStorage.getItem("shoppingCartItems"))||localStorage.setItem("shoppingCartItems",JSON.stringify(z));function p(){return JSON.parse(localStorage.getItem("filterParams"))}const m=document.querySelector("#filterForm");m.addEventListener("submit",D);const J=document.querySelector("#categories");document.querySelector(".js-option");let a;function g(){a=p()?p():f()}g();function x(t){J.insertAdjacentHTML("afterbegin",B(t))}function B(t){const e=t.map(s=>`
    <option value="${s}" class="js-option">${s}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}async function D(t){t.preventDefault();const{filterInput:e,filterCategories:s,filterMethod:r="A-Z"}=t.target.elements;E(e,s),await H(s)}function E(t,e){t.value.trim()?(a.keyword=t.value.trim(),d(a)):e.value?(a.category=e.value.trim(),d(a)):t.value.trim().length||(console.log("kdjshfdhfjs",t.value.trim().length),m.reset(),f(),g())}function H(t){a.category=t.value,d(a)}function R(){const t=document.querySelector(".subscription-form"),e=document.querySelector(".footer-form-input");t.addEventListener("submit",function(s){s.preventDefault();const r=e.value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(r)){alert("Будь ласка, введіть коректну адресу електронної пошти.");return}fetch(t.action,{method:t.method,headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r})}).then(o=>{if(o.status===201)return o.json();throw o.status===409?new Error("Підписка вже існує"):new Error("Щось пішло не так. Спробуйте пізніше.")}).then(o=>{alert(o.message),e.value=""}).catch(o=>{alert(o.message)})})}L().then(({data:t})=>{T(t)}).catch(t=>console.log(t));P().then(({data:t})=>{F(t)}).catch(t=>console.log(t));w().then(({data:t})=>{I(t)}).catch(t=>console.log(t));N().then(({data:t})=>{x(t)}).catch(t=>console.log(t));R();
//# sourceMappingURL=main-30f515b1.js.map
