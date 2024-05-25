import React from "react";
import Nav from "../Navication/Nav";
import "./HeaderNav.css";
function HeaderNav() {
  return (
    <div className="HeaderNav">
      <span className="UserNav">
        <span>
          <h1 className="User1">Domino's Pizza-Food Delivery</h1>
          <Nav />
        </span>
      </span>
    </div>
  );
}

export default HeaderNav;
