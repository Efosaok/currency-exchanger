import { useState } from "react";
import useUrlConversionParams from "./useUrlConversionParams";

export type CurrencyTargets = "from" | "to";

interface UseCurrencyDropdownProps {
  defaultCurrency: string;
  label: CurrencyTargets;
}

const useCurrencyDropdown = ({
  defaultCurrency,
  label,
}: UseCurrencyDropdownProps) => {
  const { amount } = useUrlConversionParams();
  const [currency, selectCurrency] = useState(defaultCurrency);
  const [showCurrency, setShowCurrency] = useState(false);
  const { updateParam, isDetailsPage } = useUrlConversionParams();

  const isDisabled = !amount || (isDetailsPage && label === "from");

  const toggleShowCurrency = () => {
    if (isDisabled) return;
    setShowCurrency(!showCurrency);
  };

  const chooseCurrency = (currency: string, target: CurrencyTargets) => {
    setShowCurrency(false);
    selectCurrency(currency);
    updateParam(target, currency);
  };

  const currencyClassName = `currency ${isDisabled && "disabled"}`;

  return {
    currency,
    selectCurrency,
    showCurrency,
    toggleShowCurrency,
    chooseCurrency,
    currencyClassName,
  };
};

export default useCurrencyDropdown;
