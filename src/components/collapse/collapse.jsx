import React, { useState } from "react";
import "./index.css";

function Collapse() {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse_head" onClick={() => setCollapse(!collapse)}>
        <p>Collapse</p>
        <i
          className={`fa-solid ${collapse ? "fa-caret-down" : "fa-caret-up"}`}
        ></i>
      </div>
      <div className={`collapse_content ${collapse ? "open" : "closed"}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam placeat
        fugiat, facere ex omnis dolores! Facere qui maxime accusantium ullam
        beatae veritatis aperiam consequatur repellendus
       
      </div>
    </div>
  );
}

export default Collapse;
