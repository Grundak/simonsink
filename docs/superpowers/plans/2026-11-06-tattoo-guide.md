# Tattoo Guide Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a bilingual, readable Tattoo Guide and responsive navigation.

**Architecture:** A server route supplies metadata and renders a client guide using the existing language context. A colocated content JSON preserves the source's sixteen topics and aftercare subheadings. The navbar uses a grid and a shared link list for desktop and mobile.

**Tech Stack:** Existing Next.js 15, React 19, TypeScript, Tailwind 4, Framer Motion.

**Spec:** `docs/superpowers/specs/2026-11-06-tattoo-guide-design.md`

## Global Constraints

- Preserve the supplied Czech and English wording and all sixteen topics.
- Use existing language/theme behavior; add no application dependencies.
- Leave the user's prior contact and gallery changes intact; do not deploy.

## Review Focus

- Long Czech navigation labels fit without overlap at 1024px.
- All sections and aftercare subheadings switch language together.
- Contents anchors still work after switching language.
- Mobile menu is usable at 320px and with keyboard controls.
- Long paragraphs remain readable in light and dark themes.

## Task 1: Bilingual page and navigation

**Files:** Create `app/tattoo-guide/page.tsx`, `app/tattoo-guide/TattooGuide.tsx`, and `app/tattoo-guide/content.json`; modify `app/components/Navbar.tsx`.

- [x] Write a browser check for the missing guide route; confirm it fails before implementation.
- [x] Import source content into structured data with stable topic IDs and aftercare subheadings. Independently compare the result with the original source.
- [x] Implement the route and reading layout with localized contents, section headings, and contact link.
- [x] Add the guide after About and use a responsive grid navbar with mobile overlay below 1024px.
- [x] Run browser checks for both languages, all anchors, mobile menu, keyboard closure, and overflow at the specified widths.
- [x] Run TypeScript, production build, and diff checks; review changed files and record the results below.

## Execution record

- Dependencies installed from the existing lockfile. Browser tooling is temporary under `/tmp/simonsink-browser-qa`; Chrome is already installed.
- Implementation remains in the existing checkout because the user is developing this project here and prior authorized changes are uncommitted.
- The initial browser check failed with the expected missing-route 404. After implementation, the guide, both languages, topic anchors, dark mode, and navigation passed at 320, 375, 768, 1023, 1024, and 1440px. TypeScript passed.
- Visual review found that Copperplate mishandles Czech accents; Chrome's font inspection confirmed fallback glyphs in the title. Both title translations use the existing sans-serif font, matching the user's subsequent request for identical title styling. Copperplate remains on the branding.
- Final browser checks passed after the typography correction, including actual anchor scrolling and English overflow checks. Reviewed desktop English/Czech and mobile Czech screenshots.
- Production build and `git diff --check` passed. The build reported only the existing missing `metadataBase` warning. The temporary development server was stopped.
- Independent read-only review found no actionable issues and separately verified completeness of both translations. The supplied medical/legal wording and existing theme/language persistence, metadata, and favicon behavior remain outside this change.
- New source, dependency, and build files are owned by david for normal continued editing.
