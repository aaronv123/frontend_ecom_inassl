import "./Orders.css";
import { Metric, Panel } from "../components/DashboardParts.jsx";

function Orders() {
  const rows = [
    ["#SB-1064","Maya Patel","MacBook Air M3","Nov 25","$1,299","Processing"],
    ["#SB-1063","James Wilson","Dell XPS 13","Nov 25","$1,199","Shipped"],
    ["#SB-1062","Aisha Khan","Lenovo ThinkPad X1","Nov 24","$1,499","Delivered"],
    ["#SB-1061","Daniel Kim","MacBook Air M3","Nov 23","$1,299","Delivered"],
  ];

  return (
    <div className="page">
      <div className="page-title"><div><h1>Every order, in order.</h1><p>Track recent purchases and fulfillment.</p></div><button className="small-button">Create order</button></div>
      <section className="metric-grid">
        <Metric label="Orders this month" value="64" caption="12 awaiting dispatch" />
        <Metric label="Processing" value="12" caption="Ready to prepare" />
        <Metric label="Shipped" value="18" caption="In transit" />
        <Metric label="Delivered" value="34" caption="Successfully completed" />
      </section>
      <Panel title="Order directory" className="catalog orders-directory">
        <div className="catalog-tools"><span>All orders (64)</span><span>Processing (12)</span><span>Shipped (18)</span><span>Delivered (34)</span><input aria-label="Search orders" placeholder="Search by order or customer" /></div>
        <div className="table"><div className="table-row table-head"><b>Order</b><b>Customer</b><b>Product</b><b>Date</b><b>Total</b><b>Status</b></div>
        {rows.map(row => <div className="table-row" key={row[0]}>{row.map((cell,index) => <span key={cell} className={index === 5 ? `status ${cell.toLowerCase()}` : ""}>{cell}</span>)}</div>)}</div>
      </Panel>
    </div>
  );
}

export default Orders;
