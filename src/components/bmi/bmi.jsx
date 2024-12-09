import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
function Bmi() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  function calc() {
    const bmiValue = weight / (height * height);
    setBmi(bmiValue);
  }
  useEffect(() => {
    calc();
  }, [weight,height]);

  return (
    <div className="bmi">
      <h2 className="title">BMI Calculator</h2>
      <div className="inputs">
        <div className="input">
          <label>Height :</label>
          <input
            type="number"
            className="inp_height"
            value={height}
            placeholder="Enter height in cm"
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="input">
          <label>Weight</label>
          <input
            type="number"
            className="inp_weight"
            value={weight}
            placeholder="Enter weight in kg"
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
      </div>
      <div className="result">
        {bmi ? <h3> BMI: {bmi}</h3> : <h3>Enter valid inputs</h3>}
      </div>
    </div>
  );
}


export default Bmi;
