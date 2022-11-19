import { useSearchParams } from "react-router-dom";

type URLParamProps = 'from' | 'to' | 'amount';

const useUrlConversionParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const from = searchParams.get('from') || 'EUR';
  const to = searchParams.get('to') || 'USD';
  const amount = searchParams.get('amount') || '';

  const stringifiedParams = `from=${from}&to=${to}&amount=${amount}`;

  const updateParam = (key: URLParamProps, value: string) => setSearchParams({ from, to, amount, [key]: value });

  return {
    stringifiedParams,
    updateParam,
    from,
    to,
    amount,
  }
}

export default useUrlConversionParams;
