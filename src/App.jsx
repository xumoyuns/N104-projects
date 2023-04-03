import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // increase counter
  const increase = function () {
    setCount((count) => count + 1);
  };
  // decrease counter
  const decrease = function () {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  // reset
  const reset = function () {
    setCount((count) => (count = 0));
  };

  return (
    <div className="App">
      <h1 className="mb-4">{count}</h1>

      <button onClick={increase} className="btn btn-primary">
        +
      </button>
      <button
        onClick={decrease}
        className="btn btn-success mx-2"
        disabled={count <= 0 ? true : false}
      >
        -
      </button>
      <button
        onClick={reset}
        className="btn btn-warning"
        disabled={count === 0 ? true : false}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
