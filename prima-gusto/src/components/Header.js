import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Header(props) {
  // let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo-txt">PrimaGusto 999999999</span>
        <ul className="nav">
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/order">Menu </Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
        {/* <FaShoppingCart onClick={() => setCartOpen((cartOpen = !cartOpen))} />
        {cartOpen && (
          <div>
            {props.basket} Summa: <h3>{props.basketSum}</h3>
          </div>
        )} */}
        
      </div>
    </header>
  );
}
