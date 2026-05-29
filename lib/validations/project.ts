import { z } from "zod"
import type { ProjectStatus } from "../projects"

export const projectSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(1, "Title is required").max(200, "Title is too long"),
  slug: z.string().min(1, "Slug is required").max(200, "Slug is too long"),
  description: z.string().max(500, "Description is too long").nullable(),
  long_description: z.string().max(5000, "Long description is too long").nullable(),
  status: z.enum(["idea", "backlog", "in_progress", "review", "done", "archived"]),
  cover_image: z.string().url("Invalid URL").nullable(),
  screenshots: z.array(z.string().url("Invalid URL")),
  tags: z.array(z.string()),
  tech_stack: z.array(z.string()),
  live_url: z.string().url("Invalid URL").nullable(),
  github_url: z.string().url("Invalid URL").nullable(),
  figma_url: z.string().url("Invalid URL").nullable(),
  sort_order: z.number().int().min(0),
})

export type ProjectInput = z.infer<typeof projectSchema>

export const projectFormSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  slug: z.string().optional(),
  description: z.string().optional(),
  long_description: z.string().optional(),
  status: z.string().default("idea"),
  cover_image: z.string().optional(),
  screenshots: z.string().optional(), // comma-separated
  tags: z.string().optional(), // comma-separated
  tech_stack: z.string().optional(), // comma-separated
  live_url: z.string().optional(),
  github_url: z.string().optional(),
  figma_url: z.string().optional(),
  sort_order: z.string().optional(),
})
