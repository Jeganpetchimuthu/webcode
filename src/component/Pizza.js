import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pizza.css";
import { Link, useNavigate } from "react-router-dom";
import HeaderNav from "./HeaderNav";

function Pizza() {
  const navigate = useNavigate();
  const [pizzas, setPizzas] = useState([
    {
      pizza: " ",
      sauce: " ",
      cheese: " ",
      veggies: " ",
      meat: " ",
    },
  ]);

  useEffect(() => {
    axios
      .get("https://pizza-app-server.vercel.app/pizza")
      .then((pizzas) => setPizzas(pizzas.data))
      .catch((error) => console.log(error));
  }, []);
  const deletePizza = async (id) => {
    try {
      await axios.delete(`https://pizza-app-server.vercel.app/pizza/${id}`);

      setPizzas(pizzas.filter((pizza) => pizza._id !== id));
      console.log(pizzas.data);
    } catch (error) {
      console.log(error);
    }
  };
  const editPizza = (pizza) => {
    navigate(`/update/${pizza}`);
  };
  return (
    <div className="pizza-cantainer">
      <HeaderNav />
      <h1>Choose Your Favourite Pizza</h1>
      <Link to="/add">
        <button className="Add-item">Add Items</button>
      </Link>
      <div className="grid-cantainers">
        <span className="grid-item-m2">
          <h2 className="pizza">Pizza</h2>
          <br></br>
        </span>

        <span className="grid-item-m3">
          <h2 className="sauce">Sauce</h2>
          <br></br>
        </span>

        <span className="grid-item-m4">
          <h2 className="cheese">Cheese</h2>
          <br></br>
        </span>

        <span className="grid-item-m5">
          <h2 className="veggies"> Veggies</h2>
          <br></br>
        </span>

        <span className="grid-item-m6">
          <h2 className="meat"> Meat</h2>
          <br></br>
        </span>

        <span className="grid-item-m6">
          <h2 className="meat"> Action</h2>
          <br></br>
        </span>
      </div>
      {pizzas.map((pizza) => {
        return (
          <div className="pizza-collecting">
            <div className="grid-cantainersMaps" key={pizza._id}>
              <span>
                <span className="grid-item-n1">{pizza.pizza}</span>
              </span>
              <span>
                <span className="grid-item-n2">{pizza.sauce}</span>
              </span>
              <span>
                <span className="grid-item-n3">{pizza.cheese}</span>
              </span>
              <span>
                <span className="grid-item-n4">{pizza.veggies}</span>
              </span>
              <span>
                <span className="grid-item-n5">{pizza.meat}</span>
              </span>
            </div>
            <button
              className="delete-btn"
              value={pizza.delete}
              onClick={() => deletePizza(pizza._id)}
            >
              Delete
            </button>
            <button className="edit-btn" onClick={() => editPizza(pizza._id)}>
              Edit
            </button>
          </div>
        );
      })}
      <br></br>
      <br></br>

      <span>
        <Link to="/pay">
          <button className="purchase" type="submit">
            PURCHASE
          </button>
        </Link>
      </span>

      <br></br>
      <br></br>
      <Link to="/mail" className="msge">
        <span className="msg">MAIL</span>
      </Link>
    </div>
  );
}

export default Pizza;
