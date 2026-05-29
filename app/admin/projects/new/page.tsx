import Link from "next/link"
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
import { PROJECT_STATUSES, statusLabel } from "@/lib/projects"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "New Project | Admin",
  description: "Create a new project",
}

export default function NewProjectPage() {
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
            <CardTitle className="text-2xl">Create New Project</CardTitle>
            <CardDescription>Add a new project to the board</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={saveProject} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">
                  Title <span className="text-destructive">*</span>
                </Label>
                <Input id="title" name="title" required placeholder="Project name" />
              </div>

              {/* Slug */}
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  name="slug"
                  placeholder="project-slug (auto-generated if empty)"
                />
                <p className="text-xs text-muted-foreground">
                  Leave empty to auto-generate from title
                </p>
              </div>

              {/* Status */}
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select name="status" defaultValue="idea">
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
                />
              </div>

              {/* Cover Image */}
              <div className="space-y-2">
                <Label>Cover Image</Label>
                <ImageUploader name="cover_image" />
              </div>

              {/* Screenshots */}
              <div className="space-y-2">
                <Label>Screenshots</Label>
                <ImageUploader name="screenshots" multiple />
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  name="tags"
                  placeholder="DevSecOps, Security, Open Source"
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
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="github_url">GitHub URL</Label>
                  <Input
                    id="github_url"
                    name="github_url"
                    type="url"
                    placeholder="https://github.com/..."
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
                />
              </div>

              {/* Sort Order */}
              <div className="space-y-2">
                <Label htmlFor="sort_order">Sort Order</Label>
                <Input
                  id="sort_order"
                  name="sort_order"
                  type="number"
                  defaultValue={0}
                  placeholder="0"
                />
                <p className="text-xs text-muted-foreground">
                  Lower numbers appear first within each status column
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Button type="submit" className="min-w-[120px]">
                  Create Project
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
