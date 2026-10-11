import Link from "next/link";
import { ContactForm } from "./contact-form";
import { FinanceTabs } from "./finance-tabs";
import { FloatingWidgets } from "./floating-widgets";
import { SiteFooter, SiteNav } from "./site-chrome";

export type CarDetailProps = {
  name: string;
  eyebrow: string;
  meta: string;
  price: string;
  priceValue?: number; // USD, used to start the finance calculator
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
                <a href="#consulta" className="btn-primary">Agendar una prueba de manejo</a>
                <a href="#consulta" className="btn-secondary-dark">Consultar por este auto</a>
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

          <section className="detail-section" id="financiacion">
            <h2>Financia tu próximo auto y usa tu auto actual como parte de pago.</h2>
            <FinanceTabs price={car.priceValue} />
          </section>

          <section className="detail-section detail-contact" id="consulta">
            <div className="contact-grid">
              <div className="contact-info">
                <h2>Consulta por el {car.name}.</h2>
                <p className="contact-lead">
                  Déjanos tus datos y un asesor se pondrá en contacto contigo para
                  coordinar una prueba de manejo o resolver tus dudas.
                </p>
              </div>
              <div className="contact-form-wrap">
                <ContactForm
                  defaultTopic="test-drive"
                  defaultMessage={`Hola, me interesa el ${car.name}. ¿Podrían darme más información?`}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
      <FloatingWidgets solidNav />
    </>
  );
}
