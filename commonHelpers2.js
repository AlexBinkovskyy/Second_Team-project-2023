import{c as b,d,e as h,f as r,h as i,i as n,j as S,k as $,l as k,m as j}from"./assets/workWithCart-0f031d4b.js";import"./assets/vendor-f9e4276b.js";const L="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",M=document.querySelector(".popular-product-list");function C(t){M.insertAdjacentHTML("beforeend",E(t))}function E(t){return t.map(({_id:e,name:o,img:l,category:c,size:g,popularity:m})=>`
          <li class="popular-product-item js-product-cart"  data-id="${e}">
            <img src="${l}" alt="${o}" width="56" height="56" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <div class="popular-product-info-btn">
            <h3 class="popular-product-name">${o}</h3>
           <button type="button" class="popular-buy buy-btn js-buy-btn" onclick="addToCart('${e}')">
            <svg class="img-icon"  width="12" height="12">
            <use href="${b}#icon-shopping-cart"></use></svg>
            </button>
        </div>
              <div class="info-item-description">
              <p class="info-item-title">
              <span class="info-title"> Category: </span>
              ${c.replace("_"," ")}
            </p>
            <div class="popular-info">
            <p class="info-item info-size">
              <span class="info-title"> Size: </span>
              ${g}
            </p>
            <p class="info-item-pop">
              <span class="info-title"> Popularity: </span>
              ${m}
            </p>
            </div>
            </div>
            </div>
          </li>
      `).join("")}window.addToCart=function(t){const e=JSON.parse(localStorage.getItem("cart"))||{};if(e[t])alert("This product is already in your cart!");else{e[t]=!0,localStorage.setItem("cart",JSON.stringify(e)),alert("Product added to cart!");const o=document.querySelector(`[data-product-id="${t}"]`);o.innerHTML='<svg class="img-icon" width="12" height="12"><use href="${shoppingSvg}#check-icon"></use></svg>',o.disabled=!0}};const P="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",T="/Second_Team-project-2023/assets/check-ico-267a6277.svg",B=document.querySelector(".discount-products-item");function _(t){B.insertAdjacentHTML("beforeend",F(t));const e=document.querySelectorAll(".click-buy"),o=document.querySelectorAll(".discount-check");e.forEach(c=>c.addEventListener("click",()=>{c.style.display="none",l()}));function l(){o.forEach(c=>c.style.display="block")}}function F(t){return t.map(({_id:e,name:o,img:l,price:c})=>`
        <li class="discount-product">
         <div class="discount-card"  data-id="${e}" id="${e}">
         <img class="discount-svg" src="${L}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${l}" alt="${o}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${o}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${c}</p>
                <button class="discount-buy buy-btn click-buy js-buy-btn" type="button">
                <img class="discount-buy-svg" src="${P}" alt="shop-icon" width="18" height="18"/>
            
</button>
           <button class="discount-check " type="button">
                <img class="discount-check-svg" src="${T}" alt="shop-icon" width="18" height="18"/>
            
</button>
</div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}function D(t){const e={openModalBtn:t,closeModalBtn:document.querySelector(".product-modal-close"),modal:document.querySelector(".product-backdrop")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",l);function o(){e.modal.classList.toggle("is-hidden"),x(event.currentTarget)}function l(){e.modal.classList.toggle("is-hidden")}}function x(t){document.querySelector(".product-modal-content"),console.log(t)}const w=document.querySelector(".product-list");document.querySelector(".product-modal-window");function s(t){w.innerHTML=z(t.results),document.querySelectorAll(".product-modal-open").forEach(o=>{o.addEventListener("click",D(o))})}function z(t){return t.map(({_id:e,name:o,img:l,category:c,price:g,size:m,is10PercentOff:A,popularity:q})=>`
        <li class="all-product-card product-modal-open" id="${e}">
          <div class="">
            <img
              class="all-discount-svg ${A.toString().replace("false","visually-hidden").replace("true","")}"
              src="${L}"
              alt="discount-icon"
              width="60"
              height="60"
            />
            <img src="${l}" alt="${o}" loading="lazy" class="all-product-pic" />
            <h3 class="all-product-name header-three">${o}</h3>
            <div class="all-product-info regular-text">
              <p class="all-info-item">
                <span class="all-info-title"> Category: </span>
                ${c.replaceAll("_"," ")}
              </p>
              <p class="all-info-item">
                <span class="all-info-title"> Size: </span>
                ${m}
              </p>
              <p class="all-info-item">
                <span class="all-info-title"> Popularity: </span>
                ${q}
              </p>
            </div>
          </div>
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${g}</h3>
            <button class="all-product-btn buy-btn" type="button">
              <img
                class="all-buy-svg"
                src="${P}"
                alt="shop-icon"
                width="18"
                height="18"
              />
            </button>
          </div>
        </li>
        `).join("")}function H(t){t.preventDefault(),d().then(({data:e})=>{s(e)}).catch(e=>console.log(e)),filterForm.reset(),h(),checkFilterParams()}function p(){const t=`<h3>Nothing was found for the selected <a href="" class="link js-link">filters...</a></h3>
  <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>`;w.innerHTML=t,document.querySelector(".js-link").addEventListener("click",H)}const u=document.querySelector("#filterForm");u.addEventListener("submit",I);const N=document.querySelector("#single");u.elements.filterCategories.addEventListener("change",Q);u.elements.filterMethod.addEventListener("change",G);let a;function y(){a=n()?n():h()}y();function O(t){N.insertAdjacentHTML("afterbegin",Z(t))}function Z(t){const e=t.map(o=>`
    <option value="${o}" class="js-option">${o}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function I(t){t.preventDefault();const{filterInput:e,filterCategories:o}=t.target.elements;J(e,o)}function J(t,e){t.value.trim().length?t.value.trim()?(a.keyword=t.value.trim(),e.value!==""&&(a.category=e.value),r(a),i(n()).then(o=>{if(console.log(o),o.data.results.length)s(o.data);else if(!Array.isArray(o.data.results)||!o.data.results.length){p();return}}).catch(o=>console.log(o))):e.value&&(a.category=e.value.trim(),r(a),i(n()).then(o=>{if(o.data.results.length)s(o.data);else return}).catch(o=>console.log(o))):(h(),y(),d().then(({data:o})=>{s(o)}).catch(o=>console.log(o)),u.reset())}function Q(t){t.preventDefault(),t.target.value==="Show all"&&(d().then(({data:e})=>{s(e)}).catch(e=>console.log(e)),u.reset()),a.category=t.target.value.replaceAll(" ","_").replaceAll("&","%26"),r(a),i(n()).then(e=>{if(e.data.results.length)s(e.data);else if(!Array.isArray(e.data.results)||!e.data.results.length){p();return}}).catch(e=>console.log(e))}function G(t){if(t.preventDefault(),t.target.value==="Show_all"&&(h(),y(),d().then(({data:e})=>{s(e)}).catch(e=>console.log(e)),u.reset()),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?a.byABC=!0:a.byABC=!1,a.byPrice=null,a.byPopularity=null,r(a),i(n()).then(e=>{if(e.data.results.length)s(e.data);else{p();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?a.byPrice=!0:a.byPrice=!1,a.byABC=null,a.byPopularity=null,r(a),i(n()).then(e=>{if(e.data.results.length)s(e.data);else{p();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?a.byPopularity=!0:a.byPopularity=!1,a.byABC=null,a.byPrice=null,r(a),i(n()).then(e=>{if(e.data.results.length)s(e.data);else{p();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Show_all"){h();return}}function K(t){const e=document.querySelector(".modal-text");e.innerText=t;const o=document.querySelector("[data-modal]");o.classList.remove("is-hidden");const l=document.querySelector("[data-modal-close]");l.onclick=function(){o.classList.add("is-hidden")},window.onclick=function(c){c.target===o&&o.classList.add("is-hidden")}}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".subscription-form").addEventListener("submit",function(e){e.preventDefault();const o=document.querySelector(".footer-form-input").value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o)){K("Будь ласка, введіть коректну адресу електронної пошти.");return}})});document.getElementById("tui-pagination-container");S().then(({data:t})=>{_(t)}).catch(t=>console.log(t));d().then(({data:t})=>{s(t)}).catch(t=>console.log(t));$().then(({data:t})=>{C(t)}).catch(t=>console.log(t));k().then(({data:t})=>{O(t.toString().replaceAll("_"," ").split(","))}).catch(t=>console.log(t));document.getElementById("loader-container");const v=document.querySelector(".main"),f=document.body;window.addEventListener("load",function(){const t=document.querySelector(".loader-container"),e=[S,d,$,k];v.classList.add("visually-hidden"),f.classList.add("no-scroll"),t.classList.remove("visually-hidden"),Promise.all(e.map(o=>o())).then(()=>{v.classList.remove("visually-hidden"),t.classList.add("visually-hidden"),f.classList.remove("no-scroll")}).catch(o=>{console.error("Error in asynchronous operation:",o),t.classList.add("visually-hidden"),f.classList.remove("no-scroll")})});const R=document.querySelector(".js-main-container");R.addEventListener("click",t=>{if(t.target.classList.contains("js-buy-btn")){console.log("click buy");let e=t.target.closest(".js-product-card");j(e.dataset.id),U(e.dataset.id)}});function U(t){const e=document.querySelectorAll(`.js-product-card[data-id="${t}"]`),o="";console.log(e),e.forEach(l=>{const c=l.querySelector(".js-buy-btn");c.innerHTML=`<svg class="img-icon" width="12" height="12" style="stroke:"#fff""><use href="${b}#${o}"></use></svg>`,c.disabled=!0})}
//# sourceMappingURL=commonHelpers2.js.map
