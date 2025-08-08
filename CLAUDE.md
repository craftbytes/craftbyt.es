# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

This is a Gatsby-based static website for Craftbytes, a web and mobile app
development company. The site uses React components with Bulma CSS framework
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

- **Gatsby 5.x** - Static site generator
- **React 18.x** - UI framework  
- **Bulma 1.x** - CSS framework
- **SCSS** - Stylesheet preprocessor via gatsby-plugin-sass

### Project Structure

- `src/components/` - Reusable React components (Header, Layout, SEO, etc.)
- `src/pages/` - Gatsby pages (currently just index.js and 404.js)
- `src/stylesheets/` - SCSS files with Bulma customizations
- `src/images/` - Static assets including logos

### Key Components

- `Layout` component wraps pages with Header and uses StaticQuery for site metadata
- `SEO` component handles meta tags and page titles
- Uses Bulma CSS classes throughout (e.g., `hero`, `has-background-primary`, `columns`)

### Styling Architecture

- Global styles in `src/stylesheets/global.scss` import Bulma with custom overrides
- Custom variables in `_bulma_overrides.scss`
- Additional helper classes in `_helpers.scss` and `_grid.scss`

### GraphQL Usage

- Site metadata queried via StaticQuery in Layout component
- Image processing through gatsby-transformer-sharp for logo display
- File system source plugin configured for src directory

## Package Manager

Uses pnpm as the package manager. Use `pnpm` instead of `npm` for all commands.

## Current Status & Known Issues

### ✅ Development Server

- `pnpm develop` works successfully
- Site loads at <http://localhost:8000/>

### ✅ Production Build  

- `pnpm build` works successfully
- React 18.x compatibility with Gatsby 5.14.6 is stable
- Static site generation completes without errors

### 📦 Package Changes Made

- **Downgraded**: React 19.x → React 18.x for Gatsby compatibility
- **Replaced**: `gatsby-image` → direct image imports
- **Replaced**: `node-sass` → `sass`
- **Removed**: Sharp-dependent plugins for local development

### 🚀 For Ubuntu Deployment

**Add PWA manifest** back if needed:

   ```js
   {
     resolve: `gatsby-plugin-manifest`,
     options: { /* your manifest config */ }
   }
   ```

## Development Guidelines

### Commit Messages

- **Always use Commitizen** (`cz commit`) for structured commit messages
- **Never mention Claude Code or AI collaboration** in commit messages
- Follow conventional commit format: `type(scope): description`
- Use emojis sparingly, following existing project style (e.g., `🔼` for upgrades)

### Git Workflow

- Create feature branches for all changes: `feature/description-YYYY`
- Use descriptive branch names with current year
- Always create PRs for code changes, never commit directly to main

