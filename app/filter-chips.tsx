"use client";

import { useState } from "react";

const FILTERS = [
  "Todos los modelos",
  "Eléctricos e híbridos",
  "Sedanes",
  "SAV y coupés",
  "M Performance",
];

export function FilterChips() {
  const [active, setActive] = useState(FILTERS[0]);
  return (
    <div className="filter-row" role="group" aria-label="Filtros de vehículos">
      {FILTERS.map((f) => (
        <button
          key={f}
          type="button"
          aria-pressed={active === f}
          className={`filter-chip${active === f ? " active" : ""}`}
          onClick={() => setActive(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
