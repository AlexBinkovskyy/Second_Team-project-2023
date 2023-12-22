import{a as l}from"./assets/vendor-a61d8330.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="https://food-boutique.b.goit.study/api/products/",a="categories",f="popular",p="discount",c={MAIN_URL:d,categories:a,popular:f,discount:p};async function m(){return await l(`${c.MAIN_URL}/${c.discount}`)}const g=document.querySelector(".discount-products-item");function y(o){g.insertAdjacentHTML("beforeend",h(o))}function h(o){return o.map(({name:r,img:i,price:n})=>`
        <li class="discount-card">
            <img src="${i}" alt="${r}">
            <div class="discount-text">
                <h3 class="discount-name">${r}</h3>
                <p class="discount-price">$${n}</p> 
            </div>
        </li>
    `).join("")}let u={keyword:null,category:null,page:1,limit:6};localStorage.setItem(u,JSON.stringify(u));m().then(({data:o})=>{y(o)}).catch(o=>console.log(o));
//# sourceMappingURL=commonHelpers.js.map
