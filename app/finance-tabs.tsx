"use client";

import { useId, useState } from "react";

type Tab = "finance" | "trade";

const usd = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

const STEPS = [
  { title: "Tell us about your car", copy: "Share the brand, model, year and mileage of the vehicle you drive today." },
  { title: "Get a fast valuation", copy: "Our team reviews your details and sends you an estimated trade-in value." },
  { title: "Bring it in for inspection", copy: "A short appraisal confirms the condition and locks in your final offer." },
  { title: "Drive away in your next BMW", copy: "Your trade-in value is applied directly to the car you choose." },
];

function Slider(props: {
  label: string; value: number; min: number; max: number; step: number;
  format: (n: number) => string; onChange: (n: number) => void;
}) {
  const id = useId();
  const pct = ((props.value - props.min) / (props.max - props.min)) * 100;
  return (
    <div className="calc-field">
      <div className="calc-label">
        <label htmlFor={id}>{props.label}</label>
        <output htmlFor={id}>{props.format(props.value)}</output>
      </div>
      <input
        id={id}
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        style={{ ["--fill" as string]: `${pct}%` }}
        onChange={(e) => props.onChange(Number(e.target.value))}
      />
    </div>
  );
}

function Calculator() {
  const [price, setPrice] = useState(45000);
  const [down, setDown] = useState(9000);
  const [term, setTerm] = useState(60);
  const [apr, setApr] = useState(6.9);

  const down_ = Math.min(down, price);
  const principal = price - down_;
  const r = apr / 1200;
  const monthly = principal === 0 ? 0 : r === 0 ? principal / term : (principal * r) / (1 - Math.pow(1 + r, -term));
  const total = monthly * term;

  return (
    <div className="tab-grid">
      <div className="calc-controls">
        <Slider label="Vehicle price" value={price} min={10000} max={150000} step={1000} format={usd} onChange={setPrice} />
        <Slider label="Down payment" value={down_} min={0} max={price} step={500} format={usd} onChange={setDown} />
        <Slider label="Term" value={term} min={12} max={84} step={12} format={(n) => `${n} months`} onChange={setTerm} />
        <Slider label="Interest rate (APR)" value={apr} min={0} max={15} step={0.1} format={(n) => `${n.toFixed(1)}%`} onChange={setApr} />
      </div>
      <div className="calc-result" aria-live="polite">
        <p className="calc-result-label">Estimated monthly payment</p>
        <p className="calc-result-amount">{usd(monthly)}</p>
        <dl>
          <div><dt>Amount financed</dt><dd>{usd(principal)}</dd></div>
          <div><dt>Total of payments</dt><dd>{usd(total)}</dd></div>
          <div><dt>Total interest</dt><dd>{usd(Math.max(total - principal, 0))}</dd></div>
        </dl>
        <p className="calc-note">Illustrative estimate only. Final terms depend on credit approval.</p>
        <button type="button" className="btn-primary">Apply for financing</button>
      </div>
    </div>
  );
}

function TradeIn() {
  const [sent, setSent] = useState(false);
  return (
    <div className="tab-grid">
      <div className="trade-steps">
        <h3>How trade-in works</h3>
        <ol>
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="step-num">{i + 1}</span>
              <div>
                <p className="step-title">{s.title}</p>
                <p className="step-copy">{s.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      {sent ? (
        <div className="trade-thanks" role="status">
          <h3>Thank you.</h3>
          <p>We received your details and will contact you shortly with your trade-in estimate.</p>
          <button type="button" className="btn-secondary-dark" onClick={() => setSent(false)}>Send another</button>
        </div>
      ) : (
        <form
          className="trade-form"
          onSubmit={(e) => {
            // Demo only: nothing is sent anywhere yet. Wire to a backend/CRM before launch.
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="form-row">
            <label>Full name<input name="name" required autoComplete="name" /></label>
            <label>Phone<input name="phone" type="tel" required autoComplete="tel" /></label>
          </div>
          <label>Email<input name="email" type="email" required autoComplete="email" /></label>
          <div className="form-row">
            <label>Brand<input name="brand" required placeholder="e.g. Toyota" /></label>
            <label>Model<input name="model" required placeholder="e.g. Corolla" /></label>
          </div>
          <div className="form-row">
            <label>Year<input name="year" type="number" min="1990" max="2027" required /></label>
            <label>Mileage (km)<input name="km" type="number" min="0" required /></label>
          </div>
          <label>
            Condition
            <select name="condition" defaultValue="good">
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="needs-work">Needs work</option>
            </select>
          </label>
          <button type="submit" className="btn-primary">Get my trade-in value</button>
        </form>
      )}
    </div>
  );
}

export function FinanceTabs() {
  const [tab, setTab] = useState<Tab>("finance");
  return (
    <div className="ft">
      <div className="ft-tabs" role="tablist" aria-label="Financing and trade-in">
        {(["finance", "trade"] as const).map((t) => (
          <button
            key={t}
            role="tab"
            id={`tab-${t}`}
            aria-selected={tab === t}
            aria-controls={`panel-${t}`}
            className={`ft-tab${tab === t ? " active" : ""}`}
            onClick={() => setTab(t)}
          >
            {t === "finance" ? "Finance calculator" : "Trade-in"}
          </button>
        ))}
      </div>
      <div className="ft-panel" role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`}>
        {tab === "finance" ? <Calculator /> : <TradeIn />}
      </div>
    </div>
  );
}
