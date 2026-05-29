# Chak Bild - Team Showcase Page

A modern landing page for the Chak Bild team, built with Next.js 16, Supabase, and shadcn/ui.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI**: shadcn/ui + Tailwind CSS 4
- **Backend**: Supabase (Postgres + Auth + Storage)
- **Validation**: Zod

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- A Supabase project (free tier works)

### Setup

1. Clone the repository:
```bash
git clone <repo-url>
cd team-showcase-page
```

2. Install dependencies:
```bash
pnpm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Fill in your Supabase credentials in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

5. Run database migrations:
   - Open your Supabase SQL Editor
   - Execute the SQL from `supabase/migrations/001_create_projects.sql`
   - This creates the `projects` table, storage bucket, and RLS policies

6. Run the development server:
```bash
pnpm dev
```

7. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── admin/projects/     # Admin panel (protected)
│   ├── auth/               # Auth pages (login, signup)
│   ├── projects/           # Public project board & details
│   ├── globals.css         # Tailwind + theme variables
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── admin/              # Admin components
│   ├── projects/           # Project board components
│   ├── ui/                 # shadcn/ui components
│   ├── header.tsx          # Navigation header
│   └── *.tsx               # Landing page sections
├── lib/
│   ├── supabase/           # Supabase clients
│   ├── validations/        # Zod schemas
│   ├── projects.ts         # Project types & constants
│   └── utils.ts            # Utility functions
├── supabase/migrations/    # Database migrations
└── public/                 # Static assets
```

## Features

- **Public Pages**: Landing page with hero, expertise, projects showcase
- **Project Board**: Kanban & table views with all statuses
- **Admin Panel**: Full CRUD, drag & drop, image uploads
- **Authentication**: Supabase Auth (email/password)
- **Theme**: Light/dark mode support

## Deployment

Deploy to Vercel:

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy

## Admin Access

1. Go to `/auth/sign-up` and create an account
2. Go to `/auth/login` to sign in
3. Access `/admin/projects` to manage the board

> **Note**: Any authenticated user is an admin. In production, add proper role-based access control if needed.
