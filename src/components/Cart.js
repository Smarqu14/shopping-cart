import React, { useState, useEffect } from "react";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = ({ initialItems }) => {
  const initialState = JSON.parse(window.localStorage.getItem("items"));
  const [items, setItems] = useState(initialState || initialItems);
  const [count, setCount] = useState(0);
  // similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    window.localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const total = items
    .reduce((total, item) => {
      return total + item.qty * item.price;
    }, 0)
    .toFixed(2);

  const updateQTY = (id, newQty) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <div className="Cart">
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <h1 className="Cart-title">Shopping Cart</h1>
      <div className="Cart-items">
        {items.map((item) => {
          return <CartItem updateQTY={updateQTY} item={item} key={item.id} />;
        })}
      </div>
      <h2>Grand Total : ${total}</h2>
    </div>
  );
};

export default Cart;
