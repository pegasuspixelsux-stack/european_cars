"use client";

import { useSyncExternalStore } from "react";

// The theme lives on <html data-theme>. An inline script in the layout sets the
// initial value before paint (no flash); this reads it back and toggles it.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.getAttribute("data-theme") === "dark";
const getServerSnapshot = () => false;

export function ThemeSwitch() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark theme"
      className="theme-switch"
      onClick={toggle}
    >
      <span>Dark theme</span>
      <span className="theme-switch-track" aria-hidden="true">
        <span className="theme-switch-thumb" />
      </span>
    </button>
  );
}
