import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-container">
      <Link to="/nonvegPizza" className="navB-bar4">
        <div className="nav-bar1">
          <h3 className="pizzaName">NonvegPizza</h3>
        </div>
      </Link>
      <Link to="/pizzamania" className="navB-bar4">
        <div className="nav-bar2">
          <h3 className="pizzaName">pizzamania</h3>
        </div>
      </Link>
      <Link to="/chicken" className="navB-bar4">
        <div className="nav-bar3">
          <h3 className="pizzaName">SpecilicityChicken</h3>
        </div>
      </Link>
      <Link to="/beverage" className="navB-bar4">
        <div className="nav-bar4">
          <h3 className="pizzaName">Beverages</h3>
        </div>
      </Link>

      <div className="nav-barHome">
        <Link to="/home" className="navB-bar4">
          <h3 className="pizzaName">Home</h3>
        </Link>
        <Link to="/" className="navB-bar4">
          <h3 className="pizzaLogout">Logout</h3>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
