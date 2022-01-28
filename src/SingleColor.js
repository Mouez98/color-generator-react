import React, { useState, useEffect } from "react";
// import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = `#${hexColor}`;
  
  const copieColorHandler = () => {
    setAlert(true)
    navigator.clipboard.writeText(hex)
    setTimeout(()=>{
        setAlert(false)
    }, 2000)
  }

  return (
    <div
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={copieColorHandler}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </div>
  );
};

export default SingleColor;
