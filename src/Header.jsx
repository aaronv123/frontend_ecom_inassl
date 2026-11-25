
import "./Header.css";

const navItems = ["Home", "Dashboard", "Products", "Customers", "Analytics", "Orders"];

function Header({ active, onNavigate }) {
  return (
    <header className="top-nav">
      <div className="logo">Shopbyte</div>
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
      <button className="account" aria-label="Account"><span /></button>
    </header>
  );
}

export default Header;