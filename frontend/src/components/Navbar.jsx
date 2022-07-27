import React from "react";
import "./NavbarStyle.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="site-title">
          Site Name
        </Link>
        <ul>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/focus">Focus</CustomLink>
          <CustomLink to="/immunity">Immunity</CustomLink>
          <CustomLink to="twitter-trends">Twitter Trends</CustomLink>
        </ul>
      </nav>
    </div>
  );
};

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <div>
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    </div>
  );
};

export default Navbar;
