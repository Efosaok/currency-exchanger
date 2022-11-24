import React from "react";
import useCurrencyDropdown, {
  CurrencyTargets,
} from "../hooks/useCurrencyDropdown";

import "./currencyDropdown.scss";

interface CurrencyDropdownProps {
  label: CurrencyTargets;
  defaultCurrency: string;
  currencies: string[];
}

const CurrencyDropdown: React.FC<CurrencyDropdownProps> = ({
  label,
  defaultCurrency,
  currencies,
}) => {
  const {
    currency,
    chooseCurrency,
    showCurrency,
    toggleShowCurrency,
    currencyClassName,
  } = useCurrencyDropdown({ defaultCurrency, label });

  return (
    <div className="currency-dropdown">
      <label>{label}</label>
      <div className={currencyClassName} onClick={toggleShowCurrency}>
        <span>
          {currency || "Select One"}{" "}
          <img
            src="https://res.cloudinary.com/dn93xk5ni/image/upload/v1668764124/currency-exchange/down-arrow.png"
            alt="caret down icon"
          />
        </span>
      </div>
      {showCurrency && (
        <div className="currencies">
          {currencies?.map((currency) => (
            <div
              className="option"
              key={currency}
              onClick={() => chooseCurrency(currency, label)}
            >
              {currency}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;
