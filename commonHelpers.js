import{g as d}from"./assets/main-8a245b4d.js";import"./assets/vendor-f9e4276b.js";const l="/Second_Team-project-2023/assets/sprite-67d7c706.svg",u=document.querySelector(".js-cart-list"),p=[{email:"",products:[{id:"640c2dd963a319ea671e383b",amount:1},{id:"640c2dd963a319ea671e3864",amount:1}]}];m(p[0].products);function m(t){f(t,g).then(e=>{u.insertAdjacentHTML("beforeend",e)})}async function f(t,e){return(await v(t)).map(a=>e(a)).join("")}async function v(t){return await Promise.all(t.map(({id:e})=>d(e).then(s=>s.data)))}function g(t){const{_id:e,name:s,img:a,category:o,price:n,size:r}=t,i=o.replace(/_/g," ");return`
    <li class="selectedProduct" data-id=${e}>
      <div class="product-picture">
          <img src="${a}" alt="${s}" class="" loading="lazy" />
      </div>

      <div class="product-info-container">

      <div class="info-header">
        <h2 class="product-name">${s}</h2>
        <button class="delete-btn">
          <svg class="" width="20" height="20">
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
  </li>`}const y=document.querySelector(".cart-form"),h=document.querySelector(".js-modal-close"),c=document.querySelector(".cart-modal-bg");console.log("Modal js");y.addEventListener("submit",C);h.addEventListener("click",$);function C(t){t.preventDefault(),c.classList.remove("hiden")}function $(){c.classList.add("hiden")}
//# sourceMappingURL=commonHelpers.js.map
