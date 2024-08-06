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
    <div
      style={{
        backgroundColor: "midnightblue",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "mintcream", textAlign: "center" }}>
        Practicing React useState
      </h1>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <button
          style={{ padding: "10px", borderRadius: "10px", margin: "0 10px" }}
          onClick={increaseCount}
        >
          +
        </button>
        <p style={{ color: "mintcream", margin: "10px" }}>{count}</p>
        <button
          style={{ padding: "10px", borderRadius: "10px", margin: "0 10px" }}
          onClick={decreaseCount}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
