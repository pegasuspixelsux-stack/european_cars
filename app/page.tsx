import { FilterChips } from "./filter-chips";
import { FinanceTabs } from "./finance-tabs";
import { FloatingWidgets } from "./floating-widgets";

const NAV = [
  { label: "Models", menu: true },
  { label: "Build Your Own", menu: false },
  { label: "Shopping", menu: true },
  { label: "Electric", menu: true },
];

const MODELS = [
  { name: "BMW iX3", photo: "1764588061773-6200f626c290", label: "BMW iX3", copy: "Fully Electric Sports Activity Vehicle with up to 460 km range." },
  { name: "BMW iX", photo: "1666005334804-9f80fb0bc594", label: "BMW iX", copy: "The modern benchmark for electric luxury and minimalist architecture." },
  { name: "BMW 5 Series Sedan", photo: "1717082842911-9e55aeaf80cb", label: "BMW 5 Series", copy: "Executive elegance paired with intelligent digital assistance systems." },
  { name: "BMW 8 Series Coupe", photo: "1615908397724-6dc711db34a7", label: "BMW 8 Series", copy: "Uncompromising performance and breathtaking grand touring aesthetics." },
];

// SAMPLE DATA: replace with real inventory. Photos are temporary Unsplash stand-ins.
const PREOWNED = [
  { name: "BMW M3 Competition", meta: "2021 · 28,400 km", price: "USD 78,900", photo: "1615908397724-6dc711db34a7" },
  { name: "BMW M4 Coupe", meta: "2022 · 19,200 km", price: "USD 82,500", photo: "1741889823656-c056b0c43749" },
  { name: "BMW M3 Sedan", meta: "2020 · 41,000 km", price: "USD 64,900", photo: "1612603810075-b714656621d6" },
  { name: "BMW 5 Series", meta: "2021 · 36,700 km", price: "USD 49,800", photo: "1717082842911-9e55aeaf80cb" },
  { name: "BMW 3 Series", meta: "2022 · 22,300 km", price: "USD 41,500", photo: "1739545884078-9cb18fd7fa33" },
  { name: "BMW X5 xDrive", meta: "2020 · 52,100 km", price: "USD 57,900", photo: "1736771676155-fd112cf57afe" },
  { name: "BMW 7 Series", meta: "2019 · 61,500 km", price: "USD 52,400", photo: "1643793019410-b6ff1112da9b" },
  { name: "BMW X1 sDrive", meta: "2022 · 15,800 km", price: "USD 36,900", photo: "1635770311293-b09d08a522fc" },
  { name: "BMW iX xDrive40", meta: "2023 · 9,600 km", price: "USD 79,500", photo: "1657553839385-6c25d074d781" },
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
          <span className="nav-stars" aria-hidden="true">★★★</span>
          <span className="nav-monogram" aria-hidden="true">GV</span>
          <span className="nav-title">GONZALO VILLASUSO</span>
          <span className="nav-stars" aria-hidden="true">★★★</span>
        </div>
        <div className="nav-brands" aria-label="Brands">
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
          <a href="#" className="nav-icon" aria-label="Find a dealer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>
          </a>
          <a href="#" className="nav-icon" aria-label="Call us">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
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

        <section className="section-container">
          <div className="section-header">
            <h2>Explore Models.</h2>
            <a href="#" className="text-link-uppercase">View All Models <span>›</span></a>
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
                <a href="#" className="text-link-uppercase">Learn More <span>›</span></a>
              </div>
            ))}
          </div>
          <div className="preowned-filter after-slider">
            <h3>Find Your Vehicle.</h3>
            <p>Filter available corporate inventory across series and powertrains.</p>
            <FilterChips />
          </div>
        </section>


        <section className="mission">
          <div className="mission-inner">
            <h2>Our mission is to make every drive an experience worth remembering.</h2>
            <div className="mission-text">
              <p>
                We bring the BMW Group to Uruguay with a simple promise: honest
                advice, transparent pricing and service that continues long
                after delivery.
              </p>
              <p>
                Our vision is to be the most trusted premium dealership in the
                country, guiding every customer from the first test drive to the
                next generation of electric mobility.
              </p>
            </div>
          </div>
        </section>

        <section className="section-container">
          <div className="section-header">
            <h2>Pre-Owned.</h2>
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
            <a href="#" className="text-link-uppercase">See all inventory <span>›</span></a>
          </div>
        </section>
        <section className="section-container finance-section">
          <div className="section-header">
            <h2>Use your actual car to get the car of your dreams.</h2>
          </div>
          <FinanceTabs />
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
