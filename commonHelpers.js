import{g as a,r as H,a as C,b as M,u as T,s as w,c as k,p as F}from"./assets/workWithCart-9e93bad5.js";import"./assets/vendor-8aa786c2.js";const i=document.querySelector(".js-cart-list"),O=document.querySelector(".cart-form-input"),p=document.querySelector(".js-total-summ"),L=document.querySelectorAll(".js-cart-numbers"),A=document.querySelector(".js-clear-order-btn"),h=document.querySelector(".js-cart-box"),y=document.querySelector(".js-empty-cart");let B=0,o=a(),c=null;_();i.addEventListener("click",t=>{if(t.target.classList.contains("delete-btn")){let e=t.target.closest(".selectedProduct");H(e.dataset.id);const n=o.products.findIndex(r=>r.id===e.dataset.id);console.log("index",n),n!==-1&&(o.products.splice(n,1),c.splice(n,1)),console.log(o),console.log(c),d()}});A.addEventListener("click",()=>{C(),o.products=[],c=[],d()});async function _(){o=a(),p.textContent="$0";const t=o.products.length;if(P(t),t){i.innerHTML="";const e=await D(o.products);c=e,console.log(c),x(L,t),S(e),p.textContent="$"+q(e).toFixed(2)}O.value=o.email}async function d(){o=a(),console.log(o);const t=o.products.length;P(t),t&&(p.textContent="$"+q(c).toFixed(2),i.innerHTML="",S(c)),x(L,t)}function S(t){z(t,N).then(e=>{i.insertAdjacentHTML("beforeend",e)})}async function z(t,e){return t.map(n=>(B+=n.price,e(n))).join("")}async function D(t){return await Promise.all(t.map(({id:e})=>M(e).then(n=>n.data)))}function N(t){const{_id:e,name:n,img:r,category:f,price:l,size:E}=t;let g=null;try{g=o.products[o.products.findIndex(u=>u.id===e)].amount}catch(u){return console.log(u),""}const I=f.replace(/_/g," ");return`
    <li class="selectedProduct" data-id=${e}>
      <div class="product-picture">
          <img src="${r}" alt="${n}" class="" loading="lazy" />
      </div>

      <div class="product-info-container">

      <div class="info-header">
        <h2 class="product-name">${n}</h2>
        <button class="delete-btn">

          <svg class="" width="11.25" height="11.25">

            <use href="${w}#icon-Cross_close"></use>
          </svg>
        </button>
      </div>

      <div class="product-info">
        <p class="info-quality-category"> Category: <span class="info-value">${I}</span></p>
        <p class="info-quality"> Size:<span class="info-value">${E}</span></p>
      </div>
        <div class="price">$
          <span>${l}</span>
        </div>
      </div>
      <div class="counter-container">
            <button class="counter-btn" type="button" data-action="decrement">
                -
            </button>
            <span class="counter-value data-counter">${g}</span>
            <button class="counter-btn" type="button" data-action="increment">
                +
            </button>
        </div>
  </li>`}let s;i.addEventListener("click",function(t){const e=a();let n="",r="";if(t.target.dataset.action==="increment"||t.target.dataset.action==="decrement")n=t.target.closest(".selectedProduct"),r=o.products.findIndex(l=>l.id===n.dataset.id),s=t.target.closest(".counter-container").querySelector(".counter-value");else return;t.target.dataset.action==="increment"&&(s.innerHTML=++s.innerHTML),t.target.dataset.action==="decrement"&&parseInt(s.innerHTML)>1&&(s.innerHTML=--s.innerHTML),T(e.products[r].id,s.innerHTML),d()});function P(t){U(h,y),v(t?h:y)}function v(...t){t.forEach(e=>{e.classList.remove("hiden")})}function U(...t){t.forEach(e=>{e.classList.add("hiden")})}function x(t,e){t.forEach(n=>{n.textContent=e})}function q(t){return t.reduce((e,n)=>e+n.price*o.products[o.products.findIndex(r=>r.id===n._id)].amount,0)}const b=document.querySelector(".cart-form"),W=document.querySelectorAll(".js-modal-close"),j=document.querySelector(".success-modal"),$=document.querySelector(".fail-modal");console.log("Hello");b.addEventListener("submit",t=>{t.preventDefault(),k(b.elements.email.value);const e=a();e.products=e.products.map(({id:n,amount:r})=>({productId:n,amount:r})),F(e).then(n=>{n.status===201?(console.log(n.data.message),m(!0),C(),d()):m(!1)}).catch(n=>{m(!1)})});W.forEach(t=>t.addEventListener("click",G));function m(t){t?j.classList.remove("hiden"):$.classList.remove("hiden")}function G(t){j.classList.add("hiden"),$.classList.add("hiden")}
//# sourceMappingURL=commonHelpers.js.map
