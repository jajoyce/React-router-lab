import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/stocks">
        <div>All Stocks</div>
      </Link>
    </div>
  );
};

export default Nav;
