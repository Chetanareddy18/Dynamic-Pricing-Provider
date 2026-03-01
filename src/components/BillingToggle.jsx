import { useContext } from "react";
import { PricingContext } from "../context/PricingContext";

const BillingToggle = () => {
  const { billing, setBilling } = useContext(PricingContext);

  return (
    <div className="billing-toggle">
      <button
        className={billing === "monthly" ? "active" : ""}
        onClick={() => setBilling("monthly")}
      >
        Monthly
      </button>

      <button
        className={billing === "yearly" ? "active" : ""}
        onClick={() => setBilling("yearly")}
      >
        Yearly (20% off)
      </button>
    </div>
  );
};

export default BillingToggle;