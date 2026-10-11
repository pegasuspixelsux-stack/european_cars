"use client";

import { useEffect, useState } from "react";

export function FloatingWidgets({ solidNav = false }: { solidNav?: boolean }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const update = () => {
      if (solidNav || window.scrollY > 8) root.setAttribute("data-nav-solid", "");
      else root.removeAttribute("data-nav-solid");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [solidNav]);
  return (
    <>
      {open && (
        <div className="cookie-banner" role="dialog" aria-label="Consentimiento de cookies">
          <p>Usamos cookies para mejorar tu experiencia en este sitio.</p>
          <button className="btn-primary compact" onClick={() => setOpen(false)}>
            Aceptar
          </button>
        </div>
      )}
      <button className="chat-fab" aria-label="Abrir chat">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 5h16v11H9l-5 4z" /></svg>
      </button>
    </>
  );
}
