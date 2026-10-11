---
name: taste
description: Implements the Paste design system principles. Use for robust, accessible enterprise and developer-facing component patterns.
---

# Taste (Paste design system)

## Rules
- Drive all color, spacing, and type from named design tokens (CSS variables / Tailwind theme); no raw hex in components.
- Meet accessible contrast ratios: 4.5:1 body text, 3:1 large text and UI boundaries.
- Provide explicit, visible focus rings on every interactive element (never `outline: none` without replacement).
- Forms: visible labels above inputs, helper text, inline error messages tied via `aria-describedby`, logical grouping with fieldsets.
- Support keyboard navigation and correct ARIA roles/states.
- Components must define default, hover, focus, active, disabled, loading, and error states.
