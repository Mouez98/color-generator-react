import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({rgb, weight, index}) => {
const bcg = rgb.join(',')
  return (
    <div className="color" style={{backgroundColor: `rgb(${bcg})`}} >
      <h4>{weight}%</h4>
    </div>
  );
};

export default SingleColor;
