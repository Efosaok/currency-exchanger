import React from "react";
import useHeading from "../hooks/useHeading";

import "./heading.scss";

const Heading = () => {
  const { goToEURToGBP, goToEURToUSD } = useHeading();

  return (
    <div className="heading-wrap">
      <div className="heading-section">
        <div className="icon-wrap">
          <img
            src="https://res.cloudinary.com/dn93xk5ni/image/upload/v1668678132/currency-exchange/exchange-rate.png"
            alt="exchange rate icons"
          />
        </div>
        <div className="template-details">
          <div className="details-btn-wrap">
            <button onClick={goToEURToUSD}>EUR-USD Details</button>
            <button onClick={goToEURToGBP}>EUR-GBP Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
