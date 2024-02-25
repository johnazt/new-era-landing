(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.querySelector(".levels__title");document.querySelector(".features__grid");new Swiper(".swiper",{direction:"horizontal",slidesPerView:2,spaceBetween:70,loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{700:{slidesPerView:4},900:{slidesPerView:6}}});const u=[{image:"images/power.svg",title:"AI-Powered Efficiency",text:"Boost your productivity and streamline workflows with Rombo's cutting-edge AI capabilities, delivering efficient results every time."},{image:"images/data-decisions.svg",title:"Data-Driven Decisions",text:"Empower your business with data-backed insights and make informed decisions to outperform your competition."},{image:"images/user-experience.svg",title:"Intuitive User Experience",text:"Experience a seamless and user-friendly interface that ensures a smooth AI-powered jouney for all users."},{image:"images/scalability.svg",title:"Scalability & Flexibility",text:"Rombo's agile architecture allows ease scalability, adapting to your business needs as you grow."},{image:"images/security-icon.svg",title:"Top-notch Security",text:"Rest easy knowing your data is protected with Rombo's robust security measures, safeguarding your information."},{image:"images/ai-solutions.svg",title:"Innovative AI Solutions",text:"Stay ahead of the curve with Rombo's continuous innovation, providing you with latest AI advancements."}],g=[{title:"MindSync",text:"Seamless AI-Powered Team Collaboration Solution",image:"images/mindsync.svg",alt:"mindsync-image"},{title:"SyncConnect",text:"AI-Powered Integrations Made Easy",image:"images/synconnect.svg",alt:"syncconnect-image"},{title:"RomboX",text:"Supercharge Your Business with AI",image:"images/waves.svg",alt:"rombox-image"},{title:"Integration AI",text:"AI-powered Integration Hub for Developers",image:"images/circle-wave.png",alt:"integration-image"},{title:"Shortcuts",text:"Keyboard Shortcuts for increased Productivity",image:"images/shortcuts.svg",alt:"shortcuts-image"}],p=[{customers:[{classname:"mary",comment:"Rombo's AI platform has been instrumental in driving data-driven success for our marketing strategies.With its advanced customers and tailor our campaigns for improved results!",name:"Mary Johnson",job:"CMO, InnovativeTech"},{classname:"david",comment:"Rombo's AI platform revolutionized our financial analysis. The actionable insights helped us make strategic decisions with confidence.",name:"David Smith",job:"CFO, LeadingEdge Enterprises"},{classname:"emily",comment:"We are truly impressed with Rombo's AI integrations, especially how they have boosted our customer support and loyalty. The AI chatbot has been a game-changer for enhancing our user experience!",name:"Emily White",job:"CEO, Ecommerce Emporium"}],number:"one"},{customers:[{classname:"mary",comment:"Rombo's AI platform has been instrumental in driving data-driven success for our marketing strategies.With its advanced customers and tailor our campaigns for improved results!",name:"Mary Johnson",job:"CMO, InnovativeTech"},{classname:"david",comment:"Rombo's AI platform revolutionized our financial analysis. The actionable insights helped us make strategic decisions with confidence.",name:"David Smith",job:"CFO, LeadingEdge Enterprises"},{classname:"emily",comment:"We are truly impressed with Rombo's AI integrations, especially how they have boosted our customer support and loyalty. The AI chatbot has been a game-changer for enhancing our user experience!",name:"Emily White",job:"CEO, Ecommerce Emporium"}],number:"two"},{customers:[{classname:"mary",comment:"Rombo's AI platform has been instrumental in driving data-driven success for our marketing strategies.With its advanced customers and tailor our campaigns for improved results!",name:"Mary Johnson",job:"CMO, InnovativeTech"},{classname:"david",comment:"Rombo's AI platform revolutionized our financial analysis. The actionable insights helped us make strategic decisions with confidence.",name:"David Smith",job:"CFO, LeadingEdge Enterprises"},{classname:"emily",comment:"We are truly impressed with Rombo's AI integrations, especially how they have boosted our customer support and loyalty. The AI chatbot has been a game-changer for enhancing our user experience!",name:"Emily White",job:"CEO, Ecommerce Emporium"}],number:"three"}],h=({image:i,title:a,text:o})=>`<div class="why-rombo__item">
  <img class="why-rombo__item-icon" src=${i} alt=${a}>
  <h4 class="why-rombo__item-title">${a}</h4>
  <p class="why-rombo__item-text">${o}</p>
  </div>
  `,f=()=>{const i=document.getElementById("why-rombo__grid"),a=document.createDocumentFragment();u.map(s=>{const e=document.createElement("div");return e.innerHTML=h(s).trim(),e.firstChild}).forEach(s=>{a.appendChild(s)}),i.appendChild(a)};document.addEventListener("DOMContentLoaded",f);const y=document.getElementById("customers__grid"),l=document.createDocumentFragment(),b=()=>{p.forEach(({number:i,customers:a})=>{const o=document.createElement("div");o.classList.add("customers__column",`customers__column-${i}`),a.forEach(s=>{const e=document.createElement("div");e.classList.add("customers__card",`customers__card-${s.classname}`);const t=document.createElement("p");t.classList.add("customers__card-text"),t.textContent=s.comment;const n=document.createElement("div");n.classList.add("customers__card-container-user");const r=document.createElement("div");r.classList.add("customers__card-brand",`customers__card-brand-${s.classname}`);const d=document.createElement("div");d.classList.add("customers__card-image",`customers__card-image-${s.classname}`);const c=document.createElement("p");c.classList.add("customers__card-name"),c.textContent=s.name;const m=document.createElement("span");m.classList.add("customers__card-job"),m.textContent=s.job,n.appendChild(r),n.appendChild(d),n.appendChild(c),n.appendChild(m),e.appendChild(t),e.appendChild(n),o.appendChild(e)}),l.appendChild(o)}),y.appendChild(l)};b();const v=({title:i,text:a,image:o,alt:s})=>{const e=document.createElement("div");e.classList.add("features__item");const t=document.createElement("h3");t.textContent=i,t.classList.add("features__item-title","fs--lg");const n=document.createElement("p");n.classList.add("features__item-text"),n.textContent=a;const r=document.createElement("img");return r.classList.add("features__item-image"),r.setAttribute("alt",s),r.src=o,e.appendChild(t),e.appendChild(n),e.appendChild(r),e},E=()=>{const i=document.getElementById("features__grid"),a=document.createDocumentFragment();g.forEach(o=>{const s=v(o);a.appendChild(s)}),i.appendChild(a)};E();
