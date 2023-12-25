import{s as M,b as p,c as u,d as r,e as i,f as n,h as b,i as S,j as $}from"./assets/localStorage-7af984e0.js";import"./assets/vendor-a61d8330.js";const f="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",q=document.querySelector(".popular-product-list");function T(t){q.insertAdjacentHTML("beforeend",_(t))}function _(t){return t.map(({_id:e,name:o,img:l,category:c,size:h,popularity:g})=>`
          <li class="popular-product-item" id="${e}">
         <img class="discount-svg" src="${f}" alt="discount-icon" width="60" height="60"/>
            <img src="${l}" alt="${o}" width="56" height="56" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <h3 class="popular-product-name">${o}</h3>
              <div class="info-item-description">
              <p class="info-item">
              <span class="info-title"> Category: </span>
              ${c.replace("_"," ")}
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
            <use href="${M}#icon-shopping-cart"></use></svg>
            </button>
            </div>
          </li>
      `).join("")}window.addToCart=function(t){const e=JSON.parse(localStorage.getItem("cart"))||{};if(e[t])alert("This product is already in your cart!");else{e[t]=!0,localStorage.setItem("cart",JSON.stringify(e)),alert("Product added to cart!");const o=document.querySelector(`[data-product-id="${t}"]`);o.innerHTML='<svg class="img-icon" width="12" height="12"><use href="${shoppingSvg}#check-icon"></use></svg>',o.disabled=!0}};const L="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",j=document.querySelector(".discount-products-item");function B(t){j.insertAdjacentHTML("beforeend",E(t))}function E(t){return t.map(({_id:e,name:o,img:l,price:c})=>`
        <li class="discount-product">
         <div class="discount-card" id="${e}">
         <img class="discount-svg" src="${f}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${l}" alt="${o}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${o}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${c}</p>
                <button class="discount-buy buy-btn" type="button">
                <img class="discount-buy-svg" src="${L}" alt="shop-icon" width="18" height="18"/>
  </svg>
</button>
</div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}const d=document.querySelector("#filterForm");d.addEventListener("submit",F);const C=document.querySelector("#categories");d.elements.filterCategories.addEventListener("change",H);d.elements.filterMethod.addEventListener("change",N);let a;function y(){a=n()?n():p()}y();function D(t){C.insertAdjacentHTML("afterbegin",x(t))}function x(t){const e=t.map(o=>`
    <option value="${o}" class="js-option">${o}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function F(t){t.preventDefault();const{filterInput:e,filterCategories:o}=t.target.elements;z(e,o)}function z(t,e){t.value.trim().length?t.value.trim()?(a.keyword=t.value.trim(),e.value!==""&&(a.category=e.value),r(a),i(n()).then(o=>{if(console.log(o),o.data.results.length)s(o.data);else if(!Array.isArray(o.data.results)||!o.data.results.length){w();return}}).catch(o=>console.log(o))):e.value&&(a.category=e.value.trim(),r(a),i(n()).then(o=>{if(o.data.results.length)s(o.data);else return}).catch(o=>console.log(o))):(p(),y(),u().then(({data:o})=>{s(o)}).catch(o=>console.log(o)),d.reset())}function H(t){t.preventDefault(),t.target.value==="Show all"&&(u().then(({data:e})=>{s(e)}).catch(e=>console.log(e)),d.reset()),a.category=t.target.value.replaceAll(" ","_").replaceAll("&","%26"),r(a),i(n()).then(e=>{if(e.data.results.length)s(e.data);else if(!Array.isArray(e.data.results)||!e.data.results.length){w();return}}).catch(e=>console.log(e))}function N(t){if(t.preventDefault(),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?a.byABC=!0:a.byABC=!1,r(a),i(n()).then(e=>{if(e.data.results.length)s(e.data);else return}).catch(e=>console.log(e));return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?a.byPrice=!0:a.byPrice=!1,r(a),i(n()).then(e=>{if(e.data.results.length)s(e.data);else return}).catch(e=>console.log(e));return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?a.byPopularity=!0:a.byPopularity=!1,r(a),i(n()).then(e=>{if(e.data.results.length)s(e.data);else return}).catch(e=>console.log(e));return}else if(t.target.value==="Show_all"){p();return}}function Z(t){const e={openModalBtn:t,closeModalBtn:document.querySelector(".product-modal-close"),modal:document.querySelector(".product-backdrop")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden")}}const P=document.querySelector(".product-list");document.querySelector(".product-modal-window");function s(t){P.innerHTML=O(t.results);const e=document.querySelector(".product-modal-open");console.log(e),e.addEventListener("click",Z(e))}function O(t){return t.map(({_id:e,name:o,img:l,category:c,price:h,size:g,is10PercentOff:k,popularity:A})=>`
        <li class="all-product-card" id="${e}">
          <div class="product-modal-open">
            <img
              class="all-discount-svg ${k.toString().replace("false","visually-hidden").replace("true","")}"
              src="${f}"
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
                ${g}
              </p>
              <p class="all-info-item">
                <span class="all-info-title"> Popularity: </span>
                ${A}
              </p>
            </div>
          </div>
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${h}</h3>
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
        `).join("")}function J(t){t.preventDefault(),u().then(({data:e})=>{s(e)}).catch(e=>console.log(e)),d.reset(),p(),y()}function w(){const t=`<h3>Nothing was found for the selected <a href="" class="link js-link">filters...</a></h3>
  <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>`;P.innerHTML=t,document.querySelector(".js-link").addEventListener("click",J)}function Q(t){const e=document.querySelector(".modal-text");e.innerText=t;const o=document.querySelector("[data-modal]");o.classList.remove("is-hidden");const l=document.querySelector("[data-modal-close]");l.onclick=function(){o.classList.add("is-hidden")},window.onclick=function(c){c.target===o&&o.classList.add("is-hidden")}}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".subscription-form").addEventListener("submit",function(e){e.preventDefault();const o=document.querySelector(".footer-form-input").value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o)){Q("Будь ласка, введіть коректну адресу електронної пошти.");return}})});b().then(({data:t})=>{B(t)}).catch(t=>console.log(t));u().then(({data:t})=>{s(t)}).catch(t=>console.log(t));S().then(({data:t})=>{T(t)}).catch(t=>console.log(t));$().then(({data:t})=>{D(t.toString().replaceAll("_"," ").split(","))}).catch(t=>console.log(t));document.getElementById("loader-container");const v=document.querySelector(".main"),m=document.body;window.addEventListener("load",function(){const t=document.querySelector(".loader-container"),e=[b,u,S,$];v.classList.add("visually-hidden"),m.classList.add("no-scroll"),t.classList.remove("visually-hidden"),Promise.all(e.map(o=>o())).then(()=>{v.classList.remove("visually-hidden"),t.classList.add("visually-hidden"),m.classList.remove("no-scroll")}).catch(o=>{console.error("Error in asynchronous operation:",o),t.classList.add("visually-hidden"),m.classList.remove("no-scroll")})});
//# sourceMappingURL=commonHelpers2.js.map
