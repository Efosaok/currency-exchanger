import React from "react";
import ExchangeDock from "../components/ExchangeDock";
import Heading from "../components/Heading";
import HistoricalRates from "../components/HistoricalRates";

import "./details.scss";

const Details = () => {
  return (
    <div className="details">
      <Heading />
      <ExchangeDock />
      <HistoricalRates />
    </div>
  );
};

export default Details;
