import { useContext } from "react";
import { PricingContext } from "../context/PricingContext";
import PlanCard from "./PlanCard";

const PricingGrid = () => {
  const { plans, loading } = useContext(PricingContext);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading plans...</p>;
  }

  return (
    <div className="grid">
      {plans.map((plan) => (
        <PlanCard key={plan.name} plan={plan} />
      ))}
    </div>
  );
};

export default PricingGrid;