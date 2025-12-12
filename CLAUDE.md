# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Build and Development:**
- `npm run dev` or `npm start` - Start Vite development server
- `npm run build` - Build for production using Vite
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint with React and JSX support (max 0 warnings)

## Project Architecture

This is a **React 18 + Vite** website for Tolaram News Letter, built as a modern single-page application with the following architecture:

### Tech Stack
- **Frontend Framework:** React 18 with JSX
- **Build Tool:** Vite (ES modules, fast HMR)
- **Styling:** Tailwind CSS with shadcn/ui components
- **UI Components:** Radix UI primitives + shadcn/ui design system
- **Icons:** Lucide React + Radix UI icons
- **Animations:** Framer Motion + Tailwind CSS animations

### Project Structure
```
src/
├── App.jsx              # Main app component
├── main.jsx             # React 18 root rendering
├── lib/                 # Utilities (cn function for class merging)
└── styles/             # Global CSS with Tailwind
```

### Key Architecture Patterns

**Component Organization:** 
- Clean, minimal structure ready for expansion
- Uses functional components with hooks

**Styling System:**
- Uses shadcn/ui design system with Tailwind CSS
- CSS variables for theming in `src/styles/index.css`
- `cn()` utility function from `lib/utils.js` for conditional classes
- Custom fonts: Roboto and Nunito

**Asset Management:**
- Static assets in `public/` directory

### Important Configuration

**Vite Config:** Path alias `@` points to `src/` directory for clean imports

**Tailwind:** Configured with shadcn/ui theme system, custom animations, and font families

**ESLint:** Strict configuration with Prettier integration, React hooks rules, and Tailwind class sorting

### Development Notes

- This is a blank newsletter website template ready for customization
- Project uses modern React patterns with functional components and hooks
- All styling follows Tailwind + shadcn/ui conventions