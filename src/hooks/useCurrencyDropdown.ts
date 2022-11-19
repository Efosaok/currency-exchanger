import { useQuery } from "@tanstack/react-query";
import { useState } from "react"
import { useSearchParams } from "react-router-dom";
import axiosInstance from "../constants/axiosInstance";
import useUrlConversionParams from "./useUrlConversionParams";

interface UseCurrencyDropdownProps {
  defaultCurrency: string;
}

type Symbols = {
  USD: string;
}

interface FetchCurrenciesResponse {
  symbols?: Symbols;
}

export type CurrencyTargets = 'from' | 'to';

const useCurrencyDropdown = ({ defaultCurrency }: UseCurrencyDropdownProps) => {
  const [currency, selectCurrency] = useState(defaultCurrency);
  const [showCurrency, setShowCurrency] = useState(false);
  const { updateParam } = useUrlConversionParams();

  const toggleShowCurrency = () => setShowCurrency(!showCurrency);

  const fetchCurrencies = (): Promise<FetchCurrenciesResponse> => axiosInstance.get('symbols').then((response) => response.data);

  const { data, isFetching } = useQuery(['currencies'], { queryFn: fetchCurrencies });

  const currencies = Object.keys(data?.symbols || {});

  const chooseCurrency = (currency: string, target: CurrencyTargets) => {
    setShowCurrency(false);
    selectCurrency(currency);
    updateParam(target, currency);
  }

  return {
    currency,
    selectCurrency,
    data,
    isFetching,
    currencies,
    showCurrency,
    toggleShowCurrency,
    chooseCurrency,
  }
}

export default useCurrencyDropdown;
