import{g as s,r as j,a as E,b as H,u as I,s as M,c as T}from"./assets/workWithCart-253776cd.js";import"./assets/vendor-99d50140.js";const i=document.querySelector(".js-cart-list"),w=document.querySelector(".cart-form-input"),u=document.querySelector(".js-total-summ"),b=document.querySelectorAll(".js-cart-numbers"),k=document.querySelector(".js-clear-order-btn"),g=document.querySelector(".js-cart-box"),y=document.querySelector(".js-empty-cart");let F=0,o=s(),a=null;B();i.addEventListener("click",t=>{if(t.target.classList.contains("delete-btn")){let e=t.target.closest(".selectedProduct");j(e.dataset.id);const n=o.products.findIndex(r=>r.id===e.dataset.id);console.log("index",n),n!==-1&&(o.products.splice(n,1),a.splice(n,1)),console.log(o),console.log(a),m()}});k.addEventListener("click",()=>{E(),o.products=[],a=[],m()});async function B(){o=s(),u.textContent="$0";const t=o.products.length;if(L(t),t){i.innerHTML="";const e=await z(o.products);a=e,console.log(a),S(b,t),C(e),u.textContent="$"+P(e).toFixed(2)}w.value=o.email}async function m(){o=s(),console.log(o);const t=o.products.length;L(t),t&&(u.textContent="$"+P(a).toFixed(2),i.innerHTML="",C(a)),S(b,t)}function C(t){_(t,A).then(e=>{i.insertAdjacentHTML("beforeend",e)})}async function _(t,e){return t.map(n=>(F+=n.price,e(n))).join("")}async function z(t){return await Promise.all(t.map(({id:e})=>H(e).then(n=>n.data)))}function A(t){const{_id:e,name:n,img:r,category:p,price:d,size:q}=t;let f=null;try{f=o.products[o.products.findIndex(l=>l.id===e)].amount}catch(l){return console.log(l),""}const $=p.replace(/_/g," ");return`
    <li class="selectedProduct" data-id=${e}>
      <div class="product-picture">
          <img src="${r}" alt="${n}" class="" loading="lazy" />
      </div>

      <div class="product-info-container">

      <div class="info-header">
        <h2 class="product-name">${n}</h2>
        <button class="delete-btn">

          <svg class="" width="11.25" height="11.25">

            <use href="${M}#icon-Cross_close"></use>
          </svg>
        </button>
      </div>

      <div class="product-info">
        <p class="info-quality-category"> Category: <span class="info-value">${$}</span></p>
        <p class="info-quality"> Size:<span class="info-value">${q}</span></p>
      </div>
        <div class="price">$
          <span>${d}</span>
        </div>
      </div>
      <div class="counter-container">
            <button class="counter-btn" type="button" data-action="decrement">
                -
            </button>
            <span class="counter-value data-counter">${f}</span>
            <button class="counter-btn" type="button" data-action="increment">
                +
            </button>
        </div>
  </li>`}let c;i.addEventListener("click",function(t){const e=s();let n="",r="";if(t.target.dataset.action==="increment"||t.target.dataset.action==="decrement")n=t.target.closest(".selectedProduct"),r=o.products.findIndex(d=>d.id===n.dataset.id),c=t.target.closest(".counter-container").querySelector(".counter-value");else return;t.target.dataset.action==="increment"&&(c.innerHTML=++c.innerHTML),t.target.dataset.action==="decrement"&&parseInt(c.innerHTML)>1&&(c.innerHTML=--c.innerHTML),I(e.products[r].id,c.innerHTML),m()});function L(t){O(g,y),v(t?g:y)}function v(...t){t.forEach(e=>{e.classList.remove("hiden")})}function O(...t){t.forEach(e=>{e.classList.add("hiden")})}function S(t,e){t.forEach(n=>{n.textContent=e})}function P(t){return t.reduce((e,n)=>e+n.price*o.products[o.products.findIndex(r=>r.id===n._id)].amount,0)}const h=document.querySelector(".cart-form"),D=document.querySelector(".js-modal-close"),x=document.querySelector(".cart-modal-bg");console.log("Hello");h.addEventListener("submit",t=>{t.preventDefault(),T(h.elements.email.value),s(),N()});D.addEventListener("click",U);function N(){x.classList.remove("hiden")}function U(){x.classList.add("hiden")}
//# sourceMappingURL=commonHelpers.js.map
