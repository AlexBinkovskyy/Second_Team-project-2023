import{s as C,d as B,e as r,f as m,h,i as c,j as p,k as q,l as E,m as _,n as T,g as k}from"./assets/workWithCart-9e93bad5.js";import{P as x}from"./assets/vendor-8aa786c2.js";const w="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",v="/Second_Team-project-2023/assets/check-ico-267a6277.svg",z=document.querySelector(".popular-product-list");async function D(t){z.insertAdjacentHTML("beforeend",F(t))}function F(t){return t.map(({_id:e,name:a,img:s,category:l,size:y,popularity:d})=>`
          <li class="popular-product-item product-modal-open js-product-card"  data-id="${e}" id="${e}">
            <img src="${s}" alt="${a}" width="56" height="56" loading="lazy" class="popular-product-pic"/>
            <div class="popular-product-info">
            <div class="popular-product-info-btn">
            <h3 class="popular-product-name">${a}</h3>
            <button type="button" class="popular-buy buy-btn js-buy-btn" >
              <svg class="img-icon js-btn-first-ico"  width="12" height="12">
                <use href="${C}#icon-shopping-cart"></use>
              </svg>
              <img class="popular-check-svg js-btn-second-ico" src="${v}" alt="shop-icon" width="12" height="12"/>
            </button>
              </div>
              <div class="info-item-description">
              <p class="info-item-title">
              <span class="info-title"> Category: </span>
              ${l.replace("_"," ")}
            </p>
            <div class="popular-info">
            <p class="info-item info-size">
              <span class="info-title"> Size: </span>
              ${y}
            </p>
            <p class="info-item-pop">
              <span class="info-title"> Popularity: </span>
              ${d}
            </p>
            </div>
            </div>
            </div>
          </li>
      `).join("")}const $="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",H=document.querySelector(".discount-products-item");function I(t){H.insertAdjacentHTML("beforeend",N(t))}function N(t){return t.map(({_id:e,name:a,img:s,price:l})=>`
        <li class="discount-product">
         <div class="discount-card product-modal-open js-product-card"  data-id="${e}" id="${e}">
         <img class="discount-svg" src="${w}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${s}" alt="${a}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${a}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${l}</p>
                <button class="discount-buy buy-btn click-buy js-buy-btn" type="button">
                    <img class="discount-buy-svg js-btn-first-ico" src="${$}" alt="shop-icon" width="18" height="18"/>
                    <img class="discount-check-svg js-btn-second-ico" src="${v}" alt="shop-icon" width="18" height="18"/>            
                </button>
        
                </div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}const O=document.querySelector(".product-modal-content"),P=document.querySelector("body");function Z(t){const e={openModalBtn:t,closeModalBtn:document.querySelector(".product-modal-close"),modal:document.querySelector(".product-backdrop")};e.openModalBtn.addEventListener("click",a);function a(l){l.target.tagName!=="BUTTON"&&(P.style.overflow="hidden",e.modal.classList.remove("is-hidden"),Q(l.currentTarget),window.addEventListener("keydown",s),e.closeModalBtn.addEventListener("click",s))}function s(l){(l.key==="Escape"||l.currentTarget===e.closeModalBtn)&&(P.style.overflow="visible",O.innerHTML=`
      <div class="product-modal-content">Loading...</div>
      `,e.modal.classList.add("is-hidden"),window.removeEventListener("keydown",s),e.closeModalBtn.removeEventListener("click",s))}}function Q(t){B(t.id).then(({data:e})=>{const a=document.querySelector(".product-modal-content");a.innerHTML=U(e),u()}).catch(e=>console.log(e))}function U(t){return`
  <div class="modal-card-content  js-product-card" id="${t._id}" data-id="${t._id}">
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
        <button class="modal-product-btn buy-btn js-buy-btn" type="button">
          <p class="modal-product-btn-text">Add to</p>
          <img
                class="all-buy-svg js-btn-first-ico"
            src="${$}"
            alt="shop-icon"
          />
              <img
                class="all-buy-svg js-btn-second-ico"
                src="${v}"
                alt="shop-icon"
                width="18"
                height="18"
              />
            </button>
      </div>
    </div>
  `}const G=document.getElementById("tui-pagination-container");let S=1;const j=document.querySelector(".product-list"),f=document.querySelector(".pagination");async function n({results:t,perPage:e,totalPages:a}){f.classList.remove("visually-hidden"),j.innerHTML=J(t),document.querySelectorAll(".product-modal-open").forEach(l=>{l.addEventListener("click",Z(l))}),f.getAttribute("data-initialized")||(new x(G,{totalItems:e*a,itemsPerPage:e,visiblePages:5,centerAlign:!0,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).on("beforeMove",async y=>{S=y.page;try{const{data:d}=await r({page:S,limitPerPage:e});n(d),u()}catch(d){console.log(d)}}),f.setAttribute("data-initialized","true"))}function J(t){return t.map(({_id:e,name:a,img:s,category:l,price:y,size:d,is10PercentOff:L,popularity:M})=>`
        <li class="all-product-card product-modal-open js-product-card" id="${e}" data-id=${e}>
          <div>
            <img
              class="all-discount-svg ${L.toString().replace("false","visually-hidden").replace("true","")}"
              src="${w}"
              alt="discount-icon"
              width="60"
              height="60"
            />
            <img src="${s}" alt="${a}" loading="lazy" class="all-product-pic" />
            <h3 class="all-product-name header-three">${a}</h3>
            <div class="all-product-info regular-text">
              <p class="all-info-item">
                <span class="all-info-title"> Category: </span>
                ${l.replaceAll("_"," ")}
              </p>
              <p class="all-info-item">
                <span class="all-info-title"> Size: </span>
                ${d}
              </p>
              <p class="all-info-item">
                <span class="all-info-title"> Popularity: </span>
                ${M}
              </p>
            </div>
          </div>
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${y}</h3>
            <button class="all-product-btn buy-btn js-buy-btn" type="button">
              <img
                class="all-buy-svg js-btn-first-ico"
                src="${$}"
                alt="shop-icon"
                width="18"
                height="18"
              />

              <img
                class="all-buy-svg js-btn-second-ico"
                src="${v}"
                alt="shop-icon"
                width="18"
                height="18"
              />

            </button>
          </div>
        </li>
        `).join("")}function K(t){t.preventDefault(),m().then(({data:e})=>{n(e)}).catch(e=>console.log(e)),i.reset(),h(),b()}function g(){const t=`
  <div class="product-search-error">
  <h3 class="product-search-title header-three">Nothing was found for the selected <a href="" class="product-search-link link js-link">filters...</a></h3>
  <p class="product-search-text">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
  </div>
  `;j.innerHTML=t,document.querySelector(".js-link").addEventListener("click",K),f.classList.add("visually-hidden")}const i=document.querySelector("#filterForm");i.addEventListener("submit",X);const R=document.querySelector("#single");i.elements.filterCategories.addEventListener("change",tt);i.elements.filterMethod.addEventListener("change",et);let o;function b(){c()?(o=c(),o.keyword!==null&&(i.filterInput.value=o.keyword)):(h(),o=c())}b();r(c()).then(({data:t})=>{if(t.results.length)n(t),u();else if(!Array.isArray(t.results)||!t.results.length){g();return}});function V(t){if(R.innerHTML=W(t),o.category!==null){const e=i.filterCategories.options;for(const a of e)if(a.value.replaceAll(" ","_").replaceAll("&","%26")===o.category){a.selected=!0;break}}}function W(t){const e=t.map(a=>`
    <option value="${a}" class="js-option">${a}</option>
    `);return e.unshift('<option value="" class="js-option" disabled selected>Categories</option>'),e.push('<option value="Show all" class="js-option">Show all</option>'),e.join("")}function X(t){t.preventDefault();const{filterInput:e,filterCategories:a}=t.target.elements;Y(e,a)}function Y(t,e){t.value.trim().length?t.value.trim()?(o.keyword=t.value.trim(),e.value!==""&&(o.category=e.value.replaceAll(" ","_").replaceAll("&","%26")),p(o),r(c()).then(a=>{if(console.log(a),a.data.results.length)n(a.data);else if(!Array.isArray(a.data.results)||!a.data.results.length){g();return}}).catch(a=>console.log(a))):e.value&&(o.category=e.value.trim(),p(o),r(c()).then(a=>{if(a.data.results.length)n(a.data);else return}).catch(a=>console.log(a))):(h(),b(),m().then(({data:a})=>{n(a)}).catch(a=>console.log(a)),i.reset())}function tt(t){t.preventDefault(),t.target.value==="Show all"&&(h(),o=c(),i.reset(),m().then(({data:e})=>{n(e)}).catch(e=>console.log(e)),i.reset()),o.category=t.target.value.replaceAll(" ","_").replaceAll("&","%26"),p(o),r(c()).then(e=>{if(e.data.results.length)n(e.data);else if(!Array.isArray(e.data.results)||!e.data.results.length){g();return}}).catch(e=>console.log(e))}function et(t){if(t.preventDefault(),t.target.value==="Show_all"&&(h(),b(),m().then(({data:e})=>{n(e)}).catch(e=>console.log(e)),i.reset()),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?o.byABC=!0:o.byABC=!1,o.byPrice=null,o.byPopularity=null,p(o),r(c()).then(e=>{if(e.data.results.length)n(e.data);else{g();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?o.byPrice=!0:o.byPrice=!1,o.byABC=null,o.byPopularity=null,p(o),r(c()).then(e=>{if(e.data.results.length)n(e.data);else{g();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?o.byPopularity=!0:o.byPopularity=!1,o.byABC=null,o.byPrice=null,p(o),r(c()).then(e=>{if(e.data.results.length)n(e.data);else{g();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Show_all"){h();return}}q().then(({data:t})=>{I(t),u()}).catch(t=>console.log(t));E().then(({data:t})=>{D(t),u()}).catch(t=>console.log(t));_().then(({data:t})=>{V(t.toString().replaceAll("_"," ").split(",")),u()}).catch(t=>console.log(t));document.getElementById("loader-container");document.querySelector(".main");const at=document.querySelector(".js-main-container"),ot=document.querySelector(".product-modal-window");at.addEventListener("click",A);ot.addEventListener("click",A);function A(t){if(t.target.classList.contains("js-buy-btn")){let e=t.target.closest(".js-product-card");T(e.dataset.id),u(),document.querySelector(".js-cart-numbers").textContent=k().products.length}}function st(t){const e=document.querySelectorAll(`.js-product-card[data-id="${t}"]`);e.length&&e.forEach(a=>{const s=a.querySelector(".js-buy-btn");s.style.backgroundColor="#6D8434",s.style.cursor="default",s.querySelector(".js-btn-first-ico").style.display="none",s.querySelector(".js-btn-second-ico").style.display="block",s.disabled=!0})}function u(){k().products.forEach(t=>{st(t.id)})}
//# sourceMappingURL=commonHelpers2.js.map
