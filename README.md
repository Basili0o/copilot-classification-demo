# Copilot Customer Classification — Exec Portfolio (Demo)

An interactive, single-page dashboard that operationalises a Copilot
customer-classification decision tree (**Maintain / Expansion Ready / At Risk**),
with classification, subgroup breakdown, region filtering, a clickable globe, and
quarter-over-quarter movement all computed **live in the browser**.

## Live demo

Rendered via GitHub Pages from the static files in this repo:

**https://basili0o.github.io/copilot-classification-demo/**

## ⚠️ Synthetic data only

This is a public demo. It loads **synthetic sample data** (`tpid-atoms.js`) —
a handful of fictional accounts (ACME, Globex, Northwind, …) to demonstrate the
interaction model. No real customer data is included.

## What's here

| File | Purpose |
| --- | --- |
| `index.html` | Landing page |
| `exec-portfolio.html` | The dashboard (self-contained HTML/CSS/JS) |
| `tpid-atoms.js` | Synthetic sample dataset (`window.ATOMS_DATA`) |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

No backend, no auth, no build step — just static HTML rendered by GitHub Pages.
Append `?clawpilotTheme=dark` or `?clawpilotTheme=light` to the dashboard URL to
override the theme.
