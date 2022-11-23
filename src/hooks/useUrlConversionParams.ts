import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

type URLParamProps = "from" | "to" | "amount";

const useUrlConversionParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const from = searchParams.get("from") || "EUR";
  const to = searchParams.get("to") || "USD";
  const amount = searchParams.get("amount") || "";
  const { pathname } = useLocation();

  const isDetailsPage = pathname === "/details";

  const stringifiedParams = `from=${from}&to=${to}&amount=${amount}`;

  const goToDetailsPage = () => navigate(`/details?${stringifiedParams}`);
  const goToHome = () => navigate(`/?${stringifiedParams}`);

  const updateParam = (key: URLParamProps, value: string) =>
    setSearchParams({ from, to, amount, [key]: value });

  return {
    stringifiedParams,
    updateParam,
    from,
    to,
    amount,
    goToDetailsPage,
    goToHome,
    isDetailsPage,
  };
};

export default useUrlConversionParams;
