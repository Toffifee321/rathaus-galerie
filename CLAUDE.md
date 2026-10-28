# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static, dependency-free image gallery (German UI) showing Clash of Clans Town Hall levels 1–18. There is no build step, package manager, linter, or test suite — open `index.html` directly in a browser to run it.

## Structure

- `index.html` – markup; ids `bild`, `beschriftung`, `zurueck`, `weiter` are looked up by `script.js`.
- `script.js` – the `bilder` array (one entry per level, index 0 = Rathaus 1) plus prev/next logic that wraps around at both ends. The caption and `alt` text are derived from the index (`"Rathaus " + (aktuell + 1)`), not from the image source.
- `style.css` – layout and styling.

## Notes

- Images are currently generated SVG data-URL placeholders via `platzhalter(stufe)`. To use real images, replace entries in the `bilder` array only (e.g. `"bilder/rathaus-1.png"`); no other code needs to change.
- Code identifiers and comments are in German; keep that convention.
- If the number of levels changes, update the `<h1>` text in `index.html` ("von 1 bis 18") along with the array.

Schreibe keinen echten Namen und keine E-Mail-Adresse in die Seite oder in Commits.
Antworte auf Deutsch
Baue keine fremden Bilder, Logos oder Texte in die Seite ein, ohne mich vorher zu fragen. Weise mich dabei auf mögliche Urheberrechte hin.