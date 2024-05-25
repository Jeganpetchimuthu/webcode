import React, { useState } from "react";
import "./CreatePizza.css";
import axios from "axios";
import HeaderNav from "./HeaderNav";
import { useParams, useNavigate } from "react-router-dom";

function UpdatePizza() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = useState({
    roll: "",
    pizza: "",
    sauce: "",
    cheese: "",
    veggies: "",
    meat: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPizza({ ...pizza, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `https://pizza-app-server.vercel.app/pizza/${id}`,
        pizza
      );

      console.log(res.data);
      navigate("/order");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <HeaderNav />
      <div className="create-container">
        <h1>Update Your Order</h1>
        <div className="main-container">
          <span className="form-container">
            <label className="content-container">roll:</label>
            <input
              className="value-container"
              type="text"
              name="roll"
              placeholder="Enter your prouct"
              value={pizza.roll}
              onChange={handleChange}
            />

            <br></br>
          </span>
          <span className="form-container">
            <label className="content-container">
              pizza:
              <input
                className="value-container"
                type="text"
                name="pizza"
                placeholder="Enter your prouct"
                value={pizza.pizza}
                onChange={handleChange}
              />
            </label>
            <br></br>
          </span>

          <span className="form-container">
            <label className="content-container">
              sauce:
              <input
                className="value-container"
                type="text"
                name="sauce"
                placeholder="Enter your prouct"
                value={pizza.sauce}
                onChange={handleChange}
              />
            </label>
            <br></br>
          </span>

          <span className="form-container">
            <label className="content-container">
              cheese:
              <input
                className="value-container"
                type="text"
                name="cheese"
                placeholder="Enter your prouct"
                value={pizza.cheese}
                onChange={handleChange}
              />
            </label>
            <br></br>
          </span>

          <span className="form-container">
            <label className="content-container">
              veggies:
              <input
                className="value-container"
                type="text"
                name="veggies"
                placeholder="Enter your prouct"
                value={pizza.veggies}
                onChange={handleChange}
              />
            </label>
            <br></br>
          </span>

          <span className="form-container">
            <label className="content-containerMeat">
              meat:
              <input
                className="value-containerMeat"
                type="text"
                name="meat"
                placeholder="Enter your prouct"
                value={pizza.meat}
                onChange={handleChange}
              />
            </label>

            <br></br>
            <button className="add-button" type="submit" onClick={handleSubmit}>
              Add
            </button>
            <br></br>
          </span>
        </div>
      </div>
    </div>
  );
}

export default UpdatePizza;
