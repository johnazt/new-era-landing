import { features } from './data.js';

const createFeatureElement = ({title, text, image, alt}) => {
  const featuresItem = document.createElement('div')
  featuresItem.classList.add('features__item');

  const titleEl = document.createElement('h3');
  titleEl.textContent = title
  titleEl.classList.add('features__item-title', 'fs--lg');

  const textEl = document.createElement('p');
  textEl.classList.add('features__item-text');
  textEl.textContent = text;

  const imageEl = document.createElement('img');
  imageEl.classList.add('features__item-image');
  imageEl.setAttribute('alt', alt);
  imageEl.src = image;

  featuresItem.appendChild(titleEl)
  featuresItem.appendChild(textEl)
  featuresItem.appendChild(imageEl)

  return featuresItem
}

const renderFeaturesHTML = () => {
  const container = document.getElementById('features__grid');
  const fragment = document.createDocumentFragment();

  features.forEach(feature => {
    const featuresItem = createFeatureElement(feature);
    fragment.appendChild(featuresItem);
  });

  container.appendChild(fragment)
}


renderFeaturesHTML()


// const featuresHTML = ({title, text, image, alt}) => {
//   return `
//     <div class="features__item">
//       <h3 class="features__item-title fs--lg">${title}</h3>
//       <p class="features__item-text">${text}</p>
//       <img class="features__item-image" src=${image} alt=${alt}>
//     </div>
//   `
// }
