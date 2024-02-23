import { columns } from "./data";

const container = document.getElementById('customers__grid');
const fragment = document.createDocumentFragment();

const renderColumns = () => {
  columns.forEach(column => {
    const columnElement = document.createElement('div');
    columnElement.classList.add('customers__column', `customers__column-${column.number}`)

    column.customers.forEach(customer => {
      const card = document.createElement('div')
      card.classList.add('customers__card', `customers__card-${customer.classname}`)

      const text = document.createElement('p');
      text.classList.add('customers__card-text');
      text.textContent = customer.comment;

      const userContainer = document.createElement('div');
      userContainer.classList.add('customers__card-container-user');

      const brand = document.createElement('div');
      brand.classList.add('customers__card-brand', `customers__card-brand-${customer.classname}`);

      const image = document.createElement('div');
      image.classList.add('customers__card-image', `customers__card-image-${customer.classname}`);

      const name = document.createElement('p');
      name.classList.add('customers__card-name');
      name.textContent = customer.name;

      const job = document.createElement('span');
      job.classList.add('customers__card-job');
      job.textContent = customer.job;

      userContainer.appendChild(brand)
      userContainer.appendChild(image)
      userContainer.appendChild(name)
      userContainer.appendChild(job)
      card.appendChild(text);
      card.appendChild(userContainer);
      columnElement.appendChild(card)
    })

    fragment.appendChild(columnElement)
  })

  container.appendChild(fragment);
}
renderColumns();