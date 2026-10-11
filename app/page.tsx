import { FilterChips } from "./filter-chips";
import { ContactForm } from "./contact-form";
import { FinanceTabs } from "./finance-tabs";
import { FloatingWidgets } from "./floating-widgets";
import { SiteFooter, SiteNav } from "./site-chrome";
import { PREOWNED, formatKm, formatUsd } from "./data/preowned";
import { MODELS } from "./data/models";
import Link from "next/link";

// PLACEHOLDER contact details: replace with the dealer's real information.
const CONTACT = [
  { label: "Dirección", lines: ["Av. Ejemplo 1234", "Montevideo, Uruguay"] },
  { label: "Teléfono", lines: ["+598 0000 0000"] },
  { label: "Correo electrónico", lines: ["info@example.com"] },
  { label: "Horario del showroom", lines: ["Lun - Vie: 9:00 - 19:00", "Sáb: 9:00 - 13:00"] },
];

export default function Home() {
  return (
    <>
      <SiteNav />

      <main>
        <section className="hero-band-dark">
          <div className="hero-scene" aria-hidden="true" />
          <p className="hero-tag">El evento de ventas BMW Ultimate</p>
          <div className="hero-content">
            <h1>POTENCIA Y ELEGANCIA EN EQUILIBRIO PERFECTO.</h1>
            <p>
              Disfruta de financiación con TEA del 0,9 % en modelos
              seleccionados. Además, créditos de hasta USD 3.000 en modelos X5
              seleccionados para clientes leales. Hasta el 2 de agosto.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">Detalles de la oferta</button>
              <button className="btn-secondary-on-dark">Configura el tuyo</button>
            </div>
          </div>
          <p className="hero-disclaimer">Algunas imágenes pueden estar generadas por computadora</p>
        </section>

        <section className="section-container" id="modelos">
          <div className="section-header">
            <h2>Explora los modelos.</h2>
            <a href="#" className="text-link-uppercase">Ver todos los modelos <span>›</span></a>
          </div>
          <div className="preowned-filter explore-filter">
            <p>Filtra el inventario disponible por serie y tipo de motorización.</p>
            <FilterChips />
          </div>
          <div className="model-grid">
            {MODELS.map((m) => (
              <Link href={`/modelos/${m.slug}`} className="model-card" key={m.slug}>
                <div>
                  <div className="model-card-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://images.unsplash.com/photo-${m.photo}?w=800&q=80&auto=format&fit=crop`}
                      alt={m.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="model-card-info">
                    <h3>{m.name}</h3>
                    <p>{m.copy}</p>
                  </div>
                </div>
                <span className="text-link-uppercase">Más información <span>›</span></span>
              </Link>
            ))}
          </div>
        </section>


        <section className="mission" id="compromiso">
          <div className="mission-inner split-section">
            <div className="mission-head">
              <p className="eyebrow">Nuestra Misión</p>
              <h2>Compromiso y futuro.</h2>
            </div>
            <div className="mission-text">
              <p>
                Nuestra misión es que cada viaje sea una experiencia inolvidable.
                Como concesionaria independiente fundada y dirigida por Gonzalo
                Villasuso, seleccionamos vehículos de alta gama con una promesa
                simple: asesoramiento honesto, precios transparentes y un servicio
                cercano que continúa mucho después de la entrega.
              </p>
            </div>
          </div>
        </section>

        <section className="section-container" id="seminuevos">
          <div className="section-header">
            <h2>Seminuevos.</h2>
          </div>
          <div className="preowned-grid">
            {PREOWNED.map((c) => (
              <Link href={`/seminuevos/${c.slug}`} className="preowned-card" key={c.slug}>
                <div className="preowned-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://images.unsplash.com/photo-${c.photo}?w=800&q=80&auto=format&fit=crop`}
                    alt={c.name}
                    loading="lazy"
                  />
                </div>
                <div className="preowned-info">
                  <h3>{c.name}</h3>
                  <p>{c.year} · {formatKm(c.km)}</p>
                  <p className="preowned-price">{formatUsd(c.price)}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="preowned-footer">
            <a href="#" className="text-link-uppercase">Ver todo el inventario <span>›</span></a>
          </div>
        </section>
        <section className="section-container finance-section">
          <div className="section-header">
            <h2>Usa tu auto actual para conseguir el auto de tus sueños.</h2>
          </div>
          <FinanceTabs />
        </section>

        <section className="about-band" id="about">
          <div className="section-container about-section">
            <div className="about-grid">
              <div className="about-text">
                <p className="eyebrow">Nosotros</p>
                <h2>Quiénes somos.</h2>
                <p>
                  En Gonzalo Villasuso Automóviles operamos con total autonomía.
                  No pertenecemos a redes corporativas ni somos concesionarios
                  oficiales de fábrica: somos una empresa 100% independiente
                  fundada y liderada por Gonzalo Villasuso.
                </p>
                <p>
                  Esta libertad nos permite seleccionar únicamente los mejores
                  ejemplares del mercado, priorizando el historial, el estado
                  impecable y ofreciendo un asesoramiento honesto y sin
                  presiones comerciales. Cada cliente trata directamente con
                  nosotros, asegurando transparencia en cada permuta,
                  financiación o tasación.
                </p>
              </div>
              <div className="about-image">
                {/* Temporary Unsplash stand-in: replace with a photo of the real showroom. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1764588070182-8bea428915a5?w=1200&q=80&auto=format&fit=crop"
                  alt="Showroom BMW moderno"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-container contact-section" id="contact">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contáctanos.</h2>
              <p className="contact-lead">¿Dudas sobre un modelo, una prueba de manejo o la financiación? Estamos para ayudarte.</p>
              <dl>
                {CONTACT.map((c) => (
                  <div key={c.label}>
                    <dt>{c.label}</dt>
                    {c.lines.map((l) => (
                      <dd key={l}>{l}</dd>
                    ))}
                  </div>
                ))}
              </dl>
            </div>
            <div className="contact-form-wrap">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingWidgets />
    </>
  );
}
