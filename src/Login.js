import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth",
        formData
      );

      const { token } = response.data;
      localStorage.setItem("token", token);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="login-cantaine" onClick={handleSubmit}>
        <h2 className="header-page">User Login</h2>
        <p className="para">please enter you login and password</p>

        <input
          className="user"
          type="text"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
        ></input>
        <br></br>

        <input
          className="user"
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        ></input>
        <Link to="/home">
          <button className="button">Login</button>
          <br></br>
        </Link>
        <br></br>

        <h5 className="forgot">Forgot password?</h5>
      </form>
    </div>
  );
}
