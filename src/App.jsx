import { useState } from "react";
import IncreaseButton from "./components/buttons/increase";
import DecreaseButton from "./components/buttons/decrease";
import Increase10Button from "./components/buttons/increaseBy10";
import Decrease10Button from "./components/buttons/decreaseBy10";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter</h1>

      <p>Current count: {count}</p>

      <div
        style={{
          display: "flex",
          gap: 20,
        }}
      >
        <IncreaseButton setCount={setCount} />

        <DecreaseButton setCount={setCount} />

        <Increase10Button setCount={setCount} />

        <Decrease10Button setCount={setCount} />

        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
}

export default App;
