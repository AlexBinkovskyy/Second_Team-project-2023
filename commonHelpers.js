import{g as d,s as l}from"./assets/sprite-0d58b666.js";import"./assets/vendor-a61d8330.js";const u=document.querySelector(".js-cart-list"),p=[{email:"",products:[{id:"640c2dd963a319ea671e383b",amount:1},{id:"640c2dd963a319ea671e3864",amount:1}]}];m(p[0].products);function m(t){f(t,v).then(a=>{u.insertAdjacentHTML("beforeend",a)})}async function f(t,a){return(await g(t)).map(s=>a(s)).join("")}async function g(t){return await Promise.all(t.map(({id:a})=>d(a).then(e=>e.data)))}function v(t){const{_id:a,name:e,img:s,category:c,price:n,size:r}=t,i=c.replace(/_/g," ");return`
    <li class="selectedProduct" data-id=${a}>
      <div class="product-picture">
          <img src="${s}" alt="${e}" class="" loading="lazy" />
      </div>

      <div class="product-info-container">

      <div class="info-header">
        <h2 class="product-name">${e}</h2>
        <button class="delete-btn">
          <svg class="" width="11.25" height="11.25">
            <use href="${l}#icon-Cross_close"></use>
          </svg>
        </button>
      </div>

      <div class="product-info">
        <p class="info-quality-category"> Category: <span class="info-value">${i}</span></p>
        <p class="info-quality"> Size:<span class="info-value">${r}</span></p>
      </div>
        <div class="price">$
          <span>${n}</span>
        </div>
      </div>
  </li>`}const y=document.querySelector(".cart-form"),h=document.querySelector(".js-modal-close"),o=document.querySelector(".cart-modal-bg");console.log("Modal js");y.addEventListener("submit",C);h.addEventListener("click",$);function C(t){t.preventDefault(),o.classList.remove("hiden")}function $(){o.classList.add("hiden")}
//# sourceMappingURL=commonHelpers.js.map
