import { useContext, useMemo } from "react";
import { PricingContext } from "../context/PricingContext";
import "../App.css";

const PlanCard = ({ plan }) => {
  const { billing, currency, currencyRates, discount } =
    useContext(PricingContext);

  const price = useMemo(() => {
    const base =
      billing === "monthly"
        ? plan.monthlyPrice
        : plan.monthlyPrice * 12 * (1 - discount);

    return (base * currencyRates[currency]).toFixed(2);
  }, [billing, currency, plan, currencyRates, discount]);

  const savings = useMemo(() => {
    return (plan.monthlyPrice * 12 * discount).toFixed(2);
  }, [plan, discount]);

  return (
    <div className={`card ${plan.recommended ? "recommended" : ""}`}>
      {plan.recommended && <div className="badge">Most Popular</div>}

      <h2>{plan.name}</h2>

      <p className="price">
        {currency} {price}
      </p>

      {billing === "yearly" && (
        <p className="save">Save {currency} {savings} yearly</p>
      )}

      <ul>
        {plan.features.map((feature, index) => (
          <li key={index}>✓ {feature}</li>
        ))}
      </ul>

      <button>Choose Plan</button>
    </div>
  );
};

export default PlanCard;