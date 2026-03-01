import { useContext } from "react";
import { PricingContext } from "../context/PricingContext";

const CurrencySelector = () => {
  const { currency, setCurrency } = useContext(PricingContext);

  return (
    <select
      className="currency-select"
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
    >
      <option value="USD">USD</option>
      <option value="INR">INR</option>
    </select>
  );
};

export default CurrencySelector;