import{a as u}from"./vendor-f9e4276b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();const $="https://food-boutique.b.goit.study/api/products/",P="https://food-boutique.b.goit.study/api/subscription",L="categories",w="popular",A="discount",n={MAIN_URL:$,SECOND_URL:P,categories:L,popular:w,discount:A};let N=1,d=6;async function _(){return window.innerWidth>=1440?d=9:window.innerWidth>=768?d=8:d=6,await u(`${n.MAIN_URL}?page=${N}&limit=${d}`)}async function C(){return await u(`${n.MAIN_URL}/${n.popular}?limit=5`)}async function I(){return await u(`${n.MAIN_URL}/${n.discount}`)}async function X(t){return await u(`${n.MAIN_URL}/${t}`)}async function M(){return await u(`${n.MAIN_URL}/${n.categories}`)}async function q(t){return await u.post(`${n.SECOND_URL}`)}const O=document.querySelector(".popular-product-list");function T(t){O.insertAdjacentHTML("beforeend",k(t))}function k(t){return t.map(({_id:e,name:o,img:s,category:r,size:i,popularity:c})=>`
          <li class="popular-product-item" id="${e}">
            <img src="${s}" alt="${o}" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <h3 class="popular-product-name">${o}</h3>
              <div class="info-item-description">
              <p class="info-item">
              <span class="info-title"> Category: </span>
              ${r.replace("_"," ")}
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
      `).join("")}window.addToCart=function(t){const e=JSON.parse(localStorage.getItem("cart"))||{};if(e[t])alert("This product is already in your cart!");else{e[t]=!0,localStorage.setItem("cart",JSON.stringify(e)),alert("Product added to cart!");const o=document.querySelector(`button[data-product-id="${t}"]`);o.innerHTML="&#10003;",o.disabled=!0}};const m="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",h="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",D=document.querySelector(".discount-products-item");function j(t){D.insertAdjacentHTML("beforeend",x(t))}function x(t){return t.map(({_id:e,name:o,img:s,price:r})=>`
        <li class="discount-product">
         <div class="discount-card" id="${e}">
         <img class="discount-svg" src="${m}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${s}" alt="${o}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${o}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${r}</p>
                <button class="discount-buy buy-btn" type="button">
                <img class="discount-buy-svg" src="${h}" alt="shop-icon" width="18" height="18"/>
  </svg>
</button>
</div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}const B=document.querySelector(".product-list");function E(t){B.innerHTML=F(t.results)}function F(t){return t.map(({_id:e,name:o,img:s,category:r,price:i,size:c,is10PercentOff:v,popularity:S})=>`
        <div class="all-product-card" id="${e}">
         <img class="all-discount-svg
         ${v.toString().replace("false","visually-hidden")}
          " 
        src="${m}" alt="discount-icon" width="60" height="60"/>
         <img src="${s}" alt="${o}" loading="lazy" class="all-product-pic" />
         <h3 class="all-product-name header-three">${o}</h3>
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
            ${S}
            </p>
          </div>
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${i}</h3>
            <button class="all-product-btn buy-btn" type="button">
                <img class="all-buy-svg" src="${h}" alt="shop-icon" width="18" height="18"/>
               
            </button>
          </div>
        </div>
      `).join("")}let z={email:"",products:[{productId:"",amount:1}]};function g(){const t={keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:6};return localStorage.setItem("filterParams",JSON.stringify(t)),f()}function l(t){localStorage.setItem("filterParams",JSON.stringify(t))}JSON.parse(localStorage.getItem("shoppingCartItems"))||localStorage.setItem("shoppingCartItems",JSON.stringify(z));function J(){return JSON.parse(localStorage.getItem("shoppingCartItems")).length}function f(){return JSON.parse(localStorage.getItem("filterParams"))}const R=document.querySelector(".cart-number");R.insertAdjacentHTML("beforeend",J());const p=document.querySelector("#filterForm");p.addEventListener("submit",W);const U=document.querySelector("#categories");p.elements.filterCategories.addEventListener("change",Q);p.elements.filterMethod.addEventListener("change",G);let a;function y(){a=f()?f():g()}y();function Z(t){U.insertAdjacentHTML("afterbegin",H(t))}function H(t){const e=t.map(o=>`
    <option value="${o}" class="js-option">${o}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function W(t){t.preventDefault();const{filterInput:e,filterCategories:o,filterMethod:s="A-Z"}=t.target.elements;K(e,o)}function K(t,e){t.value.trim().length?t.value.trim()?(a.keyword=t.value.trim(),e.value!==""&&(a.category=e.value),l(a)):e.value&&(a.category=e.value.trim(),l(a)):(p.reset(),g(),y())}function Q(t){t.preventDefault(),a.category=t.target.value.replace(" ","_"),l(a)}function G(t){if(t.preventDefault(),console.log(t.target.value),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?a.byABC=!0:a.byABC=!1,l(a);return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?a.byPrice=!0:a.byPrice=!1,l(a);return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?a.byPopularity=!0:a.byPopularity=!1,l(a);return}else if(t.target.value==="Show_all"){g();return}}function b(t){const e=document.querySelector(".modal-text");e.innerText=t;const o=document.querySelector("[data-modal]");o.classList.remove("is-hidden");const s=document.querySelector("[data-modal-close]");s.onclick=function(){o.classList.add("is-hidden")},window.onclick=function(r){r.target===o&&o.classList.add("is-hidden")}}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".subscription-form").addEventListener("submit",function(e){e.preventDefault();const o=document.querySelector(".footer-form-input").value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o)){b("Будь ласка, введіть коректну адресу електронної пошти.");return}})});q().then(t=>console.log(t)).catch(t=>console.log(t));I().then(({data:t})=>{j(t)}).catch(t=>console.log(t));_().then(({data:t})=>{E(t)}).catch(t=>console.log(t));C().then(({data:t})=>{T(t)}).catch(t=>console.log(t));M().then(({data:t})=>{Z(t.toString().replaceAll("_"," ").split(","))}).catch(t=>console.log(t));b();export{X as g};
//# sourceMappingURL=main-e29fa84d.js.map
