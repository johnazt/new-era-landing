import { features } from './data.js';

const featuresHTML = ({title, text, image, alt}) => {
  return `
    <div class="features__item">
      <h3 class="features__item-title fs--lg">${title}</h3>
      <p class="features__item-text">${text}</p>
      <img class="features__item-image" src=${image} alt=${alt}>
    </div>
  `
}

const renderFeaturesHTML = () => {
  const container = document.getElementById('features__grid');
  const fragment = document.createDocumentFragment();

  const featuresElements = features.map(feature => {
    const div = document.createElement('div')
    div.innerHTML = featuresHTML(feature).trim();
    return div.firstChild;
  })

  featuresElements.forEach(feature => {
    fragment.appendChild(feature)
  })

  container.appendChild(fragment)
}


renderFeaturesHTML()