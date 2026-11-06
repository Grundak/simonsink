# Tattoo Guide design

Add `/tattoo-guide` beside About in both navigation menus. Use all Czech and English content from `/home/david/Stažené/textsimon.txt`, selected by the existing language context. Exclude the editorial markers “Final” and “Final EN”. Preserve the author's wording.

## Approach

Use a dedicated page, matching the existing route structure, rather than lengthening About or hiding the entire guide in accordions. Structure the sixteen topics as numbered sections with readable paragraph spacing, restrained black-and-white borders, and Copperplate branding. Retain all three aftercare subheadings. Provide a contents sidebar on large screens and a collapsible contents list on smaller screens. Keep section IDs identical across languages so links remain useful when switching language.

Use the existing language context and Framer Motion; add no application dependencies. Keep light/dark styling consistent. Replace absolute desktop navigation positioning with a grid and show desktop navigation at 1024px and above; retain the mobile overlay below that width. Include the guide after About in both menus. Support Escape and restore focus when closing the mobile menu.

## Verification

Check the route, translated content, contents links, mobile navigation, light/dark appearance, and lack of horizontal overflow at 320, 375, 768, 1024, and 1440px. Compare imported content with the source to catch omissions. Run TypeScript and the production build.

## Scope

Work in the current user-selected checkout so the existing contact and gallery changes remain available. No deployment or changes to those earlier edits. Layout and copy presentation choices are implementation decisions within the user's request.
