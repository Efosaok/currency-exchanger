import React from "react";
import useExchangeDock from "../hooks/useExchangeDock";
import CurrencyDropdown from "./CurrencyDropdown";

import "./exchangeDock.scss";

const ExchangeDock = () => {
  const {
    from,
    to,
    amount,
    previousAmount,
    result,
    convert,
    updateParam,
    goToDetailsPage,
    currencies,
    title,
    isDetailsPage,
    goToHome,
  } = useExchangeDock();

  return (
    <div className="exchange-dock">
      <div className="title-section">
        <div className="title-wrap">
          <h2>{title}</h2>
        </div>
        {isDetailsPage && (
          <div className="go-back-wrap">
            <button onClick={goToHome}>Back to Home</button>
          </div>
        )}
      </div>

      <div className="dock">
        <div className="amount-x-unit">
          <div className="amount">
            <label>amount</label>
            <input
              min={1}
              defaultValue={amount}
              type="number"
              onChange={(event) => updateParam("amount", event.target.value)}
            />
          </div>
          <div className="unit-exchange-value">
            <span>
              1 {from} = {result ? result / previousAmount : "XX.XX"} {to}
            </span>
          </div>
        </div>

        <div className="currency-selectors">
          <div className="selectors">
            <CurrencyDropdown
              label="from"
              currencies={currencies}
              defaultCurrency={from}
            />
            <div className="arrow-to-from">
              <div className="arrow to">
                <img
                  src="https://res.cloudinary.com/dn93xk5ni/image/upload/v1668679495/currency-exchange/right-arrow.png"
                  alt="arrow from icon"
                />
              </div>
              <div className="arrow from">
                <img
                  src="https://res.cloudinary.com/dn93xk5ni/image/upload/v1668679495/currency-exchange/right-arrow.png"
                  alt="arrow to icon reversed"
                />
              </div>
            </div>
            <CurrencyDropdown
              label="to"
              currencies={currencies}
              defaultCurrency={to}
            />
          </div>

          <div className="converter-btn">
            <button disabled={!amount} onClick={() => convert()}>
              Convert
            </button>
          </div>

          <div className="results-x-details-link">
            <div className="results-wrap">
              <h4>
                {result || "XX.XX"} {to}
              </h4>
            </div>

            {!isDetailsPage && (
              <div className="more-details">
                <button onClick={goToDetailsPage}>More Details</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeDock;
