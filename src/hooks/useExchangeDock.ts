import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../constants/axiosInstance";
import useConverter from "./useConverter";

export interface Symbols {
  USD: string;
  EUR: string;
}

interface FetchCurrenciesResponse {
  symbols?: Symbols;
}

const useExchangeDock = () => {
  const {
    from,
    to,
    amount,
    previousAmount,
    result, 
    convert,
    updateParam,
    goToDetailsPage,
    goToHome,
    isDetailsPage,
  } = useConverter();

  const fetchCurrencies = (): Promise<FetchCurrenciesResponse> => axiosInstance.get('/symbols').then((response) => response.data);

  const { data, isLoading } = useQuery(['currencies'], { queryFn: fetchCurrencies, keepPreviousData: true });

  const currencies = Object.keys(data?.symbols || {});

  const title = isDetailsPage ? `${from} - ${data?.symbols?.[from as keyof Symbols] || ''}` : 'Currency Exchanger';

  return {
    data,
    from,
    to,
    amount,
    previousAmount,
    result,
    convert,
    updateParam,
    goToDetailsPage,
    goToHome,
    currencies,
    isLoading,
    title,
    isDetailsPage,
  }
};

export default useExchangeDock;
