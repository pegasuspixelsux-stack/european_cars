import { FilterChips } from "./filter-chips";
import { FloatingWidgets } from "./floating-widgets";

const NAV = [
  { label: "Models", menu: true },
  { label: "Build Your Own", menu: false },
  { label: "Shopping", menu: true },
  { label: "Electric", menu: true },
];

const MODELS = [
  { name: "BMW iX3", label: "BMW iX3", copy: "Fully Electric Sports Activity Vehicle with up to 460 km range." },
  { name: "BMW iX", label: "BMW iX", copy: "The modern benchmark for electric luxury and minimalist architecture." },
  { name: "BMW 5 Series Sedan", label: "BMW 5 Series", copy: "Executive elegance paired with intelligent digital assistance systems." },
  { name: "BMW 8 Series Coupe", label: "BMW 8 Series", copy: "Uncompromising performance and breathtaking grand touring aesthetics." },
];

const FOOTER = [
  { title: "Models", links: ["Electric Vehicles", "5 Series & 7 Series", "X Series SAVs", "M Automobiles"] },
  { title: "Services & Financing", links: ["BMW Financial Services", "Corporate Fleet Lease", "Maintenance & Warranty", "ConnectedDrive"] },
  { title: "Experience BMW", links: ["Configurator", "Book a Test Drive", "Find a Dealer", "Sustainability"] },
  { title: "Company", links: ["BMW Group", "Careers", "Press & Media", "Investor Relations"] },
];

export default function Home() {
  return (
    <>
      <nav className="top-nav" aria-label="Primary">
        <div className="nav-left">
          <a href="#" className="nav-logo" aria-label="BMW home">
            <div className="bmw-badge" />
          </a>
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
        </div>
        <div className="nav-right">
          <a href="#" className="nav-link nav-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>
            Choose your local BMW Center
          </a>
          <a href="#" className="nav-icon" aria-label="Account">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" /></svg>
          </a>
          <a href="#" className="nav-icon" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
          </a>
        </div>
      </nav>

      <main>
        <section className="hero-band-dark">
          <div className="hero-scene" aria-hidden="true" />
          <p className="hero-tag">The BMW Ultimate Sales Event</p>
          <div className="hero-content">
            <h1>FIND YOUR DRIVE.</h1>
            <p>
              Enjoy 0.9% APR financing on select models. Plus, credits up to
              $3,000 on select X5 models for loyal customers. Now through
              August 2nd.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">Offer details</button>
              <button className="btn-secondary-on-dark">Build yours</button>
            </div>
          </div>
          <p className="hero-disclaimer">Some images may be computer generated</p>
        </section>

        <section className="section-container offers">
          <h2>Discover offers around you</h2>
        </section>

        <section className="section-container">
          <div className="section-header">
            <h2>Explore Models.</h2>
            <a href="#" className="text-link-uppercase">View All Models <span>›</span></a>
          </div>
          <div className="model-grid">
            {MODELS.map((m) => (
              <div className="model-card" key={m.name}>
                <div>
                  <div className="model-card-photo">{m.label}</div>
                  <div className="model-card-info">
                    <h3>{m.name}</h3>
                    <p>{m.copy}</p>
                  </div>
                </div>
                <a href="#" className="text-link-uppercase">Learn More <span>›</span></a>
              </div>
            ))}
          </div>
        </section>

        <section className="configurator-section">
          <div className="configurator-inner">
            <h3>Find Your Vehicle.</h3>
            <p>Filter available corporate inventory across series and powertrains.</p>
            <FilterChips />
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
          <p>© BMW AG 2026. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Legal Notice</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </footer>
      <FloatingWidgets />
    </>
  );
}
