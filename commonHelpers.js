import{a}from"./assets/vendor-a61d8330.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const u="https://food-boutique.b.goit.study/api/products/",d="categories",p="popular",f="discount",m={MAIN_URL:u,categories:d,popular:p,discount:f};let g=1,y=6;async function h(){return await a(`${m.MAIN_URL}?page=${g}&limit=${y}`)}const b=document.querySelector(".product-list");function $(o){b.insertAdjacentHTML("beforeend",L(o.results))}function L(o){return o.map(({_id:r,name:i,img:n,category:e,price:t,size:s,is10PercentOff:P,popularity:l})=>`
        <div class="product-card" id="${r}">
        <img src="${n}" alt="${i}" loading="lazy" class="product-pic" />
        <h3 class="product-name">${i}</h3>
        <div class="product-info">
            <p class="info-item">
            <span class="info-title"> Category: </span>
            ${e}
            </p>
            <p class="info-item">
            <span class="info-title"> Size: </span>s
            ${s}
            </p>
            <p class="info-item">
            <span class="info-title"> Popularity: </span>
            ${l}
            </p>
        </div>
        <h3 class="product-price">&#36;${t}</h3>
        <button type="button" calss="buy-btn">Buy</button>
        </div>
      `).join("")}let c={keyword:null,category:null,page:1,limit:6};localStorage.setItem(c,JSON.stringify(c));h().then(({data:o})=>{$(o)}).catch(o=>console.log(o));
//# sourceMappingURL=commonHelpers.js.map
