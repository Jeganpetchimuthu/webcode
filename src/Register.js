import React, { useState } from "react";
import "./Register.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";
export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://pizza-app-server.vercel.app/api/register",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-wrap">
      <span className="registerinfo"></span>
      <img
        className="pizzaregisterImg"
        src="https://st3.depositphotos.com/3557671/12879/v/950/depositphotos_128797746-stock-illustration-pizza-cart-icon-in-cartoon.jpg"
        alt="pizzaimg"
      ></img>
      <form className="register-cantaine" onClick={handleSubmit}>
        <h2 className="header-pages">Pizza User</h2>
        <p className="paras">Please Enter you Email and password</p>

        <input
          className="name"
          type="text"
          name="firstName"
          placeholder="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <input
          className="lname"
          type="text"
          name="lastName"
          placeholder="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <input
          className="emails"
          type="text"
          name="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <input
          className="pas"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br></br>

        <br></br>

        <button className="subbutton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
