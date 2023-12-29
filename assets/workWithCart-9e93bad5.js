import{a as i}from"./vendor-8aa786c2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const I="https://food-boutique.b.goit.study/api/products",b="https://food-boutique.b.goit.study/api/subscription",S="categories",w="popular",C="discount",r={MAIN_URL:I,SECOND_URL:b,categories:S,popular:w,discount:C},h="/Second_Team-project-2023/assets/sprite-efb7e146.svg",p="/Second_Team-project-2023/assets/modal-sbscr@1x-min-21f87fae.png",N="/Second_Team-project-2023/assets/modal-sbscr@2x-min-2142accc.png";let $=1,m=6;async function J(){return window.innerWidth>=768&&(m=8,window.innerWidth>=1440&&(m=9)),await i(`${r.MAIN_URL}?page=${$}&limit=${m}`)}async function A(){return await i(`${r.MAIN_URL}/${r.popular}?limit=5`)}async function x(){return await i(`${r.MAIN_URL}/${r.discount}`)}async function T(t){return await i(`${r.MAIN_URL}/${t}`)}async function k(t){return await i(`${r.MAIN_URL}/${t}`)}async function D(){return await i(`${r.MAIN_URL}/${r.categories}`)}async function R({keyword:t=null,category:o=null,byABC:a=null,byPrice:s=null,byPopularity:e=null,page:n=1,limitPerPage:l=6}){window.innerWidth>=1440?l=9:window.innerWidth>=768&&(l=8);let c="https://food-boutique.b.goit.study/api/products?";return t&&(c+=`keyword=${t}&`),o&&(c+=`category=${o}&`),a!==null&&(c+=`byABC=${a}&`),s!==null&&(c+=`byPrice=${s}&`),e!==null&&(c+=`byPopularity=${e}&`),c+=`page=${n}&limit=${l}`,console.log(c),await i(c)}async function v(t){return i.post(`${r.SECOND_URL}`,{email:t})}async function U(t){return await i.post("https://food-boutique.b.goit.study/api/orders",t)}function f(t,o){document.querySelector("[data-modal]").classList.remove("is-hidden")}const g=document.querySelector(".modal");function u(){document.querySelector("[data-modal]").classList.add("is-hidden")}const L=document.getElementById("subscriptionForm");L.addEventListener("submit",async function(t){t.preventDefault();const a=document.getElementById("emailInput").value;v(a).then(s=>{s.data,s.status===201&&(f(),g.innerHTML=P(),document.querySelector("[data-modal-close]").addEventListener("click",u))}).catch(s=>{s.response,s.response.status===409&&(f(),g.innerHTML=O(),document.querySelector("[data-modal-close]").addEventListener("click",u))})});function P(){return`
    <button class="modal-btn" type="button" data-modal-close>
      <svg class="modal-btn-icon" width="8" height="8">
        <use href="${h}#icon-Cross_close"></use>
      </svg>
    </button>
    <div class="modal-poshition-content">
      <h2 class="modal-title">Thanks for subscribing for <span class="modal-title-span">new</span> products</h2>
      <p class="modal-text">We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
    </div>
    <img
      class="modal-form-img"
      srcset="
        ${p},
        ${N}
      "
      src="${p}"
      alt="What are we doing"
      width="360"
      />
      </div>
  `}function O(){return`
    <button class="modal-btn" type="button" data-modal-close>
      <svg class="modal-btn-icon" width="8" height="8">
        <use href="${h}#icon-Cross_close"></use>
      </svg>
    </button>
    <div class="modal-poshition-content">
      <h2 class="modal-title">This <span class="modal-title-span">email address</span> has already been entered</h2>
       <p class="modal-text">You have already subscribed to our new products. Watch for offers at the mailing address.</p>

      </div>
  `}document.addEventListener("keydown",function(t){const o=document.querySelector("[data-modal]");t.key==="Escape"&&!o.classList.contains("is-hidden")&&u()});const y=document.querySelector("[data-modal]");y.addEventListener("click",function(t){t.target===y&&u()});let B={email:"",products:[]};function W(){const t={keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:6};return localStorage.setItem("filterParams",JSON.stringify(t)),q()}function F(t){localStorage.setItem("filterParams",JSON.stringify(t))}JSON.parse(localStorage.getItem("shoppingCartItems"))||localStorage.setItem("shoppingCartItems",JSON.stringify(B));function M(){return JSON.parse(localStorage.getItem("shoppingCartItems")).products.length}function d(){return JSON.parse(localStorage.getItem("shoppingCartItems"))}function q(){return JSON.parse(localStorage.getItem("filterParams"))}const _=document.querySelector(".cart-number");_.insertAdjacentHTML("beforeend",M());function j(t,o=1){const a=d();a.products.find(({id:s})=>s===t)||(a.products.push({id:t,amount:o}),localStorage.setItem("shoppingCartItems",JSON.stringify(a)))}function H(t,o){const a=d(),s=a.products.find(({id:e})=>e===t);s&&(s.amount=o,localStorage.setItem("shoppingCartItems",JSON.stringify(a)))}function Q(t){const o=d(),a=o.products.findIndex(({id:s})=>s===t);a!==-1&&(o.products.splice(a,1),localStorage.setItem("shoppingCartItems",JSON.stringify(o)))}function K(){const t=d();t.products=[],localStorage.setItem("shoppingCartItems",JSON.stringify(t))}function Y(t){const o=d();o.email=t,localStorage.setItem("shoppingCartItems",JSON.stringify(o))}export{K as a,k as b,Y as c,T as d,R as e,J as f,d as g,W as h,q as i,F as j,x as k,A as l,D as m,j as n,U as p,Q as r,h as s,H as u};
//# sourceMappingURL=workWithCart-9e93bad5.js.map
