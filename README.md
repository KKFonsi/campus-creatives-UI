# PUP: Campus Creatives

PUP: Campus Creatives is a responsive, interface-only React prototype for an HCI final project. It presents a campus creative portfolio platform where PUP students can discover works, submit creative projects, manage a creator profile, and participate in events, while moderators can review submissions, handle reports, and manage featured content.

This project is built for a live classroom demonstration. It does not include a backend, database, real authentication, real uploads, or production moderation logic.

## Project Status

The prototype connects previously independent Replit-generated screen components into a navigable demo experience with:

- Demo Launcher for selecting display mode and role
- Desktop and mobile Student flows
- Desktop and mobile Moderator flows
- Public landing, login, register, identity verification, and onboarding flow
- Preserved component preview routes
- Local PUP-related imagery and documented asset sources

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Radix UI packages
- pnpm workspaces
- Custom lightweight route renderer

React Router was intentionally not added. The prototype uses a custom route map and renderer to preserve the original component preview behavior while supporting presentation routes.

## Repository Structure

```text
artifacts/mockup-sandbox
+-- src
|   +-- app
|   |   +-- demo
|   |   +-- moderator
|   |   +-- public
|   |   +-- router
|   |   +-- routes
|   |   +-- student
|   +-- assets
|   +-- components/mockups/pup-campus-creatives
+-- public
+-- vite.config.ts
+-- package.json
```

Key files:

- `artifacts/mockup-sandbox/src/app/router/AppRouter.tsx`
- `artifacts/mockup-sandbox/src/app/routes/routePaths.ts`
- `artifacts/mockup-sandbox/src/app/demo/DemoLauncher.tsx`
- `artifacts/mockup-sandbox/src/app/demo/DemoViewport.tsx`
- `artifacts/mockup-sandbox/src/app/student/studentScreenMap.tsx`
- `artifacts/mockup-sandbox/src/app/moderator/moderatorScreenMap.tsx`
- `artifacts/mockup-sandbox/src/assets/ASSET_SOURCES.md`

## Getting Started

Use `pnpm`. Do not use `npm`.

Install dependencies:

```bash
corepack pnpm install
```

Run the mockup sandbox locally:

```bash
PORT=5173 BASE_PATH=/ corepack pnpm --filter @workspace/mockup-sandbox run dev
```

On Windows PowerShell:

```powershell
$env:PORT="5173"
$env:BASE_PATH="/"
corepack pnpm --filter @workspace/mockup-sandbox run dev
```

Open:

```text
http://localhost:5173/demo
```

## Demo Launcher

The first screen is the Demo Launcher.

Selection flow:

```text
Step 1: Choose Display Mode
+-- Desktop
+-- Mobile

Step 2: Choose Role
+-- Student
+-- Moderator
```

Supported combinations:

- Desktop + Student
- Desktop + Moderator
- Mobile + Student
- Mobile + Moderator

Mobile mode is intentionally controlled by the selected demo mode, not browser width. This makes the prototype predictable during classroom projection.

## Main Routes

### Demo Routes

```text
/demo
/demo/desktop/student
/demo/mobile/student
/demo/desktop/moderator
/demo/mobile/moderator
```

### Public Flow

```text
/landing
/login
/register
/identity-verification
/onboarding
/explore
```

Mock flow:

```text
Landing -> Login -> Student Home
Landing -> Register -> Proof of PUP Identity -> Onboarding -> Student Home
```

### Student Routes

```text
/student/home
/student/explore
/student/gallery
/student/events
/student/spotlight
/student/submit
/student/notifications
/student/profile
```

Additional connected Student flows include search, work detail, college directory, college showcase, exhibition detail, event detail, event entry, creator profile, portfolio management, saved works, my submissions, revision screens, and submission confirmation.

### Moderator Routes

```text
/moderator/dashboard
/moderator/pending
/moderator/review/:id
/moderator/reports
/moderator/featured
/moderator/official-content
/moderator/history
```

Moderator actions are mocked. Approval, revision, rejection, reporting, and featuring interactions are presentation-only.

### Preview Routes

Original component preview behavior is preserved:

```text
/preview/pup-campus-creatives/LandingDesktop
```

## Features

- Presentation-ready Demo Launcher
- Explicit desktop/mobile mode selection
- Student navigation and discovery flows
- Moderator dashboard and review flows
- Mock public registration and onboarding
- Proof of PUP Identity mock step
- PUP email domain validation
- Creator Space grouping
- Submission workflow
- Reels-style Spotlight desktop layout
- Mobile presentation support
- Local PUP-related assets
- Asset source documentation

## Important Notes

This is an HCI prototype, not a production app.

The following are mocked:

- Login and registration
- PUP identity verification
- Uploads and file processing
- Likes, saves, comments, and shares
- Submission review decisions
- Reports and moderation actions
- Any persistence beyond local/session state

## Validation

Run typecheck:

```bash
corepack pnpm --filter @workspace/mockup-sandbox run typecheck
```

Run build:

```bash
PORT=5173 BASE_PATH=/ corepack pnpm --filter @workspace/mockup-sandbox run build
```

On Windows PowerShell:

```powershell
$env:PORT="5173"
$env:BASE_PATH="/"
corepack pnpm --filter @workspace/mockup-sandbox run build
```

## Known Issue

In the current local Codex sandbox, Vite build/runtime may fail before bundling with:

```text
Cannot read directory "../../../../..": Access is denied.
Could not resolve "...artifacts\mockup-sandbox\vite.config.ts"
```

TypeScript typechecking passes, but this Vite/esbuild access issue can block build/runtime validation in the sandboxed environment.

## Asset Documentation

PUP and college imagery is stored locally and documented in:

```text
artifacts/mockup-sandbox/src/assets/ASSET_SOURCES.md
```

Runtime copies are available under:

```text
artifacts/mockup-sandbox/public/images
artifacts/mockup-sandbox/public/__mockup/images
```

Some college images are representative PUP campus images rather than verified college-specific photos. This is documented in the asset source file.

## Project Purpose

PUP: Campus Creatives was created to demonstrate HCI concepts through a realistic campus-centered creative platform:

- role-based navigation
- responsive interface variants
- student-centered discovery
- creator profile management
- submission review workflows
- moderation workflows
- presentation-ready interaction paths

The main goal is to support a clear live demo, not to ship a production system.
