import React, { useState } from "react";
import "./razorpay.css";
import axios from "axios";
function RazorPay() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (amount === "") {
      alert("please Enter Amount");
    } else {
      var options = {
        key: "rzp_test_U8ydfTO3lKG6zN",
        key_secret: "rzp_test_U8ydfTO3lKG6zN",
        amount: amount * 100,
        currency: "INR",
        name: "Domino Pizza Delivery",
        description: "For Delivery purpuse",

        handler: function (res) {
          alert(res.razorpay_payment_id);
        },
        prefill: {
          name: "jegan",
          email: "arunjegan1996@gmail.com",
          contact: "9876543210",
        },
        notes: {
          address: "Domino Pizza App",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
    axios
      .post("http://localhost:3001/order", amount)

      .then((amount) => setAmount(amount.data))

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="purchas">
      <h2 className="main-content">Domino Pizza Delivery</h2>
      <br></br>
      <input
        className="amount-content"
        type="text"
        placeholder="Enter Your Amount"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <br></br>

      <button className="submit-content" type="submit" onClick={handleSubmit}>
        Pay Now
      </button>
    </div>
  );
}

export default RazorPay;
