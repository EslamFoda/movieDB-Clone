import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="text-white">
      <div className="nav-flex">
        <Link to="/">
          <h1>logo</h1>
        </Link>
        <Link to="/about">Movies</Link>
        <span>Tv</span>
        <span>People</span>
        <span>More</span>
      </div>
    </nav>
  );
};

export default Nav;
