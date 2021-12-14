import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hoock/useAuth";
// import { useAuth } from "../../hoock/useAuth";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, userSignout } = useAuth();
  return (
    <div className="header">
      {/* <img src={logo} alt="" /> */}
     <h1 className="virtual">Virtual-Shop</h1>
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
              Contact
            </NavLink>
            {user.email&& <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              className="navLink"
              to="/order"
            >
              Order
            </NavLink>}
            

             {user.email && <small>{user.displayName}</small>}
              {user.email ? (
                
                <button className="header-button" onClick={userSignout}>
                  Logout
                </button>
              ) : (
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                  className="navLink"
                  to="/login"
                >
                  Login
                </NavLink>
              )}
             
            
          </nav>
        </div>
     
    </div>
  );
};

export default Header;
