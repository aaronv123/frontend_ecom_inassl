
import { useState } from "react";
import "./Header.css";
import shopbyteLogo from "./assets/shopbytelogo.svg";

const navItems = ["Home", "Dashboard", "Products", "Customers", "Analytics", "Orders"];

function Header({ active, onNavigate }) {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  function navigateFromAccountMenu(page) {
    setAccountMenuOpen(false);
    onNavigate(page);
  }

  return (
    <header className="top-nav">
      <div className="logo">
        <img src={shopbyteLogo} alt="Shopbyte" />
      </div>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <button
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => onNavigate(item)}
          >
            {item}
          </button>
        ))}
      </nav>
      <div className="account-menu">
        <button
          className="account"
          aria-label="Account menu"
          aria-expanded={accountMenuOpen}
          aria-controls="account-dropdown"
          onClick={() => setAccountMenuOpen((isOpen) => !isOpen)}
        >
          <span />
        </button>
        {accountMenuOpen && (
          <div className="account-dropdown" id="account-dropdown">
            <button onClick={() => navigateFromAccountMenu("Profile")}>
              Profile settings
            </button>
            <span className="account-divider" />
            <button
              className="account-logout"
              onClick={() => navigateFromAccountMenu("Sign in")}
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;