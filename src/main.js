import "./style.css";

import { Header } from '../components/Header/Header.js';
import { Footer } from '../components/Footer/Footer.js';
import { Products } from '../components/Main/Products/Products.js';
import { CartCount } from "../components/Main/Products/cart.js";


document.addEventListener('DOMContentLoaded', () => {
  Header();
  Products();
  CartCount();
  Footer()
});

