---
name: playwright-testing
description: End-to-end testing and visual regression suite guidelines. Use when verifying user flows and component rendering.
---

# Playwright Testing

## Rules
- Prefer robust selectors: `getByRole`, `getByLabel`, `getByText`, `getByTestId`; avoid brittle CSS/XPath chains.
- Use web-first async assertions (`await expect(locator).toBeVisible()`); never fixed `waitForTimeout`.
- Test responsive viewports (e.g. 375x812, 768x1024, 1440x900) via projects or `page.setViewportSize`.
- Capture baselines with `expect(page).toHaveScreenshot()`; mask dynamic regions and disable animations.
- Keep tests independent; use `webServer` config to start the dev server.
- Cover critical user flows end to end, plus empty/error states.
