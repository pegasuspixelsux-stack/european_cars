"use client";

import { useEffect } from "react";

export function FloatingWidgets({ solidNav = false }: { solidNav?: boolean }) {
  useEffect(() => {
    const root = document.documentElement;
    const update = () => {
      // Phones/tablets: stay transparent until the dark hero has scrolled away.
      // Desktop: turn solid after a few pixels of scrolling.
      const hero = document.querySelector(".hero-band-dark");
      const mobile = window.innerWidth <= 1024;
      const solid =
        solidNav ||
        (mobile && hero ? hero.getBoundingClientRect().bottom <= 64 : window.scrollY > 8);
      if (solid) root.setAttribute("data-nav-solid", "");
      else root.removeAttribute("data-nav-solid");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [solidNav]);
  return (
    <>
      <button className="chat-fab" aria-label="Abrir chat">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 5h16v11H9l-5 4z" /></svg>
      </button>
    </>
  );
}
