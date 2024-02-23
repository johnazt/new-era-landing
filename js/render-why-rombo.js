import { featuresRombo } from './data.js';


const featuresRomboHTML = ({ image, title, text }) => {
  return `<div class="why-rombo__item">
  <img class="why-rombo__item-icon" src=${image} alt=${title}>
  <h4 class="why-rombo__item-title">${title}</h4>
  <p class="why-rombo__item-text">${text}</p>
  </div>
  `;
}

const renderHTMLFeatures = () => {
  const container = document.getElementById('why-rombo__grid')
  const fragment = document.createDocumentFragment();

  const featuresElements = featuresRombo.map(feature => {
    const div = document.createElement('div');
    div.innerHTML = featuresRomboHTML(feature).trim();
    return div.firstChild;
  })
   featuresElements.forEach(element => {
    fragment.appendChild(element);
  });

  container.appendChild(fragment);
}


document.addEventListener("DOMContentLoaded", renderHTMLFeatures)