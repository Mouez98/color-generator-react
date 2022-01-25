import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [colorsList, setColorsList] = useState([]);
  const onSubmitHandler = (e) => {
    e.preventDefault();

   try { 
     const colors = new Values(color).all(20);
    console.log(colors); 
    setError(false)
  } catch(error) {
    setError(true)
    console.log(error)
  }
  };

  return (
    <>
      <section className="container">
        <h3>Generate color </h3>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="#f00"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? 'error' : ''}`}
            
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        <div className="color"></div>
      </section>
    </>
  );
}

export default App;
