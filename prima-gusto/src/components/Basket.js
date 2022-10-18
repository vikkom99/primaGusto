import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Basket(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <div>
      <FaShoppingCart onClick={() => setCartOpen((cartOpen = !cartOpen))} />
      {cartOpen && (
        <div>
          {props.basket} Summa: <h3>{props.basketSum}</h3>
        </div>
      )}
    </div>
  );
}
