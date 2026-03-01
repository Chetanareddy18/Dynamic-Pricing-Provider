import { createContext, useState, useEffect } from "react";
import pricingData from "../data/pricing.json";

export const PricingContext = createContext();

export const PricingProvider = ({ children }) => {
  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("USD");
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const discount = 0.2;

  useEffect(() => {
    // simulate API call delay
    setTimeout(() => {
      setPlans(pricingData.plans);
      setLoading(false);
    }, 600);
  }, []);

  return (
    <PricingContext.Provider
      value={{
        billing,
        setBilling,
        currency,
        setCurrency,
        plans,
        loading,
        currencyRates: pricingData.currencyRates,
        discount,
      }}
    >
      {children}
    </PricingContext.Provider>
  );
};