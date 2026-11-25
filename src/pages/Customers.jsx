import "./Customers.css";
import { Metric, Panel } from "../components/DashboardParts.jsx";

function Customers() {
  const customers = [
    ["Maya Patel","maya.patel@example.com","5","$6,495","Nov 25","VIP"],
    ["James Wilson","james.wilson@example.com","3","$3,597","Nov 23","Regular"],
    ["Aisha Khan","aisha.khan@example.com","4","$5,996","Nov 24","Regular"],
    ["Daniel Kim","daniel.kim@example.com","2","$1,499","Nov 23","Regular"],
    ["Sofia Martinez","sofia.martinez@example.com","6","$4,494","Nov 22","Regular"],
    ["Neah Brown","neah.brown@example.com","1","$599","Nov 21","New"],
  ];

  return (
    <div className="page">
      <div className="page-title"><div><h1>People behind every sale.</h1><p>Keep customer details and purchase history close at hand.</p></div><button className="small-button">Add customer</button></div>
      <section className="metric-grid">
        <Metric label="Total customers" value="1,284" caption="All customer records" />
        <Metric label="New this month" value="42" caption="10 more than last month" />
        <Metric label="Returning customer rate" value="25%" caption="18 of 64 orders this month" />
        <Metric label="VIP customers" value="86" caption="5 or more orders" />
      </section>
      <section className="customers-layout">
        <Panel title="Customer directory" className="catalog customers-table">
          <div className="catalog-tools"><span>All customers (1,284)</span><span>New this month (42)</span><span>VIP (86)</span><input aria-label="Search customers" placeholder="Search by name or email" /></div>
          <div className="table">
            <div className="table-row table-head"><b>Customer</b><b>Orders</b><b>Total spent</b><b>Last order</b><b>Type</b></div>
            {customers.map((row) => <div className="table-row" key={row[0]}>{row.map((cell,index) => <span key={cell} className={index === 5 ? `customer-type ${cell.toLowerCase()}` : ""}>{index === 0 ? <><b>{cell}</b><small>{row[1]}</small></> : index === 1 ? null : cell}</span>)}</div>)}
          </div>
          <div className="pagination">Previous <b>1</b> 2 3 ... 42 <b>Next</b></div>
        </Panel>
        <Panel title="Customer spotlight" className="spotlight customer-spotlight">
          <h3>Maya Patel</h3><p>maya.patel@example.com</p><small>VIP customer · Since March 2026</small>
          <div className="customer-stats"><span><strong>5</strong><small>Total orders</small></span><span><strong>$6,495</strong><small>Lifetime spend</small></span></div>
          <b>Latest purchase</b><p>MacBook Air M3</p><small>Order #SB-1064 · November 25, 2026</small><p>Processing · $1,299</p>
          <button className="panel-link">View customer history</button>
        </Panel>
      </section>
    </div>
  );
}

export default Customers;
