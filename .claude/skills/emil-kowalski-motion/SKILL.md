---
name: emil-kowalski-motion
description: Implements Emil Kowalski's motion and interaction principles. Use when designing user interfaces requiring spring physics, intentional easing, and tactile micro-interactions.
---

# Emil Kowalski Motion

## Rules
- Use natural spring physics or custom cubic-bezier curves (e.g. `cubic-bezier(0.23, 1, 0.32, 1)`); never default `linear` or plain `ease` for UI movement.
- Keep durations purposeful: 120-200ms for hover/press feedback, 200-350ms for enter/exit, never above 500ms for UI chrome.
- Elements entering should ease-out; elements leaving should be faster than entering.
- Add responsive micro-states: hover lift, `:active` scale (~0.97), visible focus transitions.
- Animate only `transform` and `opacity` where possible; avoid layout-thrashing properties.
- Transitions must reinforce spatial hierarchy (where something came from / goes to) and never distract.
- Respect `prefers-reduced-motion`: replace movement with simple fades.
- Make animations interruptible; never block input while animating.
