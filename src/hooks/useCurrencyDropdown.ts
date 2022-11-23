import { useState } from "react";
import useUrlConversionParams from "./useUrlConversionParams";

interface UseCurrencyDropdownProps {
  defaultCurrency: string;
}

export type CurrencyTargets = "from" | "to";

const useCurrencyDropdown = ({ defaultCurrency }: UseCurrencyDropdownProps) => {
  const [currency, selectCurrency] = useState(defaultCurrency);
  const [showCurrency, setShowCurrency] = useState(false);
  const { updateParam, isDetailsPage } = useUrlConversionParams();

  const toggleShowCurrency = (target: CurrencyTargets) => {
    const cannotSelectCurrency = target === "from" && isDetailsPage;
    if (cannotSelectCurrency) return;
    setShowCurrency(!showCurrency);
  };

  const chooseCurrency = (currency: string, target: CurrencyTargets) => {
    setShowCurrency(false);
    selectCurrency(currency);
    updateParam(target, currency);
  };

  return {
    currency,
    selectCurrency,
    showCurrency,
    toggleShowCurrency,
    chooseCurrency,
  };
};

export default useCurrencyDropdown;
