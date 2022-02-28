import React from "react";
import { Outlet, Link } from "react-router-dom";
import Stock from "../components/Stock";
import data from "../data.js";

const Dashboard = () => {
  const stocks = data.map((stock, index) => (
    <Stock stock={stock} key={index} />
  ));
  return <div>{stocks}</div>;
};

export default Dashboard;
