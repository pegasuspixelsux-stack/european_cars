"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

export function MobileMenu({ items }: { items: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="nav-icon nav-burger"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={`burger-lines${open ? " open" : ""}`} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <div id={panelId} className={`mobile-panel${open ? " open" : ""}`} hidden={!open}>
        <ul>
          {items.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} onClick={() => setOpen(false)}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
