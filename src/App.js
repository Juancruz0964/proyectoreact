import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer'; // Importa el componente ItemListContainer

function App() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <div className="App">
      <Navbar cartCount={cartItems} />
      <ItemListContainer /> {/* Agrega el componente ItemListContainer */}
    </div>
  );
}

export default App;
