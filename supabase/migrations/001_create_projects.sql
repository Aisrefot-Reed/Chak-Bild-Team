-- =============================================================
-- Chak Bild — Full Database Setup
-- Run this entire script in Supabase SQL Editor once.
-- Safe to re-run (idempotent — uses IF NOT EXISTS / OR REPLACE).
-- =============================================================

-- 1. Projects table
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  description text,
  long_description text,
  status text not null default 'idea'
    check (status in ('idea', 'backlog', 'in_progress', 'paused', 'review', 'done', 'archived')),
  cover_image text,
  screenshots text[] default '{}',
  tags text[] default '{}',
  tech_stack text[] default '{}',
  live_url text,
  github_url text,
  figma_url text,
  sort_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 2. Indexes for performance
create index if not exists projects_slug_idx on public.projects(slug);
create index if not exists projects_status_idx on public.projects(status);
create index if not exists projects_sort_order_idx on public.projects(sort_order);

-- 3. Row Level Security
alter table public.projects enable row level security;

-- Drop old policies first to avoid conflicts on re-run
drop policy if exists "Projects are viewable by everyone" on public.projects;
drop policy if exists "Authenticated users can insert projects" on public.projects;
drop policy if exists "Authenticated users can update projects" on public.projects;
drop policy if exists "Authenticated users can delete projects" on public.projects;

create policy "Projects are viewable by everyone"
  on public.projects for select
  using (true);

create policy "Authenticated users can insert projects"
  on public.projects for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update projects"
  on public.projects for update
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated users can delete projects"
  on public.projects for delete
  to authenticated
  using (true);

-- 4. Storage bucket for project images
insert into storage.buckets (id, name, public)
values ('project-images', 'project-images', true)
on conflict (id) do nothing;

-- Drop old storage policies to avoid conflicts on re-run
drop policy if exists "Project images are publicly accessible" on storage.objects;
drop policy if exists "Authenticated users can upload project images" on storage.objects;
drop policy if exists "Authenticated users can update project images" on storage.objects;
drop policy if exists "Authenticated users can delete project images" on storage.objects;

create policy "Project images are publicly accessible"
  on storage.objects for select
  using (bucket_id = 'project-images');

create policy "Authenticated users can upload project images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'project-images');

create policy "Authenticated users can update project images"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'project-images');

create policy "Authenticated users can delete project images"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'project-images');

-- 5. Auto-update updated_at on row change
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_updated_at on public.projects;
create trigger set_updated_at
  before update on public.projects
  for each row
  execute function public.handle_updated_at();
