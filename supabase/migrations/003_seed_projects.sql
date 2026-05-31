-- Seed initial projects into the database so they appear on the kanban board.
-- Run this in Supabase SQL Editor after migration 002.
-- Safe to re-run — skips existing slugs.

insert into public.projects (title, slug, description, long_description, status, tags, tech_stack, github_url, sort_order)
select 'SecureCI', 'secureci',
  'Automated security scanner for Pull Requests',
  'Automated security scanner for Pull Requests. Runs SAST analysis, dependency CVE scanning, AI-powered code review, and OWASP checklist in parallel. Posts a structured report as a PR comment within 60 seconds.',
  'paused',
  '{Security, "GitHub Action", SAST, "AI Review", OWASP}',
  '{TypeScript, "Node.js", Semgrep, "Claude API", "GitHub Actions", "Next.js"}',
  null,
  0
where not exists (select 1 from public.projects where slug = 'secureci');

insert into public.projects (title, slug, description, long_description, status, tags, tech_stack, github_url, sort_order)
select 'ChakLoad-CLI', 'chakload-cli',
  'Load testing tool for web apps and Telegram bots',
  'Advanced CLI tool for load testing web applications and Telegram bots. Supports multiple frameworks including simple HTTP and K6. The only tool with native Telegram bot load testing support.',
  'paused',
  '{"CLI", Python, "Load Testing", K6, Telegram}',
  '{Python, K6, HTTP, "Telegram API"}',
  'https://github.com/Aisrefot-Reed/ChakLoad-CLI',
  1
where not exists (select 1 from public.projects where slug = 'chakload-cli');
