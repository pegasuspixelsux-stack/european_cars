"use client";

import { useEffect, useRef, useState } from "react";

type SliderModel = {
  slug: string; // preferred image: /temp-images/models/<slug>.webp
  name: string;
  isNew?: boolean;
  stock: string; // temporary Unsplash photo id, used until the local file exists
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=800&q=80&auto=format&fit=crop`;

// Edit this list to change the slider. Drop a side-profile photo (same shoot,
// white background) at public/temp-images/models/<slug>.webp to replace the
// temporary Unsplash stand-in. The stand-ins are NOT the exact models.
const MODELS: SliderModel[] = [
  { slug: "ix3-50-xdrive", name: "BMW iX3 50 xDrive", isNew: true, stock: "1764588061773-6200f626c290" },
  { slug: "ix3-40-sdrive-urban", name: "BMW iX3 40 sDrive Urban", isNew: true, stock: "1666005334843-75fd06e9d120" },
  { slug: "x3-20-xdrive", name: "BMW X3 20 xDrive", stock: "1677961019377-d45643fde74f" },
  { slug: "x3-m50-xdrive", name: "BMW X3 M50 xDrive", stock: "1574761489603-c6c98152de56" },
  { slug: "i5", name: "BMW i5", stock: "1556800572-1b8aeef2c54f" },
  { slug: "ix2", name: "BMW iX2", stock: "1666005334804-9f80fb0bc594" },
];

export function ModelSlider() {
  const track = useRef<HTMLDivElement>(null);
  const [local, setLocal] = useState<Record<string, boolean>>({});

  // Use a local photo only if it exists; otherwise keep the Unsplash stand-in.
  useEffect(() => {
    MODELS.forEach((m) => {
      const probe = new window.Image();
      probe.onload = () => setLocal((l) => ({ ...l, [m.slug]: true }));
      probe.src = `/temp-images/models/${m.slug}.webp`;
    });
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="slider">
      <div className="slider-controls">
        <button type="button" aria-label="Modelos anteriores" onClick={() => scrollBy(-1)}>
          ‹
        </button>
        <button type="button" aria-label="Modelos siguientes" onClick={() => scrollBy(1)}>
          ›
        </button>
      </div>
      <div className="slider-track" ref={track} tabIndex={0} aria-label="Modelos BMW">
        {MODELS.map((m) => (
          <figure className="slide" key={m.slug}>
            <div className="slide-image">
              {m.isNew && <span className="slide-badge">Nuevo</span>}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={local[m.slug] ? `/temp-images/models/${m.slug}.webp` : unsplash(m.stock)}
                alt={m.name}
                loading="lazy"
              />
            </div>
            <figcaption>{m.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
