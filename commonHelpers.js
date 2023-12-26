import{g as n,a as v,s as h}from"./assets/localStorage-7c383e98.js";import"./assets/vendor-f9e4276b.js";function a(t,e=1){const o=n();o.products.find(({id:c})=>c===t)||(o.products.push({id:t,amount:e}),localStorage.setItem("shoppingCartItems",JSON.stringify(o)))}function S(t){const e=n(),o=e.products.findIndex(({id:c})=>c===t);o!==-1&&(e.products.splice(o,1),localStorage.setItem("shoppingCartItems",JSON.stringify(e)))}function b(){const t=n();t.products=[],localStorage.setItem("shoppingCartItems",JSON.stringify(t))}function C(t){const e=n();e.email=t,localStorage.setItem("shoppingCartItems",JSON.stringify(e))}const r=document.querySelector(".js-cart-list"),I=document.querySelector(".cart-form-input"),L=document.querySelector(".js-total-summ"),P=document.querySelectorAll(".js-cart-numbers"),j=document.querySelector(".js-clear-order-btn"),d=document.querySelector(".js-cart-box"),l=document.querySelector(".js-empty-cart");a("640c2dd963a319ea671e383b",3);a("640c2dd963a319ea671e3864");a("640c2dd963a319ea671e3865");a("640c2dd963a319ea671e366d");a("640c2dd963a319ea671e366c");C("zgerzanic@gmail.com");let s=n(),q=0;i();r.addEventListener("click",t=>{if(t.target.classList.contains("delete-btn")){let e=t.target.closest(".selectedProduct");console.log(e),S(e.dataset.id),i()}});async function i(){s=n(),console.log(s);const t=s.products.length;if(x(t),t){r.innerHTML="";const e=await w(s.products);console.log(e),k(P,t),$(e)}L.textContent="$"+z(originProductList),I.value=s.email}j.addEventListener("click",()=>{b(),i()});function $(t){E(t,O).then(e=>{r.insertAdjacentHTML("beforeend",e)})}async function E(t,e){return t.map(o=>(q+=o.price,e(o))).join("")}async function w(t){return await Promise.all(t.map(({id:e})=>v(e).then(o=>o.data)))}function O(t){const{_id:e,name:o,img:c,category:p,price:f,size:g}=t,y=p.replace(/_/g," ");return`
    <li class="selectedProduct" data-id=${e}>
      <div class="product-picture">
          <img src="${c}" alt="${o}" class="" loading="lazy" />
      </div>

      <div class="product-info-container">

      <div class="info-header">
        <h2 class="product-name">${o}</h2>
        <button class="delete-btn">

          <svg class="" width="11.25" height="11.25">

            <use href="${h}#icon-Cross_close"></use>
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
      <div class="counter-container">
            <button class="counter-btn" type="button" data-action="decrement">
                -
            </button>
            <span class="counter-value">1</span>
            <button class="counter-btn" type="button" data-action="increment">
                +
            </button>
        </div>
  </li>`}function x(t){N(d,l),u(t?d:l)}function u(...t){t.forEach(e=>{e.classList.remove("hiden")})}function N(...t){t.forEach(e=>{e.classList.add("hiden")})}function k(t,e){t.forEach(o=>{o.textContent=e})}function z(t){return t.reduce((e,o)=>(console.log(o),e+o.price),0)}const M=document.querySelector(".cart-form"),T=document.querySelector(".js-modal-close"),m=document.querySelector(".cart-modal-bg");console.log("Modal js");M.addEventListener("submit",B);T.addEventListener("click",J);function B(t){t.preventDefault(),m.classList.remove("hiden")}function J(){m.classList.add("hiden")}
//# sourceMappingURL=commonHelpers.js.map
