import{s as A,d as f,e as m,f as d,h as r,i,j as B,k as C,l as q,m as E,n as T,g as S}from"./assets/workWithCart-5294a70b.js";import{P as k}from"./assets/vendor-8aa786c2.js";const w="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",b="/Second_Team-project-2023/assets/check-ico-267a6277.svg",_=document.querySelector(".popular-product-list");async function x(t){_.insertAdjacentHTML("beforeend",D(t))}function D(t){return t.map(({_id:e,name:a,img:s,category:n,size:g,popularity:h})=>`
          <li class="popular-product-item product-modal-open js-product-card"  data-id="${e}" id="${e}">
            <img src="${s}" alt="${a}" width="56" height="56" loading="lazy" class="popular-product-pic"/>
            <div class="popular-product-info">
            <div class="popular-product-info-btn">
            <h3 class="popular-product-name">${a}</h3>
            <button type="button" class="popular-buy buy-btn js-buy-btn" >
              <svg class="img-icon js-btn-first-ico"  width="12" height="12">
                <use href="${A}#icon-shopping-cart"></use>
              </svg>
              <img class="popular-check-svg js-btn-second-ico" src="${b}" alt="shop-icon" width="12" height="12"/>
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
      `).join("")}const $="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",z=document.querySelector(".discount-products-item");function F(t){z.insertAdjacentHTML("beforeend",I(t))}function I(t){return t.map(({_id:e,name:a,img:s,price:n})=>`
        <li class="discount-product">
         <div class="discount-card product-modal-open js-product-card"  data-id="${e}" id="${e}">
         <img class="discount-svg" src="${w}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${s}" alt="${a}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${a}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${n}</p>
                <button class="discount-buy buy-btn click-buy js-buy-btn" type="button">
                    <img class="discount-buy-svg js-btn-first-ico" src="${$}" alt="shop-icon" width="18" height="18"/>
                    <img class="discount-check-svg js-btn-second-ico" src="${b}" alt="shop-icon" width="18" height="18"/>            
                </button>
        
                </div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}const c=document.querySelector("#filterForm");c.addEventListener("submit",Z);const H=document.querySelector("#single");c.elements.filterCategories.addEventListener("change",U);c.elements.filterMethod.addEventListener("change",G);let o;async function v(){i()&&(o=i(),o.keyword!==null?(c.filterInput.value=o.keyword,await r(i()).then(t=>{if(console.log(t),t.data.results.length)l(t.data);else if(!Array.isArray(t.data.results)||!t.data.results.length){u();return}})):f())}v();function N(t){if(H.insertAdjacentHTML("afterbegin",O(t)),o.category!==null){console.log("1",c.filterCategories);const e=c.filterCategories.options;for(const a of e)if(a.value===o.category){a.value.option.selected;break}}}function O(t){const e=t.map(a=>`
    <option value="${a}" class="js-option">${a}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function Z(t){t.preventDefault();const{filterInput:e,filterCategories:a}=t.target.elements;Q(e,a)}function Q(t,e){t.value.trim().length?t.value.trim()?(o.keyword=t.value.trim(),e.value!==""&&(o.category=e.value),d(o),r(i()).then(a=>{if(console.log(a),a.data.results.length)l(a.data);else if(!Array.isArray(a.data.results)||!a.data.results.length){u();return}}).catch(a=>console.log(a))):e.value&&(o.category=e.value.trim(),d(o),r(i()).then(a=>{if(a.data.results.length)l(a.data);else return}).catch(a=>console.log(a))):(f(),v(),m().then(({data:a})=>{l(a)}).catch(a=>console.log(a)),c.reset())}function U(t){t.preventDefault(),t.target.value==="Show all"&&(m().then(({data:e})=>{l(e)}).catch(e=>console.log(e)),c.reset()),o.category=t.target.value.replaceAll(" ","_").replaceAll("&","%26"),d(o),r(i()).then(e=>{if(e.data.results.length)l(e.data);else if(!Array.isArray(e.data.results)||!e.data.results.length){u();return}}).catch(e=>console.log(e))}function G(t){if(t.preventDefault(),t.target.value==="Show_all"&&(f(),v(),m().then(({data:e})=>{l(e)}).catch(e=>console.log(e)),c.reset()),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?o.byABC=!0:o.byABC=!1,o.byPrice=null,o.byPopularity=null,d(o),r(i()).then(e=>{if(e.data.results.length)l(e.data);else{u();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?o.byPrice=!0:o.byPrice=!1,o.byABC=null,o.byPopularity=null,d(o),r(i()).then(e=>{if(e.data.results.length)l(e.data);else{u();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?o.byPopularity=!0:o.byPopularity=!1,o.byABC=null,o.byPrice=null,d(o),r(i()).then(e=>{if(e.data.results.length)l(e.data);else{u();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Show_all"){f();return}}const J=document.querySelector(".product-modal-content"),P=document.querySelector("body");function K(t){const e={openModalBtn:t,closeModalBtn:document.querySelector(".product-modal-close"),modal:document.querySelector(".product-backdrop")};e.openModalBtn.addEventListener("click",a);function a(n){n.target.tagName!=="BUTTON"&&(P.style.overflow="hidden",e.modal.classList.remove("is-hidden"),R(n.currentTarget),window.addEventListener("keydown",s),e.closeModalBtn.addEventListener("click",s))}function s(n){(n.key==="Escape"||n.currentTarget===e.closeModalBtn)&&(P.style.overflow="visible",J.innerHTML=`
      <div class="product-modal-content">Loading...</div>
      `,e.modal.classList.add("is-hidden"),window.removeEventListener("keydown",s),e.closeModalBtn.removeEventListener("click",s))}}function R(t){B(t.id).then(({data:e})=>{const a=document.querySelector(".product-modal-content");a.innerHTML=V(e)}).catch(e=>console.log(e))}function V(t){return`
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
            src="${$}"
            alt="shop-icon"
          />
        </button>
             <button class="all-product-btn btn-check buy-btn js-btn-second-ico" type="button">
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
  `}const j=document.querySelector(".product-list"),L=document.querySelector(".pagination");function l(t){L.classList.remove("visually-hidden"),j.innerHTML=W(t.results),document.querySelectorAll(".product-modal-open").forEach(a=>{a.addEventListener("click",K(a))})}function W(t){return t.map(({_id:e,name:a,img:s,category:n,price:g,size:h,is10PercentOff:y,popularity:M})=>`
        <li class="all-product-card product-modal-open js-product-card" id="${e}" data-id=${e}>
          <div>
            <img
              class="all-discount-svg ${y.toString().replace("false","visually-hidden").replace("true","")}"
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
                ${n.replaceAll("_"," ")}
              </p>
              <p class="all-info-item">
                <span class="all-info-title"> Size: </span>
                ${h}
              </p>
              <p class="all-info-item">
                <span class="all-info-title"> Popularity: </span>
                ${M}
              </p>
            </div>
          </div>
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${g}</h3>
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
                src="${b}"
                alt="shop-icon"
                width="18"
                height="18"
              />

            </button>
          </div>
        </li>
        `).join("")}function X(t){t.preventDefault(),m().then(({data:e})=>{l(e)}).catch(e=>console.log(e)),c.reset(),f(),v()}function u(){const t=`
  <div class="product-search-error">
  <h3 class="product-search-title header-three">Nothing was found for the selected <a href="" class="product-search-link link js-link">filters...</a></h3>
  <p class="product-search-text">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
  </div>
  `;j.innerHTML=t,document.querySelector(".js-link").addEventListener("click",X),L.classList.add("visually-hidden")}const Y=document.getElementById("tui-pagination-container");new k(Y,{});C().then(({data:t})=>{F(t),p()}).catch(t=>console.log(t));m().then(({data:t,data:{perPage:e,totalPages:a}})=>{l(t),p();const s=document.getElementById("tui-pagination-container");new k(s,{totalItems:e*a,itemsPerPage:e,visiblePages:5,centerAlign:!0,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).on("beforeMove",async g=>{const h=g.page;try{const{data:y}=await r({page:h,limitPerPage:e});l(y),p()}catch(y){console.log(y)}})});q().then(({data:t})=>{x(t),p()}).catch(t=>console.log(t));E().then(({data:t})=>{N(t.toString().replaceAll("_"," ").split(",")),p()}).catch(t=>console.log(t));document.getElementById("loader-container");document.querySelector(".main");const tt=document.querySelector(".js-main-container");tt.addEventListener("click",t=>{if(t.target.classList.contains("js-buy-btn")){let e=t.target.closest(".js-product-card");T(e.dataset.id),p(),document.querySelector(".js-cart-numbers").textContent=S().products.length}});function et(t){const e=document.querySelectorAll(`.js-product-card[data-id="${t}"]`);e.length&&e.forEach(a=>{const s=a.querySelector(".js-buy-btn");s.style.backgroundColor="#6D8434",s.style.cursor="default",s.querySelector(".js-btn-first-ico").style.display="none",s.querySelector(".js-btn-second-ico").style.display="block",s.disabled=!0})}function p(){S().products.forEach(t=>{et(t.id)})}
//# sourceMappingURL=commonHelpers2.js.map
