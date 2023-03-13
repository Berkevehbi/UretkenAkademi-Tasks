import React from "react";
import "./Coin.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { MdArrowUpward } from "react-icons/md";

const Coin = ({ name, price, symbol, volume, image, priceChange }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="symbol">{symbol}</p>
        </div>
        <div className="data">
          <p className="price">${price}</p>
          <p className="volume">${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="percent red">
              <AiOutlineArrowDown />
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className="percent green">
              <MdArrowUpward /> {priceChange.toFixed(2)}%
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coin;
