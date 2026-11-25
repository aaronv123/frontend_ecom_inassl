import { useState } from "react";
import Header from "./Header.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Products from "./pages/Products.jsx";
import Customers from "./pages/Customers.jsx";
import Analytics from "./pages/Analytics.jsx";
import Orders from "./pages/Orders.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const [active, setActive] = useState("Home");

  return (
    <div className="shop-shell">
      <Header active={active} onNavigate={setActive} />

      <main>
        {active === "Dashboard" && <Dashboard />}
        {active === "Products" && <Products />}
        {active === "Customers" && <Customers />}
        {active === "Analytics" && <Analytics />}
        {active === "Orders" && <Orders />}
        {active === "Home" && <Home onNavigate={setActive} />}
      </main>
    </div>
  );
}
export default App;
