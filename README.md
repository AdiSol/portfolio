# Adrienne Soliven — Portfolio

This is the source for my personal portfolio site.

**Live site:** https://adriennesoliven.com

## Built With

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/) — case study content, via `@next/mdx`
- Deployed on [Vercel](https://vercel.com/)

## Features

- Case studies written in MDX with structured frontmatter (stack, metrics, links)
- Custom animated SVG illustration on the About page
- NDA-aware project cards — proprietary work is disclosed rather than hidden
- Fully responsive, dark-mode-aware design system built on CSS custom properties

## Case Studies

- **[Jeremiah Manzano Portfolio](/work/manzano)** — photography/video portfolio built for near-zero hosting cost
- **[SafeHands](/work/safehands)** — real-time computer vision safety system, in production at Panasonic
- **[AnimoSched](/work/animosched)** — CHI 2021-published scheduling tool

## Getting Started

**Requirements:** Node.js 20+, npm

\`\`\`bash
git clone https://github.com/adisol/portfolio.git
cd portfolio
npm install
npm run dev
\`\`\`

Then open [http://localhost:3000](http://localhost:3000).

## Project Structure

\`\`\`
src/
  app/            — routes (App Router)
  components/     — layout, home, work, about
  content/work/   — MDX case study source files
  lib/            — data-fetching helpers (work.ts)
  data/           — non-MDX project metadata (Tier 2 projects)
\`\`\`

## Contact

- Email: asoliven.work@gmail.com
- GitHub: [@adisol](https://github.com/adisol)