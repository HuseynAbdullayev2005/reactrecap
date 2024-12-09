import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
function Gamefirst() {
  const [reqem, setReqem] = useState(1);
  const ehtimal = [1, 2];
  function random() {
    const random = Math.floor(Math.random() * ehtimal.length + 1);
    setReqem(random);
  }
  useEffect(() => {}, []);

  return (
    <div className="game_first">
      <div className="images">
        {reqem === 1 && (
          <img
            src="https://ru.numista.com/catalogue/photos/azerbaidjan/100-original.jpg"
            alt="Coin 1"
          />
        )}
        {reqem === 2 && (
          <img src="https://ru.numista.com/catalogue/photos/azerbaidjan/101-original.jpg" />
        )}
      </div>
      <div className="random_button">
        <button className="random_btn" onClick={random}>
          rotate
        </button>
      </div>
    </div>
  );
}

export default Gamefirst;
