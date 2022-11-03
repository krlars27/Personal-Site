import React from "react";
import { Outlet, Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <div id="navbar">
        <h2>Kevin Larson</h2>
        <Link to="/App">Home</Link>
        <Link to="/About">About Me</Link>
        <Link to="/Portfolio">Portfolio</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
