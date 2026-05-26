# Dusty Pages Frontend

A personal portfolio project frontend built to demonstrate practical web development skills with a modern React stack.

This application focuses on:

- Client-side routing with nested page experiences
- API integration with asynchronous data loading
- Reusable UI component composition
- Responsive layout and visual theming with Tailwind CSS v4

## What This App Demonstrates

- Building a multi-page SPA using React Router
- Fetching and rendering dynamic data from an Express + Prisma backend
- Organizing a scalable component/page folder structure
- Applying a custom visual theme using Tailwind design tokens

## Tech Stack

- React 19
- TypeScript
- Vite 6
- React Router 7
- Tailwind CSS 4
- ESLint + Prettier

## Current Feature Set

- Home page
  - Loads featured articles from backend ranking endpoint
  - Loads category list from backend
  - Provides navigation to article/category pages
- Category page
  - Fetches top articles for the selected category
  - Supports timeframe query parameter (`all`, `1day`, `7days`, `1month`, `1year`)
- Article page
  - Fetches a single article by ID
  - Displays title, date, author, body, and tags
- Profile page
  - UI scaffold for user-focused dashboard widgets
- Navigation and layout
  - Side menu toggle
  - Shared hero section on non-profile routes

## Route Map

| Route | Purpose | Status |
| --- | --- | --- |
| `/` | Home dashboard with featured articles and categories | Implemented |
| `/article/:id/:title` | Article details | Implemented |
| `/category/:categoryName` | Category-focused article list | Implemented |
| `/category/:categoryName/all-articles` | Full article listing view | Implemented (basic) |
| `/profile` | User profile and stats layout | Implemented (UI scaffold) |
| `/login` | Login page | Placeholder |
| `/register` | Register page | Placeholder |
| `*` | Not found fallback | Implemented |

## API Integration

Frontend API base URL is defined in `src/config.ts`:

```ts
const config = {
  apiBaseUrl: 'http://localhost:5000/api',
};
```

Notes:

- Keep backend running on port `5000` (or update this config value).
- Vite also has a proxy entry in `vite.config.ts`, but current fetch calls use absolute backend URLs.

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+
- Backend API running locally (see backend README)

### Install

```bash
npm install
```

### Run In Development

```bash
npm run dev
```

Default Vite URL:

- `http://localhost:5173`

### Build For Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check and build production bundle |
| `npm run preview` | Preview built app locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format files with Prettier |
| `npm run format:check` | Check formatting without writing |

## Project Structure

```text
src/
  components/        # Reusable presentational and layout components
  pages/             # Route-level page components
  assets/            # Static assets (icons, images)
  App.tsx            # Main app layout and route registry
  App.css            # Tailwind import + theme tokens
  config.ts          # API base URL config
  main.tsx           # App bootstrap and router provider
```

## Styling And Theme

The app defines a custom palette in `src/App.css` using Tailwind CSS v4 theme variables, including:

- Main and secondary dark surfaces
- Primary/secondary text colors
- Accent tokens (gold, olive, burgundy, ink-blue, parchment)

## Known Gaps / Roadmap

- Implement authentication flow (login/register forms and token/session handling)
- Add article search and richer filtering/sorting controls
- Replace placeholder content in profile and secondary pages
- Improve loading and error UX with reusable states
- Add unit/integration tests for core pages and data hooks

## Portfolio Context

This project is intentionally built as a learning portfolio to showcase understanding of:

- Frontend architecture and component design
- API consumption and asynchronous state management
- Routing and route-driven UI composition
- Development tooling (linting, formatting, build pipeline)
