import{a as d}from"./vendor-f9e4276b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const $="https://food-boutique.b.goit.study/api/products/",P="categories",L="popular",w="discount",n={MAIN_URL:$,categories:P,popular:L,discount:w};let A=1,p=6;async function N(){return window.innerWidth>=1440?p=9:window.innerWidth>=768?p=8:p=6,await d(`${n.MAIN_URL}?page=${A}&limit=${p}`)}async function _(){return await d(`${n.MAIN_URL}/${n.popular}?limit=5`)}async function I(){return await d(`${n.MAIN_URL}/${n.discount}`)}async function G(t){return await d(`${n.MAIN_URL}/${t}`)}async function C(){return await d(`${n.MAIN_URL}/${n.categories}`)}const M=document.querySelector(".popular-product-list");function T(t){M.insertAdjacentHTML("beforeend",q(t))}function q(t){return t.map(({_id:e,name:r,img:s,category:o,size:i,popularity:c})=>`
          <li class="popular-product-item" id="${e}">
            <img src="${s}" alt="${r}" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <h3 class="popular-product-name">${r}</h3>
              <div class="info-item-description">
              <p class="info-item">
              <span class="info-title"> Category: </span>
              ${o.replace("_"," ")}
            </p>
            <p class="info-item">
              <span class="info-title"> Size: </span>
              ${i}
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
      `).join("")}window.addToCart=function(t){const e=JSON.parse(localStorage.getItem("cart"))||{};if(e[t])alert("This product is already in your cart!");else{e[t]=!0,localStorage.setItem("cart",JSON.stringify(e)),alert("Product added to cart!");const r=document.querySelector(`button[data-product-id="${t}"]`);r.innerHTML="&#10003;",r.disabled=!0}};const h="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",y="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",O=document.querySelector(".discount-products-item");function k(t){O.insertAdjacentHTML("beforeend",j(t))}function j(t){return t.map(({_id:e,name:r,img:s,price:o})=>`
        <li class="discount-product">
         <div class="discount-card" id="${e}">
         <img class="discount-svg" src="${h}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${s}" alt="${r}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${r}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${o}</p>
                <button class="discount-buy buy-btn" type="button">
                <img class="discount-buy-svg" src="${y}" alt="shop-icon" width="18" height="18"/>
  </svg>
</button>
</div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}const x=document.querySelector(".product-list");function B(t){x.innerHTML=D(t.results)}function D(t){return t.map(({_id:e,name:r,img:s,category:o,price:i,size:c,is10PercentOff:v,popularity:S})=>`
        <div class="all-product-card" id="${e}">
         <img class="all-discount-svg
         ${v.toString().replace("false","visually-hidden")}
          " 
        src="${h}" alt="discount-icon" width="60" height="60"/>
         <img src="${s}" alt="${r}" loading="lazy" class="all-product-pic" />
         <h3 class="all-product-name header-three">${r}</h3>
         <div class="all-product-info regular-text">
            <p class="all-info-item">
            <span class="all-info-title"> Category: </span>
            ${o.replaceAll("_"," ")}
            </p>
            <p class="all-info-item">
            <span class="all-info-title"> Size: </span>
            ${c}
            </p>
            <p class="all-info-item">
            <span class="all-info-title"> Popularity: </span>
            ${S}
            </p>
          </div>
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${i}</h3>
            <button class="all-product-btn buy-btn" type="button">
                <img class="all-buy-svg" src="${y}" alt="shop-icon" width="18" height="18"/>
               
            </button>
          </div>
        </div>
      `).join("")}let F={email:"",products:[{productId:"",amount:1}]};function g(){const t={keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:6};return localStorage.setItem("filterParams",JSON.stringify(t)),m()}function u(t){localStorage.setItem("filterParams",JSON.stringify(t))}JSON.parse(localStorage.getItem("shoppingCartItems"))||localStorage.setItem("shoppingCartItems",JSON.stringify(F));function J(){return JSON.parse(localStorage.getItem("shoppingCartItems")).length}function m(){return JSON.parse(localStorage.getItem("filterParams"))}const z=document.querySelector(".cart-number");z.insertAdjacentHTML("beforeend",J());const f=document.querySelector("#filterForm");f.addEventListener("submit",R);const E=document.querySelector("#categories");f.elements.filterCategories.addEventListener("change",W);f.elements.filterMethod.addEventListener("change",K);let a;function b(){a=m()?m():g()}b();function Z(t){E.insertAdjacentHTML("afterbegin",H(t))}function H(t){const e=t.map(r=>`
    <option value="${r}" class="js-option">${r}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function R(t){t.preventDefault();const{filterInput:e,filterCategories:r,filterMethod:s="A-Z"}=t.target.elements;U(e,r)}function U(t,e){t.value.trim().length?t.value.trim()?(a.keyword=t.value.trim(),e.value!==""&&(a.category=e.value),u(a)):e.value&&(a.category=e.value.trim(),u(a)):(f.reset(),g(),b())}function W(t){t.preventDefault(),a.category=t.target.value.replace(" ","_"),u(a)}function K(t){if(t.preventDefault(),console.log(t.target.value),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?a.byABC=!0:a.byABC=!1,u(a);return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?a.byPrice=!0:a.byPrice=!1,u(a);return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?a.byPopularity=!0:a.byPopularity=!1,u(a);return}else if(t.target.value==="Show_all"){g();return}}function l(t){const e=document.querySelector(".modal-text");e.innerText=t;const r=document.querySelector("[data-modal]");r.classList.remove("is-hidden");const s=document.querySelector("[data-modal-close]");s.onclick=function(){r.classList.add("is-hidden")},window.onclick=function(o){o.target===r&&r.classList.add("is-hidden")}}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".subscription-form");t.addEventListener("submit",function(e){e.preventDefault();const r=document.querySelector(".footer-form-input").value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(r)){l("Будь ласка, введіть коректну адресу електронної пошти.");return}fetch(t.action,{method:t.method,headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r})}).then(o=>{o.status===201?l("Успішна підписка на розсилку нових продуктів!"):o.status===409?l("Підписка вже існує. Ви вже підписані на розсилку."):l("Виникла помилка під час підписки. Спробуйте ще раз.")}).catch(o=>{l("Виникла помилка під час підписки. Спробуйте ще раз.")})})});I().then(({data:t})=>{k(t)}).catch(t=>console.log(t));N().then(({data:t})=>{B(t)}).catch(t=>console.log(t));_().then(({data:t})=>{T(t)}).catch(t=>console.log(t));C().then(({data:t})=>{Z(t.toString().replaceAll("_"," ").split(","))}).catch(t=>console.log(t));l();export{G as g};
//# sourceMappingURL=main-287f5c57.js.map
