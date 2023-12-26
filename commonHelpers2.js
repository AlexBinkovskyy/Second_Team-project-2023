import{s as M,b as d,c as h,d as i,e as r,f as s,h as b,i as S,j as $}from"./assets/localStorage-7c383e98.js";import"./assets/vendor-f9e4276b.js";const k="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",q=document.querySelector(".popular-product-list");function B(t){q.insertAdjacentHTML("beforeend",E(t))}function E(t){return t.map(({_id:e,name:o,img:c,category:n,size:g,popularity:m})=>`
          <li class="popular-product-item" id="${e}">
            <img src="${c}" alt="${o}" width="56" height="56" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <div class="popular-product-info-btn">
            <h3 class="popular-product-name">${o}</h3>
              <button type="button" class="popular-buy buy-btn" onclick="addToCart('${e}')">
            <svg class="img-icon"  width="12" height="12">
            <use href="${M}#icon-shopping-cart"></use></svg>
            </button>
        </div>
              <div class="info-item-description">
              <p class="info-item-title">
              <span class="info-title"> Category: </span>
              ${n.replace("_"," ")}
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
      `).join("")}window.addToCart=function(t){const e=JSON.parse(localStorage.getItem("cart"))||{};if(e[t])alert("This product is already in your cart!");else{e[t]=!0,localStorage.setItem("cart",JSON.stringify(e)),alert("Product added to cart!");const o=document.querySelector(`[data-product-id="${t}"]`);o.innerHTML='<svg class="img-icon" width="12" height="12"><use href="${shoppingSvg}#check-icon"></use></svg>',o.disabled=!0}};const L="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",T="/Second_Team-project-2023/assets/check-ico-267a6277.svg",_=document.querySelector(".discount-products-item");function C(t){_.insertAdjacentHTML("beforeend",j(t));const e=document.querySelector(".click-buy");e.addEventListener("click",()=>{e.style.display="none",o.style.display="block"});const o=document.querySelector(".discount-check")}function j(t){return t.map(({_id:e,name:o,img:c,price:n})=>`
        <li class="discount-product">
         <div class="discount-card" id="${e}">
         <img class="discount-svg" src="${k}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${c}" alt="${o}" loading="lazy">
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
                <img class="discount-check-svg" src="${T}" alt="shop-icon" width="18" height="18"/>
            
</button>
</div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}function F(t){const e={openModalBtn:t,closeModalBtn:document.querySelector(".product-modal-close"),modal:document.querySelector(".product-backdrop")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",c);function o(){e.modal.classList.toggle("is-hidden"),D(event.currentTarget)}function c(){e.modal.classList.toggle("is-hidden")}}function D(t){document.querySelector(".product-modal-content"),console.log(t)}const P=document.querySelector(".product-list");document.querySelector(".product-modal-window");function a(t){P.innerHTML=x(t.results),document.querySelectorAll(".product-modal-open").forEach(o=>{o.addEventListener("click",F(o))})}function x(t){return t.map(({_id:e,name:o,img:c,category:n,price:g,size:m,is10PercentOff:w,popularity:A})=>`
        <li class="all-product-card product-modal-open" id="${e}">
          <div class="">
            <img
              class="all-discount-svg ${w.toString().replace("false","visually-hidden").replace("true","")}"
              src="${k}"
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
                ${m}
              </p>
              <p class="all-info-item">
                <span class="all-info-title"> Popularity: </span>
                ${A}
              </p>
            </div>
          </div>
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${g}</h3>
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
        `).join("")}function z(t){t.preventDefault(),d().then(({data:e})=>{a(e)}).catch(e=>console.log(e)),filterForm.reset(),h(),checkFilterParams()}function p(){const t=`<h3>Nothing was found for the selected <a href="" class="link js-link">filters...</a></h3>
  <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>`;P.innerHTML=t,document.querySelector(".js-link").addEventListener("click",z)}const u=document.querySelector("#filterForm");u.addEventListener("submit",Z);const H=document.querySelector("#single");u.elements.filterCategories.addEventListener("change",J);u.elements.filterMethod.addEventListener("change",Q);let l;function y(){l=s()?s():h()}y();function N(t){H.insertAdjacentHTML("afterbegin",O(t))}function O(t){const e=t.map(o=>`
    <option value="${o}" class="js-option">${o}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function Z(t){t.preventDefault();const{filterInput:e,filterCategories:o}=t.target.elements;I(e,o)}function I(t,e){t.value.trim().length?t.value.trim()?(l.keyword=t.value.trim(),e.value!==""&&(l.category=e.value),i(l),r(s()).then(o=>{if(console.log(o),o.data.results.length)a(o.data);else if(!Array.isArray(o.data.results)||!o.data.results.length){p();return}}).catch(o=>console.log(o))):e.value&&(l.category=e.value.trim(),i(l),r(s()).then(o=>{if(o.data.results.length)a(o.data);else return}).catch(o=>console.log(o))):(h(),y(),d().then(({data:o})=>{a(o)}).catch(o=>console.log(o)),u.reset())}function J(t){t.preventDefault(),t.target.value==="Show all"&&(d().then(({data:e})=>{a(e)}).catch(e=>console.log(e)),u.reset()),l.category=t.target.value.replaceAll(" ","_").replaceAll("&","%26"),i(l),r(s()).then(e=>{if(e.data.results.length)a(e.data);else if(!Array.isArray(e.data.results)||!e.data.results.length){p();return}}).catch(e=>console.log(e))}function Q(t){if(t.preventDefault(),t.target.value==="Show_all"&&(h(),y(),d().then(({data:e})=>{a(e)}).catch(e=>console.log(e)),u.reset()),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?l.byABC=!0:l.byABC=!1,l.byPrice=null,l.byPopularity=null,i(l),r(s()).then(e=>{if(e.data.results.length)a(e.data);else{p();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?l.byPrice=!0:l.byPrice=!1,l.byABC=null,l.byPopularity=null,i(l),r(s()).then(e=>{if(e.data.results.length)a(e.data);else{p();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?l.byPopularity=!0:l.byPopularity=!1,l.byABC=null,l.byPrice=null,i(l),r(s()).then(e=>{if(e.data.results.length)a(e.data);else{p();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Show_all"){h();return}}function G(t){const e=document.querySelector(".modal-text");e.innerText=t;const o=document.querySelector("[data-modal]");o.classList.remove("is-hidden");const c=document.querySelector("[data-modal-close]");c.onclick=function(){o.classList.add("is-hidden")},window.onclick=function(n){n.target===o&&o.classList.add("is-hidden")}}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".subscription-form").addEventListener("submit",function(e){e.preventDefault();const o=document.querySelector(".footer-form-input").value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o)){G("Будь ласка, введіть коректну адресу електронної пошти.");return}})});document.getElementById("tui-pagination-container");b().then(({data:t})=>{C(t)}).catch(t=>console.log(t));d().then(({data:t})=>{a(t)}).catch(t=>console.log(t));S().then(({data:t})=>{B(t)}).catch(t=>console.log(t));$().then(({data:t})=>{N(t.toString().replaceAll("_"," ").split(","))}).catch(t=>console.log(t));document.getElementById("loader-container");const v=document.querySelector(".main"),f=document.body;window.addEventListener("load",function(){const t=document.querySelector(".loader-container"),e=[b,d,S,$];v.classList.add("visually-hidden"),f.classList.add("no-scroll"),t.classList.remove("visually-hidden"),Promise.all(e.map(o=>o())).then(()=>{v.classList.remove("visually-hidden"),t.classList.add("visually-hidden"),f.classList.remove("no-scroll")}).catch(o=>{console.error("Error in asynchronous operation:",o),t.classList.add("visually-hidden"),f.classList.remove("no-scroll")})});
//# sourceMappingURL=commonHelpers2.js.map
