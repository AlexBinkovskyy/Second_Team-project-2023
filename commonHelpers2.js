import{s as S,d as y,e as h,f as p,h as i,i as c,j as C,k as L,l as w,m as k,n as E}from"./assets/workWithCart-ff7b8521.js";import{P as M}from"./assets/vendor-b592f4c5.js";const A="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",_=document.querySelector(".popular-product-list");function j(t){_.insertAdjacentHTML("beforeend",T(t))}function T(t){return t.map(({_id:e,name:a,img:l,category:s,size:d,popularity:u})=>`
          <li class="popular-product-item js-product-card" data-id="${e}">
            <img src="${l}" alt="${a}" width="56" height="56" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <div class="popular-product-info-btn">
            <h3 class="popular-product-name">${a}</h3>
           <button type="button" class="popular-buy buy-btn js-buy-btn">
            <svg class="img-icon"  width="12" height="12">
            <use href="${S}#icon-shopping-cart"></use></svg>
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
              ${d}
            </p>
            <p class="info-item-pop">
              <span class="info-title"> Popularity: </span>
              ${u}
            </p>
            </div>
            </div>
            </div>
          </li>
      `).join("")}const b="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",x="/Second_Team-project-2023/assets/check-ico-267a6277.svg",z=document.querySelector(".discount-products-item");function D(t){z.insertAdjacentHTML("beforeend",F(t))}function F(t){return t.map(({_id:e,name:a,img:l,price:s})=>`
        <li class="discount-product">
         <div class="discount-card js-product-card"  data-id="${e}" id="${e}">
         <img class="discount-svg" src="${A}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${l}" alt="${a}" loading="lazy">
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
                <img class="discount-check-svg" src="${x}" alt="shop-icon" width="18" height="18"/>
            
</button>
</div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}const r=document.querySelector("#filterForm");r.addEventListener("submit",N);const H=document.querySelector("#single");r.elements.filterCategories.addEventListener("change",Q);r.elements.filterMethod.addEventListener("change",G);let o;async function f(){c()?(o=c(),o.keyword!==null?(r.filterInput.value=o.keyword,await i(c()).then(t=>{if(console.log(t),t.data.results.length)n(t.data);else if(!Array.isArray(t.data.results)||!t.data.results.length){g();return}})):o.category):y()}f();function I(t){H.insertAdjacentHTML("afterbegin",Z(t))}function Z(t){const e=t.map(a=>`
    <option value="${a}" class="js-option">${a}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function N(t){t.preventDefault();const{filterInput:e,filterCategories:a}=t.target.elements;O(e,a)}function O(t,e){t.value.trim().length?t.value.trim()?(o.keyword=t.value.trim(),e.value!==""&&(o.category=e.value),p(o),i(c()).then(a=>{if(console.log(a),a.data.results.length)n(a.data);else if(!Array.isArray(a.data.results)||!a.data.results.length){g();return}}).catch(a=>console.log(a))):e.value&&(o.category=e.value.trim(),p(o),i(c()).then(a=>{if(a.data.results.length)n(a.data);else return}).catch(a=>console.log(a))):(y(),f(),h().then(({data:a})=>{n(a)}).catch(a=>console.log(a)),r.reset())}function Q(t){t.preventDefault(),t.target.value==="Show all"&&(h().then(({data:e})=>{n(e)}).catch(e=>console.log(e)),r.reset()),o.category=t.target.value.replaceAll(" ","_").replaceAll("&","%26"),p(o),i(c()).then(e=>{if(e.data.results.length)n(e.data);else if(!Array.isArray(e.data.results)||!e.data.results.length){g();return}}).catch(e=>console.log(e))}function G(t){if(t.preventDefault(),t.target.value==="Show_all"&&(y(),f(),h().then(({data:e})=>{n(e)}).catch(e=>console.log(e)),r.reset()),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?o.byABC=!0:o.byABC=!1,o.byPrice=null,o.byPopularity=null,p(o),i(c()).then(e=>{if(e.data.results.length)n(e.data);else{g();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?o.byPrice=!0:o.byPrice=!1,o.byABC=null,o.byPopularity=null,p(o),i(c()).then(e=>{if(e.data.results.length)n(e.data);else{g();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?o.byPopularity=!0:o.byPopularity=!1,o.byABC=null,o.byPrice=null,p(o),i(c()).then(e=>{if(e.data.results.length)n(e.data);else{g();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Show_all"){y();return}}const J=document.querySelector(".product-modal-content"),$=document.querySelector("body");function K(t){const e={openModalBtn:t,closeModalBtn:document.querySelector(".product-modal-close"),modal:document.querySelector(".product-backdrop")};e.openModalBtn.addEventListener("click",a),e.closeModalBtn.addEventListener("click",l);function a(s){const d=document.querySelector(".all-product-btn"),u=document.querySelector(".all-buy-svg");s.target===d||s.target===u||($.style.overflow="hidden",e.modal.classList.remove("is-hidden"),R(s.currentTarget))}function l(){$.style.overflow="visible",J.innerHTML=`
    <div class="product-modal-content">Loading...</div>
    `,e.modal.classList.add("is-hidden")}}function R(t){C(t.id).then(({data:e})=>{const a=document.querySelector(".product-modal-content");a.innerHTML=U(e)}).catch(e=>console.log(e))}function U(t){return`
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
        <button class="modal-product-btn buy-btn js-buy-btn" type="button">
          <p class="modal-product-btn-text">Add to</p>
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
  `}const q=document.querySelector(".product-list");function n(t){q.innerHTML=V(t.results),document.querySelectorAll(".product-modal-open").forEach(a=>{a.addEventListener("click",K(a))})}function V(t){return t.map(({_id:e,name:a,img:l,category:s,price:d,size:u,is10PercentOff:m,popularity:B})=>`
        <li class="all-product-card product-modal-open  js-product-card" id="${e}" data-id=${e}>
            <img
              class="all-discount-svg ${m.toString().replace("false","visually-hidden").replace("true","")}"
              src="${A}"
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
                ${u}
              </p>
              <p class="all-info-item">
                <span class="all-info-title"> Popularity: </span>
                ${B}
              </p>
            </div>
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${d}</h3>
            <button class="all-product-btn buy-btn js-buy-btn" type="button">
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
        `).join("")}function W(t){t.preventDefault(),h().then(({data:e})=>{n(e)}).catch(e=>console.log(e)),r.reset(),y(),f()}function g(){const t=`<h3>Nothing was found for the selected <a href="" class="link js-link">filters...</a></h3>
  <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>`;q.innerHTML=t,document.querySelector(".js-link").addEventListener("click",W)}function X(t){const e=document.querySelector(".modal-text");e.innerText=t;const a=document.querySelector("[data-modal]");a.classList.remove("is-hidden");const l=document.querySelector("[data-modal-close]");l.onclick=function(){a.classList.add("is-hidden")},window.onclick=function(s){s.target===a&&a.classList.add("is-hidden")}}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".subscription-form").addEventListener("submit",function(e){e.preventDefault();const a=document.querySelector(".footer-form-input").value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a)){X("Будь ласка, введіть коректну адресу електронної пошти.");return}})});const Y=document.getElementById("tui-pagination-container");new M(Y,{});L().then(({data:t})=>{D(t)}).catch(t=>console.log(t));h().then(({data:t,data:{perPage:e,totalPages:a}})=>{n(t);const l=document.getElementById("tui-pagination-container");new M(l,{totalItems:e*a,itemsPerPage:e,visiblePages:5,centerAlign:!0,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).on("beforeMove",async d=>{const u=d.page;try{const{data:m}=await i({page:u,limitPerPage:e});n(m)}catch(m){console.log(m)}})});w().then(({data:t})=>{j(t)}).catch(t=>console.log(t));k().then(({data:t})=>{I(t.toString().replaceAll("_"," ").split(","))}).catch(t=>console.log(t));document.getElementById("loader-container");const P=document.querySelector(".main"),v=document.body;window.addEventListener("load",function(){const t=document.querySelector(".loader-container"),e=[L,h,w,k];P.classList.add("visually-hidden"),v.classList.add("no-scroll"),t.classList.remove("visually-hidden"),Promise.all(e.map(a=>a())).then(()=>{P.classList.remove("visually-hidden"),t.classList.add("visually-hidden"),v.classList.remove("no-scroll")}).catch(a=>{console.error("Error in asynchronous operation:",a),t.classList.add("visually-hidden"),v.classList.remove("no-scroll")})});const tt=document.querySelector(".js-main-container");tt.addEventListener("click",t=>{if(t.target.classList.contains("js-buy-btn")){let e=t.target.closest(".js-product-card");E(e.dataset.id),et(e.dataset.id)}});function et(t){const e=document.querySelectorAll(`.js-product-card[data-id="${t}"]`),a="";console.log(e),e.forEach(l=>{const s=l.querySelector(".js-buy-btn");s.innerHTML=`<svg class="img-icon" width="12" height="12" style="stroke:"#fff""><use href="${S}#${a}"></use></svg>`,s.disabled=!0})}
//# sourceMappingURL=commonHelpers2.js.map
