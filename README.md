# Signus Test (Yablonskyi)

A **Next.js** + **TypeScript** starter project.

## Prerequisites

- **Node.js** v16 or newer
- **npm** (or **yarn** / **pnpm**)

## Installation

1. Clone the repo
   ```bash
   git clone https://github.com/yablonya/signus-test-yablonskyi.git
   cd signus-test-yablonskyi
   ```
   
2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

## Environment Variables

This project uses a .env.local file (git-ignored) to store sensitive or environment-specific settings. Create one in the root directory:
```bash
  cp .env.local
```
Edit `.env.local` and set your variables:
```
# Base URL for your API (used in fetch calls)
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
```

## Development

Start the development server with Turbopack:
```bash
    npm run dev
```
Open http://localhost:3000 in your browser. Hot-reload will reflect changes instantly.

## Production

Build and start the optimized production server:
```bash
  npm run build
  npm start
```