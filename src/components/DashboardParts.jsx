import "./DashboardParts.css";

export function Trend({ children }) {
  return <span className="trend">{children}</span>;
}

export function Laptop() {
  return (
    <div className="laptop" aria-label="MacBook laptop">
      <div className="screen"><div className="screen-dash"><i/><i/><i/><i/><i/></div></div>
      <div className="base"/>
    </div>
  );
}

export function Metric({ label, value, change, caption }) {
  return (
    <article className="metric">
      <span>{label}</span>
      <strong>{value}</strong>
      {change && <p><Trend>{change}</Trend><b>{caption}</b></p>}
    </article>
  );
}

export function Panel({ title, caption, action, children, className = "" }) {
  return (
    <article className={`panel ${className}`}>
      <div className="panel-head">
        <div><h3>{title}</h3>{caption && <p>{caption}</p>}</div>
        {action && <button className="small-button">{action}</button>}
      </div>
      {children}
    </article>
  );
}
