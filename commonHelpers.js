import{g as c,a as v,s as S}from"./assets/localStorage-7c383e98.js";import"./assets/vendor-f9e4276b.js";function r(t,e=1){const n=c();n.products.find(({id:o})=>o===t)||(n.products.push({id:t,amount:e}),localStorage.setItem("shoppingCartItems",JSON.stringify(n)))}function C(t){const e=c(),n=e.products.findIndex(({id:o})=>o===t);n!==-1&&(e.products.splice(n,1),localStorage.setItem("shoppingCartItems",JSON.stringify(e)))}function b(){const t=c();t.products=[],localStorage.setItem("shoppingCartItems",JSON.stringify(t))}function L(t){const e=c();e.email=t,localStorage.setItem("shoppingCartItems",JSON.stringify(e))}const i=document.querySelector(".js-cart-list"),I=document.querySelector(".cart-form-input"),q=document.querySelector(".js-total-summ"),P=document.querySelectorAll(".js-cart-numbers"),j=document.querySelector(".js-clear-order-btn"),u=document.querySelector(".js-cart-box"),l=document.querySelector(".js-empty-cart");r("640c2dd963a319ea671e383b",3);r("640c2dd963a319ea671e3864");r("640c2dd963a319ea671e3865");r("640c2dd963a319ea671e366d");r("640c2dd963a319ea671e366c");L("zgerzanic@gmail.com");let s=c(),E=0;d();i.addEventListener("click",t=>{if(t.target.classList.contains("delete-btn")){let e=t.target.closest(".selectedProduct");C(e.dataset.id),d()}});async function d(){s=c();const t=s.products.length;if(w(t),t){i.innerHTML="";const e=await M(s.products);k(P,t),T(e)}q.textContent="$"+x(originProductList),I.value=s.email}j.addEventListener("click",()=>{b(),d()});function T(t){$(t,H).then(e=>{i.insertAdjacentHTML("beforeend",e)})}async function $(t,e){return t.map(n=>(E+=n.price,e(n))).join("")}async function M(t){return await Promise.all(t.map(({id:e})=>v(e).then(n=>n.data)))}function H(t){const{_id:e,name:n,img:o,category:f,price:g,size:y}=t,h=f.replace(/_/g," ");return`
    <li class="selectedProduct" data-id=${e}>
      <div class="product-picture">
          <img src="${o}" alt="${n}" class="" loading="lazy" />
      </div>

      <div class="product-info-container">

      <div class="info-header">
        <h2 class="product-name">${n}</h2>
        <button class="delete-btn">

          <svg class="" width="11.25" height="11.25">

            <use href="${S}#icon-Cross_close"></use>
          </svg>
        </button>
      </div>

      <div class="product-info">
        <p class="info-quality-category"> Category: <span class="info-value">${h}</span></p>
        <p class="info-quality"> Size:<span class="info-value">${y}</span></p>
      </div>
        <div class="price">$
          <span>${g}</span>
        </div>
      </div>
      <div class="counter-container">
            <button class="counter-btn" type="button" data-action="decrement">
                -
            </button>
            <span class="counter-value data-counter">1</span>
            <button class="counter-btn" type="button" data-action="increment">
                +
            </button>
        </div>
  </li>`}let a;i.addEventListener("click",function(t){(t.target.dataset.action==="increment"||t.target.dataset.action==="decrement")&&(a=t.target.closest(".counter-container").querySelector(".counter-value")),t.target.dataset.action==="increment"&&(a.innerHTML=++a.innerHTML),t.target.dataset.action==="decrement"&&parseInt(a.innerHTML)>1&&(a.innerHTML=--a.innerHTML)});function w(t){O(u,l),m(t?u:l)}function m(...t){t.forEach(e=>{e.classList.remove("hiden")})}function O(...t){t.forEach(e=>{e.classList.add("hiden")})}function k(t,e){t.forEach(n=>{n.textContent=e})}function x(t){return t.reduce((e,n)=>(console.log(n),e+n.price),0)}const N=document.querySelector(".cart-form"),z=document.querySelector(".js-modal-close"),p=document.querySelector(".cart-modal-bg");N.addEventListener("submit",B);z.addEventListener("click",J);function B(t){t.preventDefault(),p.classList.remove("hiden")}function J(){p.classList.add("hiden")}
//# sourceMappingURL=commonHelpers.js.map
