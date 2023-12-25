import{s as A,b as p,c as u,d as i,e as r,f as l,h as b,i as S,j as $}from"./assets/localStorage-7af984e0.js";import"./assets/vendor-a61d8330.js";const f="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",M=document.querySelector(".popular-product-list");function B(t){M.insertAdjacentHTML("beforeend",T(t))}function T(t){return t.map(({_id:e,name:o,img:c,category:n,size:h,popularity:g})=>`
          <li class="popular-product-item" id="${e}">
         <img class="discount-svg" src="${f}" alt="discount-icon" width="60" height="60"/>
            <img src="${c}" alt="${o}" width="56" height="56" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <h3 class="popular-product-name">${o}</h3>
              <div class="info-item-description">
              <p class="info-item">
              <span class="info-title"> Category: </span>
              ${n.replace("_"," ")}
            </p>
            <p class="info-item">
              <span class="info-title"> Size: </span>
              ${h}
            </p>
            <p class="info-item-pop">
              <span class="info-title"> Popularity: </span>
              ${g}
            </p>
            </div>
            </div>
            <div class="popular-btn">
            <button type="button" class="popular-buy buy-btn" onclick="addToCart('${e}')">
            <svg class="img-icon"  width="12" height="12">
            <use href="${A}#icon-shopping-cart"></use></svg>
            </button>
            </div>
          </li>
      `).join("")}window.addToCart=function(t){const e=JSON.parse(localStorage.getItem("cart"))||{};if(e[t])alert("This product is already in your cart!");else{e[t]=!0,localStorage.setItem("cart",JSON.stringify(e)),alert("Product added to cart!");const o=document.querySelector(`[data-product-id="${t}"]`);o.innerHTML='<svg class="img-icon" width="12" height="12"><use href="${shoppingSvg}#check-icon"></use></svg>',o.disabled=!0}};const k="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",_="/Second_Team-project-2023/assets/check-ico-267a6277.svg",j=document.querySelector(".discount-products-item");function E(t){j.insertAdjacentHTML("beforeend",C(t));const e=document.querySelector(".click-buy");e.addEventListener("click",()=>{e.style.display="none",o.style.display="block"});const o=document.querySelector(".discount-check")}function C(t){return t.map(({_id:e,name:o,img:c,price:n})=>`
        <li class="discount-product">
         <div class="discount-card" id="${e}">
         <img class="discount-svg" src="${f}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${c}" alt="${o}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${o}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${n}</p>
                <button class="discount-buy buy-btn click-buy" type="button">
                <img class="discount-buy-svg" src="${k}" alt="shop-icon" width="18" height="18"/>
            
</button>
           <button class="discount-check " type="button">
                <img class="discount-check-svg" src="${_}" alt="shop-icon" width="18" height="18"/>
            
</button>
</div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}const d=document.querySelector("#filterForm");d.addEventListener("submit",z);const D=document.querySelector("#categories");d.elements.filterCategories.addEventListener("change",N);d.elements.filterMethod.addEventListener("change",Z);let s;function y(){s=l()?l():p()}y();function x(t){D.insertAdjacentHTML("afterbegin",F(t))}function F(t){const e=t.map(o=>`
    <option value="${o}" class="js-option">${o}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function z(t){t.preventDefault();const{filterInput:e,filterCategories:o}=t.target.elements;H(e,o)}function H(t,e){t.value.trim().length?t.value.trim()?(s.keyword=t.value.trim(),e.value!==""&&(s.category=e.value),i(s),r(l()).then(o=>{if(console.log(o),o.data.results.length)a(o.data);else if(!Array.isArray(o.data.results)||!o.data.results.length){P();return}}).catch(o=>console.log(o))):e.value&&(s.category=e.value.trim(),i(s),r(l()).then(o=>{if(o.data.results.length)a(o.data);else return}).catch(o=>console.log(o))):(p(),y(),u().then(({data:o})=>{a(o)}).catch(o=>console.log(o)),d.reset())}function N(t){t.preventDefault(),t.target.value==="Show all"&&(u().then(({data:e})=>{a(e)}).catch(e=>console.log(e)),d.reset()),s.category=t.target.value.replaceAll(" ","_").replaceAll("&","%26"),i(s),r(l()).then(e=>{if(e.data.results.length)a(e.data);else if(!Array.isArray(e.data.results)||!e.data.results.length){P();return}}).catch(e=>console.log(e))}function Z(t){if(t.preventDefault(),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?s.byABC=!0:s.byABC=!1,i(s),r(l()).then(e=>{if(e.data.results.length)a(e.data);else return}).catch(e=>console.log(e));return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?s.byPrice=!0:s.byPrice=!1,i(s),r(l()).then(e=>{if(e.data.results.length)a(e.data);else return}).catch(e=>console.log(e));return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?s.byPopularity=!0:s.byPopularity=!1,i(s),r(l()).then(e=>{if(e.data.results.length)a(e.data);else return}).catch(e=>console.log(e));return}else if(t.target.value==="Show_all"){p();return}}function O(t){const e={openModalBtn:t,closeModalBtn:document.querySelector(".product-modal-close"),modal:document.querySelector(".product-backdrop")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden")}}const L=document.querySelector(".product-list");document.querySelector(".product-modal-window");function a(t){L.innerHTML=J(t.results);const e=document.querySelector(".product-modal-open");console.log(e),e.addEventListener("click",O(e))}function J(t){return t.map(({_id:e,name:o,img:c,category:n,price:h,size:g,is10PercentOff:w,popularity:q})=>`
        <li class="all-product-card" id="${e}">
          <div class="product-modal-open">
            <img
              class="all-discount-svg ${w.toString().replace("false","visually-hidden").replace("true","")}"
              src="${f}"
              alt="discount-icon"
              width="60"
              height="60"
            />
            <img src="${c}" alt="${o}" loading="lazy" class="all-product-pic" />
            <h3 class="all-product-name header-three">${o}</h3>
            <div class="all-product-info regular-text">
              <p class="all-info-item">
                <span class="all-info-title"> Category: </span>
                ${n.replaceAll("_"," ")}
              </p>
              <p class="all-info-item">
                <span class="all-info-title"> Size: </span>
                ${g}
              </p>
              <p class="all-info-item">
                <span class="all-info-title"> Popularity: </span>
                ${q}
              </p>
            </div>
          </div>
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${h}</h3>
            <button class="all-product-btn buy-btn" type="button">
              <img
                class="all-buy-svg"
                src="${k}"
                alt="shop-icon"
                width="18"
                height="18"
              />
            </button>
          </div>
        </li>
        `).join("")}function Q(t){t.preventDefault(),u().then(({data:e})=>{a(e)}).catch(e=>console.log(e)),d.reset(),p(),y()}function P(){const t=`<h3>Nothing was found for the selected <a href="" class="link js-link">filters...</a></h3>
  <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>`;L.innerHTML=t,document.querySelector(".js-link").addEventListener("click",Q)}function I(t){const e=document.querySelector(".modal-text");e.innerText=t;const o=document.querySelector("[data-modal]");o.classList.remove("is-hidden");const c=document.querySelector("[data-modal-close]");c.onclick=function(){o.classList.add("is-hidden")},window.onclick=function(n){n.target===o&&o.classList.add("is-hidden")}}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".subscription-form").addEventListener("submit",function(e){e.preventDefault();const o=document.querySelector(".footer-form-input").value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o)){I("Будь ласка, введіть коректну адресу електронної пошти.");return}})});b().then(({data:t})=>{E(t)}).catch(t=>console.log(t));u().then(({data:t})=>{a(t)}).catch(t=>console.log(t));S().then(({data:t})=>{B(t)}).catch(t=>console.log(t));$().then(({data:t})=>{x(t.toString().replaceAll("_"," ").split(","))}).catch(t=>console.log(t));document.getElementById("loader-container");const v=document.querySelector(".main"),m=document.body;window.addEventListener("load",function(){const t=document.querySelector(".loader-container"),e=[b,u,S,$];v.classList.add("visually-hidden"),m.classList.add("no-scroll"),t.classList.remove("visually-hidden"),Promise.all(e.map(o=>o())).then(()=>{v.classList.remove("visually-hidden"),t.classList.add("visually-hidden"),m.classList.remove("no-scroll")}).catch(o=>{console.error("Error in asynchronous operation:",o),t.classList.add("visually-hidden"),m.classList.remove("no-scroll")})});
//# sourceMappingURL=commonHelpers2.js.map
