# Ahmed Portfolio — Design Specification

## Design Read
Developer portfolio for recruiters, technical collaborators, and clients. The visual language should feel technical, editorial, restrained, and credible — closer to a polished developer product than an agency template or SaaS landing page.

## Core Direction
- Primary identity: Developer Portfolio + Editorial Tech + GitHub-inspired restraint.
- Avoid: generic SaaS layouts, dashboard chrome, excessive glassmorphism, AI-purple gradients, oversized empty areas, repetitive equal cards, and decorative motion without purpose.
- Prefer: hierarchy, asymmetric but controlled composition, strong typography, compact evidence-rich cards, visible technical depth, and deliberate whitespace.

## Design Dials
- DESIGN_VARIANCE: 6
- MOTION_INTENSITY: 4
- VISUAL_DENSITY: 4

These values should stay stable unless a future redesign explicitly changes the brand direction.

## Visual System
### Color
- Base: deep near-black / navy-neutral background.
- Surface: one or two dark elevated surface levels only.
- Text: high-contrast white/off-white primary, slate-neutral secondary.
- Accent: one principal cyan/blue technical accent. Violet may appear only as a very subtle secondary light effect where already part of the brand.
- Status colors are semantic only: green success, amber warning, red danger.
- No rainbow gradients and no different accent color for every card.

### Typography
- Use a clean modern sans family suitable for Arabic and English.
- Arabic and English must feel visually balanced, not like two unrelated themes.
- Hero heading: strong, compact, no excessive line-height.
- Section heading: clearly smaller than Hero, but visually dominant over cards.
- Body text: readable, max line length about 60–70 characters where possible.
- Technical labels, stacks, dates, and metadata should be visually quieter than titles.
- Avoid tiny text below practical readability on mobile.

### Spacing
Use a consistent spacing rhythm based on approximately 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64.
- Section vertical rhythm should be consistent across Projects, Skills, Services, AI, About, and Contact.
- Cards should not have large unexplained empty areas.
- Internal card padding should generally be 20–28px desktop and 16–20px mobile.

### Corners and Borders
- Primary cards: 20–28px radius depending on visual importance.
- Small controls / chips: 10–14px.
- Borders should be subtle and meaningful, not bright outlines around every element.
- Shadows should be restrained; prefer border + surface contrast over heavy glow.

## Layout Rules
### Global Container
- Desktop content max width: roughly 1280–1440px.
- Never let text or project cards stretch indefinitely on large screens.
- RTL Arabic must mirror layout logic intentionally, not merely apply `dir=rtl`.

### Hero
The Hero must answer within a few seconds:
1. Who Ahmed is.
2. What he builds.
3. What his current focus is.
4. What the visitor should do next.

Rules:
- Text column is the primary focus.
- Current Focus card is supporting evidence, not a competing second hero.
- Hero should not become a centered generic SaaS banner.
- Primary CTA: projects/work.
- Secondary CTA: CV/contact/GitHub depending on current content.
- Keep typewriter effects restrained and accessible.

### Current Focus Card
This is a key visual reference for the rest of the portfolio.
- Compact, evidence-oriented, technically credible.
- Must never contain large unexplained top padding.
- Icon/title/status/details should form one compact information hierarchy.
- AI Assistant card should use the same family of spacing, radius, border, and surface treatment when visual parity is desired.

### Projects
Projects are the most important proof section.
- Do not make every project look equally important.
- Featured work may have stronger hierarchy, richer metadata, or wider layout when justified.
- Normal project cards should stay concise.
- Each card should prioritize: project name → outcome/purpose → stack → relevant action.
- Avoid long paragraph walls.
- GitHub links should be obvious but not visually louder than the project itself.
- Multi-repository suites such as Employee Attendance remain one logical portfolio project, with compact implementation links.
- Do not repeat identical card composition so rigidly that the section looks machine-generated.

### Skills
- Skills are supporting evidence, not the main product.
- Group by capability rather than dumping logos.
- Backend/Cloud should receive stronger hierarchy than secondary interests when content supports that emphasis.
- Avoid huge logo clouds and progress bars with arbitrary percentages.

### Services
- Keep service cards practical and outcome-oriented.
- Prefer 2–4 strong capabilities over many generic offerings.
- Each service should answer what can be delivered, not only name a technology.

### AI Assistant
- Treat as a product feature inside the portfolio, not a second landing page.
- Card geometry must align with the Current Focus design family.
- No unexplained nested card-on-card padding.
- Process steps may be smaller inner rows/cards, but the outer shell should remain compact.
- CTA should clearly lead to the actual chat interaction.

### About
- Keep personal narrative concise and relevant to professional positioning.
- Do not duplicate the Hero.
- Use evidence and trajectory instead of generic adjectives.

### Contact
- Strong simple closing section.
- One primary contact action.
- Secondary channels should remain easy to scan.
- Avoid excessive fields if a shorter contact path works.

## Navigation
### Desktop
- Navbar should remain compact and visible without dominating the page.
- Active/hover states should use one accent system.
- Language switcher must not disrupt navigation hierarchy.

### Mobile
- Mobile Bottom Nav is appropriate only if it remains compact and covers the highest-value destinations.
- Do not duplicate every desktop nav item.
- Ensure bottom navigation does not cover content or CTAs.

## RTL / LTR Rules
- Arabic: section alignment, card reading order, icons, arrows, and button groups should follow RTL semantics.
- English: layout may mirror where appropriate.
- Do not force technical strings, URLs, repository names, or code-like text into awkward RTL ordering.
- Use direction isolation for mixed Arabic/English technical content where needed.

## Cards
Use three card levels only:
1. Feature card — Hero Current Focus, major featured project.
2. Standard content card — normal projects/services.
3. Compact row/card — tags, process steps, small metadata.

Do not invent a new card style for every section.

## Motion
- Motion should communicate state or hierarchy.
- Hover: subtle translation, border/surface change, or icon movement.
- Section entrance animations should be restrained and optional.
- No infinite decorative animations unless they carry meaning.
- Respect `prefers-reduced-motion`.
- Avoid expensive pointer-follow effects on mobile.

## Responsive Rules
- Design desktop and mobile intentionally; tablet should interpolate naturally.
- Hero should stack cleanly on smaller screens without forcing oversized cards.
- Project cards should become one column when two-column layouts stop being readable.
- No horizontal scrolling except where the content genuinely requires it.
- Minimum practical touch target: ~44px.

## Accessibility
- Maintain strong text contrast.
- Visible keyboard focus states.
- Semantic headings in order.
- Icons that carry meaning require accessible labels or accompanying text.
- Do not encode state by color alone.

## Portfolio Content Priority
Visual hierarchy should follow:
1. Identity and specialization.
2. Featured/current work.
3. Projects and proof.
4. Technical capabilities.
5. AI assistant / interactive differentiator.
6. About / supporting story.
7. Contact.

## Anti-Slop Checklist
Before shipping any UI change, verify:
- Is this solving a real hierarchy or usability issue?
- Does it introduce another unnecessary gradient/glow/card style?
- Is there unexplained whitespace?
- Are multiple cards unnecessarily identical?
- Is the accent system still controlled?
- Does Arabic read naturally in RTL?
- Does mobile retain the same information priority?
- Is the project itself more visible than its decoration?

## Implementation Rules for This Repository
- Preserve the existing Next.js architecture unless there is a strong technical reason to change it.
- Prefer existing project dependencies before introducing new ones.
- Use a single icon family within a given visual surface; avoid decorative icon mixing.
- Reuse shared CSS tokens/classes instead of copying long one-off class strings when repetition becomes significant.
- `app/globals.css` owns global tokens/layout fundamentals.
- `app/card-polish.css` should contain card-specific polish only; it should not silently impose heights or spacing on unrelated cards.
- `components/Hero.tsx` and the Current Focus card are reference surfaces for premium portfolio cards.
- `components/Projects.tsx` is the reference for evidence-rich project presentation.
- `components/AISection.tsx` should stay visually related to Hero cards without inheriting accidental Hero spacing.

## Definition of Done for Visual Changes
A design change is complete only when:
- Desktop and mobile layouts are both checked.
- Arabic RTL and English LTR behavior are considered.
- No existing project/content functionality is lost.
- Card padding and vertical rhythm are consistent.
- No new unexplained min-height/height is introduced.
- Important CTA and project links remain obvious.
- The page still feels like one coherent portfolio, not several unrelated templates combined.
