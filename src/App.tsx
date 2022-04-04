import { useEffect, useState } from "react";
import "./App.css";
import { Counter } from "./Components/Counter";
import { DatiFetch } from "./Components/DatiFetch";

function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Roberto");
  }, []);

  return (
    <div className="App">
      <DatiFetch />
      {/* <Counter number={number} setNumber={setNumber} /> */}
    </div>
  );
}

export default App;
