"use client";

import { useId, useState } from "react";

type Tab = "finance" | "trade";

const usd = (n: number) =>
  new Intl.NumberFormat("es-UY", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

const STEPS = [
  { title: "Cuéntanos sobre tu auto", copy: "Indícanos la marca, el modelo, el año y el kilometraje del vehículo que manejas hoy." },
  { title: "Recibe una tasación rápida", copy: "Nuestro equipo revisa tus datos y te envía un valor estimado de permuta." },
  { title: "Tráelo para una inspección", copy: "Una breve peritación confirma el estado del auto y fija tu oferta final." },
  { title: "Estrena tu próximo BMW", copy: "El valor de tu permuta se aplica directamente al auto que elijas." },
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

function Calculator({ initialPrice }: { initialPrice?: number }) {
  const start = Math.min(Math.max(initialPrice ?? 45000, 10000), 150000);
  const [price, setPrice] = useState(start);
  const [down, setDown] = useState(Math.round((start * 0.2) / 500) * 500);
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
        <Slider label="Precio del vehículo" value={price} min={10000} max={150000} step={1000} format={usd} onChange={setPrice} />
        <Slider label="Entrega inicial" value={down_} min={0} max={price} step={500} format={usd} onChange={setDown} />
        <Slider label="Plazo" value={term} min={12} max={84} step={12} format={(n) => `${n} meses`} onChange={setTerm} />
        <Slider label="Tasa de interés (TEA)" value={apr} min={0} max={15} step={0.1} format={(n) => `${n.toFixed(1).replace(".", ",")} %`} onChange={setApr} />
      </div>
      <div className="calc-result" aria-live="polite">
        <p className="calc-result-label">Cuota mensual estimada</p>
        <p className="calc-result-amount">{usd(monthly)}</p>
        <dl>
          <div><dt>Monto financiado</dt><dd>{usd(principal)}</dd></div>
          <div><dt>Total de pagos</dt><dd>{usd(total)}</dd></div>
          <div><dt>Total de intereses</dt><dd>{usd(Math.max(total - principal, 0))}</dd></div>
        </dl>
        <p className="calc-note">Estimación ilustrativa. Las condiciones finales dependen de la aprobación crediticia.</p>
        <button type="button" className="btn-primary">Solicitar financiación</button>
      </div>
    </div>
  );
}

function TradeIn() {
  const [sent, setSent] = useState(false);
  return (
    <div className="tab-grid">
      <div className="trade-steps">
        <h3>Cómo funciona la permuta</h3>
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
          <h3>Gracias.</h3>
          <p>Recibimos tus datos y te contactaremos a la brevedad con la estimación de tu permuta.</p>
          <button type="button" className="btn-secondary-dark" onClick={() => setSent(false)}>Enviar otro</button>
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
            <label>Nombre completo<input name="name" required autoComplete="name" /></label>
            <label>Teléfono<input name="phone" type="tel" required autoComplete="tel" /></label>
          </div>
          <label>Correo electrónico<input name="email" type="email" required autoComplete="email" /></label>
          <div className="form-row">
            <label>Marca<input name="brand" required placeholder="p. ej. Toyota" /></label>
            <label>Modelo<input name="model" required placeholder="p. ej. Corolla" /></label>
          </div>
          <div className="form-row">
            <label>Año<input name="year" type="number" min="1990" max="2027" required /></label>
            <label>Kilometraje (km)<input name="km" type="number" min="0" required /></label>
          </div>
          <label>
            Estado
            <select name="condition" defaultValue="good">
              <option value="excellent">Excelente</option>
              <option value="good">Bueno</option>
              <option value="fair">Regular</option>
              <option value="needs-work">Necesita arreglos</option>
            </select>
          </label>
          <button type="submit" className="btn-primary">Quiero el valor de mi permuta</button>
        </form>
      )}
    </div>
  );
}

export function FinanceTabs({ price }: { price?: number }) {
  const [tab, setTab] = useState<Tab>("finance");
  return (
    <div className="ft">
      <div className="ft-tabs" role="tablist" aria-label="Financiación y permuta">
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
            {t === "finance" ? "Calculadora de financiación" : "Permuta"}
          </button>
        ))}
      </div>
      <div className="ft-panel" role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`}>
        {tab === "finance" ? <Calculator initialPrice={price} /> : <TradeIn />}
      </div>
    </div>
  );
}
