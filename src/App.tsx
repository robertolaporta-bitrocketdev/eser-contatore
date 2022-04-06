import { Counter } from "./Components/Counter";
import { DatiFetch } from "./Components/DatiFetch";
import { Home } from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import { Preferiti } from "./Components/Preferiti";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/fetching" element={<DatiFetch />} />
        <Route path="/preferiti" element={<Preferiti />} />
      </Routes>
    </main>
  );
}

export default App;
