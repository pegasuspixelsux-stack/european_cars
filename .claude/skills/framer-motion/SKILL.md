---
name: framer-motion
description: React animation library integration guidelines. Use when implementing layout animations, exit/entry transitions, and gesture-driven UI.
---

# Framer Motion

## Rules
- Use `motion.*` components (import from `motion/react` or `framer-motion` per the installed package).
- Shared element transitions: give matching elements the same `layoutId`.
- Wrap conditionally rendered elements in `AnimatePresence` and define `exit` props.
- Springs: tune `type: "spring"`, `stiffness` (~300-500), `damping` (~25-40), `mass`.
- Use `layout` for reflow animation; use variants with `staggerChildren` for orchestration.
- Gestures: `whileHover`, `whileTap`, `drag` with constraints.
- Animate `transform`/`opacity`; honor `useReducedMotion`.
- In Next.js App Router, animated components need `"use client"`.
