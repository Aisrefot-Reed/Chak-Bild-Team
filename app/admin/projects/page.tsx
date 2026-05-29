import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { AdminBoard } from "@/components/admin/admin-board"
import { Button } from "@/components/ui/button"
import { signOut } from "@/app/admin/projects/actions"
import type { Project } from "@/lib/projects"
import { Plus, LogOut, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Admin - Projects | Chak Bild",
  description: "Manage projects on the Chak Bild board",
}

export default async function AdminProjectsPage() {
  const supabase = await createClient()
  
  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Fetch all projects
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
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to public board
          </Link>
        </div>

        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Admin - Project Management
            </h1>
            <p className="mt-2 text-pretty text-lg text-muted-foreground">
              Drag & drop to change status, edit or delete projects
            </p>
            {user && (
              <p className="mt-1 text-sm text-muted-foreground">
                Logged in as: {user.email}
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <Button asChild>
              <Link href="/admin/projects/new">
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Link>
            </Button>
            <form action={signOut}>
              <Button type="submit" variant="outline">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </form>
          </div>
        </div>

        <AdminBoard initialProjects={projects} />
      </div>
    </main>
  )
}
