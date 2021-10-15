import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div className="header-content">
      <nav className="nav">
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
          className="navLink"
          to="/shop"
        >
          Shop
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
          className="navLink"
          to="/review"
        >
          Order Review
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
          className="navLink"
          to="/inventory"
        >
          Inventory
        </NavLink>
      </nav>
      </div>
    </div>
  );
};

export default Header;
