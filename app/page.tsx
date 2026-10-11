import { FilterChips } from "./filter-chips";
import { ContactForm } from "./contact-form";
import { FinanceTabs } from "./finance-tabs";
import { FloatingWidgets } from "./floating-widgets";
import { ThemeSwitch } from "./theme-switch";

const NAV = [
  { label: "Modelos", menu: true },
  { label: "Configura el tuyo", menu: false },
  { label: "Compras", menu: true },
  { label: "Eléctricos", menu: true },
];

const MODELS = [
  { name: "BMW iX3", photo: "1764588061773-6200f626c290", label: "BMW iX3", copy: "Vehículo deportivo 100 % eléctrico con hasta 460 km de autonomía." },
  { name: "BMW iX", photo: "1666005334804-9f80fb0bc594", label: "BMW iX", copy: "La referencia moderna del lujo eléctrico y la arquitectura minimalista." },
  { name: "BMW Serie 5 Sedán", photo: "1717082842911-9e55aeaf80cb", label: "BMW Serie 5", copy: "Elegancia ejecutiva con sistemas inteligentes de asistencia digital." },
  { name: "BMW Serie 8 Coupé", photo: "1615908397724-6dc711db34a7", label: "BMW Serie 8", copy: "Rendimiento sin concesiones y una estética de gran turismo que impresiona." },
];

// SAMPLE DATA: replace with real inventory. Photos are temporary Unsplash stand-ins.
const PREOWNED = [
  { name: "BMW M3 Competition", meta: "2021 · 28.400 km", price: "USD 78.900", photo: "1615908397724-6dc711db34a7" },
  { name: "BMW M4 Coupé", meta: "2022 · 19.200 km", price: "USD 82.500", photo: "1741889823656-c056b0c43749" },
  { name: "BMW M3 Sedán", meta: "2020 · 41.000 km", price: "USD 64.900", photo: "1612603810075-b714656621d6" },
  { name: "BMW Serie 5", meta: "2021 · 36.700 km", price: "USD 49.800", photo: "1717082842911-9e55aeaf80cb" },
  { name: "BMW Serie 3", meta: "2022 · 22.300 km", price: "USD 41.500", photo: "1739545884078-9cb18fd7fa33" },
  { name: "BMW X5 xDrive", meta: "2020 · 52.100 km", price: "USD 57.900", photo: "1736771676155-fd112cf57afe" },
  { name: "BMW Serie 7", meta: "2019 · 61.500 km", price: "USD 52.400", photo: "1643793019410-b6ff1112da9b" },
  { name: "BMW X1 sDrive", meta: "2022 · 15.800 km", price: "USD 36.900", photo: "1635770311293-b09d08a522fc" },
  { name: "BMW iX xDrive40", meta: "2023 · 9.600 km", price: "USD 79.500", photo: "1657553839385-6c25d074d781" },
];

// PLACEHOLDER contact details: replace with the dealer's real information.
const CONTACT = [
  { label: "Dirección", lines: ["Av. Ejemplo 1234", "Montevideo, Uruguay"] },
  { label: "Teléfono", lines: ["+598 0000 0000"] },
  { label: "Correo electrónico", lines: ["info@example.com"] },
  { label: "Horario del showroom", lines: ["Lun - Vie: 9:00 - 19:00", "Sáb: 9:00 - 13:00"] },
];

const FOOTER = [
  { title: "Modelos", links: ["Vehículos eléctricos", "Serie 5 y Serie 7", "SAV Serie X", "Automóviles M"] },
  { title: "Servicios y financiación", links: ["BMW Financial Services", "Leasing para flotas corporativas", "Mantenimiento y garantía", "ConnectedDrive"] },
  { title: "Vive BMW", links: ["Configurador", "Agendar una prueba de manejo", "Encontrar un concesionario", "Sustentabilidad"] },
  { title: "Empresa", links: ["BMW Group", "Carreras", "Prensa y medios", "Relaciones con inversores"] },
];

export default function Home() {
  return (
    <>
      <nav className="top-nav" aria-label="Principal">
        <div className="nav-left">
          <span className="nav-stars" aria-hidden="true">★★★</span>
          <span className="nav-monogram" aria-hidden="true">GV</span>
          <span className="nav-title">GONZALO VILLASUSO</span>
          <span className="nav-stars" aria-hidden="true">★★★</span>
        </div>
        <div className="nav-brands" aria-label="Marcas">
          <a href="#" aria-label="BMW"><div className="bmw-badge" /></a>
          <a href="#" aria-label="MINI" className="brand-mark">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="20" cy="20" r="17" /><text x="20" y="24" textAnchor="middle" fontSize="10" fontWeight="700" fill="currentColor" stroke="none" letterSpacing="0.5">MINI</text></svg>
          </a>
          <a href="#" aria-label="Mazda" className="brand-mark">
            <svg width="44" height="40" viewBox="0 0 44 40" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="22" cy="20" rx="20" ry="16" /><path d="M10 27c3-4 5-9 6-14 2 5 4 9 6 10 2-1 4-5 6-10 1 5 3 10 6 14" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            {NAV.map((n) => (
              <li key={n.label}>
                <a href="#">
                  {n.label}
                  {n.menu && <span className="chevron" aria-hidden="true" />}
                </a>
              </li>
            ))}
          </ul>
          <a href="#" className="nav-icon" aria-label="Encontrar un concesionario">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>
          </a>
          <a href="#" className="nav-icon" aria-label="Llámanos">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
          </a>
          <a href="#" className="nav-icon" aria-label="Buscar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
          </a>
        </div>
      </nav>

      <main>
        <section className="hero-band-dark">
          <div className="hero-scene" aria-hidden="true" />
          <p className="hero-tag">El evento de ventas BMW Ultimate</p>
          <div className="hero-content">
            <h1>ENCUENTRA TU RUTA.</h1>
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

        <section className="section-container">
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
              <div className="model-card" key={m.name}>
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
                <a href="#" className="text-link-uppercase">Más información <span>›</span></a>
              </div>
            ))}
          </div>
        </section>


        <section className="mission">
          <div className="mission-inner">
            <h2>Nuestra misión es que cada viaje sea una experiencia inolvidable.</h2>
            <div className="mission-text">
              <p>
                Traemos BMW Group a Uruguay con una promesa simple: asesoramiento
                honesto, precios transparentes y un servicio que continúa mucho
                después de la entrega.
              </p>
              <p>
                Nuestra visión es ser la concesionaria premium más confiable del
                país, acompañando a cada cliente desde la primera prueba de
                manejo hasta la próxima generación de movilidad eléctrica.
              </p>
            </div>
          </div>
        </section>

        <section className="section-container">
          <div className="section-header">
            <h2>Seminuevos.</h2>
          </div>
          <div className="preowned-grid">
            {PREOWNED.map((c) => (
              <article className="preowned-card" key={c.name}>
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
                  <p>{c.meta}</p>
                  <p className="preowned-price">{c.price}</p>
                </div>
              </article>
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

        <section className="section-container about-section" id="about">
          <div className="about-grid">
            <div className="about-text">
              <h2>Quiénes somos.</h2>
              <p>
                Somos la casa oficial de BMW Group en Uruguay, dedicada a llevar
                la ingeniería, el diseño y la innovación de la marca a cada
                cliente que cruza nuestras puertas.
              </p>
              <p>
                Desde los últimos modelos eléctricos hasta vehículos seminuevos
                cuidadosamente seleccionados, nuestro equipo ofrece asesoramiento
                honesto, precios transparentes y una atención dedicada antes y
                después de cada venta.
              </p>
              <p>
                Visita nuestro showroom para conocer la gama, probar un auto y
                descubrir el que mejor se adapta a tu forma de vida.
              </p>
              <a href="#contact" className="text-link-uppercase">Visita el showroom <span>›</span></a>
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

      <footer className="footer">
        <div className="footer-grid">
          {FOOTER.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>© BMW AG 2026. Todos los derechos reservados.</p>
          <div className="footer-legal">
            <ThemeSwitch />
            <a href="#">Política de privacidad</a>
            <a href="#">Aviso legal</a>
            <a href="#">Configuración de cookies</a>
          </div>
        </div>
      </footer>
      <FloatingWidgets />
    </>
  );
}
