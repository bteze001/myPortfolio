import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
//import logo from "../images/logo.svg";
import NavLinks from "./NavLinks";

/**
 * Represents the header component containing the logo and navigation links.
 *
 * @component
 */

const Header = () => {
  return (
    <header className="header">
      {/* Link to the home page */}
      <NavLink to="/">
      </NavLink>
      {/* Navigation links */}
      <NavLinks />
    </header>
  );
};

export default Header;
