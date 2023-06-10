import { NavLink } from "react-router-dom";
import logo from "./Images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
// import { SearchIcon, PhoneIcon } from "@mui/icons-material";
import "./Css/ListStyle.css";

export const Menu = () => (
  <header>
    <div className="container container-flex">
      <div className="logoContainer">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <nav>
        <div className="list">
          <NavLink exac to="/" className="listItem">
            Home
          </NavLink>
          <NavLink to="/About" className="listItem">
            About
          </NavLink>
        </div>
      </nav>
      <div className="icons">
        <SearchIcon className="icon" />
        <PhoneIcon className="icon" />
      </div>
    </div>
  </header>
);
