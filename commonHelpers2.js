import{c as S,d,e as y,f as r,h as i,i as l,j as P,k as $,l as k,m as j}from"./assets/workWithCart-743a34c2.js";import{P as L}from"./assets/vendor-99d50140.js";const w="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",B=document.querySelector(".popular-product-list");function E(e){B.insertAdjacentHTML("beforeend",C(e))}function C(e){return e.map(({_id:t,name:o,img:s,category:n,size:p,popularity:g})=>`
          <li class="popular-product-item js-product-cart"  data-id="${t}">
            <img src="${s}" alt="${o}" width="56" height="56" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <div class="popular-product-info-btn">
            <h3 class="popular-product-name">${o}</h3>
           <button type="button" class="popular-buy buy-btn js-buy-btn" onclick="addToCart('${t}')">
            <svg class="img-icon"  width="12" height="12">
            <use href="${S}#icon-shopping-cart"></use></svg>
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
              ${p}
            </p>
            <p class="info-item-pop">
              <span class="info-title"> Popularity: </span>
              ${g}
            </p>
            </div>
            </div>
            </div>
          </li>
      `).join("")}window.addToCart=function(e){const t=JSON.parse(localStorage.getItem("cart"))||{};if(t[e])alert("This product is already in your cart!");else{t[e]=!0,localStorage.setItem("cart",JSON.stringify(t)),alert("Product added to cart!");const o=document.querySelector(`[data-product-id="${e}"]`);o.innerHTML='<svg class="img-icon" width="12" height="12"><use href="${shoppingSvg}#check-icon"></use></svg>',o.disabled=!0}};const A="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",T="/Second_Team-project-2023/assets/check-ico-267a6277.svg",_=document.querySelector(".discount-products-item");function D(e){_.insertAdjacentHTML("beforeend",F(e));const t=document.querySelectorAll(".click-buy"),o=document.querySelectorAll(".discount-check");t.forEach(n=>n.addEventListener("click",()=>{n.style.display="none",s()}));function s(){o.forEach(n=>n.style.display="block")}}function F(e){return e.map(({_id:t,name:o,img:s,price:n})=>`
        <li class="discount-product">
         <div class="discount-card"  data-id="${t}" id="${t}">
         <img class="discount-svg" src="${w}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${s}" alt="${o}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${o}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${n}</p>
                <button class="discount-buy buy-btn click-buy js-buy-btn" type="button">
                <img class="discount-buy-svg" src="${A}" alt="shop-icon" width="18" height="18"/>
            
</button>
           <button class="discount-check " type="button">
                <img class="discount-check-svg" src="${T}" alt="shop-icon" width="18" height="18"/>
            
</button>
</div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}function x(e){const t={openModalBtn:e,closeModalBtn:document.querySelector(".product-modal-close"),modal:document.querySelector(".product-backdrop")};t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",s);function o(){t.modal.classList.toggle("is-hidden"),z(event.currentTarget)}function s(){t.modal.classList.toggle("is-hidden")}}function z(e){document.querySelector(".product-modal-content"),console.log(e)}const M=document.querySelector(".product-list");document.querySelector(".product-modal-window");function c(e){M.innerHTML=H(e.results),document.querySelectorAll(".product-modal-open").forEach(o=>{o.addEventListener("click",x(o))})}function H(e){return e.map(({_id:t,name:o,img:s,category:n,price:p,size:g,is10PercentOff:h,popularity:q})=>`
        <li class="all-product-card product-modal-open" id="${t}">
          <div class="">
            <img
              class="all-discount-svg ${h.toString().replace("false","visually-hidden").replace("true","")}"
              src="${w}"
              alt="discount-icon"
              width="60"
              height="60"
            />
            <img src="${s}" alt="${o}" loading="lazy" class="all-product-pic" />
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
            <h3 class="all-product-price header-three">&#36;${p}</h3>
            <button class="all-product-btn buy-btn" type="button">
              <img
                class="all-buy-svg"
                src="${A}"
                alt="shop-icon"
                width="18"
                height="18"
              />
            </button>
          </div>
        </li>
        `).join("")}function N(e){e.preventDefault(),d().then(({data:t})=>{c(t)}).catch(t=>console.log(t)),filterForm.reset(),y(),checkFilterParams()}function m(){const e=`<h3>Nothing was found for the selected <a href="" class="link js-link">filters...</a></h3>
  <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>`;M.innerHTML=e,document.querySelector(".js-link").addEventListener("click",N)}const u=document.querySelector("#filterForm");u.addEventListener("submit",J);const O=document.querySelector("#single");u.elements.filterCategories.addEventListener("change",G);u.elements.filterMethod.addEventListener("change",K);let a;function v(){a=l()?l():y()}v();function Z(e){O.insertAdjacentHTML("afterbegin",I(e))}function I(e){const t=e.map(o=>`
    <option value="${o}" class="js-option">${o}</option>
    `);return t.unshift('<option value="" disabled selected>Categories</option>'),t.join("")}function J(e){e.preventDefault();const{filterInput:t,filterCategories:o}=e.target.elements;Q(t,o)}function Q(e,t){e.value.trim().length?e.value.trim()?(a.keyword=e.value.trim(),t.value!==""&&(a.category=t.value),r(a),i(l()).then(o=>{if(console.log(o),o.data.results.length)c(o.data);else if(!Array.isArray(o.data.results)||!o.data.results.length){m();return}}).catch(o=>console.log(o))):t.value&&(a.category=t.value.trim(),r(a),i(l()).then(o=>{if(o.data.results.length)c(o.data);else return}).catch(o=>console.log(o))):(y(),v(),d().then(({data:o})=>{c(o)}).catch(o=>console.log(o)),u.reset())}function G(e){e.preventDefault(),e.target.value==="Show all"&&(d().then(({data:t})=>{c(t)}).catch(t=>console.log(t)),u.reset()),a.category=e.target.value.replaceAll(" ","_").replaceAll("&","%26"),r(a),i(l()).then(t=>{if(t.data.results.length)c(t.data);else if(!Array.isArray(t.data.results)||!t.data.results.length){m();return}}).catch(t=>console.log(t))}function K(e){if(e.preventDefault(),e.target.value==="Show_all"&&(y(),v(),d().then(({data:t})=>{c(t)}).catch(t=>console.log(t)),u.reset()),e.target.value==="A_to_Z"||e.target.value==="Z_to_A"){e.target.value==="A_to_Z"?a.byABC=!0:a.byABC=!1,a.byPrice=null,a.byPopularity=null,r(a),i(l()).then(t=>{if(t.data.results.length)c(t.data);else{m();return}}).catch(t=>console.log(t));return}else if(e.target.value==="Cheap"||e.target.value==="Expensive"){e.target.value==="Cheap"?a.byPrice=!0:a.byPrice=!1,a.byABC=null,a.byPopularity=null,r(a),i(l()).then(t=>{if(t.data.results.length)c(t.data);else{m();return}}).catch(t=>console.log(t));return}else if(e.target.value==="Popular"||e.target.value==="Not_popular"){e.target.value==="Not_popular"?a.byPopularity=!0:a.byPopularity=!1,a.byABC=null,a.byPrice=null,r(a),i(l()).then(t=>{if(t.data.results.length)c(t.data);else{m();return}}).catch(t=>console.log(t));return}else if(e.target.value==="Show_all"){y();return}}function R(e){const t=document.querySelector(".modal-text");t.innerText=e;const o=document.querySelector("[data-modal]");o.classList.remove("is-hidden");const s=document.querySelector("[data-modal-close]");s.onclick=function(){o.classList.add("is-hidden")},window.onclick=function(n){n.target===o&&o.classList.add("is-hidden")}}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".subscription-form").addEventListener("submit",function(t){t.preventDefault();const o=document.querySelector(".footer-form-input").value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o)){R("Будь ласка, введіть коректну адресу електронної пошти.");return}})});const U=document.getElementById("tui-pagination-container");new L(U,{});P().then(({data:e})=>{D(e)}).catch(e=>console.log(e));d().then(({data:e,data:{perPage:t,totalPages:o}})=>{c(e);const s=document.getElementById("tui-pagination-container");new L(s,{totalItems:t*o,itemsPerPage:t,visiblePages:5,centerAlign:!0,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ellip">...</span></a>'}}).on("beforeMove",async p=>{const g=p.page;try{const{data:h}=await i({page:g,limitPerPage:t});c(h)}catch(h){console.log(h)}})});$().then(({data:e})=>{E(e)}).catch(e=>console.log(e));k().then(({data:e})=>{Z(e.toString().replaceAll("_"," ").split(","))}).catch(e=>console.log(e));document.getElementById("loader-container");const b=document.querySelector(".main"),f=document.body;window.addEventListener("load",function(){const e=document.querySelector(".loader-container"),t=[P,d,$,k];b.classList.add("visually-hidden"),f.classList.add("no-scroll"),e.classList.remove("visually-hidden"),Promise.all(t.map(o=>o())).then(()=>{b.classList.remove("visually-hidden"),e.classList.add("visually-hidden"),f.classList.remove("no-scroll")}).catch(o=>{console.error("Error in asynchronous operation:",o),e.classList.add("visually-hidden"),f.classList.remove("no-scroll")})});const V=document.querySelector(".js-main-container");V.addEventListener("click",e=>{if(e.target.classList.contains("js-buy-btn")){console.log("click buy");let t=e.target.closest(".js-product-card");j(t.dataset.id),W(t.dataset.id)}});function W(e){const t=document.querySelectorAll(`.js-product-card[data-id="${e}"]`),o="";console.log(t),t.forEach(s=>{const n=s.querySelector(".js-buy-btn");n.innerHTML=`<svg class="img-icon" width="12" height="12" style="stroke:"#fff""><use href="${S}#${o}"></use></svg>`,n.disabled=!0})}
//# sourceMappingURL=commonHelpers2.js.map
