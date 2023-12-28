import{s as k,d as y,e as f,f as d,h as r,i,j,k as B,l as A,m as C,n as E}from"./assets/workWithCart-f7485be6.js";import{P}from"./assets/vendor-8aa786c2.js";const S="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",m="/Second_Team-project-2023/assets/check-ico-267a6277.svg",q=document.querySelector(".popular-product-list");async function T(t){q.insertAdjacentHTML("beforeend",_(t));const e=document.querySelector(".click-buy");e.addEventListener("click",()=>{e.style.display="none",a.style.display="block"});const a=document.querySelector(".popular-check")}function _(t){return t.map(({_id:e,name:a,img:l,category:s,size:p,popularity:g})=>`
          <li class="popular-product-item product-modal-open js-product-card"  data-id="${e}" id="${e}">
            <img src="${l}" alt="${a}" width="56" height="56" loading="lazy" class="popular-product-pic"/>
            <div class="popular-product-info">
            <div class="popular-product-info-btn">
            <h3 class="popular-product-name">${a}</h3>
           <button type="button" class="popular-buy buy-btn js-buy-btn js-btn-first-ico" >
            <svg class="img-icon"  width="12" height="12">
            <use href="${k}#icon-shopping-cart"></use>
            </svg>
            </button>
            <button 
            class="popular-check  js-btn-second-ico" type="button">
            <img class="popular-check-svg" src="${m}" alt="shop-icon" width="12" height="12"/>
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
      `).join("")}const v="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",x=document.querySelector(".discount-products-item");function D(t){x.insertAdjacentHTML("beforeend",z(t))}function z(t){return t.map(({_id:e,name:a,img:l,price:s})=>`
        <li class="discount-product">
         <div class="discount-card product-modal-open js-product-card"  data-id="${e}" id="${e}">
         <img class="discount-svg" src="${S}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${l}" alt="${a}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${a}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${s}</p>
                <button class="discount-buy buy-btn click-buy js-buy-btn js-btn-first-ico" type="button">
                <img class="discount-buy-svg" src="${v}" alt="shop-icon" width="18" height="18"/>
            
</button>
           <button class="discount-check js-btn-second-ico" type="button">
                <img class="discount-check-svg" src="${m}" alt="shop-icon" width="18" height="18"/>
            
</button>
</div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}const c=document.querySelector("#filterForm");c.addEventListener("submit",N);const F=document.querySelector("#single");c.elements.filterCategories.addEventListener("change",Z);c.elements.filterMethod.addEventListener("change",Q);let o;async function b(){i()&&(o=i(),o.keyword!==null?(c.filterInput.value=o.keyword,await r(i()).then(t=>{if(console.log(t),t.data.results.length)n(t.data);else if(!Array.isArray(t.data.results)||!t.data.results.length){u();return}})):y())}b();function H(t){if(F.insertAdjacentHTML("afterbegin",I(t)),o.category!==null){console.log("1",c.filterCategories);const e=c.filterCategories.options;for(const a of e)if(a.value===o.category){a.value.option.selected;break}}}function I(t){const e=t.map(a=>`
    <option value="${a}" class="js-option">${a}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function N(t){t.preventDefault();const{filterInput:e,filterCategories:a}=t.target.elements;O(e,a)}function O(t,e){t.value.trim().length?t.value.trim()?(o.keyword=t.value.trim(),e.value!==""&&(o.category=e.value),d(o),r(i()).then(a=>{if(console.log(a),a.data.results.length)n(a.data);else if(!Array.isArray(a.data.results)||!a.data.results.length){u();return}}).catch(a=>console.log(a))):e.value&&(o.category=e.value.trim(),d(o),r(i()).then(a=>{if(a.data.results.length)n(a.data);else return}).catch(a=>console.log(a))):(y(),b(),f().then(({data:a})=>{n(a)}).catch(a=>console.log(a)),c.reset())}function Z(t){t.preventDefault(),t.target.value==="Show all"&&(f().then(({data:e})=>{n(e)}).catch(e=>console.log(e)),c.reset()),o.category=t.target.value.replaceAll(" ","_").replaceAll("&","%26"),d(o),r(i()).then(e=>{if(e.data.results.length)n(e.data);else if(!Array.isArray(e.data.results)||!e.data.results.length){u();return}}).catch(e=>console.log(e))}function Q(t){if(t.preventDefault(),t.target.value==="Show_all"&&(y(),b(),f().then(({data:e})=>{n(e)}).catch(e=>console.log(e)),c.reset()),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?o.byABC=!0:o.byABC=!1,o.byPrice=null,o.byPopularity=null,d(o),r(i()).then(e=>{if(e.data.results.length)n(e.data);else{u();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?o.byPrice=!0:o.byPrice=!1,o.byABC=null,o.byPopularity=null,d(o),r(i()).then(e=>{if(e.data.results.length)n(e.data);else{u();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?o.byPopularity=!0:o.byPopularity=!1,o.byABC=null,o.byPrice=null,d(o),r(i()).then(e=>{if(e.data.results.length)n(e.data);else{u();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Show_all"){y();return}}const U=document.querySelector(".product-modal-content"),$=document.querySelector("body");function G(t){const e={openModalBtn:t,closeModalBtn:document.querySelector(".product-modal-close"),modal:document.querySelector(".product-backdrop")};e.openModalBtn.addEventListener("click",a);function a(s){s.target.tagName!=="BUTTON"&&($.style.overflow="hidden",e.modal.classList.remove("is-hidden"),J(s.currentTarget),window.addEventListener("keydown",l),e.closeModalBtn.addEventListener("click",l))}function l(s){(s.key==="Escape"||s.currentTarget===e.closeModalBtn)&&($.style.overflow="visible",U.innerHTML=`
      <div class="product-modal-content">Loading...</div>
      `,e.modal.classList.add("is-hidden"),window.removeEventListener("keydown",l),e.closeModalBtn.removeEventListener("click",l))}}function J(t){j(t.id).then(({data:e})=>{const a=document.querySelector(".product-modal-content");a.innerHTML=K(e)}).catch(e=>console.log(e))}function K(t){return`
  <div class="modal-card-content" id="${t._id}" data-id="${t._id}">
    <div class="modal-card-pic-info">
      <img
        src="${t.img}"
        alt="${t.name}"
        loading="lazy"
        class="all-product-pic"
      />
      <div>
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
            </div>
        </p>
        <p class="all-product-desc">
        ${t.desc}
        </p>
      </div>
    </div>
      <div class="all-purchaise-box">
        <h3 class="all-product-price header-three">&#36;${t.price}</h3>
        <button class="modal-product-btn buy-btn js-buy-btn js-btn-first-ico" type="button">
          <p class="modal-product-btn-text">Add to</p>
          <img
            class="all-buy-svg"
            src="${v}"
            alt="shop-icon"
          />
        </button>
             <button class="all-product-btn btn-check buy-btn js-btn-second-ico" type="button">
              <img
                class="all-buy-svg"
                src="${m}"
                alt="shop-icon"
                width="18"
                height="18"
              />
            </button>
      </div>
    </div>
  `}const w=document.querySelector(".product-list"),L=document.querySelector(".pagination");function n(t){L.classList.remove("visually-hidden"),w.innerHTML=R(t.results),document.querySelectorAll(".product-modal-open").forEach(a=>{a.addEventListener("click",G(a))})}function R(t){return t.map(({_id:e,name:a,img:l,category:s,price:p,size:g,is10PercentOff:h,popularity:M})=>`
        <li class="all-product-card product-modal-open js-product-card" id="${e}" data-id=${e}>
            <img
              class="all-discount-svg ${h.toString().replace("false","visually-hidden").replace("true","")}"
              src="${S}"
              alt="discount-icon"
              width="60"
              height="60"
            />
            <img src="${l}" alt="${a}" loading="lazy" class="all-product-pic" />
            <h3 class="all-product-name header-three">${a}</h3>
            <div class="all-product-info regular-text">
              <p class="all-info-item">
                <span class="all-info-title"> Category: </span>
                ${s.replaceAll("_"," ")}
              </p>
              <p class="all-info-item">
                <span class="all-info-title"> Size: </span>
                ${g}
              </p>
              <p class="all-info-item">
                <span class="all-info-title"> Popularity: </span>
                ${M}
              </p>
            </div>
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${p}</h3>
            <button class="all-product-btn buy-btn js-buy-btn js-btn-first-ico" type="button">
              <img
                class="all-buy-svg"
                src="${v}"
                alt="shop-icon"
                width="18"
                height="18"
              />
            </button>
               <button class="all-product-btn btn-check buy-btn js-btn-second-ico" type="button">
                <img
                  class="all-buy-svg"
                  src="${m}"
                  alt="shop-icon"
                  width="18"
                  height="18"
                />
            </button>
          </div>
        </li>
        `).join("")}function V(t){t.preventDefault(),f().then(({data:e})=>{n(e)}).catch(e=>console.log(e)),c.reset(),y(),b()}function u(){const t=`
  <div class="product-search-error">
  <h3 class="product-search-title header-three">Nothing was found for the selected <a href="" class="product-search-link link js-link">filters...</a></h3>
  <p class="product-search-text">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
  </div>
  `;w.innerHTML=t,document.querySelector(".js-link").addEventListener("click",V),L.classList.add("visually-hidden")}const W=document.getElementById("tui-pagination-container");new P(W,{});B().then(({data:t})=>{D(t)}).catch(t=>console.log(t));f().then(({data:t,data:{perPage:e,totalPages:a}})=>{n(t);const l=document.getElementById("tui-pagination-container");new P(l,{totalItems:e*a,itemsPerPage:e,visiblePages:5,centerAlign:!0,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).on("beforeMove",async p=>{const g=p.page;try{const{data:h}=await r({page:g,limitPerPage:e});n(h)}catch(h){console.log(h)}})});A().then(({data:t})=>{T(t)}).catch(t=>console.log(t));C().then(({data:t})=>{H(t.toString().replaceAll("_"," ").split(","))}).catch(t=>console.log(t));document.getElementById("loader-container");document.querySelector(".main");const X=document.querySelector(".js-main-container");X.addEventListener("click",t=>{if(t.target.classList.contains("js-buy-btn")){let e=t.target.closest(".js-product-card");E(e.dataset.id),Y(e.dataset.id)}});function Y(t){const e=document.querySelectorAll(`.js-product-card[data-id="${t}"]`),a="";console.log(e),e.forEach(l=>{const s=l.querySelector(".js-buy-btn");s.innerHTML=`<svg class="img-icon" width="12" height="12" style="stroke:"#fff""><use href="${k}#${a}"></use></svg>`,s.disabled=!0})}
//# sourceMappingURL=commonHelpers2.js.map
