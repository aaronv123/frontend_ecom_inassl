import "./Products.css";
import { Metric, Panel } from "../components/DashboardParts.jsx";
import dellLaptop from "../assets/dell-xps-13.avif";

function Products() {
  const products = [
    ["MacBook Air M3","SB-MB-A01 · 16 GB / 512 GB","$1,299","3 units","Low stock"],
    ["Dell XPS 13","SB-DE-D01 · 16 GB / 512 GB","$1,199","4 units","Low stock"],
    ["Lenovo ThinkPad X1","SB-LN-N001 · 32 GB / 1 TB","$1,499","5 units","Low stock"],
    ["HP Pavilion 15","SB-HP-001 · 16 GB / 512 GB","$749","48 units","In stock"],
    ["ASUS Vivobook 15","SB-AS-U01 · 8 GB / 512 GB","$599","62 units","In stock"],
    ["Acer Aspire 5","SB-AC-001 · 16 GB / 512 GB","$649","38 units","In stock"],
  ];

  return (
    <div className="page">
      <div className="page-title"><div><h1>Your products, organized.</h1><p>Manage laptop listings, pricing, and inventory in one place.</p></div><button className="small-button">Add product</button></div>
      <section className="metric-grid">
        <Metric label="Laptop models" value="24" caption="Your complete product catalog" />
        <Metric label="Active listings" value="21" caption="Ready for your next sale" />
        <Metric label="Units in stock" value="246" caption="Across all laptop models" />
        <Metric label="Low-stock models" value="3" caption="Reorder before they sell out" />
      </section>
      <section className="products-layout">
        <Panel title="Product catalog" className="catalog">
          <div className="catalog-tools"><span>All products (24)</span><span>Active (21)</span><span>Drafts (3)</span><input aria-label="Search products" placeholder="Search by model or SKU" /></div>
          <div className="table product-table">
            <div className="table-row table-head"><b>Product / specification</b><b>Price</b><b>Stock</b><b>Status</b></div>
            {products.map((row) => <div className="table-row" key={row[0]}>{row.map((cell,index) => <span key={cell} className={index === 4 ? `stock-status ${cell === "Low stock" ? "low" : "in"}` : ""}>{index === 0 ? <><b>{cell}</b><small>{row[1]}</small></> : cell}</span>)}</div>)}
          </div>
          <div className="pagination">Previous <b>1</b> 2 3 4 <b>Next</b></div>
        </Panel>
        <Panel title="Ready for the spotlight." caption="Featured product" className="spotlight product-spotlight">
          <img className="product-spotlight-photo" src={dellLaptop} alt="Dell XPS 13 laptop" />
          <h3>Dell XPS 13</h3>
          <p>16 GB memory · 512 GB storage</p>
          <strong>$1,199</strong><button className="quantity">Only 4 left</button>
          <button className="panel-link">View product</button>
        </Panel>
      </section>
    </div>
  );
}

export default Products;
