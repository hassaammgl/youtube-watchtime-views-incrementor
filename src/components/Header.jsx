import logo from "../assets/logo.png";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
