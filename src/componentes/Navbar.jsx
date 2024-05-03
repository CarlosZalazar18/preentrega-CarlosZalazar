// NavBar.js

import React from 'react';
import CartWidget from './CartWidget'; // Importa el componente CartWidget
import './Navbar.css'; // Importa el archivo de estilos CSS

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span className="logo">TechMart</span>
            </div>
            <ul className="nav-links">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <div className="cart-container">
                <CartWidget /> {}
            </div>
        </nav>
    );
};

export default NavBar;


