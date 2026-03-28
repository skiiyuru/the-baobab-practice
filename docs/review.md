# Impeccable Design System — Project Guidelines

## Frontend Design Principles (Inlined Fallback)

Since the full `frontend-design` skill isn't available, follow these core anti-patterns and principles whenever executing any command below.

### AI Slop Tells — NEVER do these:
- Purple/cyan/blue gradient color palettes
- Gradient text on headings or metrics
- Dark mode with neon/glowing accents
- Glassmorphism (frosted glass effects)
- Hero sections with 3-4 metric cards in a row
- Identical card grids repeated section after section
- Generic fonts (Inter, Poppins) without intention
- Bounce or elastic easing curves
- Gray text on colored backgrounds
- Nested cards (cards inside cards)
- Rounded rectangles with colored left border as "cards"
- Redundant copy (headers restating what the paragraph says)

### DO:
- Use tinted neutrals instead of pure gray
- Use `oklch()` for perceptually uniform color
- Prefer `ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1)` for animations
- Animate only `transform` and `opacity` (GPU-accelerated)
- Respect `prefers-reduced-motion`
- Meet WCAG AA contrast (4.5:1 text, 3:1 UI)
- Use semantic HTML and proper ARIA
- Create clear visual hierarchy — ONE primary action per view
- Use whitespace generously and intentionally
- Vary layouts between sections — avoid repeating the same pattern

---

## /teach-impeccable

*One-time setup that gathers design context for your project and saves it to your AI config file. Run once to establish persistent design guidelines.*

### Step 1: Explore the Codebase

Before asking questions, thoroughly scan the project to discover:
- README and docs: Project purpose, target audience, stated goals
- Package.json / config files: Tech stack, dependencies, existing design libraries
- Existing components: Current design patterns, spacing, typography in use
- Brand assets: Logos, favicons, color values already defined
- Design tokens / CSS variables: Existing color palettes, font stacks, spacing scales
- Any style guides or brand documentation

Note what you've learned and what remains unclear.

### Step 2: Ask UX-Focused Questions

Focus only on what you couldn't infer from the codebase:

**Users & Purpose:**
- Who uses this? What's their context when using it?
- What job are they trying to get done?
- What emotions should the interface evoke?

**Brand & Personality:**
- How would you describe the brand personality in 3 words?
- Any reference sites or apps that capture the right feel?
- What should this explicitly NOT look like?

**Aesthetic Preferences:**
- Strong preferences for visual direction? (minimal, bold, elegant, playful, etc.)
- Light mode, dark mode, or both?
- Any colors that must be used or avoided?

**Accessibility & Inclusion:**
- Specific accessibility requirements?
- Considerations for reduced motion, color blindness?

Skip questions where the answer is already clear from the codebase.

### Step 3: Write Design Context

Synthesize findings into a `## Design Context` section and save it to this file:

```markdown
## Design Context

### Users
[Who they are, their context, the job to be done]

### Brand Personality
[Voice, tone, 3-word personality, emotional goals]

### Aesthetic Direction
[Visual tone, references, anti-references, theme]

### Design Principles
[3-5 principles derived from the conversation]
```

---

## /critique

*Evaluate design effectiveness from a UX perspective.*

**First**: Review the Frontend Design Principles at the top of this file.

### 1. AI Slop Detection (CRITICAL)
Does this look like every other AI-generated interface? Check against ALL the anti-patterns listed above. Be brutally honest.

### 2. Visual Hierarchy
- Does the eye flow to the most important element first?
- Is there a clear primary action visible in 2 seconds?
- Do size, color, and position communicate importance correctly?

### 3. Information Architecture
- Is the structure intuitive?
- Are there too many choices at once?
- Is navigation clear and predictable?

### 4. Emotional Resonance
- What emotion does this interface evoke? Is that intentional?
- Would the target user feel "this is for me"?

### 5. Composition & Balance
- Does the layout feel balanced?
- Is whitespace used intentionally?
- Is there visual rhythm in spacing and repetition?

### 6. Typography as Communication
- Does the type hierarchy signal what to read first, second, third?
- Is body text comfortable to read?

### Generate Report:

**Anti-Patterns Verdict** — Pass/fail: Does this look AI-generated? List specific tells.

**Overall Impression** — Brief gut reaction.

**What's Working** — 2-3 things done well.

**Priority Issues** — 3-5 most impactful problems, each with: What, Why it matters, Fix, and which command to use next.

**Questions to Consider** — Provocative questions that might unlock better solutions.

---

## /distill

*Strip designs to their essence by removing unnecessary complexity.*

**First**: Review the Frontend Design Principles at the top of this file.

### Assess Current State

Identify complexity sources:
- Too many elements competing for attention
- Excessive variation in colors, fonts, sizes without purpose
- Information overload — everything visible at once
- Visual noise — unnecessary borders, shadows, decorations
- Confusing hierarchy — unclear what matters most
- Repeated layout patterns (e.g. card grids back-to-back)

### Simplify Systematically

**Information Architecture:**
- Reduce scope — remove secondary, redundant information
- Progressive disclosure — hide complexity behind clear entry points
- Clear hierarchy — ONE primary action, few secondary
- Remove redundancy

**Visual Simplification:**
- Reduce color palette to 1-2 colors plus neutrals
- Limit typography to one font family, 3-4 sizes, 2-3 weights
- Remove decorations that don't serve hierarchy
- Remove unnecessary cards — use spacing and alignment instead
- Never nest cards inside cards

**Layout Simplification:**
- Vary section layouts — never repeat the same pattern consecutively
- Replace complex grids with simpler flows where possible
- Use available space generously
- Generous white space — let content breathe

**Content Simplification:**
- Cut every sentence in half, then do it again
- Active voice
- Remove jargon and marketing fluff
- Essential information only

### Verify
- Faster task completion?
- Reduced cognitive load?
- Still complete — all necessary features accessible?
- Clearer hierarchy?

---

## /bolder

*Amplify safe or boring designs to make them more visually interesting.*

**First**: Review the Frontend Design Principles at the top of this file.

**WARNING**: When making things "bolder," do NOT default to AI slop tricks (cyan/purple gradients, glassmorphism, neon accents, gradient text). Bold means distinctive, not "more effects."

### Assess Current State

Identify weakness sources:
- Generic choices (system fonts, basic colors, standard layouts)
- Timid scale (everything medium-sized, no drama)
- Low contrast (everything has similar visual weight)
- Static (no motion, no energy)
- Predictable (standard patterns with no surprises)

### Amplify Systematically

**Typography:**
- Replace generic fonts with distinctive choices
- Extreme scale jumps (3x-5x differences, not 1.5x)
- Weight contrast (pair 900 with 200, not 600 with 400)

**Color:**
- Increase saturation — more vibrant, not neon
- Bold palette — unexpected combinations, avoid purple-blue gradient
- Dominant color strategy — one bold color owns 60%
- Tinted neutrals instead of pure grays

**Spatial Drama:**
- Extreme scale jumps for important elements
- Break the grid — let hero elements escape containers
- Asymmetric layouts — replace centered balance with tension
- Generous space (100-200px gaps, not 20-40px)

**Visual Effects:**
- Dramatic shadows for elevation
- Texture and depth — grain, halftone, duotone (NOT glassmorphism)
- Custom elements that reinforce brand

**Motion:**
- Entrance choreography with staggered reveals
- Scroll-triggered animations
- Satisfying micro-interactions
- Use ease-out-quart/quint/expo only — never bounce or elastic

### Verify
- NOT AI slop — does this look like every other "bold" AI design? If yes, start over.
- Still functional?
- Coherent and intentional?
- Memorable?
- Performant?

---

## /polish

*Final quality pass before shipping.*

**First**: Review the Frontend Design Principles at the top of this file.

### Polish Checklist

**Visual Alignment & Spacing:**
- Everything lines up to grid
- All gaps use spacing scale
- Responsive consistency at all breakpoints

**Typography:**
- Same elements use same sizes/weights throughout
- Line length 45-75 characters for body text
- No font loading flashes

**Color & Contrast:**
- All text meets WCAG AA
- No hard-coded colors — all use design tokens
- Tinted neutrals — no pure gray or pure black
- Never gray text on colored backgrounds

**Interaction States (every interactive element needs all):**
- Default, Hover, Focus, Active, Disabled, Loading, Error, Success

**Transitions:**
- All state changes animated (150-300ms)
- Use ease-out-quart/quint/expo — never bounce or elastic
- 60fps, only animate transform and opacity
- Respects `prefers-reduced-motion`

**Content:**
- Consistent terminology throughout
- No typos
- Consistent capitalization

**Edge Cases:**
- Loading states for all async actions
- Helpful empty states
- Clear error messages with recovery paths
- Handles very long and very short content

**Responsiveness:**
- Test mobile, tablet, desktop
- Touch targets 44x44px minimum
- No horizontal scroll
- No text smaller than 14px on mobile

**Code Quality:**
- Remove console logs
- Remove commented code
- Remove unused imports
- Proper ARIA labels and semantic HTML