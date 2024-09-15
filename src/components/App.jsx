import React, { useState } from "react";

function App() {
  const [x, y] = useState(0);
  function increase() {
    y(x + 1);
  }
  function decrease() {
    y(x - 1);
  }
  return (
    <div className="container">
      <h1>{x}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
