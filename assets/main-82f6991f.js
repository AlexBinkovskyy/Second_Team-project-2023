import{a as d}from"./vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const h="https://food-boutique.b.goit.study/api/products/",v="categories",b="popular",$="discount",c={MAIN_URL:h,categories:v,popular:b,discount:$};let P=1,u=6;async function S(){return window.innerWidth>=1440?u=9:window.innerWidth>=768?u=8:u=6,await d(`${c.MAIN_URL}?page=${P}&limit=${u}`)}async function w(){return await d(`${c.MAIN_URL}/${c.popular}?limit=5`)}async function L(){return await d(`${c.MAIN_URL}/${c.discount}`)}async function A(){return await d(`${c.MAIN_URL}/${c.categories}`)}const _=document.querySelector(".popular-product-list");function N(t){_.insertAdjacentHTML("beforeend",C(t))}function C(t){return t.map(({_id:e,name:i,img:a,category:r,size:o,popularity:n})=>`
          <li class="popular-product-item" id="${e}">
            <img src="${a}" alt="${i}" loading="lazy" class="popular-product-pic" />
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
              ${n}
            </p>
            </div>
            </div>
            <button type="button" class="popular buy-btn" onclick="addToCart('${e}')"><svg class="koshik" width="12" height="12">
            <use href="./images/sprite.svg#icon-shopping-cart"></use>
          </svg>
            <button>
          </li>
      `).join("")}window.addToCart=function(t){const e=JSON.parse(localStorage.getItem("cart"))||{};if(e[t])alert("This product is already in your cart!");else{e[t]=!0,localStorage.setItem("cart",JSON.stringify(e)),alert("Product added to cart!");const i=document.querySelector(`button[data-product-id="${t}"]`);i.innerHTML="&#10003;",i.disabled=!0}};const I="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",M="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",O=document.querySelector(".discount-products-item");function j(t){O.insertAdjacentHTML("beforeend",T(t))}function T(t){return t.map(({_id:e,name:i,img:a,price:r})=>`
        <li class="discount-product">
         <div class="discount-card" id="${e}">
         <img class="discount-svg" src="${I}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${a}" alt="${i}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${i}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${r}</p>
                <button class="discount-buy buy-btn" type="button">
                <img class="discount-buy-svg" src="${M}" alt="shop-icon" width="18" height="18"/>
  </svg>
</button>
</div> 
            </div>
            </div>
        </li>
    `).join("")}const k=document.querySelector(".product-list");function q(t){k.innerHTML=F(t.results)}function F(t){return t.map(({_id:e,name:i,img:a,category:r,price:o,size:n,is10PercentOff:U,popularity:y})=>`
        <div class="product-card" id="${e}">
         <img src="${a}" alt="${i}" loading="lazy" class="product-pic" />        
         <h3 class="product-name header-three">${i}</h3>
         <div class="product-info regular-text">
            <p class="info-item">
            <span class="info-title"> Category: </span>
            ${r.replace("_"," ")}
            </p>
            <p class="info-item">
            <span class="info-title"> Size: </span>
            ${n}
            </p>
            <p class="info-item">
            <span class="info-title"> Popularity: </span>
            ${y}
            </p>
          </div>
          <div class="purchaise-box">
            <h3 class="product-price header-three">&#36;${o}</h3>
            <button type="button" class="buy-btn">Buy</button>
          </div>
        </div>
      `).join("")}let B={email:"",products:[{productId:"",amount:1}]};function m(){const t={keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:6};return localStorage.setItem("filterParams",JSON.stringify(t)),f()}function l(t){localStorage.setItem("filterParams",JSON.stringify(t))}JSON.parse(localStorage.getItem("shoppingCartItems"))||localStorage.setItem("shoppingCartItems",JSON.stringify(B));function f(){return JSON.parse(localStorage.getItem("filterParams"))}const p=document.querySelector("#filterForm");p.addEventListener("submit",J);const z=document.querySelector("#categories");p.elements.filterCategories.addEventListener("change",Z);p.elements.filterMethod.addEventListener("change",H);let s;function g(){s=f()?f():m()}g();function D(t){z.insertAdjacentHTML("afterbegin",E(t))}function E(t){const e=t.map(i=>`
    <option value="${i}" class="js-option">${i}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function J(t){t.preventDefault();const{filterInput:e,filterCategories:i,filterMethod:a="A-Z"}=t.target.elements;x(e,i)}function x(t,e){t.value.trim().length?t.value.trim()?(s.keyword=t.value.trim(),e.value!==""&&(s.category=e.value),l(s)):e.value&&(s.category=e.value.trim(),l(s)):(p.reset(),m(),g())}function Z(t){t.preventDefault(),s.category=t.target.value.replace(" ","_"),l(s)}function H(t){if(t.preventDefault(),console.log(t.target.value),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?s.byABC=!0:s.byABC=!1,l(s);return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?s.byPrice=!0:s.byPrice=!1,l(s);return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?s.byPopularity=!0:s.byPopularity=!1,l(s);return}else if(t.target.value==="Show_all"){m();return}}function R(){const t=document.querySelector(".subscription-form"),e=document.querySelector(".footer-form-input");t.addEventListener("submit",function(i){i.preventDefault();const a=e.value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a)){alert("Будь ласка, введіть коректну адресу електронної пошти.");return}fetch(t.action,{method:t.method,headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a})}).then(o=>{if(o.status===201)return o.json();throw o.status===409?new Error("Підписка вже існує"):new Error("Щось пішло не так. Спробуйте пізніше.")}).then(o=>{alert(o.message),e.value=""}).catch(o=>{alert(o.message)})})}L().then(({data:t})=>{j(t)}).catch(t=>console.log(t));S().then(({data:t})=>{q(t)}).catch(t=>console.log(t));w().then(({data:t})=>{N(t)}).catch(t=>console.log(t));A().then(({data:t})=>{D(t.toString().replaceAll("_"," ").split(","))}).catch(t=>console.log(t));R();
//# sourceMappingURL=main-82f6991f.js.map
