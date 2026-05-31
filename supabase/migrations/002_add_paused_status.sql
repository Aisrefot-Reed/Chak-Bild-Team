-- Add "paused" status to the existing projects table
-- Run this in Supabase SQL Editor after the main migration.

-- Drop old constraint and add updated one
alter table public.projects drop constraint if exists projects_status_check;
alter table public.projects add constraint projects_status_check
  check (status in ('idea', 'backlog', 'in_progress', 'paused', 'review', 'done', 'archived'));
