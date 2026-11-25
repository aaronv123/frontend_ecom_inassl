import "./Home.css";
import laptopPhoto from "../assets/laptop-feature.avif";

function Home({ onNavigate }) {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-copy">
          <p className="home-kicker">Your seller workspace</p>
          <h1>Your store, at<br />your fingertips.</h1>
          <p className="home-description">
            Manage your products, inventory, customers, and orders from one
            place. Everything you need to keep your laptop business moving.
          </p>
          <button className="home-button" onClick={() => onNavigate("Dashboard")}>Open dashboard</button>
        </div>

        <div className="home-product">
          <div className="home-product-copy">
            <span>Store snapshot</span>
            <h2>Your business at a glance.</h2>
            <p>Performance so far this month</p>
            <div className="seller-snapshot">
              <div><strong>$48,620</strong><small>Revenue</small></div>
              <div><strong>64</strong><small>Orders</small></div>
              <div><strong>246</strong><small>Units in stock</small></div>
            </div>
          </div>
          <img className="home-laptop-photo" src={laptopPhoto} alt="Laptop from the store's product catalog" />
          <button className="home-product-button" onClick={() => onNavigate("Products")}>Manage inventory</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
