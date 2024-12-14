import "./cart.css"
import { cleanPage } from '../../../utils/cleanPage';
import { Products } from './Products';

export let cart = JSON.parse(localStorage.getItem('cart')) || [];

const launchConfetti = () => {
  const confettiContainer = document.createElement('div');
  confettiContainer.classList.add('confetti-container');
  
  const cartBtn = document.querySelector('#cart-btn');
  
  if (cartBtn) {
    const rect = cartBtn.getBoundingClientRect();
    
    confettiContainer.style.position = 'absolute';
    confettiContainer.style.left = `${rect.left + rect.width / 2}px`;

    confettiContainer.style.top = `${rect.top - 20}px`; 
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 50; i++) {  
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confettiContainer.appendChild(confetti);

      anime({
        targets: confetti,
        translateX: [0, anime.random(-500, 500)],
        translateY: [0, anime.random(-500, 500)],
        rotate: anime.random(0, 360),
        scale: [1, 0],
        duration: anime.random(1000, 2000),
        easing: 'easeOutQuad',
        complete: () => confetti.remove()  
      });
    }

    setTimeout(() => confettiContainer.remove(), 2000);
  }
};

export const addToCart = (product) => {
  const foundProduct = cart.find(item => item.name === product.name);
  if (foundProduct) {
    foundProduct.quantity += 1; 
  } else {
    cart.push({ 
      ...product, 
      quantity: 1, 
      price: product.price
    }); 
    Swal.fire({
      title: '¡Añadido!',
      text: `${product.name} se añadió al carrito.`,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  launchConfetti();
  CartCount();
};


export const CartCount = () => {
  const cartBtn = document.querySelector('#cart-btn');
  if (cartBtn) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBtn.innerText = `🛒${totalItems}`;
  }
};


export const showCart = () => {
  const main = document.querySelector('main');
  cleanPage(main);

  if (cart.length === 0) {
    main.innerHTML = `
    <div id="empty-cart">
      <p>Tu carrito está vacío...</p>
      <button id="go-back-btn" onclick="window.showFilters()">Seguir comprando</button>
    </div>
      `;
  } else {
    main.innerHTML = `
    <h2 id="h2cart">Carrito</h2>
    <ul class="cart">
      ${cart.map(item => `
        <li class="data-cart">
          <h3>${item.name}</h3>

        <img src="${item.link}" alt="${item.name}" class="cart-product-image">
          <p>Cantidad: ${item.quantity}</p>

          <p>Total: ${(parseFloat(item.price) * item.quantity).toFixed(2)} €</p>
          <button id="remove-from-cart-btn" onclick="window.removeFromCart('${item.name}')">Eliminar</button>
          <button id="continue" onclick="window.showFilters()">Seguir Comprando</button>
        </li>`).join('')}
    </ul>
    <p><strong>Precio Total:</strong> ${(cart.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)).toFixed(2)} €</p>
    <button id="pay-btn" onclick="window.payCart()">Pagar</button>
  `;
    }

};


window.payCart = () => {
  if (cart.length === 0) {
    Swal.fire({
      title: 'Carrito vacío',
      text: 'No hay productos para pagar.',
      icon: 'info',
      confirmButtonText: 'OK'
    });
    return;
  }

  anime({
    targets: '#pay-btn',
    scale: [1, 1.5],
    opacity: [1, 0],
    duration: 800,
    easing: 'easeInOutQuad',
    complete: () => {
      cart = [];
      localStorage.setItem('cart', JSON.stringify(cart));
      showCart();
      Swal.fire({
        title: '!Enhorabuena! Estás invirtiendo en calidad y salud. ¡Sigue adelante con tu estilo de vida natural!',
        text: 'El pago se realizó con éxito.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  });
};

window.removeFromCart = (productName) => {
  const productIndex = cart.findIndex(item => item.name === productName);

  if (productIndex !== -1) {
    const product = cart[productIndex];

    anime({
      targets: `.product:nth-child(${productIndex + 1})`,
      opacity: [1, 0],
      translateX: [0, -50],
      duration: 500,
      easing: 'easeInOutQuad',
      complete: () => {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          cart.splice(productIndex, 1);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        showCart();
        CartCount();

        Swal.fire({
          title: 'Eliminado',
          text: `${productName} se eliminó del carrito.`,
          icon: 'warning',
          confirmButtonText: 'OK'
        });
      }
    });
  }
};

window.showFilters = () => {
  Products();
  CartCount();
};
