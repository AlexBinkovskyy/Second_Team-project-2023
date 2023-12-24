import{g as i}from"./assets/main-120e0392.js";import"./assets/vendor-a61d8330.js";const l=document.querySelector(".js-cart-list"),u=[{email:"",products:[{id:"640c2dd963a319ea671e383b",amount:1},{id:"640c2dd963a319ea671e3864",amount:1}]}];p(u[0].products);function p(t){m(t,v).then(a=>{l.insertAdjacentHTML("beforeend",a)})}async function m(t,a){return(await f(t)).map(s=>a(s)).join("")}async function f(t){return await Promise.all(t.map(({id:a})=>i(a).then(e=>e.data)))}function v(t){const{_id:a,name:e,img:s,category:c,price:n,size:r}=t,d=c.replace(/_/g," ");return`
    <li class="selectedProduct" data-id=${a}>
      <div class="product-picture">
          <img src="${s}" alt="${e}" class="" loading="lazy" />
      </div>

      <div class="product-info-container">

      <div class="info-header">
        <h2 class="product-name">${e}</h2>
        <button class="delete-btn">
          <svg class="" width="20" height="20">
            <use href=""></use>
          </svg>
        </button>
      </div>

      <div class="product-info">
        <p class="info-quality-category"> Category: <span class="info-value">${d}</span></p>
        <p class="info-quality"> Size:<span class="info-value">${r}</span></p>
      </div>
        <div class="price">$
          <span>${n}</span>
        </div>
      </div>
  </li>`}const g=document.querySelector(".cart-form"),y=document.querySelector(".js-modal-close"),o=document.querySelector(".cart-modal-bg");console.log("Modal js");g.addEventListener("submit",h);y.addEventListener("click",C);function h(t){t.preventDefault(),o.classList.remove("hiden")}function C(){o.classList.add("hiden")}
//# sourceMappingURL=commonHelpers.js.map
