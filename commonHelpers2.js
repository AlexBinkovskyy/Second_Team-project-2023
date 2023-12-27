import{s as L,d as y,e as h,f as p,h as d,i as r,j,k as w,l as k,m as M,n as C}from"./assets/workWithCart-ff7b8521.js";import{P as q}from"./assets/vendor-b592f4c5.js";const A="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",D=document.querySelector(".popular-product-list");function T(t){D.insertAdjacentHTML("beforeend",_(t))}function _(t){return t.map(({_id:e,name:a,img:n,category:s,size:c,popularity:i})=>`
          <li class="popular-product-item js-product-card" data-id="${e}">
            <img src="${n}" alt="${a}" width="56" height="56" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <div class="popular-product-info-btn">
            <h3 class="popular-product-name">${a}</h3>
           <button type="button" class="popular-buy buy-btn js-buy-btn">
            <svg class="img-icon"  width="12" height="12">
            <use href="${L}#icon-shopping-cart"></use></svg>
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
              ${c}
            </p>
            <p class="info-item-pop">
              <span class="info-title"> Popularity: </span>
              ${i}
            </p>
            </div>
            </div>
            </div>
          </li>
      `).join("")}const v="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",x="/Second_Team-project-2023/assets/check-ico-267a6277.svg",F=document.querySelector(".discount-products-item");function z(t){F.insertAdjacentHTML("beforeend",H(t))}function H(t){return t.map(({_id:e,name:a,img:n,price:s})=>`
        <li class="discount-product">
         <div class="discount-card js-product-card"  data-id="${e}" id="${e}">
         <img class="discount-svg" src="${A}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${n}" alt="${a}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${a}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${s}</p>
                <button class="discount-buy buy-btn click-buy js-buy-btn" type="button">
                <img class="discount-buy-svg" src="${v}" alt="shop-icon" width="18" height="18"/>
            
</button>
           <button class="discount-check " type="button">
                <img class="discount-check-svg" src="${x}" alt="shop-icon" width="18" height="18"/>
            
</button>
</div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}const u=document.querySelector("#filterForm");u.addEventListener("submit",Z);const I=document.querySelector("#single");u.elements.filterCategories.addEventListener("change",G);u.elements.filterMethod.addEventListener("change",R);let o;async function f(){r()?(o=r(),o.keyword!==null?(u.filterInput.value=o.keyword,await d(r()).then(t=>{if(console.log(t),t.data.results.length)l(t.data);else if(!Array.isArray(t.data.results)||!t.data.results.length){g();return}})):o.category):y()}f();function N(t){I.insertAdjacentHTML("afterbegin",O(t))}function O(t){const e=t.map(a=>`
    <option value="${a}" class="js-option">${a}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function Z(t){t.preventDefault();const{filterInput:e,filterCategories:a}=t.target.elements;Q(e,a)}function Q(t,e){t.value.trim().length?t.value.trim()?(o.keyword=t.value.trim(),e.value!==""&&(o.category=e.value),p(o),d(r()).then(a=>{if(console.log(a),a.data.results.length)l(a.data);else if(!Array.isArray(a.data.results)||!a.data.results.length){g();return}}).catch(a=>console.log(a))):e.value&&(o.category=e.value.trim(),p(o),d(r()).then(a=>{if(a.data.results.length)l(a.data);else return}).catch(a=>console.log(a))):(y(),f(),h().then(({data:a})=>{l(a)}).catch(a=>console.log(a)),u.reset())}function G(t){t.preventDefault(),t.target.value==="Show all"&&(h().then(({data:e})=>{l(e)}).catch(e=>console.log(e)),u.reset()),o.category=t.target.value.replaceAll(" ","_").replaceAll("&","%26"),p(o),d(r()).then(e=>{if(e.data.results.length)l(e.data);else if(!Array.isArray(e.data.results)||!e.data.results.length){g();return}}).catch(e=>console.log(e))}function R(t){if(t.preventDefault(),t.target.value==="Show_all"&&(y(),f(),h().then(({data:e})=>{l(e)}).catch(e=>console.log(e)),u.reset()),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?o.byABC=!0:o.byABC=!1,o.byPrice=null,o.byPopularity=null,p(o),d(r()).then(e=>{if(e.data.results.length)l(e.data);else{g();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?o.byPrice=!0:o.byPrice=!1,o.byABC=null,o.byPopularity=null,p(o),d(r()).then(e=>{if(e.data.results.length)l(e.data);else{g();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?o.byPopularity=!0:o.byPopularity=!1,o.byABC=null,o.byPrice=null,p(o),d(r()).then(e=>{if(e.data.results.length)l(e.data);else{g();return}}).catch(e=>console.log(e));return}else if(t.target.value==="Show_all"){y();return}}const J=document.querySelector(".product-modal-content"),$=document.querySelector("body");function K(t){const e={openModalBtn:t,closeModalBtn:document.querySelector(".product-modal-close"),modal:document.querySelector(".product-backdrop")};e.openModalBtn.addEventListener("click",a),e.closeModalBtn.addEventListener("click",n);function a(s){const c=document.querySelector(".all-product-btn"),i=document.querySelector(".all-buy-svg");s.target===c||s.target===i||($.style.overflow="hidden",e.modal.classList.remove("is-hidden"),U(s.currentTarget))}function n(){$.style.overflow="visible",J.innerHTML=`
    <div class="product-modal-content">Loading...</div>
    `,e.modal.classList.add("is-hidden")}}function U(t){j(t.id).then(({data:e})=>{const a=document.querySelector(".product-modal-content");a.innerHTML=V(e)}).catch(e=>console.log(e))}function V(t){return`
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
            src="${v}"
            alt="shop-icon"
            width="18"
            height="18"
          />
        </button>
      </div>
    </div>
  `}const B=document.querySelector(".product-list");function l(t){B.innerHTML=W(t.results),document.querySelectorAll(".product-modal-open").forEach(a=>{a.addEventListener("click",K(a))})}function W(t){return t.map(({_id:e,name:a,img:n,category:s,price:c,size:i,is10PercentOff:m,popularity:E})=>`
        <li class="all-product-card product-modal-open  js-product-card" id="${e}" data-id=${e}>
            <img
              class="all-discount-svg ${m.toString().replace("false","visually-hidden").replace("true","")}"
              src="${A}"
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
                ${i}
              </p>
              <p class="all-info-item">
                <span class="all-info-title"> Popularity: </span>
                ${E}
              </p>
            </div>
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${c}</h3>
            <button class="all-product-btn buy-btn js-buy-btn" type="button">
              <img
                class="all-buy-svg"
                src="${v}"
                alt="shop-icon"
                width="18"
                height="18"
              />
            </button>
          </div>
        </li>
        `).join("")}function X(t){t.preventDefault(),h().then(({data:e})=>{l(e)}).catch(e=>console.log(e)),u.reset(),y(),f()}function g(){const t=`<h3>Nothing was found for the selected <a href="" class="link js-link">filters...</a></h3>
  <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>`;B.innerHTML=t,document.querySelector(".js-link").addEventListener("click",X)}function S(t,e){const a=document.querySelector(".modal-text");a.textContent=`Error ${t}: ${e}`,Y()}function Y(){document.querySelector(".backdrop").classList.toggle("is-hidden")}function tt(){const t=document.querySelector(".subscription-form");t.addEventListener("submit",async e=>{e.preventDefault();const n=new FormData(t).get("email");try{const s=`https://food-boutique.b.goit.study/api/subscription?email=${n}`,c=await fetch(s,{method:"GET",headers:{"Content-Type":"application/json"}});if(c.ok){const i=await c.json();console.log("Data retrieved successfully:",i),et(i)}else{const i=await c.json();S(c.status,i.message)}}catch(s){console.error("Error occurred:",s),S(500,"Server error")}})}function et(t){const e=document.querySelector(".subscription-info");e&&(e.textContent=t.message)}tt();const at=document.getElementById("tui-pagination-container");new q(at,{});w().then(({data:t})=>{z(t)}).catch(t=>console.log(t));h().then(({data:t,data:{perPage:e,totalPages:a}})=>{l(t);const n=document.getElementById("tui-pagination-container");new q(n,{totalItems:e*a,itemsPerPage:e,visiblePages:5,centerAlign:!0,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).on("beforeMove",async c=>{const i=c.page;try{const{data:m}=await d({page:i,limitPerPage:e});l(m)}catch(m){console.log(m)}})});k().then(({data:t})=>{T(t)}).catch(t=>console.log(t));M().then(({data:t})=>{N(t.toString().replaceAll("_"," ").split(","))}).catch(t=>console.log(t));document.getElementById("loader-container");const P=document.querySelector(".main"),b=document.body;window.addEventListener("load",function(){const t=document.querySelector(".loader-container"),e=[w,h,k,M];P.classList.add("visually-hidden"),b.classList.add("no-scroll"),t.classList.remove("visually-hidden"),Promise.all(e.map(a=>a())).then(()=>{P.classList.remove("visually-hidden"),t.classList.add("visually-hidden"),b.classList.remove("no-scroll")}).catch(a=>{console.error("Error in asynchronous operation:",a),t.classList.add("visually-hidden"),b.classList.remove("no-scroll")})});const ot=document.querySelector(".js-main-container");ot.addEventListener("click",t=>{if(t.target.classList.contains("js-buy-btn")){let e=t.target.closest(".js-product-card");C(e.dataset.id),st(e.dataset.id)}});function st(t){const e=document.querySelectorAll(`.js-product-card[data-id="${t}"]`),a="";console.log(e),e.forEach(n=>{const s=n.querySelector(".js-buy-btn");s.innerHTML=`<svg class="img-icon" width="12" height="12" style="stroke:"#fff""><use href="${L}#${a}"></use></svg>`,s.disabled=!0})}
//# sourceMappingURL=commonHelpers2.js.map
