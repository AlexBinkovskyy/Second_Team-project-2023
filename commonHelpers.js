import{g as a,a as h,s as v}from"./assets/localStorage-7af984e0.js";import"./assets/vendor-a61d8330.js";function c(t,e=1){const o=a();o.products.find(({id:n})=>n===t)||(o.products.push({id:t,amount:e}),localStorage.setItem("shoppingCartItems",JSON.stringify(o)))}function S(){const t=a();t.products=[],localStorage.setItem("shoppingCartItems",JSON.stringify(t))}function C(t){const e=a();e.email=t,localStorage.setItem("shoppingCartItems",JSON.stringify(e))}const l=document.querySelector(".js-cart-list"),b=document.querySelector(".cart-form-input"),j=document.querySelector(".js-total-summ"),q=document.querySelectorAll(".js-cart-numbers"),I=document.querySelector(".js-clear-order-btn"),r=document.querySelector(".js-cart-box"),i=document.querySelector(".js-empty-cart");c("640c2dd963a319ea671e383b");c("640c2dd963a319ea671e3864");c("640c2dd963a319ea671e3865");c("640c2dd963a319ea671e366d");c("640c2dd963a319ea671e366c");C("zgerzanic@gmail.com");let s=a(),L=0;u();async function u(){s=a();const t=s.products.length;O(t);const e=await E(s.products);M(q,t),t&&(l.innerHTML="",console.log(r),P(e),j.textContent="$"+N(e)),b.value=s.email}I.addEventListener("click",()=>{S(),u()});function P(t){$(t,w).then(e=>{l.insertAdjacentHTML("beforeend",e)})}async function $(t,e){return t.map(o=>(L+=o.price,e(o))).join("")}async function E(t){return await Promise.all(t.map(({id:e})=>h(e).then(o=>o.data)))}function w(t){const{_id:e,name:o,img:n,category:p,price:f,size:g}=t,y=p.replace(/_/g," ");return`
    <li class="selectedProduct" data-id=${e}>
      <div class="product-picture">
          <img src="${n}" alt="${o}" class="" loading="lazy" />
      </div>

      <div class="product-info-container">

      <div class="info-header">
        <h2 class="product-name">${o}</h2>
        <button class="delete-btn">

          <svg class="" width="11.25" height="11.25">

            <use href="${v}#icon-Cross_close"></use>
          </svg>
        </button>
      </div>

      <div class="product-info">
        <p class="info-quality-category"> Category: <span class="info-value">${y}</span></p>
        <p class="info-quality"> Size:<span class="info-value">${g}</span></p>
      </div>
        <div class="price">$
          <span>${f}</span>
        </div>
      </div>
  </li>`}function O(t){z(r,i),d(t?r:i)}function d(...t){t.forEach(e=>{e.classList.remove("hiden")})}function z(...t){t.forEach(e=>{e.classList.add("hiden")})}function M(t,e){t.forEach(o=>{o.textContent=e})}function N(t){return t.reduce((e,o)=>(console.log(o),e+o.price),0)}const T=document.querySelector(".cart-form"),k=document.querySelector(".js-modal-close"),m=document.querySelector(".cart-modal-bg");console.log("Modal js");T.addEventListener("submit",x);k.addEventListener("click",B);function x(t){t.preventDefault(),m.classList.remove("hiden")}function B(){m.classList.add("hiden")}
//# sourceMappingURL=commonHelpers.js.map
