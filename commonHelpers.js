import{a}from"./assets/vendor-a61d8330.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const u="https://food-boutique.b.goit.study/api/products/",d="categories",p="popular",f="discount",c={MAIN_URL:u,categories:d,popular:p,discount:f};let g=1,m=6;async function y(){return await a(`${c.MAIN_URL}?page=${g}&limit=${m}`)}async function h(){return await a(`${c.MAIN_URL}/${c.discount}`)}async function $(){return await a(`${c.MAIN_URL}/${c.categories}`)}const S=document.querySelector(".discount-products-item");function b(t){S.insertAdjacentHTML("beforeend",I(t))}function I(t){return t.map(({name:n,img:r,price:s})=>`
        <li class="discount-card">
            <img src="${r}" alt="${n}">
            <div class="discount-text">
                <h3 class="discount-name">${n}</h3>
                <p class="discount-price">$${s}</p> 
            </div>
        </li>
    `).join("")}const L=document.querySelector(".product-list");function P(t){L.insertAdjacentHTML("beforeend",N(t.results))}function N(t){return t.map(({_id:n,name:r,img:s,category:e,price:o,size:i,is10PercentOff:q,popularity:l})=>`
        <div class="product-card" id="${n}">
        <img src="${s}" alt="${r}" loading="lazy" class="product-pic" />
        <h3 class="product-name">${r}</h3>
        <div class="product-info">
            <p class="info-item">
            <span class="info-title"> Category: </span>
            ${e}
            </p>
            <p class="info-item">
            <span class="info-title"> Size: </span>s
            ${i}
            </p>
            <p class="info-item">
            <span class="info-title"> Popularity: </span>
            ${l}
            </p>
        </div>
        <h3 class="product-price">&#36;${o}</h3>
        <button type="button" calss="buy-btn">Buy</button>
        </div>
      `).join("")}document.querySelector("#filterForm");const v=document.querySelector("#categories");function C(t){v.insertAdjacentHTML("beforeend",M(t))}function M(t){const n=t.map(r=>`
    <option value="${r}" class="js-option">${r}</option>
    `);return n.unshift('<option value="" disabled selected>Categories</option>'),n.join("")}let O={keyword:null,category:null,page:1,limit:6},A=[];localStorage.setItem("filterParams",JSON.stringify(O));JSON.parse(localStorage.getItem("shoppingCartItems"))||localStorage.setItem("shoppingCartItems",JSON.stringify(A));function j(){return JSON.parse(localStorage.getItem("shoppingCartItems")).length}console.log(j());h().then(({data:t})=>{b(t)}).catch(t=>console.log(t));y().then(({data:t})=>{P(t)}).catch(t=>console.log(t));$().then(({data:t})=>{C(t)}).catch(t=>console.log(t));
//# sourceMappingURL=commonHelpers.js.map
