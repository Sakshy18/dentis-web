# AGENT.md

## Purpose

This document defines the operating system for building **high-quality, highly structured, production-grade Next.js + Tailwind CSS websites end to end** using **Figma via MCP**.

It is written for Codex-style coding agents and human collaborators who need a **systematic, repeatable, battle-tested workflow** that produces consistent results across marketing sites, product sites, dashboards, docs sites, landing pages, and web apps.

The goals are:

- Convert approved Figma designs into robust Next.js implementations with minimal drift.
- Maintain consistency in architecture, design fidelity, accessibility, performance, and developer experience.
- Reduce ambiguity by defining decision rules, acceptance criteria, and handoff standards.
- Ensure every project is production-ready, maintainable, measurable, and easy to scale.

---

# 1. Core Principles

## 1.1 Product Quality First

Always optimize for:

1. Correctness
2. Clarity
3. Consistency
4. Accessibility
5. Performance
6. Maintainability
7. Scalability

A visually accurate site that is inaccessible, slow, or brittle is not complete.

## 1.2 Design Is a System, Not a Screenshot

Do not treat Figma as a static image to copy pixel-by-pixel blindly.

Instead:

- Extract reusable tokens, spacing rules, layout patterns, and component behaviors.
- Translate visual intent into semantic HTML, resilient CSS, and reusable React components.
- Preserve the design language while improving implementation quality.

## 1.3 Systematic Over Improvised

Never jump directly from a Figma frame to ad hoc code.

Always follow this order:

1. Understand product scope
2. Audit design system and flows
3. Define information architecture
4. Establish technical foundations
5. Derive tokens and primitives
6. Build reusable components
7. Compose pages
8. Validate quality
9. Optimize
10. Prepare handoff and documentation

## 1.4 Reuse Before Reinvention

Before creating a new pattern, check whether it can be built from existing primitives and components.

Prioritize:

- existing tokens
- existing layout primitives
- existing content patterns
- existing utility abstractions
- existing tested components

## 1.5 Explicit Decisions Beat Hidden Assumptions

Whenever ambiguity exists, document the decision.

Examples:

- responsive behavior inferred from desktop-only designs
- hover/focus states missing in Figma
- loading/error/empty states undefined
- animations unspecified
- content truncation rules unclear

Every inference must be deliberate and explainable.

## 1.6 Accessibility Is Non-Negotiable

Accessibility is a baseline requirement, not a polish pass.

All UI must be operable, perceivable, understandable, and robust.

## 1.7 Performance Is a Feature

Fast sites convert better, rank better, and feel better.

Every choice should be evaluated through performance cost:

- bundle size
- image weight
- layout shift
- hydration cost
- script cost
- animation cost

## 1.8 Agent Behavior Standards

The agent must:

- think in systems, not isolated screens
- explain tradeoffs when needed
- keep files organized and predictable
- avoid unnecessary complexity
- avoid speculative abstractions
- prefer readability over cleverness
- leave the codebase better than it found it

---

# 2. Default Technology Stack

Unless the project specifies otherwise, use the following defaults.

## 2.1 Framework

- **Next.js** latest stable
- **App Router** by default
- **TypeScript** strict mode enabled

Use the Pages Router only if there is a strong legacy constraint.

## 2.2 Styling

- **Tailwind CSS** as the primary styling system
- Use CSS variables for design tokens where appropriate
- Use minimal custom CSS only when utilities are insufficient or when it improves readability

## 2.3 Components

- React server components by default
- Client components only when interactivity is required
- Prefer composable, headless patterns

## 2.4 Content and Data

Choose based on project needs:

- static content: MDX / local content files / CMS
- dynamic content: typed fetchers / API routes / server actions where justified
- forms: server-side validation plus client-side UX enhancements

## 2.5 Tooling

Recommended baseline:

- ESLint
- Prettier
- TypeScript strict mode
- Husky or equivalent pre-commit hooks
- lint-staged
- Storybook for larger component libraries
- Playwright for end-to-end tests
- Vitest or Jest for unit/integration tests
- React Testing Library
- Lighthouse CI where feasible

## 2.6 Deployment

Prefer deployment on Vercel unless constrained otherwise.

---

# 3. Project Outcomes and Definition of Done

A website is complete only when all of the following are satisfied.

## 3.1 Functional Completion

- all approved pages and flows implemented
- all key states implemented
- links, forms, navigation, and media work correctly
- no obvious dead ends

## 3.2 Design Completion

- layout matches approved Figma intent across breakpoints
- spacing, typography, colors, and interactions are consistent
- key visual details are preserved

## 3.3 Technical Completion

- code is typed, linted, formatted, and organized
- architecture is understandable
- component reuse is sensible
- no avoidable duplication

## 3.4 Quality Completion

- accessibility checks pass
- performance is acceptable
- SEO basics are implemented
- analytics and metadata are wired where required
- tests cover critical behaviors

## 3.5 Handoff Completion

- documentation exists
- environment variables are documented
- content editing model is documented
- known tradeoffs and follow-ups are documented

---

# 4. Required Workflow: End-to-End Delivery Procedure

## Phase 0: Intake and Alignment

Before writing code, collect and verify:

- project goals
- target audience
- sitemap / page list
- primary conversion goals
- content source
- design source in Figma
- brand rules
- supported devices/browsers
- required integrations
- timeline / milestone expectations

### Required clarifications

Identify:

- whether the site is marketing, app, docs, or hybrid
- whether multilingual support is needed
- whether dark mode is required
- whether CMS editing is required
- whether authentication exists
- whether animations are decorative or essential
- whether WCAG target is AA or higher

### Output of Phase 0

Produce:

- scope summary
- assumptions list
- risks list
- implementation plan

Do not start implementation without this shared baseline.

---

## Phase 1: Figma Audit via MCP

Use MCP to inspect the Figma file systematically.

### 1.1 Audit every relevant page/frame

Document:

- page names
- frame hierarchy
- section patterns
- repeated components
- variants and states
- typography styles
- color styles
- spacing conventions
- layout grids
- icons and illustrations
- image treatments
- motion hints
- responsive frames if available

### 1.2 Extract design system primitives

Derive:

- color tokens
- typography scale
- spacing scale
- radius scale
- shadows
- borders
- container widths
- z-index layers
- transition durations/easings

### 1.3 Detect missing specifications

Flag gaps such as:

- no mobile version
- no hover state
- no validation state
- no empty state
- missing modals/drawers behavior
- missing keyboard behavior
- ambiguous spacing between sections

### 1.4 Normalize design values

Do not copy arbitrary one-off values blindly.

When safe, normalize design values into a consistent scale.

Examples:

- 31 px may become 32 px
- 15 px may become 16 px
- irregular spacing may be mapped into a 4/8-based spacing system

Only normalize when it does not visually damage the design language.

### 1.5 Component inventory

Create a component inventory with categories:

- layout primitives
- navigation
- hero sections
- cards
- buttons
- forms
- testimonials
- pricing
- footers
- modals
- tabs/accordions
- tables
- content blocks

### Output of Phase 1

Produce a design implementation brief containing:

- token map
- component inventory
- responsive assumptions
- unresolved design questions
- reuse opportunities

---

## Phase 2: Architecture and Foundation

Before page coding, define the project structure.

## 2.1 Recommended folder structure

```text
app/
  (marketing)/
  (app)/
  api/
  pages/
      home/
        sections/
          HeroSection.tsx
          SearchSection.tsx
          FeaturedListingsSection.tsx
        HomePage.tsx
        page.tsx
      about/
        sections/
          AboutHeroSection.tsx
          MissionSection.tsx
          TeamSection.tsx
        AboutPage.tsx
        page.tsx
      contact/
        sections/
          ContactHeroSection.tsx
          ContactFormSection.tsx
          MapSection.tsx
        ContactPage.tsx
        page.tsx
    layout.tsx
    page.tsx

components/
  ui/
  layout/
  sections/
  icons/
lib/
  utils/
  config/
  data/
  validations/
styles/
content/
public/
types/
```

Adapt only when necessary, but keep structure shallow and predictable.

## 2.2 Routing rules

- Group routes by domain or experience, not by arbitrary technical preference.
- Use nested layouts for shared shells.
- Keep route segments descriptive and stable.
- Avoid over-nesting.

## 2.3 Server vs Client component rules

Default to server components.

Use client components only when required for:

- stateful interactions
- event handlers
- browser-only APIs
- animation libraries that require client execution
- complex interactive widgets

Keep client boundaries as small as possible.

## 2.4 Data boundaries

- Fetch on the server whenever possible.
- Keep data access close to routes or server helpers.
- Validate external data.
- Avoid leaking data-shaping logic across the tree.

## 2.5 Environment and config management

- centralize environment variable access
- validate env values on startup where possible
- separate public vs server-only env vars clearly
- document every required variable

---

## Phase 3: Design Tokenization

Translate Figma into implementation tokens.

## 3.1 Token categories

At minimum define:

- colors
- typography
- spacing
- radii
- shadows
- breakpoints
- motion
- container sizes
- border widths

## 3.2 Token rules

- Use semantic token names whenever practical.
- Avoid naming tokens after exact visual appearances alone if semantic names are clearer.
- Keep raw and semantic layers separate when the system is large enough.

Examples:

- raw: `gray-100`, `blue-600`
- semantic: `background`, `foreground`, `muted`, `primary`, `accent`, `border`, `success`

## 3.3 Typography system

Define a typography scale with:

- display
- h1 to h6
- body large
- body
- small
- caption
- label

Each text style should specify:

- font family
- size
- line height
- weight
- letter spacing
- intended usage

## 3.4 Spacing system

Prefer a consistent spacing scale.

Recommended base:

- 4 px unit
- standard increments mapped cleanly in Tailwind

Do not create random spacing utilities unless necessary.

## 3.5 Breakpoints

Define breakpoints deliberately based on content and layout needs, not just defaults.

Suggested starting point:

- mobile
- sm
- md
- lg
- xl
- 2xl

Use content-driven breakpoint decisions for complex layouts.

## 3.6 Dark mode tokens

If dark mode exists or may be added later, design tokens must support it from the start.

---

## Phase 4: Primitive and Component System Buildout

Build from the bottom up.

## 4.1 Primitive layer

Create reusable low-level primitives first:

- Container
- Section
- Stack
- Grid
- Heading
- Text
- Button
- Link
- Input
- Textarea
- Select
- Checkbox
- Radio
- Badge
- Icon
- Divider
- Surface/Card

These should encode system defaults.

## 4.2 Component design rules

Each component must be:

- reusable
- predictable
- typed
- accessible
- composable
- minimal in API surface

## 4.3 Component API design

Prefer APIs that are:

- easy to understand
- hard to misuse
- stable over time

Guidelines:

- avoid excessive boolean props
- use variants for stylistic differences
- prefer composition over giant prop objects
- expose only meaningful customization points

Bad:

- `isBlue`
- `isLarge`
- `withShadow`
- `compact`
- `rounded`

Better:

- `variant`
- `size`
- `tone`

## 4.4 Variant handling

Use a consistent variant pattern.

For example:

- `variant`: primary, secondary, ghost, link
- `size`: sm, md, lg
- `tone`: default, success, warning, danger

## 4.5 Slot and composition patterns

For sophisticated components, use composition patterns such as:

- icon left/right slots
- header/body/footer composition
- render props only when clearly necessary

## 4.6 State coverage

Every interactive component must support and visually communicate:

- default
- hover
- focus-visible
- active
- disabled
- loading
- error/success where applicable

## 4.7 Accessibility coverage

Components must handle:

- keyboard interaction
- ARIA roles only when needed
- visible focus styles
- correct labels and descriptions
- semantic elements first

## 4.8 Documentation

For each major component, document:

- purpose
- usage rules
- supported variants
- dos and don'ts
- accessibility notes

---

## Phase 5: Page Composition

After primitives and reusable components are stable, compose pages.

## 5.1 Page building order

Build pages section-by-section in this order:

1. top-level layout and grid
2. global navigation and footer
3. hero and critical above-the-fold sections
4. supporting content sections
5. forms and conversion points
6. edge states and responsive adjustments

## 5.2 Section implementation rules

Every section should:

- have a single clear purpose
- be representable as a reusable section component when appropriate
- maintain consistent vertical rhythm
- use semantic heading structure

## 5.3 Content hierarchy

Maintain proper structure:

- one H1 per page
- descending heading logic
- content grouped semantically
- CTA hierarchy clear and intentional

## 5.4 Responsive behavior

Do not “shrink desktop until it fits.”

For each section define:

- stack direction changes
- grid column changes
- text reflow behavior
- image cropping rules
- content truncation/wrapping behavior
- CTA placement changes
- navigation adaptation

## 5.5 Missing mobile design rule

If mobile Figma is missing:

- infer mobile layout from content priority
- prefer single-column layouts
- preserve reading order
- maintain touch targets
- reduce decorative complexity before reducing clarity

Document all inferred behaviors.

---

## Phase 6: Content, CMS, and Data Modeling

## 6.1 Content modeling rules

Model content as structured data where possible.

Prefer:

- arrays of objects
- typed content schemas
- stable field names
- separation of content from presentation

Avoid hardcoding repeated content in JSX.

## 6.2 CMS integration rules

When a CMS is used:

- define content models before implementation
- validate fields and fallback behavior
- support draft/published workflows if required
- handle missing/invalid content safely

## 6.3 Rich text rules

- constrain typography styles for rich text output
- sanitize untrusted HTML
- style prose consistently
- ensure embeds and media are responsive

---

## Phase 7: Interaction, Motion, and Micro-UX

## 7.1 Motion principles

Motion should:

- clarify state or hierarchy
- support delight without distraction
- be subtle and purposeful
- respect reduced motion preferences

## 7.2 Motion rules

- keep durations consistent
- avoid large layout-shifting animations
- prefer opacity/transform over top/left changes
- avoid excessive simultaneous motion
- reduce motion on mobile if it impacts performance

## 7.3 Interaction design completeness

Define behavior for:

- menus
- accordions
- tabs
- modals
- drawers
- toasts
- form submission states
- optimistic updates where applicable

## 7.4 Reduced motion

Always support `prefers-reduced-motion` for non-essential animation.

---

## Phase 8: Accessibility Standards

This section is mandatory.

## 8.1 Semantic HTML first

Use the correct native element before adding ARIA.

Examples:

- `button` for actions
- `a` for navigation
- `nav`, `main`, `header`, `footer`, `section`, `article` appropriately
- `ul/ol` for lists
- `table` only for tabular data

## 8.2 Keyboard support

All interactive elements must be reachable and operable via keyboard.

Requirements:

- visible focus styles
- logical tab order
- escape closes dismissible surfaces
- arrow key support where expected
- no keyboard traps

## 8.3 Forms accessibility

Every form field must have:

- associated label
- clear hint text where needed
- error messaging linked programmatically
- validation that does not rely only on color

## 8.4 Color and contrast

Meet WCAG AA at minimum unless a higher standard is required.

## 8.5 Screen reader behavior

Ensure:

- meaningful button/link names
- decorative images marked appropriately
- status updates announced when necessary
- headings create a usable outline

## 8.6 Touch targets

Ensure interactive targets are large enough for touch interfaces.

## 8.7 Accessibility validation checklist

Run at minimum:

- keyboard-only walkthrough
- automated axe or equivalent checks
- screen reader smoke test on critical flows
- color contrast verification

---

## Phase 9: Performance Standards

## 9.1 Performance budget mindset

Treat performance as a budget.

Watch:

- JS bundle size
- image payloads
- webfont cost
- third-party scripts
- hydration islands
- layout shifts

## 9.2 Rendering rules

- prefer server rendering for static and content-heavy pages
- keep client components minimal
- avoid unnecessary re-renders
- use streaming/suspense deliberately when beneficial

## 9.3 Image rules

- use `next/image` unless a justified exception exists
- serve appropriate dimensions
- use modern formats when possible
- lazy-load non-critical images
- define sizes correctly
- prevent CLS with dimensions or aspect ratios

## 9.4 Font rules

- self-host or use `next/font`
- minimize font families and weights
- avoid layout shift from font loading

## 9.5 Script rules

- minimize third-party tags
- defer or lazy-load non-critical scripts
- justify each external dependency

## 9.6 Animation and performance

- avoid heavy scroll handlers
- avoid expensive box-shadow/blur overuse
- measure complex effects on low-powered devices

## 9.7 Caching and asset strategy

- use caching headers where appropriate
- optimize static assets
- keep public assets organized

---

## Phase 10: SEO, Metadata, and Discoverability

## 10.1 Required SEO baseline

Every indexable page should have:

- unique title
- useful meta description
- canonical URL when needed
- proper heading structure
- OG metadata
- Twitter/X card metadata when needed
- meaningful link text

## 10.2 Structured data

Use schema.org structured data where appropriate.

Common cases:

- organization
- article/blog
- FAQ
- breadcrumb
- product/service

## 10.3 Crawl strategy

Define:

- index/noindex pages
- robots rules
- sitemap generation

## 10.4 Content quality

Do not sacrifice information hierarchy for purely visual layout.

---

## Phase 11: Analytics, Monitoring, and Observability

## 11.1 Analytics standards

Define events intentionally.

Track only meaningful interactions such as:

- CTA clicks
- form starts and submits
- signup completions
- key funnel transitions
- media engagement when relevant

## 11.2 Event naming rules

Use stable, readable names.

Example:

- `cta_click`
- `pricing_plan_selected`
- `contact_form_submitted`

## 11.3 Monitoring

Set up where relevant:

- error monitoring
- performance monitoring
- uptime monitoring
- form failure alerts

## 11.4 Privacy and compliance

Honor consent requirements and minimize unnecessary tracking.

---

## Phase 12: Testing and QA

## 12.1 Testing pyramid guidance

Use the lightest test that gives confidence.

- unit tests for utilities and logic-heavy components
- integration tests for composed behaviors
- e2e tests for critical flows

## 12.2 What must be tested

At minimum:

- critical navigation flows
- key forms
- core rendering logic
- utility logic with non-trivial branching
- accessibility smoke checks on critical components

## 12.3 Visual QA

Perform manual review for:

- spacing consistency
- typography consistency
- state styling
- responsive layout
- overflow issues
- wrapping/truncation issues
- animation smoothness

## 12.4 Cross-browser/device QA

Verify key flows on:

- Chromium
- Safari/WebKit
- Firefox
- mobile viewport(s)

## 12.5 QA checklist before merge

- no TypeScript errors
- no lint errors
- no console errors in critical flows
- no broken links
- forms validated
- metadata verified
- keyboard navigation verified
- Lighthouse checked on core pages

---

# 5. Figma via MCP Operating Procedure

This section defines exactly how the agent should use Figma through MCP.

## 5.1 Before reading designs

The agent should identify:

- file name
- relevant pages
- source of truth frames
- whether there are archived or deprecated explorations

Never implement from exploratory or outdated frames when approved frames exist.

## 5.2 During inspection

The agent should extract:

- dimensions and layout relationships
- constraints and auto-layout intent
- component instances and variants
- typography and color styles
- spacing patterns
- asset references
- notes/comments if available

## 5.3 Figma interpretation rules

- respect the approved design intent, not accidental editor artifacts
- infer layout systems from repeated patterns, not isolated oddities
- distinguish reusable components from one-off compositions
- detect when a frame is showing content state vs structural layout

## 5.4 Figma-to-code mapping rules

Translate:

- auto-layout → flex/grid primitives
- consistent spacing → spacing tokens
- variant sets → typed component variants
- repeated cards/rows → mapped data-driven components
- overlays → portals/dialog patterns

## 5.5 Asset export rules

- prefer SVG for icons and simple vector art
- prefer raster only when necessary
- compress assets appropriately
- clean SVGs when needed
- avoid embedding huge assets inline

## 5.6 Design discrepancy protocol

When Figma conflicts with best practice, follow this order:

1. preserve visible design intent
2. keep semantic/accessibility correctness
3. keep responsive robustness
4. keep performance reasonable
5. document deviations

Examples:

- clickable `div` in design must become semantic button/link
- fixed-height text blocks that would clip content must become content-resilient
- inaccessible contrast should be escalated or corrected with minimal visual drift

---

# 6. Coding Standards

## 6.1 TypeScript rules

- enable strict mode
- no `any` unless explicitly justified
- model props precisely
- export shared types when useful
- validate external inputs
- prefer discriminated unions for complex variants/states

## 6.2 React rules

- keep components focused
- avoid giant files
- extract repeated patterns thoughtfully
- avoid prop drilling when composition or context is more appropriate
- do not use effects for logic that can run during render or on the server

## 6.3 Next.js rules

- use App Router conventions correctly
- use route metadata APIs where appropriate
- prefer server data fetching
- use loading/error boundaries deliberately
- avoid overusing client-side fetching

## 6.4 Tailwind rules

- keep class lists readable
- group related utilities logically
- extract repeated patterns into components, not premature custom classes
- use arbitrary values sparingly
- use tokens and config extension where repetition exists

## 6.5 Utility function rules

Create utilities only when they:

- eliminate real duplication
- encode meaningful domain logic
- improve readability

Do not create wrappers that obscure simple code.

## 6.6 Naming conventions

Use names that reflect intent.

- components: `PricingCard`, `SiteHeader`, `FeatureGrid`
- hooks: `useMobileNav`
- utils: `formatCurrency`
- types: `PricingTier`

Avoid vague names like:

- `Helper`
- `Thing`
- `Stuff`
- `CommonSection`

## 6.7 Comment policy

Comments should explain:

- why a decision exists
- non-obvious tradeoffs
- external constraints

Do not comment what the code already clearly says.

---

# 7. Styling System Standards

## 7.1 Tailwind philosophy

Use Tailwind as a design system implementation layer, not as an excuse for unstructured styling.

## 7.2 Class ordering

Use a consistent ordering strategy, ideally automated.

Recommended grouping:

1. layout
2. box model
3. typography
4. visual styles
5. effects
6. state/responsive modifiers

## 7.3 Arbitrary values

Allowed only when:

- matching a design-critical value not worth tokenizing yet
- solving a one-off layout problem
- no clean token exists

If repeated more than once or twice, convert into a token or utility abstraction.

## 7.4 Responsive utilities

- mobile-first by default
- use breakpoints to enhance, not patch broken layouts
- avoid breakpoint clutter

## 7.5 Design drift prevention

When implementing multiple pages, regularly compare:

- section spacing
- button variants
- form controls
- heading usage
- border radius
- shadows

---

# 8. Reusable Layout Patterns

Standardize the following patterns whenever appropriate.

## 8.1 Container pattern

Define a single source of truth for content width and horizontal padding.

## 8.2 Section pattern

Define consistent vertical spacing and optional section theming.

## 8.3 Grid pattern

Have reusable conventions for:

- 2-column feature sections
- card grids
- logo clouds
- stats blocks
- pricing tables

## 8.4 Surface pattern

Standardize treatment for cards, panels, elevated blocks, and muted surfaces.

## 8.5 Navigation pattern

Standardize:

- desktop navigation
- mobile navigation
- dropdowns/mega menus
- sticky header behavior
- active link states

## 8.6 Form pattern

Standardize:

- field spacing
- label/help/error structure
- success/error messaging
- submit/loading state pattern

---

# 9. Content and Copy Presentation Rules

## 9.1 Copy integrity

Do not rewrite approved copy unless requested.

## 9.2 Content resilience

Layouts must survive:

- longer headings
- shorter descriptions
- missing images
- translated strings
- user-generated content when applicable

## 9.3 Localization readiness

If localization is expected:

- avoid text-dependent fixed widths
- externalize content early
- support RTL only if in scope, but avoid assumptions that make it impossible later

---

# 10. Form and Validation Standards

## 10.1 Validation architecture

Use both:

- client-side validation for immediate UX
- server-side validation as source of truth

## 10.2 Submission UX

All forms should define:

- idle state
- loading state
- success state
- error state
- retry behavior

## 10.3 Security basics

- validate inputs on server
- sanitize untrusted content
- protect secrets
- implement CSRF protections where relevant
- rate-limit abuse-prone endpoints where needed

---

# 11. Security and Privacy Standards

## 11.1 Security baseline

- do not expose secrets to client
- validate all inputs
- escape or sanitize unsafe content
- use secure headers where appropriate
- review third-party scripts critically

## 11.2 Authentication and authorization

If auth exists:

- enforce checks server-side
- handle session expiration gracefully
- do not rely on client-only gating for protection

## 11.3 Dependency hygiene

- prefer well-maintained libraries
- keep dependencies minimal
- audit packages regularly

---

# 12. Git, PR, and Collaboration Standards

## 12.1 Branching and commits

- create focused branches
- keep commits atomic and understandable
- write meaningful commit messages
Examples
feat(hero): implement homepage hero section
feat(filters): add static dropdown and filter UI
feat(properties): build featured property cards
fix(header): correct navbar spacing on tablet
fix(carousel): prevent image overflow on mobile
style(theme): add figma color and font tokens
refactor(cards): extract reusable property card component
chore(setup): initialize next app with pnpm and tailwind

## 12.2 Pull request standards

Each PR should include:

- what changed
- why it changed
- screenshots or recordings
- testing performed
- known limitations

## 12.3 Review readiness checklist

Before opening PR:

- self-review completed
- dead code removed
- debug logs removed
- docs updated
- screenshots captured for major UI work

---

# 13. Definition of Ready for Any New Component or Page

A component/page is ready to implement when:

- design source is identified
- required states are known
- responsive behavior is defined or inferred
- data contract is known
- accessibility implications are understood
- dependencies are identified

If not, document what is missing before coding.

---

# 14. Acceptance Criteria Templates

## 14.1 Component acceptance criteria

A component is accepted when:

- matches design intent
- is reusable and typed
- supports required states
- is accessible
- is responsive where needed
- is documented or self-evident in usage
- has tests proportional to complexity

## 14.2 Page acceptance criteria

A page is accepted when:

- structure matches approved design and content
- headings and landmarks are correct
- all links and actions work
- responsive behavior is validated
- metadata is implemented
- performance is acceptable

---

# 15. Common Anti-Patterns to Avoid

Do not do the following.

## Architecture anti-patterns

- mixing unrelated concerns in one component
- overusing client components
- deeply nested folders without value
- premature abstraction
- duplicate tokens/components

## Styling anti-patterns

- arbitrary values everywhere
- inconsistent spacing scales
- one-off custom CSS for reusable patterns
- hidden design drift across pages

## Accessibility anti-patterns

- clickable `div`s
- missing focus states
- placeholder-as-label
- non-semantic headings for styling only
- modals without keyboard handling

## Performance anti-patterns

- unoptimized images
- too many font weights
- unnecessary animation libraries
- excessive third-party scripts
- hydrating entire pages unnecessarily

## Product anti-patterns

- desktop-perfect but mobile-broken builds
- visual fidelity at the cost of usability
- missing empty/loading/error states
- shipping without QA on critical flows

---

# 16. Battle-Tested Delivery Playbook

Use this exact sequence.

## Step 1: Project bootstrap

- initialize Next.js with strict TypeScript
- configure Tailwind
- add lint/format/test tooling
- set folder structure
- set metadata and app shell basics

## Step 2: Design extraction

- inspect Figma via MCP
- inventory pages, tokens, components, variants, assets
- identify missing states and responsive assumptions

## Step 3: System setup

- implement tokens
- configure fonts
- establish container/section/layout primitives
- build base UI primitives

## Step 4: Core shell

- header
- footer
- global nav
- mobile nav
- layout wrappers

## Step 5: Reusable section library

- hero patterns
- feature rows/grids
- logos/testimonials/stats
- pricing/contact/FAQ patterns

## Step 6: Page assembly

- compose pages from reusable sections
- connect content/data models
- add stateful behavior where required

## Step 7: Quality passes

- accessibility pass
- responsive pass
- performance pass
- SEO/metadata pass
- analytics pass

## Step 8: Testing and release prep

- run automated tests
- manual QA
- fix regressions
- document setup and editing flows

---

# 17. How the Agent Should Make Decisions

When multiple valid choices exist, use this priority order:

1. meet user/business goal
2. preserve approved design intent
3. maintain accessibility
4. maintain responsiveness
5. reduce complexity
6. improve maintainability
7. optimize performance
8. align with existing system

If a tradeoff remains, choose the simpler, more robust solution.

---

# 18. Suggested File-Level Conventions

## 18.1 Components

- one primary component per file when feasible
- colocate small helper types only when local
- extract large shared helpers/types

## 18.2 Barrel files

Use sparingly. Prefer direct imports when barrels create ambiguity or circular dependency risk.

## 18.3 CSS

Keep global CSS minimal. Most styling should live in components through Tailwind and tokens.

## 18.4 Utilities

Place generic helpers in `lib/utils`, domain helpers in domain-specific folders.

---

# 19. Documentation Expectations

Each project should include:

- setup instructions
- environment variables
- deployment instructions
- content editing workflow
- analytics setup notes
- known constraints
- component/system conventions

For larger projects, add:

- architecture overview
- route map
- CMS schema map
- event taxonomy

---

# 20. Handoff Standards

A finished project handoff should contain:

- repository ready to run
- README updated
- env example file
- screenshots or preview links
- QA summary
- known issues / future improvements
- instructions for content editors

---

# 21. What to Improve Beyond the Baseline

These are high-leverage upgrades to make the workflow even better.

## 21.1 Introduce a formal design token pipeline

Use a token source of truth that can sync from design to code more systematically.

Benefits:

- less drift
- easier theming
- better scale across products

## 21.2 Add Storybook early

Use Storybook not only for documentation but for:

- state coverage
- visual review
- accessibility checks
- regression prevention

## 21.3 Add visual regression testing

Use Chromatic, Percy, or Playwright snapshots for critical pages/components.

This is especially useful for marketing sites and design-sensitive work.

## 21.4 Create a section registry

Maintain a library of approved section patterns.

Benefits:

- faster delivery
- consistent spacing/content hierarchy
- easier experimentation

## 21.5 Add a content resilience checklist

Explicitly test every page with:

- long text
- missing image
- empty dataset
- multi-line buttons
- translated content

## 21.6 Add performance budgets in CI

Define thresholds for:

- JS size
- Lighthouse scores
- image weight

## 21.7 Add accessibility gates in CI

Automate axe checks for critical pages and core components.

## 21.8 Establish a motion system

Create consistent motion tokens and patterns rather than ad hoc animations.
Animation and Motion

Use motion sparingly.

Rules:

Subtle hover, active, and carousel transitions are fine
Do not over-animate
Motion should support polish, not distract from design fidelity
Keep timing consistent across similar interactions

## 21.9 Define a CMS contract handbook

If CMS-backed sites are common, document:

- field naming conventions
- slug rules
- validation rules
- image requirements
- preview rules

## 21.10 Add a reusable PR checklist template

Include:

- design fidelity
- accessibility
- responsiveness
- performance
- metadata
- analytics
- QA screenshots

## 21.11 Use a “page spec” template before implementation

For each page, document:

- route
- goal
- sections
- data sources
- states
- SEO needs
- analytics events

## 21.12 Add browser support policy

Document exactly which browsers/devices are supported so implementation and QA are aligned.

## 21.13 Build a standard quality scorecard

Score each project on:

- design fidelity
- code quality
- accessibility
- performance
- maintainability
- content resilience

## 21.14 Establish design-to-code audit reviews

After implementation, compare the coded output back against Figma systematically.

## 21.15 Add dependency admission rules

Require justification before adding new packages.

Ask:

- is it necessary?
- is it maintained?
- what is the bundle cost?
- can we build this simply ourselves?

---

# 22. Playwright MCP Verification Policy

Codex agents must not rely only on static code review or assumptions about rendered output.

They must independently verify implemented behavior using **Playwright MCP**. this is non negotiable and must be done after each implmentation before commiting code. 

## 22.1 Mandatory rule

For every meaningful UI implementation, the agent must confirm the result itself in a running environment using Playwright MCP.

This includes verifying:

- visual rendering
- responsive behavior
- interactions
- navigation
- forms
- error states
- loading states
- accessibility-critical flows
- major content/layout integrity

The agent should not say a feature is complete unless it has been checked directly where feasible.

## 22.2 What must be verified with Playwright MCP

At minimum, the agent should verify:

- every implemented page loads correctly
- no obvious layout breakage exists
- navigation links work
- buttons and interactive controls behave correctly
- forms can be interacted with end to end
- modals, drawers, tabs, accordions, and menus behave correctly
- critical responsive breakpoints render correctly
- important empty, loading, success, and error states render correctly
- keyboard navigation works on critical paths
- no major console-visible runtime issues are blocking UX

## 22.3 Verification principle

The agent must confirm each important claim through direct interaction wherever possible.

Examples:

- do not assume a mobile menu works because the code looks correct
- do not assume a form submits because the handler exists
- do not assume a dialog is accessible because ARIA attributes were added
- do not assume layout matches Figma because Tailwind classes appear reasonable

The agent must open, inspect, interact, and validate.

## 22.4 Required verification workflow

After implementation, the agent should:

1. run the app locally
2. open the relevant route(s) with Playwright MCP
3. inspect desktop rendering
4. inspect tablet/mobile rendering where relevant
5. test all critical interactions
6. test keyboard flow for major interactive areas
7. confirm state transitions
8. note discrepancies
9. fix issues
10. re-test until stable

## 22.5 Figma-to-browser validation

When building from Figma via MCP, the agent must compare the coded result against the Figma source and then verify the real browser output with Playwright MCP.

This means the workflow is:

- inspect design in Figma via MCP
- implement systematically
- validate in browser via Playwright MCP
- correct drift or behavioral issues
- validate again

## 22.6 Responsive verification standard

The agent must personally verify the layout at relevant viewport ranges, not only one desktop size.

At minimum, inspect:

- mobile
- tablet where relevant
- standard desktop
- large desktop for wide layouts where relevant

## 22.7 Interaction verification standard

For any interactive component, the agent must check:

- default state
- hover/focus-visible where applicable
- active/open state
- disabled state if supported
- success/error/loading states where applicable
- close/reset behavior where applicable

## 22.8 Evidence-driven completion rule

A task should only be marked complete when the agent has evidence from direct browser verification, not only implementation intent.

## 22.9 When full verification is not possible

If something cannot be fully verified, the agent must state exactly what was not verified and why.

It must never imply that a flow was validated when it was not.

## 22.10 Non-negotiable standard

**Codex agents should confirm each and everything themselves using Playwright MCP wherever feasible before claiming completion.**

# 23. Recommended Operating Rules for Codex Agents

The agent should always:

1. start with design/system analysis before page coding
2. prefer reusable primitives over page-specific hacks
3. default to server components
4. keep client islands small
5. implement semantic HTML first
6. treat responsive behavior as first-class
7. test critical states, not only happy paths
8. document assumptions and deviations
9. optimize before handoff, not after complaints
10. leave a clear trail of decisions for humans

The agent should never:

1. blindly copy pixel values without system thinking
2. introduce random one-off patterns
3. over-abstract too early
4. sacrifice accessibility for appearance
5. ship unoptimized assets by default
6. assume desktop design covers mobile behavior
7. rely on hidden magic or unclear code structure
8. use client components when server components suffice
9. ignore edge states
10. treat QA as optional

---

# 24. Minimal Execution Checklist

Before coding:

- [ ] scope understood
- [ ] Figma audited via MCP
- [ ] tokens identified
- [ ] component inventory created
- [ ] responsive assumptions documented

During coding:

- [ ] architecture is clean
- [ ] components are typed and accessible
- [ ] sections use reusable patterns
- [ ] mobile behavior implemented intentionally
- [ ] content is resilient

Before shipping:

- [ ] lint/typecheck/tests pass
- [ ] metadata and SEO basics complete
- [ ] performance reviewed
- [ ] accessibility reviewed
- [ ] screenshots/QA summary prepared
- [ ] docs/handoff updated

---

# 25. Final Standard

The final output should feel like it was built by a disciplined product team, not assembled screen-by-screen.

A great Next.js + Tailwind website is:

- visually faithful
- structurally sound
- accessible
- fast
- maintainable
- scalable
- content-resilient
- easy to extend

That is the standard.

