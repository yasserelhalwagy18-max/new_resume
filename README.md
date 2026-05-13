# Personal Portfolio

A bilingual (English/Persian) personal portfolio website designed with cinematic transitions, deep semantic structure, and performant animations. Built using React 19, Vite, Tailwind CSS v4, and Framer Motion (`motion/react`).

## Key Features

- **Bilingual Support (i18n):** Full support for English (LTR) and Persian (RTL) localization managed centrally in `src/data.ts`.
- **Cinematic Animations:** Uses Framer Motion (`motion/react`) for fluid page transitions, scroll progress bars, and reveal effects.
- **Responsive Design:** Optimized for all screen sizes. Heavy visual effects are hidden on smaller screens (`md:` breakpoint) for performance.
- **Accessibility (A11y):** Keyboard navigable with skip links, proper ARIA roles, and semantic HTML to ensure screen readers and keyboard users can navigate seamlessly.
- **Modern Tech Stack:** Built with React 19, Vite, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (`motion/react`)
- **Language:** TypeScript
- **Fonts:** Inter, Playfair Display, Vazirmatn (from `@fontsource`)

## Project Structure

- `src/components/` - React components for the portfolio (Hero, About, Projects, Experience, etc.).
- `src/data.ts` - Centralized content and configuration for English and Persian.
- `src/hooks/` - Custom React hooks.
- `src/utils/` - Utility functions.
- `src/App.tsx` - Main application component.
- `src/main.tsx` - Entry point.
- `src/index.css` - Tailwind entry point.

## Run Locally

**Prerequisites:** Node.js

1. Clone the repository and navigate to the directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000` (or the port specified in the console).

## Build for Production

To create a production build, run:
```bash
npm run build
```
This will generate the optimized build artifacts in the `dist` directory. You can preview the production build using:
```bash
npm run preview
```

## Linting and Type Checking

The project uses TypeScript for type checking. To run the linting (type checking only):
```bash
npm run lint
```
