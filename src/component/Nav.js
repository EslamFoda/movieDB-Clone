import "./Nav.css";
import logo from '../assets/logo.svg'
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="text-white">
      <div className="nav-flex">
        <Link to="/">
          <img className="h-6" src={logo} alt="" />
        </Link>
        <Link to="/movies">Movies</Link>
        <Link to="/tv">Tv</Link>
        <span>People</span>
        <span>More</span>
      </div>
    </nav>
  );
};

export default Nav;
