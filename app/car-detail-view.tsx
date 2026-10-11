import Link from "next/link";
import { FloatingWidgets } from "./floating-widgets";
import { SiteFooter, SiteNav } from "./site-chrome";

export type CarDetailProps = {
  name: string;
  eyebrow: string;
  meta: string;
  price: string;
  note: string;
  photo: string; // Unsplash photo id (temporary stand-in)
  description: string;
  features: string[];
  specs: [string, string][];
  backHref: string;
  backLabel: string;
};

export function CarDetailView(car: CarDetailProps) {
  return (
    <>
      <SiteNav />
      <main className="detail">
        <div className="detail-inner">
          <Link href={car.backHref} className="detail-back">‹ {car.backLabel}</Link>

          <div className="detail-top">
            <div className="detail-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://images.unsplash.com/photo-${car.photo}?w=1400&q=80&auto=format&fit=crop`}
                alt={car.name}
              />
            </div>
            <div className="detail-summary">
              <p className="detail-eyebrow">{car.eyebrow}</p>
              <h1>{car.name}</h1>
              <p className="detail-meta">{car.meta}</p>
              <p className="detail-price">{car.price}</p>
              <div className="detail-actions">
                <Link href="/#contact" className="btn-primary">Agendar una prueba de manejo</Link>
                <Link href="/#contact" className="btn-secondary-dark">Consultar por este auto</Link>
              </div>
              <p className="detail-note">{car.note}</p>
            </div>
          </div>

          <div className="detail-body">
            <section>
              <h2>Descripción</h2>
              <p className="detail-desc">{car.description}</p>
              <h2>Equipamiento</h2>
              <ul className="detail-features">
                {car.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2>Ficha técnica</h2>
              <dl className="detail-specs">
                {car.specs.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
      <FloatingWidgets solidNav />
    </>
  );
}
