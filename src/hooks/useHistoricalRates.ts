import { useQueries, useQuery, UseQueryOptions } from "@tanstack/react-query";
import axiosInstance from "../constants/axiosInstance";
import { Symbols } from "./useExchangeDock";
import useUrlConversionParams from "./useUrlConversionParams";

interface HistoricalRatesFetchResponse {
  success: boolean;
  historical: boolean;
  date: string;
  timestamp: number;
  rates: Symbols;
}

const useHistoricalRates = () => {
  const { from, to, amount } = useUrlConversionParams();

  const historicalRatesFetch = (day: string): Promise<HistoricalRatesFetchResponse> => axiosInstance.get(`/historical-rates/${day}?from=${from}&to=${to}`);
  const { data: conversionData } = useQuery([from, to, amount], { enabled: false });

  const date = new Date();
  const previousYear = date.getFullYear() - 1;
  const queryDays = [
    `${previousYear}-01-31`,
    `${previousYear}-02-28`,
    `${previousYear}-03-31`,
    `${previousYear}-04-30`,
    `${previousYear}-05-31`,
    `${previousYear}-06-30`,
    `${previousYear}-07-31`,
    `${previousYear}-08-31`,
    `${previousYear}-09-30`,
    `${previousYear}-10-31`,
    `${previousYear}-11-30`,
    `${previousYear}-12-31`,
  ];

  const queries: UseQueryOptions[] = queryDays.map((queryDay) => ({
    queryFn: (): Promise<HistoricalRatesFetchResponse> => historicalRatesFetch(queryDay),
    queryKey: [from, to, queryDay],
    enabled: !!conversionData,
    keepPreviousData: true,
  }));

  const historicalRates: any = useQueries({ queries });

  const loading = historicalRates[0]?.isLoading;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Historical Rates',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const ratesData = historicalRates?.map((res: any) => res?.data?.data?.rates?.[to as keyof Symbols]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Rates',
        data: ratesData,
        backgroundColor: 'rgb(0,0,0)',
      },
    ],
  };

  return {
    loading,
    data,
    options,
  }
};

export default useHistoricalRates;
