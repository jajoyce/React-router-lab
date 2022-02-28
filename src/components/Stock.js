import React from "react";
import { Link, Outlet } from "react-router-dom";

const Stock = ({ stock }) => {
  return (
    <Link to={stock.symbol}>
      <h2>
        {stock.name} ({stock.symbol})
      </h2>
    </Link>
  );
};

export default Stock;
