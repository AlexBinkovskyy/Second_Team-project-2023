import{s as q,b as h,c as u,d as r,e as d,f as s,h as S,i as $,j as k}from"./assets/localStorage-251d142c.js";import"./assets/vendor-f9e4276b.js";const v="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",B=document.querySelector(".popular-product-list");function M(t){B.insertAdjacentHTML("beforeend",_(t))}function _(t){return t.map(({_id:e,name:o,img:l,category:n,size:m,popularity:y})=>`
          <li class="popular-product-item" id="${e}">
         <img class="discount-svg" src="${v}" alt="discount-icon" width="60" height="60"/>
            <img src="${l}" alt="${o}" width="56" height="56" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <h3 class="popular-product-name">${o}</h3>
              <div class="info-item-description">
              <p class="info-item">
              <span class="info-title"> Category: </span>
              ${n.replace("_"," ")}
            </p>
            <p class="info-item">
              <span class="info-title"> Size: </span>
              ${m}
            </p>
            <p class="info-item-pop">
              <span class="info-title"> Popularity: </span>
              ${y}
            </p>
            </div>
            </div>
            <div class="popular-btn">
            <button type="button" class="popular-buy buy-btn" onclick="addToCart('${e}')">
            <svg class="img-icon"  width="12" height="12">
            <use href="${q}#icon-shopping-cart"></use></svg>
            </button>
            </div>
          </li>
      `).join("")}window.addToCart=function(t){const e=JSON.parse(localStorage.getItem("cart"))||{};if(e[t])alert("This product is already in your cart!");else{e[t]=!0,localStorage.setItem("cart",JSON.stringify(e)),alert("Product added to cart!");const o=document.querySelector(`[data-product-id="${t}"]`);o.innerHTML='<svg class="img-icon" width="12" height="12"><use href="${shoppingSvg}#check-icon"></use></svg>',o.disabled=!0}};const L="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",E="/Second_Team-project-2023/assets/check-ico-267a6277.svg",T=document.querySelector(".discount-products-item");function j(t){T.insertAdjacentHTML("beforeend",C(t));const e=document.querySelector(".click-buy");e.addEventListener("click",()=>{e.style.display="none",o.style.display="block"});const o=document.querySelector(".discount-check")}function C(t){return t.map(({_id:e,name:o,img:l,price:n})=>`
        <li class="discount-product">
         <div class="discount-card" id="${e}">
         <img class="discount-svg" src="${v}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${l}" alt="${o}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${o}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${n}</p>
                <button class="discount-buy buy-btn click-buy" type="button">
                <img class="discount-buy-svg" src="${L}" alt="shop-icon" width="18" height="18"/>
            
</button>
           <button class="discount-check " type="button">
                <img class="discount-check-svg" src="${E}" alt="shop-icon" width="18" height="18"/>
            
</button>
</div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}const i=document.querySelector("#filterForm");i.addEventListener("submit",z);const D=document.querySelector("#single");i.elements.filterCategories.addEventListener("change",N);i.elements.filterMethod.addEventListener("change",Z);let a;function g(){a=s()?s():h()}g();function x(t){D.insertAdjacentHTML("afterbegin",F(t))}function F(t){const e=t.map(o=>`
    <option value="${o}" class="js-option">${o}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function z(t){t.preventDefault();const{filterInput:e,filterCategories:o}=t.target.elements;H(e,o)}function H(t,e){t.value.trim().length?t.value.trim()?(a.keyword=t.value.trim(),e.value!==""&&(a.category=e.value),r(a),d(s()).then(o=>{if(console.log(o),o.data.results.length)c(o.data);else if(!Array.isArray(o.data.results)||!o.data.results.length){p();return}}).catch(o=>console.log(o))):e.value&&(a.category=e.value.trim(),r(a),d(s()).then(o=>{if(o.data.results.length)c(o.data);else return}).catch(o=>console.log(o))):(h(),g(),u().then(({data:o})=>{c(o)}).catch(o=>console.log(o)),i.reset())}function N(t){t.preventDefault(),t.target.value==="Show all"&&(u().then(({data:e})=>{c(e)}).catch(e=>console.log(e)),i.reset()),a.category=t.target.value.replaceAll(" ","_").replaceAll("&","%26"),r(a),d(s()).then(e=>{if(e.data.results.length)c(e.data);else if(!Array.isArray(e.data.results)||!e.data.results.length){p();return}}).catch(e=>console.log(e))}function Z(t){if(t.preventDefault(),t.target.value==="Show_all"&&(h(),g(),u().then(({data:e})=>{c(e)}).catch(e=>console.log(e)),i.reset()),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?a.byABC=!0:a.byABC=!1,a.byPrice=null,a.byPopularity=null,r(a),d(s()).then(e=>{if(e.data.results.length)c(e.data);else{p();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?a.byPrice=!0:a.byPrice=!1,a.byABC=null,a.byPopularity=null,r(a),d(s()).then(e=>{if(e.data.results.length)c(e.data);else{p();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?a.byPopularity=!0:a.byPopularity=!1,a.byABC=null,a.byPrice=null,r(a),d(s()).then(e=>{if(e.data.results.length)c(e.data);else{p();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Show_all"){h();return}}function O(t){const e={openModalBtn:t,closeModalBtn:document.querySelector(".product-modal-close"),modal:document.querySelector(".product-backdrop")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden")}}const P=document.querySelector(".product-list");document.querySelector(".product-modal-window");function c(t){P.innerHTML=I(t.results);const e=document.querySelector(".product-modal-open");console.log(e),e.addEventListener("click",O(e))}function I(t){return t.map(({_id:e,name:o,img:l,category:n,price:m,size:y,is10PercentOff:w,popularity:A})=>`
        <li class="all-product-card" id="${e}">
          <div class="product-modal-open">
            <img
              class="all-discount-svg ${w.toString().replace("false","visually-hidden").replace("true","")}"
              src="${v}"
              alt="discount-icon"
              width="60"
              height="60"
            />
            <img src="${l}" alt="${o}" loading="lazy" class="all-product-pic" />
            <h3 class="all-product-name header-three">${o}</h3>
            <div class="all-product-info regular-text">
              <p class="all-info-item">
                <span class="all-info-title"> Category: </span>
                ${n.replaceAll("_"," ")}
              </p>
              <p class="all-info-item">
                <span class="all-info-title"> Size: </span>
                ${y}
              </p>
              <p class="all-info-item">
                <span class="all-info-title"> Popularity: </span>
                ${A}
              </p>
            </div>
          </div>
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${m}</h3>
            <button class="all-product-btn buy-btn" type="button">
              <img
                class="all-buy-svg"
                src="${L}"
                alt="shop-icon"
                width="18"
                height="18"
              />
            </button>
          </div>
        </li>
        `).join("")}function J(t){t.preventDefault(),u().then(({data:e})=>{c(e)}).catch(e=>console.log(e)),i.reset(),h(),g()}function p(){const t=`<h3>Nothing was found for the selected <a href="" class="link js-link">filters...</a></h3>
  <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>`;P.innerHTML=t,document.querySelector(".js-link").addEventListener("click",J)}function Q(t){const e=document.querySelector(".modal-text");e.innerText=t;const o=document.querySelector("[data-modal]");o.classList.remove("is-hidden");const l=document.querySelector("[data-modal-close]");l.onclick=function(){o.classList.add("is-hidden")},window.onclick=function(n){n.target===o&&o.classList.add("is-hidden")}}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".subscription-form").addEventListener("submit",function(e){e.preventDefault();const o=document.querySelector(".footer-form-input").value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o)){Q("Будь ласка, введіть коректну адресу електронної пошти.");return}})});document.getElementById("tui-pagination-container");S().then(({data:t})=>{j(t)}).catch(t=>console.log(t));u().then(({data:t})=>{c(t)}).catch(t=>console.log(t));$().then(({data:t})=>{M(t)}).catch(t=>console.log(t));k().then(({data:t})=>{x(t.toString().replaceAll("_"," ").split(","))}).catch(t=>console.log(t));document.getElementById("loader-container");const b=document.querySelector(".main"),f=document.body;window.addEventListener("load",function(){const t=document.querySelector(".loader-container"),e=[S,u,$,k];b.classList.add("visually-hidden"),f.classList.add("no-scroll"),t.classList.remove("visually-hidden"),Promise.all(e.map(o=>o())).then(()=>{b.classList.remove("visually-hidden"),t.classList.add("visually-hidden"),f.classList.remove("no-scroll")}).catch(o=>{console.error("Error in asynchronous operation:",o),t.classList.add("visually-hidden"),f.classList.remove("no-scroll")})});
//# sourceMappingURL=commonHelpers2.js.map
