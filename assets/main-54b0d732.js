import{a as u}from"./vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const y="https://food-boutique.b.goit.study/api/products/",v="categories",b="popular",$="discount",c={MAIN_URL:y,categories:v,popular:b,discount:$};let S=1,l=6;async function P(){return window.innerWidth>=1440?l=9:window.innerWidth>=768?l=8:l=6,await u(`${c.MAIN_URL}?page=${S}&limit=${l}`)}async function w(){return await u(`${c.MAIN_URL}/${c.popular}?limit=5`)}async function L(){return await u(`${c.MAIN_URL}/${c.discount}`)}async function N(){return await u(`${c.MAIN_URL}/${c.categories}`)}const I=document.querySelector(".popular-product-list");function j(t){I.insertAdjacentHTML("beforeend",A(t))}function A(t){return t.map(({_id:e,name:i,img:s,category:r,size:o,popularity:a})=>`
          <li class="popular-product-item" id="${e}">
            <img src="${s}" alt="${i}" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <h3 class="popular-product-name">${i}</h3>
              <div class="info-item-description">
              <p class="info-item">
              <span class="info-title"> Category: </span>
              ${r.replace("_"," ")}
            </p>
            <p class="info-item">
              <span class="info-title"> Size: </span>
              ${o}
            </p>
            <p class="info-item-pop">
              <span class="info-title"> Popularity: </span>
              ${a}
            </p>
            </div>
            </div>
            <button type="button" class="popular buy-btn" onclick="addToCart('${e}')"><svg class="koshik" width="12" height="12">
            <use href="./images/sprite.svg#icon-shopping-cart"></use>
          </svg>
            <button>
          </li>
      `).join("")}window.addToCart=function(t){const e=JSON.parse(localStorage.getItem("cart"))||{};if(e[t])alert("This product is already in your cart!");else{e[t]=!0,localStorage.setItem("cart",JSON.stringify(e)),alert("Product added to cart!");const i=document.querySelector(`button[data-product-id="${t}"]`);i.innerHTML="&#10003;",i.disabled=!0}};const M="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",O="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",T=document.querySelector(".discount-products-item");function q(t){T.insertAdjacentHTML("beforeend",C(t))}function C(t){return t.map(({_id:e,name:i,img:s,price:r})=>`
        <li class="discount-product">
         <div class="discount-card" id="${e}">
         <img class="discount-svg" src="${M}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${s}" alt="${i}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${i}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${r}</p>
                <button class="discount-buy buy-btn" type="button">
                <img class="discount-buy-svg" src="${O}" alt="shop-icon" width="18" height="18"/>
  </svg>
</button>
</div> 
            </div>
            </div>
        </li>
    `).join("")}const k=document.querySelector(".product-list");function F(t){k.insertAdjacentHTML("beforeend",_(t.results))}function _(t){return t.map(({_id:e,name:i,img:s,category:r,price:o,size:a,is10PercentOff:U,popularity:h})=>`
        <div class="product-card" id="${e}">
         <img src="${s}" alt="${i}" loading="lazy" class="product-pic" />        
         <h3 class="product-name header-three">${i}</h3>
         <div class="product-info regular-text">
            <p class="info-item">
            <span class="info-title"> Category: </span>
            ${r.replace("_"," ")}
            </p>
            <p class="info-item">
            <span class="info-title"> Size: </span>
            ${a}
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
      `).join("")}let z={email:"",products:[{productId:"",amount:1}]};function m(){const t={keyword:null,category:null,page:1,limit:6};return localStorage.setItem("filterParams",JSON.stringify(t)),p()}function d(t){localStorage.setItem("filterParams",JSON.stringify(t))}JSON.parse(localStorage.getItem("shoppingCartItems"))||localStorage.setItem("shoppingCartItems",JSON.stringify(z));function p(){return JSON.parse(localStorage.getItem("filterParams"))}const f=document.querySelector("#filterForm");f.addEventListener("submit",B);const J=document.querySelector("#categories");document.querySelector(".js-option");f.elements.filterCategories.addEventListener("change",H);let n;function g(){n=p()?p():m()}g();function D(t){J.insertAdjacentHTML("afterbegin",x(t))}function x(t){const e=t.map(i=>`
    <option value="${i}" class="js-option">${i}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function B(t){t.preventDefault();const{filterInput:e,filterCategories:i,filterMethod:s="A-Z"}=t.target.elements;E(e,i)}function E(t,e){t.value.trim().length?t.value.trim()?(n.keyword=t.value.trim(),e.value!==""&&(n.category=e.value),d(n)):e.value&&(n.category=e.value.trim(),d(n)):(f.reset(),m(),g())}function H(t){t.preventDefault(),console.log(t.target.value),n.category=t.target.value,d(n)}function R(){const t=document.querySelector(".subscription-form"),e=document.querySelector(".footer-form-input");t.addEventListener("submit",function(i){i.preventDefault();const s=e.value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s)){alert("Будь ласка, введіть коректну адресу електронної пошти.");return}fetch(t.action,{method:t.method,headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s})}).then(o=>{if(o.status===201)return o.json();throw o.status===409?new Error("Підписка вже існує"):new Error("Щось пішло не так. Спробуйте пізніше.")}).then(o=>{alert(o.message),e.value=""}).catch(o=>{alert(o.message)})})}L().then(({data:t})=>{q(t)}).catch(t=>console.log(t));P().then(({data:t})=>{F(t)}).catch(t=>console.log(t));w().then(({data:t})=>{j(t)}).catch(t=>console.log(t));N().then(({data:t})=>{D(t)}).catch(t=>console.log(t));R();
//# sourceMappingURL=main-54b0d732.js.map
