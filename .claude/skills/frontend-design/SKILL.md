---
name: frontend-design
description: Advanced frontend engineering and styling guidelines using modern Tailwind CSS and component architecture.
---

# Frontend Design

## Rules
- Write clean, semantic HTML/JSX (`header`, `nav`, `main`, `section`, `button`, etc.).
- Mobile-first: base styles for small screens, then `sm:`/`md:`/`lg:` breakpoints.
- Map every color, spacing, radius, and font size to theme tokens; zero hardcoded magic numbers or arbitrary values where a token exists.
- Compose small, single-purpose components; keep props typed and minimal.
- Use `next/image`, `next/font`, and Server Components by default in Next.js; check `node_modules/next/dist/docs/` first since this Next.js version has breaking changes.
- Ensure accessibility: alt text, labels, focus states, keyboard support.
