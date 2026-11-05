# Lawal Mankchoud - Portfolio

Personal portfolio of Lawal Mankchoud, Cloud & Infrastructure Engineer moving into DevSecOps.
Bilingual (French by default, English with one click), built with Next.js and deployed on Vercel.

## Features
- Bilingual site: French by default, with an FR / EN toggle that remembers your choice.
- Tabbed interface: Home, Experience (with Education), Projects, Certifications.
- Experience tab with four ITSICS case studies (goal, choices, result, enlargeable architecture diagrams).
- Personal projects gallery with category filter and Code / Demo buttons, driven by `src/app/data/personalProjects.ts` (the tab appears once a project is added).
- Dark and light themes, animated background, responsive layout.

## Tech stack
- Next.js 16 (App Router, Turbopack), React 19, TypeScript
- Tailwind CSS, Framer Motion
- lucide-react and react-icons
- Deployed on Vercel

## Run locally
```bash
npm install
npm run dev
```
Then open http://localhost:3000

## Structure
- `src/app/components/tabs/` - one file per tab (Home, Experience, Projects, Certifications)
- `src/app/context/LanguageContext.tsx` - language state (fr / en)
- `src/app/lib/i18n.ts` - small helper for bilingual text
- `public/` - images, diagrams and CV

## Contact
- GitHub: https://github.com/mankchoud
- LinkedIn: https://linkedin.com/in/lawal-mankchoud

## Quality checks
`npm run lint`, `npm run typecheck` and `npm run build` run in GitHub Actions on every push and pull request, together with a secrets scan (Gitleaks). Dependabot proposes weekly dependency updates.
