# 🥩 Tienda de Comoida Real

**Mi Tienda** Es un proyecto de tienda de comida natural inspirado en los principios de vida primitiva.  
La idea principal es ofrecer productos frescos y saludables organizados por categorías, con un diseño modular y dinámico pensado para su implementación futura como una tienda en línea funcional.

---

## 🔧Características
- **Diseño Modular**: 
  - El proyecto utiliza una estructura de `header`, `main`, y `footer`, donde el contenido del `main` cambia dinámicamente según la categoría seleccionada.
- **Gestión de Productos**:
  - Los productos están organizados por categorías como Carne, Pescado, Frutas, etc.
  - Los datos de los productos se gestionan desde un archivo JSON en la carpeta `data/dataProducts`.
- **Capacidad Dinámica**:
  - Se pueden agregar categorías y productos de forma sencilla, actualizando dinámicamente el contenido del sitio sin necesidad de modificar el código base.
- **Filtros Dinámicos**:
  - Posibilidad de filtrar y visualizar productos según su tipo.
- **Carrito de Compras**:
  - Funciones para agregar y eliminar productos.
  - Cálculo dinámico del precio total.
- **Interactividad**:
  - Animaciones y alertas visuales usando librerías externas como `anime.js` y `SweetAlert`.
- **Estilo Minimalista y Responsivo**:
  - Compatible con dispositivos móviles y de escritorio.
  - Cada seccion tiene su propio css para un mayor control de estilo, ademas de tener vatiables para tener una interfaz visual similar en todas las pantallas.

- **Despliegue con netlify**

---

## 🛠️ Tecnologías Utilizadas
- **Vite.js**: Para un entorno de desarrollo rápido y moderno.
- **HTML5**: Estructura semántica del proyecto.
- **CSS3**: Diseño visual responsivo.
- **JavaScript (ES6)**: Interactividad y manejo dinámico del DOM.
- **anime.js**: Animaciones fluidas y modernas.
- **SweetAlert**: Alertas visuales atractivas.

---

## 📂 Estructura del Proyecto
- **Agregar Categorias y Porductos**: data/dataProducts.
- **Estilos** src/style.css.
- **Ejecutable** src/main.js
- **Header** Header/Header.js.
- **Main** Main/Main.js. 
- **Productos** Main/Products/Products.js -> Pantalla donde muestra productos
- **Footer** Footer/Footer.js.
- **HTML** Html.html -> Archivo principal HTML


Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:
cd Proyecto_5
npm install
npm run dev



- **Funcionalidades Futuras**
Pasarela de Pago.
Registro de Usuarios: Permitir a los usuarios registrarse y gestionar pedidos.
Recomendaciones Personalizadas: Mostrar sugerencias basadas en compras anteriores.


- **Añadir Nuevas categorias y Productos**

"NuevaCategoría": {
  "producto": [
    { 
      "name": "Nuevo Producto",
      "description": "Descripción del producto",
      "link": "/ruta_a_la_imagen.jpg",
      "price": "precio_por_kilo"
    },
    // Más productos aquí
  ]
}
