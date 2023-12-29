import{s as M,d as B,e as d,f as m,h as g,i as c,j as u,k as C,l as q,m as E,n as _,g as k}from"./assets/workWithCart-283d37ab.js";import{P as w}from"./assets/vendor-8aa786c2.js";const j="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",b="/Second_Team-project-2023/assets/check-ico-267a6277.svg",T=document.querySelector(".popular-product-list");async function x(t){T.insertAdjacentHTML("beforeend",D(t))}function D(t){return t.map(({_id:e,name:a,img:s,category:l,size:f,popularity:r})=>`
          <li class="popular-product-item product-modal-open js-product-card"  data-id="${e}" id="${e}">
            <img src="${s}" alt="${a}" width="56" height="56" loading="lazy" class="popular-product-pic"/>
            <div class="popular-product-info">
            <div class="popular-product-info-btn">
            <h3 class="popular-product-name">${a}</h3>
            <button type="button" class="popular-buy buy-btn js-buy-btn" >
              <svg class="img-icon js-btn-first-ico"  width="12" height="12">
                <use href="${M}#icon-shopping-cart"></use>
              </svg>
              <img class="popular-check-svg js-btn-second-ico" src="${b}" alt="shop-icon" width="12" height="12"/>
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
              ${f}
            </p>
            <p class="info-item-pop">
              <span class="info-title"> Popularity: </span>
              ${r}
            </p>
            </div>
            </div>
            </div>
          </li>
      `).join("")}const P="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",z=document.querySelector(".discount-products-item");function F(t){z.insertAdjacentHTML("beforeend",I(t))}function I(t){return t.map(({_id:e,name:a,img:s,price:l})=>`
        <li class="discount-product">
         <div class="discount-card product-modal-open js-product-card"  data-id="${e}" id="${e}">
         <img class="discount-svg" src="${j}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${s}" alt="${a}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${a}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${l}</p>
                <button class="discount-buy buy-btn click-buy js-buy-btn" type="button">
                    <img class="discount-buy-svg js-btn-first-ico" src="${P}" alt="shop-icon" width="18" height="18"/>
                    <img class="discount-check-svg js-btn-second-ico" src="${b}" alt="shop-icon" width="18" height="18"/>            
                </button>
        
                </div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}const H=document.querySelector(".product-modal-content"),S=document.querySelector("body");function N(t){const e={openModalBtn:t,closeModalBtn:document.querySelector(".product-modal-close"),modal:document.querySelector(".product-backdrop")};e.openModalBtn.addEventListener("click",a);function a(l){l.target.tagName!=="BUTTON"&&(S.style.overflow="hidden",e.modal.classList.remove("is-hidden"),O(l.currentTarget),window.addEventListener("keydown",s),e.closeModalBtn.addEventListener("click",s))}function s(l){(l.key==="Escape"||l.currentTarget===e.closeModalBtn)&&(S.style.overflow="visible",H.innerHTML=`
      <div class="product-modal-content">Loading...</div>
      `,e.modal.classList.add("is-hidden"),window.removeEventListener("keydown",s),e.closeModalBtn.removeEventListener("click",s))}}function O(t){B(t.id).then(({data:e})=>{const a=document.querySelector(".product-modal-content");a.innerHTML=Z(e)}).catch(e=>console.log(e))}function Z(t){return`
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
            src="${P}"
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
  `}const Q=document.getElementById("tui-pagination-container");new w(Q,{});const A=document.querySelector(".product-list"),L=document.querySelector(".pagination");function n({results:t,perPage:e,totalPages:a}){L.classList.remove("visually-hidden"),A.innerHTML=U(t),document.querySelectorAll(".product-modal-open").forEach(r=>{r.addEventListener("click",N(r))});const l=document.getElementById("tui-pagination-container");new w(l,{totalItems:e*a,itemsPerPage:e,visiblePages:5,centerAlign:!0,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).on("beforeMove",async r=>{const $=r.page;try{const{data:y}=await d({page:$,limitPerPage:e});n(y),h()}catch(y){console.log(y)}})}function U(t){return t.map(({_id:e,name:a,img:s,category:l,price:f,size:r,is10PercentOff:$,popularity:y})=>`
        <li class="all-product-card product-modal-open js-product-card" id="${e}" data-id=${e}>
          <div>
            <img
              class="all-discount-svg ${$.toString().replace("false","visually-hidden").replace("true","")}"
              src="${j}"
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
                ${r}
              </p>
              <p class="all-info-item">
                <span class="all-info-title"> Popularity: </span>
                ${y}
              </p>
            </div>
          </div>
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${f}</h3>
            <button class="all-product-btn buy-btn js-buy-btn" type="button">
              <img
                class="all-buy-svg js-btn-first-ico"
                src="${P}"
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
        `).join("")}function G(t){t.preventDefault(),m().then(({data:e})=>{n(e)}).catch(e=>console.log(e)),i.reset(),g(),v()}function p(){const t=`
  <div class="product-search-error">
  <h3 class="product-search-title header-three">Nothing was found for the selected <a href="" class="product-search-link link js-link">filters...</a></h3>
  <p class="product-search-text">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
  </div>
  `;A.innerHTML=t,document.querySelector(".js-link").addEventListener("click",G),L.classList.add("visually-hidden")}const i=document.querySelector("#filterForm");i.addEventListener("submit",V);const J=document.querySelector("#single");i.elements.filterCategories.addEventListener("change",X);i.elements.filterMethod.addEventListener("change",Y);let o;function v(){c()?(o=c(),o.keyword!==null&&(i.filterInput.value=o.keyword)):(g(),o=c())}v();d(c()).then(({data:t})=>{if(t.results.length)n(t),h();else if(!Array.isArray(t.results)||!t.results.length){p();return}});function K(t){if(J.innerHTML=R(t),o.category!==null){const e=i.filterCategories.options;for(const a of e)if(a.value.replaceAll(" ","_").replaceAll("&","%26")===o.category){a.selected=!0;break}}}function R(t){const e=t.map(a=>`
    <option value="${a}" class="js-option">${a}</option>
    `);return e.unshift('<option value="" class="js-option" disabled selected>Categories</option>'),e.push('<option value="Show all" class="js-option">Show all</option>'),e.join("")}function V(t){t.preventDefault();const{filterInput:e,filterCategories:a}=t.target.elements;W(e,a)}function W(t,e){t.value.trim().length?t.value.trim()?(o.keyword=t.value.trim(),e.value!==""&&(o.category=e.value.replaceAll(" ","_").replaceAll("&","%26")),u(o),d(c()).then(a=>{if(console.log(a),a.data.results.length)n(a.data);else if(!Array.isArray(a.data.results)||!a.data.results.length){p();return}}).catch(a=>console.log(a))):e.value&&(o.category=e.value.trim(),u(o),d(c()).then(a=>{if(a.data.results.length)n(a.data);else return}).catch(a=>console.log(a))):(g(),v(),m().then(({data:a})=>{n(a)}).catch(a=>console.log(a)),i.reset())}function X(t){t.preventDefault(),t.target.value==="Show all"&&(g(),i.reset(),m().then(({data:e})=>{n(e)}).catch(e=>console.log(e)),i.reset()),o.category=t.target.value.replaceAll(" ","_").replaceAll("&","%26"),u(o),d(c()).then(e=>{if(e.data.results.length)n(e.data);else if(!Array.isArray(e.data.results)||!e.data.results.length){p();return}}).catch(e=>console.log(e))}function Y(t){if(t.preventDefault(),t.target.value==="Show_all"&&(g(),v(),m().then(({data:e})=>{n(e)}).catch(e=>console.log(e)),i.reset()),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?o.byABC=!0:o.byABC=!1,o.byPrice=null,o.byPopularity=null,u(o),d(c()).then(e=>{if(e.data.results.length)n(e.data);else{p();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?o.byPrice=!0:o.byPrice=!1,o.byABC=null,o.byPopularity=null,u(o),d(c()).then(e=>{if(e.data.results.length)n(e.data);else{p();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?o.byPopularity=!0:o.byPopularity=!1,o.byABC=null,o.byPrice=null,u(o),d(c()).then(e=>{if(e.data.results.length)n(e.data);else{p();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Show_all"){g();return}}C().then(({data:t})=>{F(t),h()}).catch(t=>console.log(t));q().then(({data:t})=>{x(t),h()}).catch(t=>console.log(t));E().then(({data:t})=>{K(t.toString().replaceAll("_"," ").split(",")),h()}).catch(t=>console.log(t));document.getElementById("loader-container");document.querySelector(".main");const tt=document.querySelector(".js-main-container");tt.addEventListener("click",t=>{if(t.target.classList.contains("js-buy-btn")){let e=t.target.closest(".js-product-card");_(e.dataset.id),h(),document.querySelector(".js-cart-numbers").textContent=k().products.length}});function et(t){const e=document.querySelectorAll(`.js-product-card[data-id="${t}"]`);e.length&&e.forEach(a=>{const s=a.querySelector(".js-buy-btn");s.style.backgroundColor="#6D8434",s.style.cursor="default",s.querySelector(".js-btn-first-ico").style.display="none",s.querySelector(".js-btn-second-ico").style.display="block",s.disabled=!0})}function h(){k().products.forEach(t=>{et(t.id)})}
//# sourceMappingURL=commonHelpers2.js.map
