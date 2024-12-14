import "./Header.css"
import { showCart } from '../Main/Products/cart';
import { Products } from '../Main/Products/Products';

export const Header = () => {
  const header = document.querySelector('header');
  header.innerHTML = `
    <h1 id="title">Mi tienda</h1>
    <button id="cart-btn">🛒 0</button>
  `;

  
  const title = document.querySelector('#title');
  if (title) {
    title.addEventListener('click', () => {
      Products();
    });
  }


  const goToCartBtn = document.querySelector('#cart-btn');
  if (goToCartBtn) {
    goToCartBtn.addEventListener('click', showCart);
  }
};
