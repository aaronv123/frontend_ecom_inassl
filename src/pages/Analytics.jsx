import "./Analytics.css";
import { Metric, Panel } from "../components/DashboardParts.jsx";

function Analytics() {
  return (
    <div className="page">
      <div className="page-title"><div><h1>Turn insights into next sales.</h1><p>Analytics / November 1–25, 2026</p></div><button className="small-button">Export report</button></div>
      <section className="metric-grid">
        <Metric label="Total revenue" value="$48,620" change="+18.4%" caption="vs. last month" />
        <Metric label="Orders" value="64" caption="Across online and in-store sales" />
        <Metric label="Average order value" value="$759.69" caption="8% more than last month" />
        <Metric label="Returning customer rate" value="25%" caption="16 orders from repeat customers" />
      </section>
      <section className="analytics-layout">
        <Panel title="Revenue performance" caption="November 1–25 · Total $48,620" className="revenue analytics-chart">
          <div className="analytics-bars">{[["$6400","53%"],["$10800","88%"],["$13220","100%"],["$16200","78%"]].map(([amount,height],index) => <div key={amount}><strong>{amount}</strong><i style={{ height }} /><span>{["Nov 1–7","Nov 8–14","Nov 15–21","Nov 22–25"][index]}</span></div>)}</div>
        </Panel>
        <Panel title="Where sales happen." caption="Revenue by sales channel" className="channel-panel">
          <div className="channel"><span><b>Online store</b><b>65.4%</b></span><i><b/></i><small>$31,800 · 42 orders</small></div>
          <div className="channel"><span><b>In-store</b><b>34.6%</b></span><i><b/></i><small>$16,820 · 22 orders</small></div>
          <div className="insight"><h3>Your storefront is doing the work.</h3><p>Online sales bring in nearly two-thirds of revenue. Keep your most popular laptops easy to find.</p></div>
        </Panel>
      </section>
      <Panel title="Best-selling models" action="By units sold" className="analytics-best">
        <div className="table"><div className="table-row table-head"><b>Product</b><b>Units sold</b><b>Revenue</b></div>
        {[["ASUS Vivobook 15","18","$10,782"],["HP Pavilion 15","14","$10,486"],["MacBook Air M3","10","$12,990"]].map(row => <div className="table-row" key={row[0]}>{row.map(cell => <span key={cell}>{cell}</span>)}</div>)}</div>
      </Panel>
    </div>
  );
}

export default Analytics;
