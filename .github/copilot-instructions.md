# Project Guidelines

## Before Pushing

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] `npm run test`

## Stack
React 19 + TypeScript + Vite + Tailwind CSS v4 + Vitest

## Architecture
- **State**: `src/hooks/useBingoGame.ts` (localStorage v1)
- **Logic**: `src/utils/bingoLogic.ts` (pure functions)
- **Components**: `src/components/` + `src/App.tsx` state flow (`start` → `playing` → `bingo`/`modal`)
- **Styling**: Tailwind v4 with tokens in `src/index.css`; see `.github/instructions/tailwind-4.instructions.md`
- **Tests**: `src/utils/bingoLogic.test.ts` (logic-heavy), use Testing Library for components

## Key Conventions
- Strict TypeScript (no unchecked side-effects, no unused vars)
- Named exports, typed prop interfaces near components
- localStorage versioning: increment when schema changes
- Design work: reference `.github/skills/frontend-design/SKILL.md`

## Design Guide
- Visual direction: **Playful Candy Pop** (bold neon candy palette, rounded shapes, energetic tone)
- Scope default for redesign tasks: visuals only; keep gameplay rules/state flow unchanged unless explicitly requested
- Keep design tokens centralized in `src/index.css` using Tailwind v4 `@theme`; add reusable patterns in `@layer components`
- Typography: expressive display headings + readable rounded body text; avoid generic default font stacks
- Color: favor high-contrast candy accents (pink/cyan/lime/lemon) on light playful surfaces; avoid flat, single-color pages
- Motion: use a few high-impact transitions/entrance animations; always include reduced-motion support
- Preserve UX clarity by state: default, marked, winning, and free-space squares must remain immediately distinguishable
- Accessibility baseline: keep `aria-pressed`/`aria-label` semantics, visible focus rings, and touch-friendly target sizing
- Responsive baseline: mobile-first layout that scales cleanly to desktop without clipping or horizontal scroll

## References
`README.md` | `workshop/GUIDE.md` | `workshop/01-setup.md`
