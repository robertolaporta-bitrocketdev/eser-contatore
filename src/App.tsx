import { useEffect, useState } from "react";
import "./App.css";
import { Counter } from "./Components/Counter";

function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Roberto");
  }, []);

  return (
    <div className="App">
      <Counter number={number} setNumber={setNumber} />
      <Counter number={number} setNumber={setNumber} />
      <Counter number={number} setNumber={setNumber} />
      <Counter number={number} setNumber={setNumber} />
      <Counter number={number} setNumber={setNumber} />
      <Counter number={number} setNumber={setNumber} />
      <Counter number={number} setNumber={setNumber} />
      <Counter number={number} setNumber={setNumber} />
      <Counter number={number} setNumber={setNumber} />
    </div>
  );
}

export default App;
