import { Routes, Route } from "react-router-dom";
import Tv from "./pages/Tv";
import "./App.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv/:id" element={<Tv />} />
        <Route path="/movie/:id" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
