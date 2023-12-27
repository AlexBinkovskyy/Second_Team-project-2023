import{s as $,d as y,e as p,f as d,h as i,i as c,j as C,k as P,l as L,m as k,n as B}from"./assets/workWithCart-ff7b8521.js";import{P as w}from"./assets/vendor-b592f4c5.js";const M="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",E=document.querySelector(".popular-product-list");function T(t){E.insertAdjacentHTML("beforeend",j(t))}function j(t){return t.map(({_id:e,name:a,img:n,category:s,size:g,popularity:h})=>`
          <li class="popular-product-item js-product-cart"  data-id="${e}">
            <img src="${n}" alt="${a}" width="56" height="56" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <div class="popular-product-info-btn">
            <h3 class="popular-product-name">${a}</h3>
           <button type="button" class="popular-buy buy-btn js-buy-btn" onclick="addToCart('${e}')">
            <svg class="img-icon"  width="12" height="12">
            <use href="${$}#icon-shopping-cart"></use></svg>
            </button>
        </div>
              <div class="info-item-description">
              <p class="info-item-title">
              <span class="info-title"> Category: </span>
              ${s.replace("_"," ")}
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
      `).join("")}window.addToCart=function(t){const e=JSON.parse(localStorage.getItem("cart"))||{};if(e[t])alert("This product is already in your cart!");else{e[t]=!0,localStorage.setItem("cart",JSON.stringify(e)),alert("Product added to cart!");const a=document.querySelector(`[data-product-id="${t}"]`);a.innerHTML='<svg class="img-icon" width="12" height="12"><use href="${shoppingSvg}#check-icon"></use></svg>',a.disabled=!0}};const b="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",_="/Second_Team-project-2023/assets/check-ico-267a6277.svg",z=document.querySelector(".discount-products-item");function D(t){z.insertAdjacentHTML("beforeend",x(t));const e=document.querySelectorAll(".click-buy"),a=document.querySelectorAll(".discount-check");e.forEach(s=>s.addEventListener("click",()=>{s.style.display="none",n()}));function n(){a.forEach(s=>s.style.display="block")}}function x(t){return t.map(({_id:e,name:a,img:n,price:s})=>`
        <li class="discount-product">
         <div class="discount-card"  data-id="${e}" id="${e}">
         <img class="discount-svg" src="${M}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${n}" alt="${a}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${a}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${s}</p>
                <button class="discount-buy buy-btn click-buy js-buy-btn" type="button">
                <img class="discount-buy-svg" src="${b}" alt="shop-icon" width="18" height="18"/>
            
</button>
           <button class="discount-check " type="button">
                <img class="discount-check-svg" src="${_}" alt="shop-icon" width="18" height="18"/>
            
</button>
</div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}const r=document.querySelector("#filterForm");r.addEventListener("submit",N);const F=document.querySelector("#single");r.elements.filterCategories.addEventListener("change",Z);r.elements.filterMethod.addEventListener("change",J);let o;async function f(){c()?(o=c(),o.keyword!==null?(r.filterInput.value=o.keyword,await i(c()).then(t=>{if(console.log(t),t.data.results.length)l(t.data);else if(!Array.isArray(t.data.results)||!t.data.results.length){u();return}})):o.category):y()}f();function H(t){F.insertAdjacentHTML("afterbegin",I(t))}function I(t){const e=t.map(a=>`
    <option value="${a}" class="js-option">${a}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function N(t){t.preventDefault();const{filterInput:e,filterCategories:a}=t.target.elements;O(e,a)}function O(t,e){t.value.trim().length?t.value.trim()?(o.keyword=t.value.trim(),e.value!==""&&(o.category=e.value),d(o),i(c()).then(a=>{if(console.log(a),a.data.results.length)l(a.data);else if(!Array.isArray(a.data.results)||!a.data.results.length){u();return}}).catch(a=>console.log(a))):e.value&&(o.category=e.value.trim(),d(o),i(c()).then(a=>{if(a.data.results.length)l(a.data);else return}).catch(a=>console.log(a))):(y(),f(),p().then(({data:a})=>{l(a)}).catch(a=>console.log(a)),r.reset())}function Z(t){t.preventDefault(),t.target.value==="Show all"&&(p().then(({data:e})=>{l(e)}).catch(e=>console.log(e)),r.reset()),o.category=t.target.value.replaceAll(" ","_").replaceAll("&","%26"),d(o),i(c()).then(e=>{if(e.data.results.length)l(e.data);else if(!Array.isArray(e.data.results)||!e.data.results.length){u();return}}).catch(e=>console.log(e))}function J(t){if(t.preventDefault(),t.target.value==="Show_all"&&(y(),f(),p().then(({data:e})=>{l(e)}).catch(e=>console.log(e)),r.reset()),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?o.byABC=!0:o.byABC=!1,o.byPrice=null,o.byPopularity=null,d(o),i(c()).then(e=>{if(e.data.results.length)l(e.data);else{u();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?o.byPrice=!0:o.byPrice=!1,o.byABC=null,o.byPopularity=null,d(o),i(c()).then(e=>{if(e.data.results.length)l(e.data);else{u();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?o.byPopularity=!0:o.byPopularity=!1,o.byABC=null,o.byPrice=null,d(o),i(c()).then(e=>{if(e.data.results.length)l(e.data);else{u();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Show_all"){y();return}}const Q=document.querySelector(".product-modal-content");document.querySelector(".product-modal-window");function G(t){const e={openModalBtn:t,closeModalBtn:document.querySelector(".product-modal-close"),modal:document.querySelector(".product-backdrop")};e.openModalBtn.addEventListener("click",a),e.closeModalBtn.addEventListener("click",n);function a(){e.modal.classList.remove("is-hidden"),K(event.currentTarget)}function n(){Q.innerHTML=`
    <div class="product-modal-content">Loading...</div>
    `,e.modal.classList.add("is-hidden")}}function K(t){C(t.id).then(({data:e})=>{const a=document.querySelector(".product-modal-content");a.innerHTML=R(e)}).catch(e=>console.log(e))}function R(t){return`
    <div class="modal-card-content">
      <img
        src="${t.img}"
        alt="${t.name}"
        loading="lazy"
        class="all-product-pic"
      />
      <h3 class="all-product-name header-three">${t.name}</h3>
      <div class="all-product-info regular-text">
        <p class="all-info-item">
          <span class="all-info-title"> Category: </span>
          ${t.category.replaceAll("_"," ")}
        </p>
        <p class="all-info-item">
          <span class="all-info-title"> Size: </span>
          ${t.size}
        </p>
        <p class="all-info-item">
          <span class="all-info-title"> Popularity: </span>
          ${t.popularity}
        </p>
      </div>
      <div class="all-purchaise-box">
        <h3 class="all-product-price header-three">&#36;${t.price}</h3>
        <button class="all-product-btn buy-btn" type="button">
          <img
            class="all-buy-svg"
            src="${b}"
            alt="shop-icon"
            width="18"
            height="18"
          />
        </button>
      </div>
    </div>
  `}const A=document.querySelector(".product-list");function l(t){A.innerHTML=U(t.results),document.querySelectorAll(".product-modal-open").forEach(a=>{a.addEventListener("click",G(a))})}function U(t){return t.map(({_id:e,name:a,img:n,category:s,price:g,size:h,is10PercentOff:m,popularity:q})=>`
        <li class="all-product-card product-modal-open" id="${e}">
            <img
              class="all-discount-svg ${m.toString().replace("false","visually-hidden").replace("true","")}"
              src="${M}"
              alt="discount-icon"
              width="60"
              height="60"
            />
            <img src="${n}" alt="${a}" loading="lazy" class="all-product-pic" />
            <h3 class="all-product-name header-three">${a}</h3>
            <div class="all-product-info regular-text">
              <p class="all-info-item">
                <span class="all-info-title"> Category: </span>
                ${s.replaceAll("_"," ")}
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
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${g}</h3>
            <button class="all-product-btn buy-btn" type="button">
              <img
                class="all-buy-svg"
                src="${b}"
                alt="shop-icon"
                width="18"
                height="18"
              />
            </button>
          </div>
        </li>
        `).join("")}function V(t){t.preventDefault(),p().then(({data:e})=>{l(e)}).catch(e=>console.log(e)),r.reset(),y(),f()}function u(){const t=`<h3>Nothing was found for the selected <a href="" class="link js-link">filters...</a></h3>
  <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>`;A.innerHTML=t,document.querySelector(".js-link").addEventListener("click",V)}function W(t){const e=document.querySelector(".modal-text");e.innerText=t;const a=document.querySelector("[data-modal]");a.classList.remove("is-hidden");const n=document.querySelector("[data-modal-close]");n.onclick=function(){a.classList.add("is-hidden")},window.onclick=function(s){s.target===a&&a.classList.add("is-hidden")}}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".subscription-form").addEventListener("submit",function(e){e.preventDefault();const a=document.querySelector(".footer-form-input").value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a)){W("Будь ласка, введіть коректну адресу електронної пошти.");return}})});const X=document.getElementById("tui-pagination-container");new w(X,{});P().then(({data:t})=>{D(t)}).catch(t=>console.log(t));p().then(({data:t,data:{perPage:e,totalPages:a}})=>{l(t);const n=document.getElementById("tui-pagination-container");new w(n,{totalItems:e*a,itemsPerPage:e,visiblePages:5,centerAlign:!0,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).on("beforeMove",async g=>{const h=g.page;try{const{data:m}=await i({page:h,limitPerPage:e});l(m)}catch(m){console.log(m)}})});L().then(({data:t})=>{T(t)}).catch(t=>console.log(t));k().then(({data:t})=>{H(t.toString().replaceAll("_"," ").split(","))}).catch(t=>console.log(t));document.getElementById("loader-container");const S=document.querySelector(".main"),v=document.body;window.addEventListener("load",function(){const t=document.querySelector(".loader-container"),e=[P,p,L,k];S.classList.add("visually-hidden"),v.classList.add("no-scroll"),t.classList.remove("visually-hidden"),Promise.all(e.map(a=>a())).then(()=>{S.classList.remove("visually-hidden"),t.classList.add("visually-hidden"),v.classList.remove("no-scroll")}).catch(a=>{console.error("Error in asynchronous operation:",a),t.classList.add("visually-hidden"),v.classList.remove("no-scroll")})});const Y=document.querySelector(".js-main-container");Y.addEventListener("click",t=>{if(t.target.classList.contains("js-buy-btn")){let e=t.target.closest(".js-product-card");B(e.dataset.id),tt(e.dataset.id)}});function tt(t){const e=document.querySelectorAll(`.js-product-card[data-id="${t}"]`),a="";console.log(e),e.forEach(n=>{const s=n.querySelector(".js-buy-btn");s.innerHTML=`<svg class="img-icon" width="12" height="12" style="stroke:"#fff""><use href="${$}#${a}"></use></svg>`,s.disabled=!0})}
//# sourceMappingURL=commonHelpers2.js.map
