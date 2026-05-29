"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import type { ProjectStatus } from "@/lib/projects"
import { projectFormSchema } from "@/lib/validations/project"
import { ZodError } from "zod"

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

function parseList(value: FormDataEntryValue | null): string[] {
  if (!value) return []
  return String(value)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
}

function emptyToNull(value: FormDataEntryValue | null): string | null {
  const s = value ? String(value).trim() : ""
  return s.length > 0 ? s : null
}

async function requireUser() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect("/auth/login")
  return supabase
}

export async function saveProject(formData: FormData) {
  const supabase = await requireUser()

  // Convert FormData to object
  const rawData = {
    id: formData.get("id"),
    title: formData.get("title"),
    slug: formData.get("slug"),
    description: formData.get("description"),
    long_description: formData.get("long_description"),
    status: formData.get("status"),
    cover_image: formData.get("cover_image"),
    screenshots: formData.get("screenshots"),
    tags: formData.get("tags"),
    tech_stack: formData.get("tech_stack"),
    live_url: formData.get("live_url"),
    github_url: formData.get("github_url"),
    figma_url: formData.get("figma_url"),
    sort_order: formData.get("sort_order"),
  }

  // Validate with Zod
  try {
    const validated = projectFormSchema.parse(rawData)

    const id = emptyToNull(validated.id ?? null)
    const title = validated.title.trim()
    if (!title) throw new Error("Title is required")

    const providedSlug = emptyToNull(validated.slug ?? null)
    const slug = slugify(providedSlug ?? title)

    const payload = {
      title,
      slug,
      description: emptyToNull(validated.description ?? null),
      long_description: emptyToNull(validated.long_description ?? null),
      status: (validated.status as ProjectStatus) || "idea",
      cover_image: emptyToNull(validated.cover_image ?? null),
      screenshots: parseList(validated.screenshots ?? null),
      tags: parseList(validated.tags ?? null),
      tech_stack: parseList(validated.tech_stack ?? null),
      live_url: emptyToNull(validated.live_url ?? null),
      github_url: emptyToNull(validated.github_url ?? null),
      figma_url: emptyToNull(validated.figma_url ?? null),
      sort_order: Number(validated.sort_order ?? 0) || 0,
    }

    if (id) {
      const { error } = await supabase.from("projects").update(payload).eq("id", id)
      if (error) throw new Error(error.message)
    } else {
      const { error } = await supabase.from("projects").insert(payload)
      if (error) throw new Error(error.message)
    }

    revalidatePath("/projects")
    revalidatePath("/admin/projects")
    redirect("/admin/projects")
  } catch (error) {
    if (error instanceof ZodError) {
      const firstError = error.errors[0]
      throw new Error(`Validation error: ${firstError.path.join(".")} - ${firstError.message}`)
    }
    throw error
  }
}

export async function deleteProject(formData: FormData) {
  const supabase = await requireUser()
  const id = String(formData.get("id") ?? "")
  if (!id) throw new Error("Missing project id")

  const { error } = await supabase.from("projects").delete().eq("id", id)
  if (error) throw new Error(error.message)

  revalidatePath("/projects")
  revalidatePath("/admin/projects")
}

export async function updateProjectStatus(id: string, status: ProjectStatus) {
  const supabase = await requireUser()
  const { error } = await supabase.from("projects").update({ status }).eq("id", id)
  if (error) throw new Error(error.message)

  revalidatePath("/projects")
  revalidatePath("/admin/projects")
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect("/auth/login")
}
