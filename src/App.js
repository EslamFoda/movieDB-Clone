import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import MovieDetails from "./pages/MovieDetails";
import TvDetails from "./pages/TvDetails";
import Movies from "./pages/Movies";
import Search from "./pages/Search";
import Tv from "./pages/Tv";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv/:id" element={<TvDetails />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movies/" element={<Movies />} />
        <Route path="/tv/" element={<Tv />} />
        <Route path="/search/:search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
