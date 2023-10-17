import React from "react";
import "./Nav.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NonvegPizza from "./NonVegPizza";
import Pizzamania from "./Pizzamania";
import SpecilicityChicken from "./SpecilityChicken";
import Beverages from "./Beverages";
import Pizza from "../component/Pizza";
import Message from "../component/Message";
import RazorPay from "../component/RazorPay";
import CreatePizza from "../component/CreatePizza";


function Nav(props) {
  return (
    <Router>
      <nav className="nav-container">
        <span className="nav">
          <Link to="/nonveg">
            <span className="nav-bar">
              <button>NonvegPizza</button>
            </span>
          </Link>
          <Link to="/pizzamania">
            <span className="nav-bar">
              <button>pizzamania</button>
            </span>
          </Link>
          <Link to="/chicken">
            <span className="nav-bar">
              <button>SpecilicityChicken</button>
            </span>
          </Link>
          <Link to="/beverages">
            <span className="nav-bar">
              <button>Beverages</button>
            </span>
          </Link>
        </span>
      </nav>

      <Routes>
        <Route exact path="/nonveg" element={<NonvegPizza></NonvegPizza>} />
        <Route exact path="/pizzamania" element={<Pizzamania />} />
        <Route
          exact
          path="/chicken"
          element={<SpecilicityChicken></SpecilicityChicken>}
        />
        <Route exact path="/Beverages" element={<Beverages></Beverages>} />

        <Route exact path="/order" element={<Pizza></Pizza>} />
        <Route exact path="/add" element={<CreatePizza />} />
        <Route exact path="/mail" element={<Message />} />
        <Route exact path="/purchase" element={<RazorPay />} />
      </Routes>
    </Router>
  );
}

export default Nav;
