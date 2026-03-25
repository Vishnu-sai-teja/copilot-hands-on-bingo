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

## References
`README.md` | `workshop/GUIDE.md` | `workshop/01-setup.md`
