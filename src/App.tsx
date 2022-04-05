import { Counter } from "./Components/Counter";
import { DatiFetch } from "./Components/DatiFetch";
import { Home } from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import { Preferiti } from "./Components/Preferiti";
import "./css/style.css";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/counter"
          element={<Counter number={0} setNumber={() => {}} />}
        />
        <Route path="/fetching" element={<DatiFetch />} />
        <Route path="/preferiti" element={<Preferiti />} />
      </Routes>
    </main>
  );
}

export default App;
