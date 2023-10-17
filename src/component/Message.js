import React, { useState } from "react";
import axios from "axios";
import "./Message.css";
import { Link } from "react-router-dom";

function Message() {
  const [productName, setProductName] = useState(" ");
  const [phoneNumber, setPhoneNumber] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState(" ");
  const [resetForm, setResetForm] = useState({
    productName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleProduct = (e) => {
    e.preventDefault();
    setProductName(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3001/api/mail", {
          productName,
          phoneNumber,
          email,
          message,
        })
        .then((res) => {
          setProductName(productName);
          setPhoneNumber(phoneNumber);
          setEmail(email);
          setMessage(message);
        });
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
    console.log({ productName, phoneNumber, email, message });
  };
  const handleResetForm = (e) => {
    e.preventDefault();
    setResetForm(e.target.value);
  };
  return (
    <>
      <div className="mail">
        <h1 className="heading">DOMINO PIZZA DELIVERY</h1>

        <form onClick={handleSubmit}>
          <div>
            <label className="product">productName:</label>

            <input
              className="Product"
              type="text"
              placeholder="Product Name"
              required
              value={productName}
              onChange={handleProduct}
            />
          </div>
          <div>
            <label className="phone">Phone Number:</label>
            <input
              className="Phone"
              type="number"
              placeholder="Type Your Number"
              required
              value={phoneNumber}
              onChange={handlePhoneNumber}
            />
          </div>
          <div>
            <label className="email">Email:</label>
            <input
              className="Email"
              type="email"
              placeholder="Enter your Email"
              required
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div>
            <label className="message">
              Message:
              <textarea
                className="Message"
                type="text"
                placeholder="Type Here"
                value={message}
                onChange={handleMessage}
              />
            </label>
          </div>
          <Link to="mail">
            <button
              className="send"
              type="submit"
              value={resetForm}
              onChange={handleResetForm}
            >
              SEND
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Message;
