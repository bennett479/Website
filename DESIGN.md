---
name: Bennett Mende: The Process Sheet
description: A career read as an engineering drawing sheet, checked off in highlighter yellow.
colors:
  sheet: "#f6f7f4"
  ink: "#15181c"
  ink-2: "#4b535d"
  ink-3: "#6b7480"
  rule: "rgba(21, 24, 28, 0.28)"
  rule-strong: "rgba(21, 24, 28, 0.6)"
  yellow: "#ffd60a"
  red: "#d7262c"
  red-deep: "#b01c21"
  code-siemens: "#0e7c86"
  code-ey: "#b8641b"
  code-abb: "#2a8a4a"
  code-cct: "#1f5fbf"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "clamp(2.75rem, 7.5vw + 1rem, 6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "2.125rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.005em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.01em"
  subhead:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.005em"
  body:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
    fontFeature: "\"tnum\" 1, \"kern\" 1"
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.1em"
  label-micro:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.12em"
  title-large:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.005em"
  title-small:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.01em"
  link:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.01em"
  subhead-small:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.005em"
  body-small:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  meta:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.02em"
  caption:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  tag:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.08em"
  annotation:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.1em"
  annotation-micro:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "0.5625rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.08em"
  diagram:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.04em"
rounded:
  none: "0px"
  hair: "1px"
  pill: "999px"
  circle: "50%"
spacing:
  frame: "28px"
  frame-pad: "60px"
  gutter: "72px"
  section: "56px"
  title-block: "72px"
components:
  tag-bubble:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.circle}"
    size: "44px"
  instrument-bubble:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.circle}"
    size: "46px"
  unit-tag:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "2px 8px 1px"
  status-chip:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "1px 8px 0"
  instrument-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 8px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "4px 0"
  nav-link-hover:
    textColor: "{colors.ink}"
  contact-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  contact-link-hover:
    textColor: "{colors.ink}"
  title-block-cell:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.label-micro}"
    rounded: "{rounded.none}"
    padding: "10px 14px 14px"
---

# Design System: Bennett Mende: The Process Sheet

## Overview

**Creative North Star: "The Process Sheet"**

This is not a page that resembles an engineering drawing. It is drawn as one. A plotter-white
sheet fills the viewport edge to edge, bordered by a real zone frame with numbered and lettered
margin markers, headed by a drawing strip carrying a drawing number and revision letter, and
footed by a title block with ten fields. The career itself is the drawing: six equipment symbols
on one continuous process line, instrument bubbles for skills, dimension lines for tenure, a
dashed bypass for the consulting that ran in parallel. Every ornament in the system is a
convention borrowed from the discipline it depicts, and nothing decorative was added on top.

Density is high and deliberate. Content sits in tables, lists, and title-block cells rather than
cards, because a drawing packs information and a card set spreads it out. The only two
non-ink colors on the sheet are the two colors a person actually applies to a printed drawing:
highlighter yellow for what has been checked, red pencil for what was marked up. Both are
handled as marks made on the sheet, not as brand accents, and both are rendered in
`mix-blend-mode: multiply` so they read as translucent ink over the paper rather than fills
beneath it. A per-employer color code is the third color layer, and it stays inside the
1.5px to 3px line work where a drawing would carry a service code.

The build refuses portfolio grammar throughout: no hero photograph at scale, no card grid,
no timeline component, no rounded surfaces floating over a background. Where the world could
have drifted into styled-CV territory, the drawing convention wins.

**Key Characteristics:**
- Plotter-white sheet (#f6f7f4) as the only background; no second surface tone anywhere
- Three-weight ink line work (1px / 1.5px / 2.5px) carries all structure; no shadows, no fills
- DIN-flavored condensed caps (Barlow Condensed) for every label, name, and heading
- Two applied marks only: highlighter yellow and red pencil, both multiply-blended
- Zone frame and ten-field title block bracket the page top and bottom
- Zero corner radius on everything rectangular; circles are reserved for tags

## Colors

An ink-on-paper palette with two marker colors and a four-stop employer code, and nothing else.

### Primary
- **Highlighter Yellow** (`{colors.yellow}`): The check mark of the whole sheet. It draws the
  16px band under the process line, fills the IN OPERATION status chip, tints the two award rows
  in the revision table, underlines a hovered nav item (3px), rides the spine as the scroll-linked
  reading highlighter, and is the focus-visible outline. Always at 0.62 opacity with
  `mix-blend-mode: multiply` when it covers content, at full strength when it is the fill of a
  small chip.

### Secondary
- **Red Pencil** (`{colors.red}`): Markup, not brand. It draws the revision cloud outline (1.8px)
  around the hero contact block, the revision triangle and its A, the underline that grows under
  a hovered contact link, and the award triangle in the revision table.
- **Red Pencil Deep** (`{colors.red-deep}`): The text weight of red pencil: the CONTACT heading
  inside the cloud and the revision letter inside the triangle. Never used for line work.

### Tertiary
- **Employer Code** (`{colors.code-siemens}` teal, `{colors.code-ey}` amber,
  `{colors.code-abb}` green, `{colors.code-cct}` blue): One hue per employer, set as a local
  `--code` custom property on the owning element and inherited by everything inside it. It
  appears only in line work and small marks: the 3px underline on a unit tag, the dashed
  vertical connector down an equipment tbody, the 10px square before a skill's source, the
  dashed bypass line and its label, and the node name on hover in the diagram. TU Berlin and
  UC Berkeley deliberately carry no code and fall back to ink.

### Neutral
- **Plotter White** (`{colors.sheet}`): The sheet. The only background value in the system, used
  for the page, for the fill of every symbol and bubble so the line beneath is interrupted, and
  for the scrollbar track.
- **Drafting Ink** (`{colors.ink}`): Body text, all heavy line work, the frame border, the section
  rule, the scrollbar thumb, and the focus-ring halo.
- **Ink Mid** (`{colors.ink-2}`): Secondary text: zone markers, drawing-header meta, sheet refs,
  table column headers, dimension labels, periods, roles, captions.
- **Ink Light** (`{colors.ink-3}`): Leader lines in the diagram and disabled/placeholder icon
  color. The faintest thing on the sheet.
- **Rule** (`{colors.rule}`) and **Rule Strong** (`{colors.rule-strong}`): Translucent ink for
  hairlines. `rule` draws section tops, dashed row separators, and the outer frame hairline;
  `rule-strong` draws zone tick marks, table header underlines, title-block cell dividers, and
  the default underline color of a link.

### Named Rules

**The Two Markers Rule.** A drawing gets exactly two things applied to it after printing:
highlighter and red pencil. Yellow means checked, red means marked up for revision. No third
marker color is ever introduced, and neither marker is used decoratively where nothing was
checked or revised.

**The Code Stays in the Line Rule.** The employer code lives in strokes, dashes, and marks 10px
or smaller. It never becomes a background fill, never tints text at body size, and never appears
twice for the same unit in the same view.

**The One Paper Rule.** There is exactly one background color on the sheet. A panel, card, or
band is drawn with a line, never with a second surface tone.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow, Helvetica Neue fallback), self-hosted
woff2 at 500 / 600 / 700
**Body Font:** Barlow (with Helvetica Neue, Arial fallback), self-hosted woff2 at 400 / 500 / 600

**Character:** Barlow Condensed is the DIN-descended narrow grotesque a drawing is lettered in:
it takes uppercase and wide tracking without turning into decoration, and it survives at 10px in
a title-block field. Barlow is its unlettered sibling, used for the paragraphs a drawing note is
actually written in. The pairing is one voice at two widths, which is why the sheet never feels
typographically busy despite carrying five type roles per screen.

### Hierarchy
- **Display** (Barlow Condensed 700, `clamp(2.75rem, 7.5vw + 1rem, 6rem)`, line-height 0.92,
  tracking -0.015em, uppercase): The name, once, at plotter scale, optically pulled left by
  -0.03em so its stem aligns with the column edge.
- **Headline** (Barlow Condensed 600, 2.125rem, line-height 1, uppercase): Section titles, each
  sitting on a 2.5px ink rule with its sheet reference baseline-aligned at the far right.
  Drops to 1.75rem below 760px.
- **Title** (Barlow Condensed 700, 1.5rem, uppercase): Equipment unit names in the experience
  table and the title-block name (1.75rem). Education entries use 1.375rem.
- **Subhead** (Barlow Condensed 600, 1.1875rem, line-height 1.25): The service line of an
  equipment row and the degree line of a utility entry. Condensed at reading size, which marks
  it as drawn lettering rather than prose.
- **Body** (Barlow 400, 1.0625rem, line-height 1.55, `tnum` + `kern` on): Notes, table notes,
  descriptions. Measure is capped per context: 70ch for general notes, 66ch for a lede, 62ch for
  the hero subtitle and table notes, 52ch for utility notes.
- **Label** (Barlow Condensed 600, 0.75rem, tracking 0.1em, uppercase): Drawing-header meta,
  nav, sheet refs, table column headers, portrait caption, instrument chips.
- **Label Micro** (Barlow Condensed 600, 0.625rem, tracking 0.12em, uppercase): Title-block
  field labels only. The smallest type in the system and the only step below 0.6875rem.

### Secondary steps

The seven roles above carry the page. The shipped sheet also uses these fixed steps, each tied
to one job, so they are recorded here rather than left as drift:
- **Title Large** 1.75rem: the title-block name, and the headline below 760px.
- **Title Small** 1.375rem: education entry names, and unit names below 760px.
- **Link** 1.25rem (Barlow Condensed 600): the two contact links inside the revision cloud.
- **Subhead Small** 1.125rem: h3 ("Certificates", "Languages"), and mobile service lines.
- **Body Small** 1rem (Barlow): equipment notes below 760px.
- **Meta** 0.9375rem (Barlow Condensed 500): unit meta lines, certificate sources, title-block values.
- **Caption** 0.875rem (Barlow): the diagram legend and table notes.
- **Tag** 0.8125rem (Barlow Condensed 700, tracking 0.08em): unit tags, gutter tag bubbles,
  instrument bubbles, the cloud's "Contact" heading.
- **Annotation** 0.6875rem: zone markers, the portrait caption, mobile nav.
- **Annotation Micro** 0.5625rem: zone markers below 760px only.
- **Diagram** 11px and its neighbours (10.5 / 12 / 12.5 / 17px): text inside the process flow
  SVG, set in viewBox units so it scales with the drawing, never with the page.

### Named Rules

**The Lettering Rule.** Anything a draftsman would letter (a name, a tag, a field label, a
column header, a dimension, a nav item) is Barlow Condensed, uppercase, tracked 0.04em to 0.14em.
Anything a draftsman would write as a note is Barlow, sentence case, untracked. There is no
third option.

**The Tabular Numbers Rule.** Every date, period, score, and drawing number sets
`font-variant-numeric: tabular-nums`. Numbers on a sheet line up in a column or the sheet is
wrong.

**The Sheet Reference Rule.** A section heading is never alone on its rule. It carries a
right-aligned reference naming the drawing artifact and its zone ("Equipment list · Zones B to
D"). This is a paired label, baseline-aligned with the heading, and it is not an eyebrow: it
never sits above the heading and never repeats the heading's words.

## Layout

The page is a single centered column capped at 1320px, inset from the viewport by a 60px content
pad, with a fixed zone frame drawn 28px from every viewport edge. Below 760px the frame drops to
14px and the content pad to 32px.

The sheet body runs on a two-column grid: a 72px gutter carrying a sticky two-letter tag bubble
(GN, EQ, UT, IX, RV), and a content column. A 2px ink spine runs the full height of the body at
x=35px inside that gutter, with a 16px yellow highlighter band scaled from the top by scroll
progress against a reading line at 55% of viewport height. Below 760px the gutter collapses to
0px and both the spine and the tag bubbles are removed rather than restacked.

Vertical rhythm is set by the section: 56px of top padding above a 1px rule, a heading block with
14px of padding above a 2.5px rule and 26px of clearance below it. Between-item rhythm is 8px to
14px, and the title block is set off by 72px above and 60px below.

Breakpoints are three: 1100px (the hero drops to two columns and the revision cloud takes a full
row; the title block reflows from one row of ten cells to three rows of six), 960px (the drawing
header unsticks, loses its right meta group, and wraps its nav), and 760px (single column
everywhere, the equipment table converts from a table to stacked blocks with its thead hidden,
the process diagram rebuilds as a vertical run, and the title block goes to two columns of five
rows).

The process diagram is drawn to a fixed 1200 x 440 viewBox on desktop and rebuilds to a ~360
wide vertical layout with a 150px step per node on phones. It is not scaled; it is redrawn.

A print stylesheet keeps the sheet a sheet: the frame, nav, and skip link are dropped, the body
gets a hard 2px border, and both animated marks are pinned to their finished state.

## Elevation & Depth

The system has no shadows and no elevation. Depth is conveyed the way it is on paper: by line
weight, by knockout, and by translucent marker. Three weights carry the whole hierarchy: a 1px
hairline for subdivision, 1.5px for enclosure (bubbles, tags, symbol details, the revision cloud),
and 2.5px for the load-bearing lines (the sheet frame, the section rule, the process line, the
title-block border). Symbols and bubbles are filled with the sheet color so they knock the line
out behind them, which is how a drawing shows one element passing in front of another. Yellow and
red sit above content in `mix-blend-mode: multiply` and darken what they cross instead of covering
it.

The two `box-shadow` values in the build are not elevation. The sticky drawing header uses
`0 1px 0 var(--rule)` as a hairline that only exists while the header is stuck, and the focus
state uses `0 0 0 5px var(--ink)` as the outer half of a ring.

### Named Rules

**The No Shadow Rule.** Nothing on this sheet casts a shadow. If an element needs to separate
from what is behind it, it fills with the sheet color and interrupts the line. If it needs
emphasis, its stroke gets heavier (a diagram symbol goes from 2px to 3.2px on hover).

**The Marker Is Translucent Rule.** Yellow and red are applied over the sheet, never under it.
Any highlighter band uses opacity 0.62 with multiply blending so the ink beneath stays fully
legible.

## Shapes

The form language is a drafting instrument set: straight rules, right angles, and true circles.

Corner radius is effectively zero. Every rectangle in the interface (the frame, the title block
and its cells, tables, status chips, unit tags, the portrait) is square-cornered. The only
exceptions are functional: `50%` on tag bubbles, instrument bubbles, the small code dots, and the
key swatch, and `999px` on the inline instrument chip so it reads as a soft tag rather than a
boxed one. The focus ring carries a 1px radius, which is a rendering nicety, not a form decision.

Rounding inside the diagram belongs to the symbols themselves: the vessel and mixer bodies use
12-14px corner radii because that is the shape of the equipment, not the shape of a UI.

Dashed and dotted strokes are load-bearing vocabulary, not texture: `7 5` for the parallel bypass
line, `2 3` for instrument leader lines, a 4px-on-4px-off repeating gradient for the vertical
employer connector in the equipment table, and a 1px dashed hairline for row separators in every
list-style table.

The revision cloud is generated, not drawn by hand: a path of 11px-radius arcs stepped around the
element's measured box and redrawn by ResizeObserver, so the scallop count always matches the
content.

## Components

### Navigation
- **Style:** A horizontal row of condensed uppercase labels (0.75rem, 0.1em tracking) inside the
  sticky drawing header, flanked by drawing meta on both sides.
- **Default:** Ink text, no underline, 4px vertical padding.
- **Hover / Focus:** A 3px highlighter-yellow bar wipes in under the label from the left
  (`transform: scaleX(0 → 1)`, 260ms). No color change, no motion of the label itself.
- **Mobile:** Below 960px the header unsticks, drops the right-hand meta group, and the nav wraps
  at 0.6875rem.

### Tag Bubble (gutter)
- **Shape:** 44px circle, 1.5px ink stroke, sheet fill, sticky at 118px from the top.
- **Content:** A two-letter section code in condensed 700 at 0.8125rem.
- **Behavior:** Sticks alongside its section and is removed entirely below 760px.

### Equipment Table (experience)
- **Character:** An equipment list, not a card stack.
- **Structure:** One `tbody` per employer carrying its `--code`; a rowgroup header row with the
  unit tag, unit name, and meta, then one row per role.
- **Unit tag:** Square-cornered, 64px minimum width, 1.5px ink border with a 3px bottom border in
  the employer code.
- **Rows:** A dashed vertical connector in the employer code runs down the tag column with a 10px
  circle node at each row, terminating at the last row's midpoint.
- **Mobile:** Below 760px the thead is hidden, cells become blocks, the tag column is dropped,
  and rows separate with a 1px dashed rule.

### Instrument Chip and Instrument Bubble
- **Chip:** Inline in a note, 999px pill, 1px `rule-strong` border, no fill, condensed 0.75rem
  uppercase in ink-2. Names a skill in the flow of a sentence.
- **Bubble:** 46px circle, 1.5px ink stroke, sheet fill, condensed 700 three-letter code. Used in
  the skills index and, at 20px radius, on the diagram itself with a dashed leader to its unit.

### Contact Link
- **Style:** Condensed 600 at 1.25rem (0.9375rem in the title block), a 16px inline SVG icon in
  red, no underline at rest.
- **Hover / Focus:** A 2px red-pencil underline wipes in from the left, starting after the icon.
- **Placeholder state:** An unconfirmed contact is a `<span>`, not a link: ink-2 text, ink-3 icon,
  weight 500, no underline behavior.

### Title Block
- **Character:** The footer is a real title block, and it is where contact repeats.
- **Shape:** A 2.5px ink border enclosing ten cells on a single asymmetric row
  (`2fr 2.4fr 1fr 1.4fr 1fr 1fr 0.7fr 1fr 0.5fr 0.7fr`), divided by 1px `rule-strong` lines.
- **Cell:** A 0.625rem tracked micro-label above a condensed value; identifiers (drawing number,
  rev, sheet) set tabular and tracked 0.06em.
- **Responsive:** Reflows to six columns in three rows at 1100px, then two columns in five rows
  at 760px, with the border logic rewritten at each step so the outer edge stays unbroken.

### Process Flow Diagram (signature)
- **Line work:** One continuous 2.5px ink path through all six units, square-capped, with 5px
  arrowheads between units. A 16px yellow band traces the identical path at 0.62 opacity and
  animates in once by stroke-dashoffset over 1900ms after a 350ms delay.
- **Symbols:** Six ISO 10628-flavored equipment symbols (vessel, mixer, pump, exchanger, filter,
  turbine), each about 60px, 2px ink stroke, sheet fill, drawn from primitives in code.
- **Nodes:** Each symbol is an `<a>` into the page body. Hover and focus thicken its stroke to
  3.2px and tint its name in the employer code; focus additionally shows a 4px yellow ring.
- **Instrument bubbles:** Skills hang off a dashed bus line above or below the unit, always
  opposite the unit's label.
- **Dimension lines:** Tenure is dimensioned at the foot of the drawing with witness ticks,
  inward arrowheads, and a tracked 10.5px uppercase label.
- **Status:** The current role carries a yellow IN OPERATION box on a dashed leader.
- **Fallback:** A `<noscript>` ordered list carries all six stops in condensed type.
- **Reduced motion:** The yellow animation and the spine transform are both disabled; the
  finished state is shown immediately.

### Revision Cloud
- **Style:** A generated scalloped path (11px arc radius) in 1.8px red around the hero contact
  block, with a 28px red revision triangle at the top right carrying the letter A.
- **Behavior:** Redrawn on resize so scallops always fit the box. Used exactly once on the sheet.

## Do's and Don'ts

### Do:
- **Do** draw every new element from drafting vocabulary already in the sheet: a rule, a tag, a
  bubble, a dimension, a table, a title-block cell.
- **Do** keep all structure in the three ink weights (1px hairline, 1.5px enclosure, 2.5px
  load-bearing) and fill shapes with the sheet color to interrupt the line beneath.
- **Do** letter in Barlow Condensed uppercase with 0.04em to 0.14em tracking, and write in Barlow
  sentence case. See The Lettering Rule.
- **Do** set every number tabular.
- **Do** attach a new employer color as a local `--code` on the owning element and let the marks
  inside inherit it.
- **Do** give hover and focus a wiping underline or a heavier stroke, in that order of preference.
- **Do** pin both animated marks (the yellow trace, the spine) to their finished state under
  `prefers-reduced-motion: reduce` and in print.
- **Do** cap measure between 52ch and 70ch depending on the note's role.
- **Do** carry a right-aligned sheet reference beside each section heading, baseline-aligned.

### Don't:
- **Don't** add a box-shadow. The sheet is flat; separation comes from knockout fill and stroke
  weight.
- **Don't** introduce a second background tone. One paper, one color.
- **Don't** round a rectangle. Radius is reserved for circles (50%) and the inline chip (999px).
- **Don't** use yellow or red anywhere nothing was checked or revised. They are marks, not
  accents.
- **Don't** let an employer code become a background fill or body-size text color.
- **Don't** place a small tracked label above a heading as an eyebrow. The sheet reference goes
  beside the heading, on the same baseline.
- **Don't** convert a table into cards at any breakpoint; restack the rows and drop the thead.
- **Don't** add a system font stack. Both families are self-hosted woff2 and preloaded.
- **Don't** scale the diagram down on small screens. Rebuild it in the vertical layout.
