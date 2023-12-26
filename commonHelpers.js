import{s as b,g as l,r as h,a as C,b as L,c as S}from"./assets/workWithCart-0f031d4b.js";import"./assets/vendor-f9e4276b.js";const c=document.querySelector(".js-cart-list"),q=document.querySelector(".cart-form-input"),s=document.querySelector(".js-total-summ"),P=document.querySelectorAll(".js-cart-numbers"),j=document.querySelector(".js-clear-order-btn"),i=document.querySelector(".js-cart-box"),u=document.querySelector(".js-empty-cart");b("p@gmail.com");let r=l(),$=0;o();c.addEventListener("click",t=>{if(t.target.classList.contains("delete-btn")){let e=t.target.closest(".selectedProduct");h(e.dataset.id),o()}});async function o(){r=l(),s.textContent="$0";const t=r.products.length;if(w(t),t){c.innerHTML="";const e=await T(r.products);x(P,t),E(e),s.textContent="$"+I(e)}q.value=r.email}j.addEventListener("click",()=>{C(),o()});function E(t){M(t,H).then(e=>{c.insertAdjacentHTML("beforeend",e)})}async function M(t,e){return t.map(n=>($+=n.price,e(n))).join("")}async function T(t){return await Promise.all(t.map(({id:e})=>L(e).then(n=>n.data)))}function H(t){const{_id:e,name:n,img:p,category:f,price:g,size:v}=t,y=f.replace(/_/g," ");return`
    <li class="selectedProduct" data-id=${e}>
      <div class="product-picture">
          <img src="${p}" alt="${n}" class="" loading="lazy" />
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
        <p class="info-quality-category"> Category: <span class="info-value">${y}</span></p>
        <p class="info-quality"> Size:<span class="info-value">${v}</span></p>
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
  </li>`}let a;c.addEventListener("click",function(t){(t.target.dataset.action==="increment"||t.target.dataset.action==="decrement")&&(a=t.target.closest(".counter-container").querySelector(".counter-value")),t.target.dataset.action==="increment"&&(a.innerHTML=++a.innerHTML),t.target.dataset.action==="decrement"&&parseInt(a.innerHTML)>1&&(a.innerHTML=--a.innerHTML)});function w(t){k(i,u),d(t?i:u)}function d(...t){t.forEach(e=>{e.classList.remove("hiden")})}function k(...t){t.forEach(e=>{e.classList.add("hiden")})}function x(t,e){t.forEach(n=>{n.textContent=e})}function I(t){return t.reduce((e,n)=>(console.log(n),e+n.price),0)}const B=document.querySelector(".cart-form"),z=document.querySelector(".js-modal-close"),m=document.querySelector(".cart-modal-bg");B.addEventListener("submit",A);z.addEventListener("click",O);function A(t){t.preventDefault(),m.classList.remove("hiden")}function O(){m.classList.add("hiden")}
//# sourceMappingURL=commonHelpers.js.map
