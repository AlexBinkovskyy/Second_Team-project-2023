import{a as l}from"./assets/vendor-a61d8330.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const d="https://food-boutique.b.goit.study/api/products/",p="categories",f="popular",m="discount",c={MAIN_URL:d,categories:p,popular:f,discount:m};let g=1,y=6;async function h(){return await l(`${c.MAIN_URL}?page=${g}&limit=${y}`)}async function $(){return await l(`${c.MAIN_URL}/${c.discount}`)}const b=document.querySelector(".discount-products-item");function L(e){b.insertAdjacentHTML("beforeend",P(e))}function P(e){return e.map(({name:s,img:n,price:r})=>`
        <li class="discount-card">
            <img src="${n}" alt="${s}">
            <div class="discount-text">
                <h3 class="discount-name">${s}</h3>
                <p class="discount-price">$${r}</p> 
            </div>
        </li>
    `).join("")}const v=document.querySelector(".product-list");function M(e){v.insertAdjacentHTML("beforeend",N(e.results))}function N(e){return e.map(({_id:s,name:n,img:r,category:t,price:o,size:i,is10PercentOff:A,popularity:u})=>`
        <div class="product-card" id="${s}">
        <img src="${r}" alt="${n}" loading="lazy" class="product-pic" />
        <h3 class="product-name">${n}</h3>
        <div class="product-info">
            <p class="info-item">
            <span class="info-title"> Category: </span>
            ${t}
            </p>
            <p class="info-item">
            <span class="info-title"> Size: </span>s
            ${i}
            </p>
            <p class="info-item">
            <span class="info-title"> Popularity: </span>
            ${u}
            </p>
        </div>
        <h3 class="product-price">&#36;${o}</h3>
        <button type="button" calss="buy-btn">Buy</button>
        </div>
      `).join("")}let a={keyword:null,category:null,page:1,limit:6};localStorage.setItem(a,JSON.stringify(a));$().then(({data:e})=>{L(e)}).catch(e=>console.log(e));h().then(({data:e})=>{M(e)}).catch(e=>console.log(e));
//# sourceMappingURL=commonHelpers.js.map
