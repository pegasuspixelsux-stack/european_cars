import { MobileMenu } from "./mobile-menu";
import { ThemeSwitch } from "./theme-switch";
import Link from "next/link";

const NAV = [
  { label: "Inicio", href: "/", menu: false },
  { label: "Modelos", href: "#", menu: true },
  { label: "Configura el tuyo", href: "#", menu: false },
  { label: "Compras", href: "#", menu: true },
  { label: "Eléctricos", href: "#", menu: true },
];

const FOOTER = [
  { title: "Modelos", links: ["Vehículos eléctricos", "Serie 5 y Serie 7", "SAV Serie X", "Automóviles M"] },
  { title: "Servicios y financiación", links: ["BMW Financial Services", "Leasing para flotas corporativas", "Mantenimiento y garantía", "ConnectedDrive"] },
  { title: "Vive BMW", links: ["Configurador", "Agendar una prueba de manejo", "Encontrar un concesionario", "Sustentabilidad"] },
  { title: "Empresa", links: ["BMW Group", "Carreras", "Prensa y medios", "Relaciones con inversores"] },
];

export function SiteNav() {
  return (
    <nav className="top-nav" aria-label="Principal">
      <Link href="/" className="nav-left nav-home" aria-label="Inicio">
        <span className="nav-stars" aria-hidden="true">★★★</span>
        <span className="nav-monogram" aria-hidden="true">GV</span>
        <span className="nav-title">GONZALO VILLASUSO</span>
        <span className="nav-stars" aria-hidden="true">★★★</span>
      </Link>
      <div className="nav-brands" aria-label="Marcas">
        <Link href="/" aria-label="BMW"><div className="bmw-badge" /></Link>
        <Link href="/" aria-label="MINI" className="brand-mark">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="20" cy="20" r="17" /><text x="20" y="24" textAnchor="middle" fontSize="10" fontWeight="700" fill="currentColor" stroke="none" letterSpacing="0.5">MINI</text></svg>
        </Link>
        <Link href="/" aria-label="Mazda" className="brand-mark">
          <svg width="44" height="40" viewBox="0 0 44 40" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="22" cy="20" rx="20" ry="16" /><path d="M10 27c3-4 5-9 6-14 2 5 4 9 6 10 2-1 4-5 6-10 1 5 3 10 6 14" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
      </div>
      <div className="nav-right">
        <ul className="nav-links">
          {NAV.map((n) => (
            <li key={n.label}>
              <Link href={n.href}>
                {n.label}
                {n.menu && <span className="chevron" aria-hidden="true" />}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/#contact" className="nav-icon" aria-label="Encontrar un concesionario">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>
        </Link>
        <Link href="/#contact" className="nav-icon" aria-label="Llámanos">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
        </Link>
        <a href="#" className="nav-icon" aria-label="Buscar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
        </a>
        <MobileMenu items={NAV.map((n) => ({ label: n.label, href: n.href }))} />
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
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
  );
}
