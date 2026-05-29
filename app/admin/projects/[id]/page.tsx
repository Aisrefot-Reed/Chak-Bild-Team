import Link from "next/link"
import { notFound } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { saveProject } from "@/app/admin/projects/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageUploader } from "@/components/admin/image-uploader"
import { PROJECT_STATUSES, statusLabel, type Project } from "@/lib/projects"
import { ArrowLeft } from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data } = await supabase.from("projects").select("title").eq("id", id).single()
  if (!data) return { title: "Project not found | Admin" }
  return {
    title: `Edit ${data.title} | Admin`,
    description: `Edit project: ${data.title}`,
  }
}

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data } = await supabase.from("projects").select("*").eq("id", id).single()

  if (!data) notFound()

  const project = data as Project

  return (
    <main className="min-h-screen px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <Link
            href="/admin/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to admin
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Edit Project</CardTitle>
            <CardDescription>Update project details</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={saveProject} className="space-y-6">
              {/* Hidden ID field */}
              <input type="hidden" name="id" value={project.id} />

              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">
                  Title <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="title"
                  name="title"
                  required
                  placeholder="Project name"
                  defaultValue={project.title}
                />
              </div>

              {/* Slug */}
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  name="slug"
                  placeholder="project-slug"
                  defaultValue={project.slug}
                />
                <p className="text-xs text-muted-foreground">
                  Leave empty to auto-generate from title
                </p>
              </div>

              {/* Status */}
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select name="status" defaultValue={project.status}>
                  <SelectTrigger id="status">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {PROJECT_STATUSES.map((status) => (
                      <SelectItem key={status} value={status}>
                        {statusLabel(status)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Short Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Short Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Brief description for cards"
                  rows={2}
                  defaultValue={project.description ?? ""}
                />
              </div>

              {/* Long Description */}
              <div className="space-y-2">
                <Label htmlFor="long_description">Full Description</Label>
                <Textarea
                  id="long_description"
                  name="long_description"
                  placeholder="Detailed description for project page"
                  rows={6}
                  defaultValue={project.long_description ?? ""}
                />
              </div>

              {/* Cover Image */}
              <div className="space-y-2">
                <Label>Cover Image</Label>
                <ImageUploader name="cover_image" defaultValue={project.cover_image ?? undefined} />
              </div>

              {/* Screenshots */}
              <div className="space-y-2">
                <Label>Screenshots</Label>
                <ImageUploader name="screenshots" multiple defaultValue={project.screenshots} />
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  name="tags"
                  placeholder="DevSecOps, Security, Open Source"
                  defaultValue={project.tags.join(", ")}
                />
                <p className="text-xs text-muted-foreground">Comma-separated list</p>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <Label htmlFor="tech_stack">Tech Stack</Label>
                <Input
                  id="tech_stack"
                  name="tech_stack"
                  placeholder="TypeScript, Node.js, Next.js"
                  defaultValue={project.tech_stack.join(", ")}
                />
                <p className="text-xs text-muted-foreground">Comma-separated list</p>
              </div>

              {/* URLs */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="live_url">Live URL</Label>
                  <Input
                    id="live_url"
                    name="live_url"
                    type="url"
                    placeholder="https://example.com"
                    defaultValue={project.live_url ?? ""}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="github_url">GitHub URL</Label>
                  <Input
                    id="github_url"
                    name="github_url"
                    type="url"
                    placeholder="https://github.com/..."
                    defaultValue={project.github_url ?? ""}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="figma_url">Figma URL</Label>
                <Input
                  id="figma_url"
                  name="figma_url"
                  type="url"
                  placeholder="https://figma.com/..."
                  defaultValue={project.figma_url ?? ""}
                />
              </div>

              {/* Sort Order */}
              <div className="space-y-2">
                <Label htmlFor="sort_order">Sort Order</Label>
                <Input
                  id="sort_order"
                  name="sort_order"
                  type="number"
                  defaultValue={project.sort_order}
                  placeholder="0"
                />
                <p className="text-xs text-muted-foreground">
                  Lower numbers appear first within each status column
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Button type="submit" className="min-w-[120px]">
                  Save Changes
                </Button>
                <Button type="button" variant="outline" asChild>
                  <Link href="/admin/projects">Cancel</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
