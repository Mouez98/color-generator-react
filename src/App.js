import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [colorsList, setColorsList] = useState(new Values("#0ff").all(10));
  const onSubmitHandler = (e) => {
    e.preventDefault();

   try { 
     const colors = new Values(color).all(10);
     setColorsList(colors)
     setError(false)
  } catch(error) {
      setError(true)
  }
  };

  return (
    <>
      <section className="container">
        <h3>Generate color </h3>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            defaultValue={'#0ff'}
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
