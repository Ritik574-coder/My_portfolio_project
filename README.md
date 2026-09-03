# App Builder Workspace

A modern web application workspace built with React 19, Vite, TanStack Router/Start, Tailwind CSS v4, and TypeScript.

## 🚀 Features

- **Frontend Framework:** React 19 with TanStack Start / Router for full-stack React capabilities.
- **Styling:** Tailwind CSS v4 for utility-first styling with high performance.
- **Database Support:** Embedded PostgreSQL via `@electric-sql/pglite` and optional Neon integration.
- **Authentication:** Built-in support for Better Auth.
- **CI/CD:** Automated testing, linting, typechecking, and GitHub Pages deployment via GitHub Actions.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v22 or higher recommended)
- `npm` package manager

### Local Installation & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will run at `http://0.0.0.0:8080`.

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server with environment configuration.
- `npm run build`: Builds the production application and executes database migrations.
- `npm run preview`: Previews the built production application locally.
- `npm run test`: Runs test suites with the Node.js native test runner.
- `npm run lint`: Runs ESLint across the codebase.
- `npm run typecheck`: Performs TypeScript type checking without emitting output files.
- `npm run format`: Formats code using Prettier.

## ⚙️ CI/CD & GitHub Pages Deployment

This repository includes a GitHub Actions workflow (`.github/workflows/ci-cd.yml`) configured to:

1. **Continuous Integration (CI):** On every push or pull request to the `main` branch, it runs:
   - Dependency installation (`npm ci`)
   - Typechecking (`npm run typecheck`)
   - Code linting (`npm run lint`)
   - Automated tests (`npm run test`)
   - Production build (`npm run build`)

2. **Continuous Deployment (CD):** On pushes to the `main` branch, the built static assets are automatically published to GitHub Pages.

### Configuring GitHub Pages in Repository Settings

To enable deployment to GitHub Pages:
1. Go to your repository settings on GitHub (**Settings** > **Pages**).
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.

## 📄 License

This project is private and proprietary.
