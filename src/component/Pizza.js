import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pizza.css";
import { Link } from "react-router-dom";

function Pizza() {
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
      .get("http://localhost:3001/pizza")
      .then((pizzas) => setPizzas(pizzas.data))
      .catch((error) => console.log(error));
  }, []);
  const deletePizza = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3001/pizza/${id}`);

      setPizzas(pizzas.filter((pizza) => pizza._id !== id));
      console.log(pizzas);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="pizza-cantainer">
      <Link to="/add">
        <button className="Add-item">Add Items</button>
      </Link>
      <div className="grid-cantainers">
        <span className="grid-item-m2">
          <h2 className="pizza">pizza</h2>
          <br></br>
        </span>

        <span className="grid-item-m3">
          <h2 className="pizza">sauce</h2>
          <br></br>
        </span>

        <span className="grid-item-m4">
          <h2 className="pizza">cheese</h2>
          <br></br>
        </span>

        <span className="grid-item-m5">
          <h2 className="pizza"> veggies</h2>
          <br></br>
        </span>

        <span className="grid-item-m6">
          <h2 className="pizza"> meat</h2>
          <br></br>
        </span>
      </div>
      {pizzas.map((pizza) => {
        return (
          <div>
            <div className="grid-cantainers" key={pizza._id}>
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
              onClick={deletePizza}
            >
              Delete
            </button>
          </div>
        );
      })}
      <br></br>
      <br></br>

      <span>
        <Link to="/purchase">
          <button className="purchase" type="submit">
            PURCHASE
          </button>
        </Link>
      </span>

      <br></br>
      <br></br>
      <Link to="/mail">
        <span className="msg">MAIL</span>
      </Link>
    </div>
  );
}

export default Pizza;
