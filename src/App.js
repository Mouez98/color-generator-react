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
     const colors = new Values(color).all(10);
     setColorsList(colors)
    //  console.log(colors)
    //  colors.map(color => console.log(color.rgb, color.type))
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
        { colorsList.map((color, index)=> {
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
        })}
        
      </section>
    </>
  );
}

export default App;
