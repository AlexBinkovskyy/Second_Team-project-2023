import{c as S,d as p,e as y,f as u,h as i,i as c,j as P,k,l as $,m as j}from"./assets/workWithCart-743a34c2.js";import{P as L}from"./assets/vendor-99d50140.js";const w="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",B=document.querySelector(".popular-product-list");function E(t){B.insertAdjacentHTML("beforeend",C(t))}function C(t){return t.map(({_id:e,name:o,img:s,category:n,size:g,popularity:h})=>`
          <li class="popular-product-item js-product-cart"  data-id="${e}">
            <img src="${s}" alt="${o}" width="56" height="56" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <div class="popular-product-info-btn">
            <h3 class="popular-product-name">${o}</h3>
           <button type="button" class="popular-buy buy-btn js-buy-btn" onclick="addToCart('${e}')">
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
              ${g}
            </p>
            <p class="info-item-pop">
              <span class="info-title"> Popularity: </span>
              ${h}
            </p>
            </div>
            </div>
            </div>
          </li>
      `).join("")}window.addToCart=function(t){const e=JSON.parse(localStorage.getItem("cart"))||{};if(e[t])alert("This product is already in your cart!");else{e[t]=!0,localStorage.setItem("cart",JSON.stringify(e)),alert("Product added to cart!");const o=document.querySelector(`[data-product-id="${t}"]`);o.innerHTML='<svg class="img-icon" width="12" height="12"><use href="${shoppingSvg}#check-icon"></use></svg>',o.disabled=!0}};const A="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",T="/Second_Team-project-2023/assets/check-ico-267a6277.svg",_=document.querySelector(".discount-products-item");function D(t){_.insertAdjacentHTML("beforeend",F(t));const e=document.querySelectorAll(".click-buy"),o=document.querySelectorAll(".discount-check");e.forEach(n=>n.addEventListener("click",()=>{n.style.display="none",s()}));function s(){o.forEach(n=>n.style.display="block")}}function F(t){return t.map(({_id:e,name:o,img:s,price:n})=>`
        <li class="discount-product">
         <div class="discount-card"  data-id="${e}" id="${e}">
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
    `).splice(0,2).join("")}function x(t){const e={openModalBtn:t,closeModalBtn:document.querySelector(".product-modal-close"),modal:document.querySelector(".product-backdrop")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",s);function o(){e.modal.classList.toggle("is-hidden"),z(event.currentTarget)}function s(){e.modal.classList.toggle("is-hidden")}}function z(t){document.querySelector(".product-modal-content"),console.log(t)}const M=document.querySelector(".product-list");document.querySelector(".product-modal-window");function l(t){M.innerHTML=H(t.results),document.querySelectorAll(".product-modal-open").forEach(o=>{o.addEventListener("click",x(o))})}function H(t){return t.map(({_id:e,name:o,img:s,category:n,price:g,size:h,is10PercentOff:m,popularity:q})=>`
        <li class="all-product-card product-modal-open" id="${e}">
          <div class="">
            <img
              class="all-discount-svg ${m.toString().replace("false","visually-hidden").replace("true","")}"
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
                ${h}
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
                src="${A}"
                alt="shop-icon"
                width="18"
                height="18"
              />
            </button>
          </div>
        </li>
        `).join("")}function N(t){t.preventDefault(),p().then(({data:e})=>{l(e)}).catch(e=>console.log(e)),filterForm.reset(),y(),checkFilterParams()}function d(){const t=`<h3>Nothing was found for the selected <a href="" class="link js-link">filters...</a></h3>
  <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>`;M.innerHTML=t,document.querySelector(".js-link").addEventListener("click",N)}const r=document.querySelector("#filterForm");r.addEventListener("submit",J);const I=document.querySelector("#single");r.elements.filterCategories.addEventListener("change",G);r.elements.filterMethod.addEventListener("change",K);let a;async function v(){c()?(a=c(),a.keyword!==null?(r.filterInput.value=a.keyword,await i(c()).then(t=>{if(console.log(t),t.data.results.length)l(t.data);else if(!Array.isArray(t.data.results)||!t.data.results.length){d();return}})):a.category):y()}v();function O(t){I.insertAdjacentHTML("afterbegin",Z(t))}function Z(t){const e=t.map(o=>`
    <option value="${o}" class="js-option">${o}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function J(t){t.preventDefault();const{filterInput:e,filterCategories:o}=t.target.elements;Q(e,o)}function Q(t,e){t.value.trim().length?t.value.trim()?(a.keyword=t.value.trim(),e.value!==""&&(a.category=e.value),u(a),i(c()).then(o=>{if(console.log(o),o.data.results.length)l(o.data);else if(!Array.isArray(o.data.results)||!o.data.results.length){d();return}}).catch(o=>console.log(o))):e.value&&(a.category=e.value.trim(),u(a),i(c()).then(o=>{if(o.data.results.length)l(o.data);else return}).catch(o=>console.log(o))):(y(),v(),p().then(({data:o})=>{l(o)}).catch(o=>console.log(o)),r.reset())}function G(t){t.preventDefault(),t.target.value==="Show all"&&(p().then(({data:e})=>{l(e)}).catch(e=>console.log(e)),r.reset()),a.category=t.target.value.replaceAll(" ","_").replaceAll("&","%26"),u(a),i(c()).then(e=>{if(e.data.results.length)l(e.data);else if(!Array.isArray(e.data.results)||!e.data.results.length){d();return}}).catch(e=>console.log(e))}function K(t){if(t.preventDefault(),t.target.value==="Show_all"&&(y(),v(),p().then(({data:e})=>{l(e)}).catch(e=>console.log(e)),r.reset()),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?a.byABC=!0:a.byABC=!1,a.byPrice=null,a.byPopularity=null,u(a),i(c()).then(e=>{if(e.data.results.length)l(e.data);else{d();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?a.byPrice=!0:a.byPrice=!1,a.byABC=null,a.byPopularity=null,u(a),i(c()).then(e=>{if(e.data.results.length)l(e.data);else{d();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?a.byPopularity=!0:a.byPopularity=!1,a.byABC=null,a.byPrice=null,u(a),i(c()).then(e=>{if(e.data.results.length)l(e.data);else{d();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Show_all"){y();return}}function R(t){const e=document.querySelector(".modal-text");e.innerText=t;const o=document.querySelector("[data-modal]");o.classList.remove("is-hidden");const s=document.querySelector("[data-modal-close]");s.onclick=function(){o.classList.add("is-hidden")},window.onclick=function(n){n.target===o&&o.classList.add("is-hidden")}}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".subscription-form").addEventListener("submit",function(e){e.preventDefault();const o=document.querySelector(".footer-form-input").value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o)){R("Будь ласка, введіть коректну адресу електронної пошти.");return}})});const U=document.getElementById("tui-pagination-container");new L(U,{});P().then(({data:t})=>{D(t)}).catch(t=>console.log(t));p().then(({data:t,data:{perPage:e,totalPages:o}})=>{l(t);const s=document.getElementById("tui-pagination-container");new L(s,{totalItems:e*o,itemsPerPage:e,visiblePages:5,centerAlign:!0,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ellip">...</span></a>'}}).on("beforeMove",async g=>{const h=g.page;try{const{data:m}=await i({page:h,limitPerPage:e});l(m)}catch(m){console.log(m)}})});k().then(({data:t})=>{E(t)}).catch(t=>console.log(t));$().then(({data:t})=>{O(t.toString().replaceAll("_"," ").split(","))}).catch(t=>console.log(t));document.getElementById("loader-container");const b=document.querySelector(".main"),f=document.body;window.addEventListener("load",function(){const t=document.querySelector(".loader-container"),e=[P,p,k,$];b.classList.add("visually-hidden"),f.classList.add("no-scroll"),t.classList.remove("visually-hidden"),Promise.all(e.map(o=>o())).then(()=>{b.classList.remove("visually-hidden"),t.classList.add("visually-hidden"),f.classList.remove("no-scroll")}).catch(o=>{console.error("Error in asynchronous operation:",o),t.classList.add("visually-hidden"),f.classList.remove("no-scroll")})});const V=document.querySelector(".js-main-container");V.addEventListener("click",t=>{if(t.target.classList.contains("js-buy-btn")){console.log("click buy");let e=t.target.closest(".js-product-card");j(e.dataset.id),W(e.dataset.id)}});function W(t){const e=document.querySelectorAll(`.js-product-card[data-id="${t}"]`),o="";console.log(e),e.forEach(s=>{const n=s.querySelector(".js-buy-btn");n.innerHTML=`<svg class="img-icon" width="12" height="12" style="stroke:"#fff""><use href="${S}#${o}"></use></svg>`,n.disabled=!0})}
//# sourceMappingURL=commonHelpers2.js.map
