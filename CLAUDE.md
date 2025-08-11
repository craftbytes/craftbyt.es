# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

This is an Astro-based static website for Craftbytes, a web and mobile app
development company. The site uses Astro components with Tailwind CSS
for styling and is currently displaying a "coming soon" page.

## Commands

### Development

- `pnpm develop` or `pnpm start` - Start development server

### Build & Deploy

- `pnpm build` - Build production site
- `pnpm serve` - Serve built site locally

### Testing

- `pnpm test` - Currently just echoes a message about writing tests.

## Architecture

### Core Technologies

- **Astro 5.x** - Static site generator
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **@tailwindcss/vite** - Native Vite plugin for Tailwind CSS

### Project Structure

- `src/layouts/` - Astro layout components
- `src/pages/` - Astro pages (currently index.astro and 404.astro)
- `src/stylesheets/` - CSS files with Tailwind import and theme configuration
- `public/` - Static assets including logos and images

### Key Components

- `Layout.astro` component handles SEO metadata and page structure
- Uses Tailwind utility classes for styling (e.g., `min-h-screen`, `bg-blue-600`, `flex`)

### Styling Architecture

- Single `@import "tailwindcss"` directive in `src/stylesheets/global.scss`
- Custom theme colors configured using CSS `@theme` block
- Tailwind CSS 4.x using native @tailwindcss/vite plugin
- Utility-first approach with responsive and state variants
- No separate config file needed - configuration in CSS

### Static Assets

- Images and assets served from `public/` directory
- Direct file references in Astro components (e.g., `/cb-logo-type.png`)

## Package Manager

Uses pnpm as the package manager. Use `pnpm` instead of `npm` for all commands.

## Current Status & Known Issues

### ✅ Development Server

- `pnpm develop` works successfully
- Site loads at <http://localhost:4321/>

### ✅ Production Build  

- `pnpm build` works successfully
- Astro 5.x generates static HTML files
- Static site generation completes without errors

### 📦 Migration Changes Made

- **Migrated**: Gatsby → Astro 5.x
- **Converted**: React components → Astro components
- **Moved**: `src/images/` → `public/` for static assets
- **Replaced**: GraphQL queries → direct imports and props
- **Styling**: Bulma CSS → Tailwind CSS 4.x utility framework
- **Config**: Tailwind config.js → CSS-based @theme configuration

## Development Guidelines

### Commit Messages

- **Always use Commitizen** (`cz commit`) for structured commit messages
- **Never mention Claude Code or AI collaboration** in commit messages
- Use `feature/astro-migration-2025` branch for Astro conversion work
- Follow conventional commit format: `type(scope): description`
- Use emojis sparingly, following existing project style (e.g., `🔼` for upgrades)

### Git Workflow

- Create feature branches for all changes: `feature/description-YYYY`
- Use descriptive branch names with current year
- Always create PRs for code changes, never commit directly to main

