import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    return setCount(count + 1);
  }

  function decreaseCount() {
    return setCount(count - 1);
  }

  return (
    <div style={{ backgroundColor: "pink" }}>
      <h1 style={{ color: "black", textAlign: "center" }}>
        Practicing React useState
      </h1>
      <button
        style={{ padding: "10px", borderRadius: "10px" }}
        onClick={increaseCount}
      >
        +
      </button>
      <p style={{ textAlign: "center" }}>{count}</p>
      <button
        style={{ padding: "10px", borderRadius: "10px" }}
        onClick={decreaseCount}
      >
        -
      </button>
    </div>
  );
}

export default App;
