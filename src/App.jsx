import { PricingProvider } from "./context/PricingContext";
import BillingToggle from "./components/BillingToggle";
import CurrencySelector from "./components/CurrencySelector";
import PricingGrid from "./components/PricingGrid";
import "./App.css";

function App() {
  return (
    <PricingProvider>
      <div className="container">
        <h1>Flexible Pricing Plans</h1>
        <p className="subtitle">
          Choose the plan that fits your needs.
        </p>

        <div className="controls">
          <BillingToggle />
          <CurrencySelector />
        </div>

        <PricingGrid />
      </div>
    </PricingProvider>
  );
}

export default App;