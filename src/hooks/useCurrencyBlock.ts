import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../constants/axiosInstance";
import { ConvertCurrenciesResponse } from "./useConverter";
import useUrlConversionParams from "./useUrlConversionParams";

const useCurrencyBlock = ({ defaultTargetCurrency }: { defaultTargetCurrency: string }) => {
  const { from, to, amount } = useUrlConversionParams();
  const params = `from=${from}&to=${defaultTargetCurrency}&amount=${amount}`;
  const convertFetch=  (): Promise<ConvertCurrenciesResponse>  => axiosInstance.get(`/convert?${params}`).then((response) => response.data);

  const { data: convertData } = useQuery([from, to, amount], { enabled: false });
  const canConvert = from && to && amount && convertData;

  const { data } = useQuery([from, defaultTargetCurrency, amount], { queryFn: convertFetch, enabled: !!canConvert, keepPreviousData: true });

  const result = data?.result || '';

  return { 
    result,
  }
};

export default useCurrencyBlock;
