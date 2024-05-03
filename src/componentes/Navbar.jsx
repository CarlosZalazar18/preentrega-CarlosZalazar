// NavBar.js

import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                My Shop
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
