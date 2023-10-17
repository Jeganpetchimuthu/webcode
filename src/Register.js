import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/register", {
        firstName,
        lastName,
        email,
        password,
      });
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
          className="user"
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
          className="user"
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
          className="user"
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
        <Link to="/login">
          <button className="button" type="submit">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}
