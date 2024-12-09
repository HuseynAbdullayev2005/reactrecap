import React from "react";
import { useState } from "react";
import "./index.css";
function Driwer() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="drawer">
      <div className="menu_icon" onClick={() => setToggle(!toggle)}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className={`sidebar ${toggle ? "open" : "closed"}`}>
        <a className="" href="#home">
          item
        </a>
        <a href="#news">item1</a>
        <a href="#contact">item2</a>
        <a href="#about">item3</a>
      </div>
    </div>
  );
}

export default Driwer;
