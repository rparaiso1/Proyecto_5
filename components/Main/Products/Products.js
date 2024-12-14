import "./Products.css"
import "../Main.css"

import { dataProducts } from '../../../data/dataProducts.js';
import { cleanPage } from '../../../utils/cleanPage.js';
import { addToCart } from '../Products/cart.js';

export const Products = () => {
  const main = document.querySelector('main');
  cleanPage(main);

  const productTypes = Object.keys(dataProducts);
  main.innerHTML = `
    <div class="filters">
      ${productTypes.map(type => `
        <button class="filter-btn" data-type="${type}">${type}</button>
      `).join('')}
    </div>
    <div class="products-list"></div>
  `;
  setupFilterButtons();
};

const setupFilterButtons = () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const filterContainer = document.querySelector('.filters');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      
      button.classList.add('active');
      
      filterContainer.classList.add('active');
      showProducts(button.dataset.type);
    });
  });
};

export const showProducts = (filter) => {
  const productList = document.querySelector('.products-list');
  cleanPage(productList);

  if (dataProducts[filter]) {
    const products = dataProducts[filter].products;
    productList.innerHTML = `
      <ul>
        ${products.map((product, index) => `
          <li>
            <h3>${product.name}</h3>
            <img src="${product.link}" alt="${product.name}" class="product-image"/>
            <p id="description">${product.description}</p>
            <p>${product.price}</p>
            <button class="add-to-cart-btn" data-index="${index}" data-category="${filter}">Añadir al carrito</button>
          </li>
        `).join('')}
      </ul>
    `;
    
    setupAddToCartButtons(filter);
  }
};

const setupAddToCartButtons = (category) => {
  const buttons = document.querySelectorAll('.add-to-cart-btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const index = button.dataset.index;
      const product = dataProducts[category].products[index];
      addToCart({
        ...product,
        price: product.price
      });
    });
  });
};
