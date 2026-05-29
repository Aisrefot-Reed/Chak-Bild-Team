import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { ProjectsView } from "@/components/projects/projects-view"
import { Button } from "@/components/ui/button"
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription } from "@/components/ui/empty"
import type { Project } from "@/lib/projects"
import { ArrowLeft, Settings } from "lucide-react"

export const metadata = {
  title: "Projects | Chak Bild",
  description: "The Chak Bild project board — from idea to shipped. Track what we're building across our DevSecOps toolkit.",
}

export default async function ProjectsPage() {
  const supabase = await createClient()
  const { data } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false })

  const projects = (data ?? []) as Project[]

  return (
    <main className="min-h-screen px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>

        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Project Board</h1>
            <p className="mt-2 text-pretty text-lg text-muted-foreground">
              Everything we&apos;re building — from early ideas to shipped tools.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/admin/projects">
              <Settings className="mr-2 h-4 w-4" />
              Manage
            </Link>
          </Button>
        </div>

        {projects.length === 0 ? (
          <Empty>
            <EmptyHeader>
              <EmptyTitle>No projects yet</EmptyTitle>
              <EmptyDescription>Projects added in the admin panel will show up here.</EmptyDescription>
            </EmptyHeader>
          </Empty>
        ) : (
          <ProjectsView projects={projects} />
        )}
      </div>
    </main>
  )
}
