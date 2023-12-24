import{a as l}from"./vendor-a61d8330.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerpolicy&&(e.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?e.credentials="include":s.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(s){if(s.ep)return;s.ep=!0;const e=i(s);fetch(s.href,e)}})();const g="https://food-boutique.b.goit.study/api/products/",h="categories",y="popular",b="discount",c={MAIN_URL:g,categories:h,popular:y,discount:b};let v=1,a=6;async function $(){return window.innerWidth>=1440?a=9:window.innerWidth>=768?a=8:a=6,await l(`${c.MAIN_URL}?page=${v}&limit=${a}`)}async function S(){return await l(`${c.MAIN_URL}/${c.popular}?limit=${a}`)}async function P(){return await l(`${c.MAIN_URL}/${c.discount}`)}async function w(){return await l(`${c.MAIN_URL}/${c.categories}`)}const L=document.querySelector(".popular-product-list");function I(t){L.insertAdjacentHTML("beforeend",N(t))}function N(t){return t.map(({_id:o,name:i,img:n,category:s,size:e,popularity:r})=>`
          <li class="popular-product-item" id="${o}">
            <img src="${n}" alt="${i}" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <h3 class="popular-product-name">${i}</h3>
              <div class="info-item-description">
              <p class="info-item">
              <span class="info-title"> Category: </span>
              ${s.replace("_"," ")}
            </p>
            <p class="info-item">
              <span class="info-title"> Size: </span>
              ${e}
            </p>
            <p class="info-item-pop">
              <span class="info-title"> Popularity: </span>
              ${r}
            </p>
            </div>
            </div>
            <button type="button" class="buy-btn" onclick="addToCart('${o}')"><svg class="koshik" width="12" height="12">
            <use href="./images/sprite.svg#icon-shopping-cart"></use>
          </svg>
            <button>
          </li>
      `).join("")}window.addToCart=function(t){const o=JSON.parse(localStorage.getItem("cart"))||{};if(o[t])alert("This product is already in your cart!");else{o[t]=!0,localStorage.setItem("cart",JSON.stringify(o)),alert("Product added to cart!");const i=document.querySelector(`button[data-product-id="${t}"]`);i.innerHTML="&#10003;",i.disabled=!0}};const j="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",A="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",C=document.querySelector(".discount-products-item");function M(t){C.insertAdjacentHTML("beforeend",O(t))}function O(t){return t.map(({_id:o,name:i,img:n,price:s})=>`
        <li class="discount-product">
         <div class="discount-card" id="${o}">
         <img class="discount-svg" src="${j}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${n}" alt="${i}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${i}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${s}</p>
                <button class="discount-buy buy-btn" type="button">
                <img class="discount-buy-svg" src="${A}" alt="shop-icon" width="18" height="18"/>
  </svg>
</button>
</div> 
            </div>
            </div>
        </li>
    `).join("")}const T=document.querySelector(".product-list");function q(t){T.insertAdjacentHTML("beforeend",k(t.results))}function k(t){return t.map(({_id:o,name:i,img:n,category:s,price:e,size:r,is10PercentOff:R,popularity:m})=>`
        <div class="product-card" id="${o}">
         <img src="${n}" alt="${i}" loading="lazy" class="product-pic" />        
         <h3 class="product-name header-three">${i}</h3>
         <div class="product-info regular-text">
            <p class="info-item">
            <span class="info-title"> Category: </span>
            ${s.replace("_"," ")}
            </p>
            <p class="info-item">
            <span class="info-title"> Size: </span>
            ${r}
            </p>
            <p class="info-item">
            <span class="info-title"> Popularity: </span>
            ${m}
            </p>
          </div>
          <div class="purchaise-box">
            <h3 class="product-price header-three">&#36;${e}</h3>
            <button type="button" class="buy-btn">Buy</button>
          </div>
        </div>
      `).join("")}let _={email:"",products:[{productId:"",amount:1}]};function p(){const t={keyword:null,category:null,page:1,limit:6};return localStorage.setItem("filterParams",JSON.stringify(t)),d()}function z(t){localStorage.setItem("filterParams",JSON.stringify(t))}JSON.parse(localStorage.getItem("shoppingCartItems"))||localStorage.setItem("shoppingCartItems",JSON.stringify(_));function d(){return JSON.parse(localStorage.getItem("filterParams"))}const F=document.querySelector("#filterForm");F.addEventListener("submit",f);const J=document.querySelector("#categories"),x=document.querySelector(".js-option");x.addEventListener("change",f);let u=d()?d():p();function B(t){J.insertAdjacentHTML("afterbegin",D(t))}function D(t){const o=t.map(i=>`
    <option value="${i}" class="js-option">${i}</option>
    `);return o.unshift('<option value="" disabled selected>Categories</option>'),o.join("")}function f(t){t.preventDefault();const{filterInput:o,filterCategories:i,filterMethod:n}=t.target.elements;E(o)}function E(t){console.log(u),t.value.trim()?(u.keyword=`${t.value.trim()}`,z(u)):p()}function H(){const t=document.querySelector(".subscription-form"),o=document.querySelector(".footer-form-input");t.addEventListener("submit",function(i){i.preventDefault();const n=o.value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(n)){alert("Будь ласка, введіть коректну адресу електронної пошти.");return}fetch(t.action,{method:t.method,headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n})}).then(e=>{if(e.status===201)return e.json();throw e.status===409?new Error("Підписка вже існує"):new Error("Щось пішло не так. Спробуйте пізніше.")}).then(e=>{alert(e.message),o.value=""}).catch(e=>{alert(e.message)})})}P().then(({data:t})=>{M(t)}).catch(t=>console.log(t));$().then(({data:t})=>{q(t)}).catch(t=>console.log(t));S().then(({data:t})=>{I(t)}).catch(t=>console.log(t));w().then(({data:t})=>{B(t)}).catch(t=>console.log(t));H();
//# sourceMappingURL=main-a2012c5e.js.map
