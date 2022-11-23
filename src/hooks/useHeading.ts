import { useNavigate } from "react-router-dom"

const useHeading = () => {
  const navigate = useNavigate();
  const goToEURToUSD = () => navigate('/details?from=EUR&to=USD&amount=1');
  const goToEURToGBP = () => navigate('/details?from=EUR&to=USD&amount=1');

  return {
    goToEURToGBP,
    goToEURToUSD,
  }
}

export default useHeading;
