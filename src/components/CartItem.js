import React from "react";
import "./CartItem.css";

const CartItem = ({ item, updateQTY }) => {
  const addOne = () => updateQTY(item.id, item.qty + 1);

  const minusOne = () => updateQTY(item.id, item.qty - 1);

  return (
    <div className="CartItem">
      <div>Name: {item.name}</div>
      <div>Price: ${item.price}</div>
      <div>
        <button onClick={minusOne} disabled={item.qty < 1}>
          -
        </button>
        {item.qty}
        <button onClick={addOne}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
