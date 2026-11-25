import "./Dashboard.css";
import { Metric, Panel } from "../components/DashboardParts.jsx";

function Dashboard() {
  const revenue = [
    ["$10.9k", "53%"],
    ["$13.2k", "65%"],
    ["$18.4k", "88%"],
  ];

  return (
    <div className="page">
      <div className="page-title">
        <div><h1>Your business at a glance.</h1><p>Dashboard / November 1–25, 2026</p></div>
        <button className="small-button">View report</button>
      </div>
      <section className="metric-grid">
        <Metric label="Total revenue" value="$48,620" change="+18.4%" caption="vs. last month" />
        <Metric label="Orders" value="64" caption="12 orders awaiting dispatch" />
        <Metric label="New customers" value="42" change="+30%" caption="vs. last month" />
        <Metric label="Units in stock" value="246" caption="Across 24 laptop models" />
      </section>
      <section className="dashboard-layout">
        <Panel title="Revenue overview" caption="Sales are growing, one laptop at a time." action="This month" className="revenue">
          <div className="week-chart">
            {revenue.map(([label, height], index) => (
              <div className="week-column" key={label}>
                <strong>{label}</strong>
                <div className="week-track"><i style={{ height }} /></div>
                <span>Week {index + 1}</span>
              </div>
            ))}
            <div className="week-column current"><strong>$16.2k</strong><div className="week-track"><i style={{ height: "78%" }} /></div><span>Week 4</span></div>
          </div>
        </Panel>
        <Panel title="Keep your next sale ready." caption="3 models are running low on stock." className="spotlight">
          <div className="stock-list">
            <span><b>MacBook Air M3</b><b>3 left</b></span>
            <span><b>Dell XPS 13</b><b>4 left</b></span>
            <span><b>Lenovo ThinkPad X1</b><b>5 left</b></span>
          </div>
          <button className="panel-link">Review inventory</button>
        </Panel>
      </section>
      <section className="bottom-grid">
        <Panel title="Recent orders" action="Latest 3 of 64 orders this month" className="orders-panel">
          <div className="table">
            <div className="table-row table-head"><b>Order</b><b>Customer</b><b>Product</b><b>Total</b><b>Status</b></div>
            {[
              ["#SB-1064","Maya Patel","MacBook Air M3 · 16 GB / 512 GB","$1,299","Processing"],
              ["#SB-1063","James Wilson","Dell XPS 13 · 16 GB / 512 GB","$1,199","Shipped"],
              ["#SB-1062","Aisha Khan","Lenovo ThinkPad X1 · 32 GB / 1 TB","$1,499","Delivered"],
            ].map((row) => <div className="table-row" key={row[0]}>{row.map((cell,index) => <span key={cell} className={index === 4 ? `status ${cell.toLowerCase()}` : ""}>{cell}</span>)}</div>)}
          </div>
        </Panel>
      </section>
    </div>
  );
}

export default Dashboard;
