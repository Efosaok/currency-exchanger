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
  const [canConvert, setCanConvert] = useState(false);

  const {
    stringifiedParams,
    updateParam,
    from,
    to,
    amount,
  } = useUrlConversionParams();

  const convertFetch = (): Promise<ConvertCurrenciesResponse> => axiosInstance
    .get(`convert?${stringifiedParams}`)
    .then((response) => {
      setCanConvert(false);
      return response.data
    });

  const enableConversion = () => setCanConvert(true);

  const { data, isLoading, isFetched } = useQuery([from, to, amount], { queryFn: convertFetch, enabled: canConvert, keepPreviousData: true });

  const result = data?.result;
  const previousAmount = data?.query?.amount || 1;

  return {
    result,
    isLoading,
    enableConversion,
    from,
    to,
    amount,
    previousAmount,
    updateParam,
    isFetched,
  }
}

export default useConverter;
