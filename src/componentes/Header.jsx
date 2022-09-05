import React from "react";
import Logo from "../images/Logo.png";

export const Header = () => {

  return (
    <div>
      <header>
        <a href="#">
          <div className="logo">
            <img src={Logo} />
          </div>
        </a>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
        </ul>
        <div className="cart">
            <box-icon name="cart" color="white"></box-icon>
            <span className="item__total">0</span>
        </div>
      </header>
    </div>
  );
};
