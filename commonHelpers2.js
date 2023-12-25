import{s as C,a as d,b as c,c as b,d as S,e as $}from"./assets/sprite-163abfe1.js";import"./assets/vendor-a61d8330.js";const f="/Second_Team-project-2023/assets/discount-1f26b8b0.svg",T=document.querySelector(".popular-product-list");function q(t){T.insertAdjacentHTML("beforeend",_(t))}function _(t){return t.map(({_id:e,name:a,img:n,category:r,size:g,popularity:h})=>`
          <li class="popular-product-item" id="${e}">
         <img class="discount-svg" src="${f}" alt="discount-icon" width="60" height="60"/>
            <img src="${n}" alt="${a}" width="56" height="56" loading="lazy" class="popular-product-pic" />
            <div class="popular-product-info">
            <h3 class="popular-product-name">${a}</h3>
              <div class="info-item-description">
              <p class="info-item">
              <span class="info-title"> Category: </span>
              ${r.replace("_"," ")}
            </p>
            <p class="info-item">
              <span class="info-title"> Size: </span>
              ${g}
            </p>
            <p class="info-item-pop">
              <span class="info-title"> Popularity: </span>
              ${h}
            </p>
            </div>
            </div>
            <div class="popular-btn">
            <button type="button" class="popular-buy buy-btn" onclick="addToCart('${e}')">
            <svg class="img-icon"  width="12" height="12">
            <use href="${C}#icon-shopping-cart"></use></svg>
            </button>
            </div>
          </li>
      `).join("")}window.addToCart=function(t){const e=JSON.parse(localStorage.getItem("cart"))||{};if(e[t])alert("This product is already in your cart!");else{e[t]=!0,localStorage.setItem("cart",JSON.stringify(e)),alert("Product added to cart!");const a=document.querySelector(`[data-product-id="${t}"]`);a.innerHTML='<svg class="img-icon" width="12" height="12"><use href="${shoppingSvg}#check-icon"></use></svg>',a.disabled=!0}};const P="/Second_Team-project-2023/assets/shopping-cart-a18eb96b.svg",j=document.querySelector(".discount-products-item");function M(t){j.insertAdjacentHTML("beforeend",N(t))}function N(t){return t.map(({_id:e,name:a,img:n,price:r})=>`
        <li class="discount-product">
         <div class="discount-card" id="${e}">
         <img class="discount-svg" src="${f}" alt="discount-icon" width="60" height="60"/>
            <img id="icondiscount" class="discount-img"src="${n}" alt="${a}" loading="lazy">
            <div class="discount-text">
            <div class="discount-text-item">
                <h3 class="discount-name">${a}</h3>
                </div>
                <div class=discount-price-item>
                <p class="discount-price">&#36;${r}</p>
                <button class="discount-buy buy-btn" type="button">
                <img class="discount-buy-svg" src="${P}" alt="shop-icon" width="18" height="18"/>
  </svg>
</button>
</div> 
            </div>
            </div>
        </li>
    `).splice(0,2).join("")}let I={email:"",products:[]};function p(){const t={keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:6};return localStorage.setItem("filterParams",JSON.stringify(t)),l()}function i(t){localStorage.setItem("filterParams",JSON.stringify(t))}JSON.parse(localStorage.getItem("shoppingCartItems"))||localStorage.setItem("shoppingCartItems",JSON.stringify(I));function B(){return JSON.parse(localStorage.getItem("shoppingCartItems")).products.length}function l(){return JSON.parse(localStorage.getItem("filterParams"))}const E=document.querySelector(".cart-number");E.insertAdjacentHTML("beforeend",B());const u=document.querySelector("#filterForm");u.addEventListener("submit",O);const D=document.querySelector("#categories");u.elements.filterCategories.addEventListener("change",J);u.elements.filterMethod.addEventListener("change",H);let o;function y(){o=l()?l():p()}y();function x(t){D.insertAdjacentHTML("afterbegin",F(t))}function F(t){const e=t.map(a=>`
    <option value="${a}" class="js-option">${a}</option>
    `);return e.unshift('<option value="" disabled selected>Categories</option>'),e.join("")}function O(t){t.preventDefault();const{filterInput:e,filterCategories:a}=t.target.elements;z(e,a)}function z(t,e){t.value.trim().length?t.value.trim()?(o.keyword=t.value.trim(),e.value!==""&&(o.category=e.value),i(o),c(l()).then(a=>{if(console.log(a),a.data.results.length)s(a.data);else if(!Array.isArray(a.data.results)||!a.data.results.length){w();return}}).catch(a=>console.log(a))):e.value&&(o.category=e.value.trim(),i(o),c(l()).then(a=>{if(a.data.results.length)s(a.data);else return}).catch(a=>console.log(a))):(p(),y(),d().then(({data:a})=>{s(a)}).catch(a=>console.log(a)),u.reset())}function J(t){t.preventDefault(),t.target.value==="Show all"&&(d().then(({data:e})=>{s(e)}).catch(e=>console.log(e)),u.reset()),o.category=t.target.value.replaceAll(" ","_").replaceAll("&","%26"),i(o),c(l()).then(e=>{if(e.data.results.length)s(e.data);else if(!Array.isArray(e.data.results)||!e.data.results.length){w();return}}).catch(e=>console.log(e))}function H(t){if(t.preventDefault(),t.target.value==="A_to_Z"||t.target.value==="Z_to_A"){t.target.value==="A_to_Z"?o.byABC=!0:o.byABC=!1,i(o),c(l()).then(e=>{if(e.data.results.length)s(e.data);else return}).catch(e=>console.log(e));return}else if(t.target.value==="Cheap"||t.target.value==="Expensive"){t.target.value==="Cheap"?o.byPrice=!0:o.byPrice=!1,i(o),c(l()).then(e=>{if(e.data.results.length)s(e.data);else return}).catch(e=>console.log(e));return}else if(t.target.value==="Popular"||t.target.value==="Not_popular"){t.target.value==="Not_popular"?o.byPopularity=!0:o.byPopularity=!1,i(o),c(l()).then(e=>{if(e.data.results.length)s(e.data);else return}).catch(e=>console.log(e));return}else if(t.target.value==="Show_all"){p();return}}const L=document.querySelector(".product-list");function s(t){L.innerHTML=Z(t.results)}function Z(t){return t.map(({_id:e,name:a,img:n,category:r,price:g,size:h,is10PercentOff:A,popularity:k})=>`
        <div class="all-product-card" id="${e}">
         <img class="all-discount-svg
         ${A.toString().replace("false","visually-hidden")}
          " 
        src="${f}" alt="discount-icon" width="60" height="60"/>
         <img src="${n}" alt="${a}" loading="lazy" class="all-product-pic" />
         <h3 class="all-product-name header-three">${a}</h3>
         <div class="all-product-info regular-text">
            <p class="all-info-item">
            <span class="all-info-title"> Category: </span>
            ${r.replaceAll("_"," ")}
            </p>
            <p class="all-info-item">
            <span class="all-info-title"> Size: </span>
            ${h}
            </p>
            <p class="all-info-item">
            <span class="all-info-title"> Popularity: </span>
            ${k}
            </p>
          </div>
          <div class="all-purchaise-box">
            <h3 class="all-product-price header-three">&#36;${g}</h3>
            <button class="all-product-btn buy-btn" type="button">
                <img class="all-buy-svg" src="${P}" alt="shop-icon" width="18" height="18"/>
               
            </button>
          </div>
        </div>
      `).join("")}function Q(t){t.preventDefault(),d().then(({data:e})=>{s(e)}).catch(e=>console.log(e)),u.reset(),p(),y()}function w(){const t=`<h3>Nothing was found for the selected <a href="" class="link js-link">filters...</a></h3>
  <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>`;L.innerHTML=t,document.querySelector(".js-link").addEventListener("click",Q)}function G(t){const e=document.querySelector(".modal-text");e.innerText=t;const a=document.querySelector("[data-modal]");a.classList.remove("is-hidden");const n=document.querySelector("[data-modal-close]");n.onclick=function(){a.classList.add("is-hidden")},window.onclick=function(r){r.target===a&&a.classList.add("is-hidden")}}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".subscription-form").addEventListener("submit",function(e){e.preventDefault();const a=document.querySelector(".footer-form-input").value;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a)){G("Будь ласка, введіть коректну адресу електронної пошти.");return}})});b().then(({data:t})=>{M(t)}).catch(t=>console.log(t));d().then(({data:t})=>{s(t)}).catch(t=>console.log(t));S().then(({data:t})=>{q(t)}).catch(t=>console.log(t));$().then(({data:t})=>{x(t.toString().replaceAll("_"," ").split(","))}).catch(t=>console.log(t));document.getElementById("loader-container");const v=document.querySelector(".main"),m=document.body;window.addEventListener("load",function(){const t=document.querySelector(".loader-container"),e=[b,d,S,$];v.classList.add("visually-hidden"),m.classList.add("no-scroll"),t.classList.remove("visually-hidden"),Promise.all(e.map(a=>a())).then(()=>{v.classList.remove("visually-hidden"),t.classList.add("visually-hidden"),m.classList.remove("no-scroll")}).catch(a=>{console.error("Error in asynchronous operation:",a),t.classList.add("visually-hidden"),m.classList.remove("no-scroll")})});
//# sourceMappingURL=commonHelpers2.js.map
