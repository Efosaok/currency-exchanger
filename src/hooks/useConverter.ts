import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axiosInstance from "../constants/axiosInstance";
import useUrlConversionParams from "./useUrlConversionParams";

export interface ConvertCurrenciesResponse {
  date?: string;
  historical?: string;
  info: {
    rate: number;
    timestamp: number;
  };
  query: {
    amount: number;
    from: number;
    to: number;
  };
  result: number;
  success: boolean;
}

const useConverter = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const {
    stringifiedParams,
    updateParam,
    from,
    to,
    amount,
    goToDetailsPage,
    goToHome,
    isDetailsPage,
  } = useUrlConversionParams();

  const convertFetch = (): Promise<ConvertCurrenciesResponse> =>
    axiosInstance.get(`/convert?${stringifiedParams}`).then((response) => {
      setIsInitialLoad(false);
      return response.data;
    });

  const enableFetch = isInitialLoad && isDetailsPage;

  const {
    data,
    isLoading,
    isFetched,
    refetch: convert,
  } = useQuery([from, to, amount], {
    queryFn: convertFetch,
    enabled: enableFetch,
  });

  const result = data?.result;
  const previousAmount = data?.query?.amount || 1;

  return {
    result,
    isLoading,
    convert,
    from,
    to,
    amount,
    previousAmount,
    updateParam,
    isFetched,
    goToDetailsPage,
    isDetailsPage,
    goToHome,
  };
};

export default useConverter;
