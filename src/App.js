import './App.css';
import Cart from './components/Cart.js';
import Practice from './components/Practice.js';
// import React, { useRef } from 'react';

const items = [
  { id: 1, name: 'Taco', price: 3.99, qty: 1 },
  { id: 2, name: 'Burrito', price: 11.49, qty: 11 },
  { id: 3, name: 'Enchilada', price: 5.5, qty: 5 },
];


const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Cart initialItems={items} />
      <Practice />
    </div>
  );
};

export default App;
