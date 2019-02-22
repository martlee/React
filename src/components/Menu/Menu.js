import React from "react";
import { NavLink } from "react-router-dom"
import "./Menu.css"


const Menu = () => {
  return (
    <div>
      <nav class="navbar">
        <ul class="nav">
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="catalog">Catalog</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>

    </div>
  );
};

export default Menu;
