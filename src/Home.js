import React from "react";
import image from "./img/img9.png";
import "./Header.css";

function Home() {
  return (
    <div>
      <div>
        <img src={image} alt="img" className="HomeImage"></img>
      </div>
    </div>
  );
}

export default Home;
