import "./App.css";
import Cart from "./components/Cart.js";

const items = [
  { id: 1, name: "Taco", price: 3.99, qty: 1 },
  { id: 2, name: "Burrito", price: 11.49, qty: 11 },
  { id: 3, name: "Enchilada", price: 5.50, qty: 5 },
];

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Cart initialItems={items} />
    </div>
  );
};

export default App;
