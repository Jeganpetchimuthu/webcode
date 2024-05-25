import React, { useState } from "react";
import axios from "axios";
import "./Message.css";
import HeaderNav from "./HeaderNav";

function Message() {
  const [formData, setFormData] = useState({
    productName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://pizza-app-server.vercel.app/api/mails",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="nonVegPizza-Header">
      <HeaderNav />
      <div className="mail">
        <h1 className="heading">DOMINO PIZZA DELIVERY</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="product">product Name:</label>

            <input
              className="Product"
              type="text"
              name="productName"
              placeholder="Product Name"
              value={formData.productName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="phone">Phone Number:</label>
            <input
              className="Phone"
              type="number"
              name="phoneNumber"
              placeholder="Enter Your Number"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mailemail">Email:</label>
            <input
              className="mailEmail"
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <br></br>

          <div>
            <label className="messagelab">Message:</label>
            <textarea
              className="Messagea"
              type="text"
              name="message"
              placeholder="Type Here"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button className="send" type="submit">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default Message;
