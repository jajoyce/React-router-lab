import React from "react";
import data from "../data";
import { useParams } from "react-router";

const Stock = () => {
  const params = useParams();
  const symbol = params.symbol;
  const stock = data.find((stock) => stock.symbol === symbol);
  return (
    <div>
      <h2>{stock.name}</h2>
      <h3>{stock.symbol}</h3>
      <h3>Price: {stock.lastPrice}</h3>
      <h4>Change: {Math.round(stock.change * 100) / 100}</h4>
      <h4>Open: {stock.open}</h4>
      <h4>High: {stock.high}</h4>
      <h4>Low: {stock.low}</h4>
    </div>
  );
};

export default Stock;

// name: "Apple Inc.",
//     symbol: "AAPL",
//     lastPrice: 140.64,
//     change: -0.280000000000001,
//     high: 141.74,
//     low: 140.35,
//     open: 141.5
