import{a as u}from"./vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const $="https://food-boutique.b.goit.study/api/products/",S="categories",P="popular",w="discount",n={MAIN_URL:$,categories:S,popular:P,discount:w};let A=1,d=6;async function L(){return window.innerWidth>=1440?d=9:window.innerWidth>=768?d=8:d=6,await u(`${n.MAIN_URL}?page=${A}&limit=${d}`)}async function N(){return await u(`${n.MAIN_URL}/${n.popular}?limit=5`)}async function I(){return await u(`${n.MAIN_URL}/${n.discount}`)}async function G(t){return await u(`${n.MAIN_URL}/${t}`)}async function _(){return await u(`${n.MAIN_URL}/${n.categories}`)}const C=document.querySelector(".popular-product-list");function M(t){C.insertAdjacentHTML("beforeend",j(t))}function j(t){return t.map(({_id:e,name:a,img:s,category:o,size:r,popularity:l})=>`
          <li class="popular-product-item" id="${e}">
            <img src="${s}" alt="${a}" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <h3 class="popular-product-name">${a}</h3>
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
              ${l}
            </p>
            </div>
            </div>
            <button type="button" class="popular buy-btn" onclick="addToCart('${e}')"><svg class="koshik" width="12" height="12">
            <use href="./images/sprite.svg#icon-shopping-cart"></use>
          </svg>
            <button>
          </li>
      `).join("")}window.addToCart=function(t){const e=JSON.parse(localStorage.getItem("cart"))||{};if(e[t])alert("This product is already in your cart!");else{e[t]=!0,localStorage.setItem("cart",JSON.stringify(e)),alert("Product added to cart!");const a=document.querySelector(`button[data-product-id="${t}"]`);a.innerHTML="&#10003;",a.disabled=!0}};const m="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",h="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",O=document.querySelector(".discount-products-item");function T(t){O.insertAdjacentHTML("beforeend",q(t))}function q(t){return t.map(({_id:e,name:a,img:s,price:o})=>`
        <li class="discount-product">
         <div class="discount-card" id="${e}">
         <img class="discount-svg" src="${m}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${s}" alt="${a}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${a}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${o}</p>
                <button class="discount-buy buy-btn" type="button">
                <img class="discount-buy-svg" src="${h}" alt="shop-icon" width="18" height="18"/>
  </svg>
</button>
</div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}const k=document.querySelector(".product-list");function F(t){k.innerHTML=B(t.results)}function B(t){return t.map(({_id:e,name:a,img:s,category:o,price:r,size:l,is10PercentOff:b,popularity:v})=>`
        <div class="all-product-card" id="${e}">
         <img class="all-discount-svg
         ${b.toString().replace("false","visually-hidden")}
          " 
        src="${m}" alt="discount-icon" width="60" height="60"/>
         <img src="${s}" alt="${a}" loading="lazy" class="all-product-pic" />
         <h3 class="all-product-name header-three">${a}</h3>
         <div class="all-product-info regular-text">
            <p class="all-info-item">
            <span class="all-info-title"> Category: </span>
            ${o.replaceAll("_"," ")}
            </p>
            <p class="all-info-item">
            <span class="all-info-title"> Size: </span>
            ${l}
            </p>
            <p class="all-info-item">
            <span class="all-info-title"> Popularity: </span>
            ${v}
            </p>
          </div>
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${r}</h3>
            <button class="all-product-btn buy-btn" type="button">
                <img class="all-buy-svg" src="${h}" alt="shop-icon" width="18" height="18"/>
               
            </button>
          </div>
        </div>
      `).join("")}let D={email:"",products:[{productId:"",amount:1}]};function g(){const t={keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:6};return localStorage.setItem("filterParams",JSON.stringify(t)),f()}function c(t){localStorage.setItem("filterParams",JSON.stringify(t))}JSON.parse(localStorage.getItem("shoppingCartItems"))||localStorage.setItem("shoppingCartItems",JSON.stringify(D));function J(){return JSON.parse(localStorage.getItem("shoppingCartItems")).length}function f(){return JSON.parse(localStorage.getItem("filterParams"))}const x=document.querySelector(".cart-number");x.insertAdjacentHTML("beforeend",J());const p=document.querySelector("#filterForm");p.addEventListener("submit",H);const z=document.querySelector("#categories");p.elements.filterCategories.addEventListener("change",U);p.elements.filterMethod.addEventListener("change",W);let i;function y(){i=f()?f():g()}y();function E(t){z.insertAdjacentHTML("afterbegin",Z(t))}function Z(t){const e=t.map(a=>`
    <option value="${a}" class="js-option">${a}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function H(t){t.preventDefault();const{filterInput:e,filterCategories:a,filterMethod:s="A-Z"}=t.target.elements;R(e,a)}function R(t,e){t.value.trim().length?t.value.trim()?(i.keyword=t.value.trim(),e.value!==""&&(i.category=e.value),c(i)):e.value&&(i.category=e.value.trim(),c(i)):(p.reset(),g(),y())}function U(t){t.preventDefault(),i.category=t.target.value.replace(" ","_"),c(i)}function W(t){if(t.preventDefault(),console.log(t.target.value),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?i.byABC=!0:i.byABC=!1,c(i);return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?i.byPrice=!0:i.byPrice=!1,c(i);return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?i.byPopularity=!0:i.byPopularity=!1,c(i);return}else if(t.target.value==="Show_all"){g();return}}function K(){const t=document.querySelector(".subscription-form"),e=document.querySelector(".footer-form-input");t.addEventListener("submit",function(a){a.preventDefault();const s=e.value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s)){alert("Будь ласка, введіть коректну адресу електронної пошти.");return}fetch(t.action,{method:t.method,headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s})}).then(r=>{if(r.status===201)return r.json();throw r.status===409?new Error("Підписка вже існує"):new Error("Щось пішло не так. Спробуйте пізніше.")}).then(r=>{alert(r.message),e.value=""}).catch(r=>{alert(r.message)})})}I().then(({data:t})=>{T(t)}).catch(t=>console.log(t));L().then(({data:t})=>{F(t)}).catch(t=>console.log(t));N().then(({data:t})=>{M(t)}).catch(t=>console.log(t));_().then(({data:t})=>{E(t.toString().replaceAll("_"," ").split(","))}).catch(t=>console.log(t));K();export{G as g};
//# sourceMappingURL=main-9899938d.js.map
