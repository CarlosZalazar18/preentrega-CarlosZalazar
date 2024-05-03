// App.js

import React from 'react';
import NavBar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListConteiner';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </div>
  );
};

export default App;

