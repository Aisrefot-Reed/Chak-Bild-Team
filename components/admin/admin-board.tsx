"use client"

import { useState, useTransition } from "react"
import Link from "next/link"
import { PROJECT_STATUSES, STATUS_META, type Project, type ProjectStatus } from "@/lib/projects"
import { updateProjectStatus, deleteProject } from "@/app/admin/projects/actions"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2, GripVertical } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function AdminBoard({ initialProjects }: { initialProjects: Project[] }) {
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [draggingId, setDraggingId] = useState<string | null>(null)
  const [overStatus, setOverStatus] = useState<ProjectStatus | null>(null)
  const [, startTransition] = useTransition()

  const handleDrop = (status: ProjectStatus) => {
    setOverStatus(null)
    const id = draggingId
    setDraggingId(null)
    if (!id) return

    const current = projects.find((p) => p.id === id)
    if (!current || current.status === status) return

    // Optimistic update
    setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p)))
    startTransition(async () => {
      try {
        await updateProjectStatus(id, status)
      } catch {
        // Revert on failure
        setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, status: current.status } : p)))
      }
    })
  }

  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {PROJECT_STATUSES.map((status) => {
        const meta = STATUS_META[status]
        const items = projects
          .filter((p) => p.status === status)
          .sort((a, b) => a.sort_order - b.sort_order)

        return (
          <div
            key={status}
            onDragOver={(e) => {
              e.preventDefault()
              setOverStatus(status)
            }}
            onDragLeave={() => setOverStatus((s) => (s === status ? null : s))}
            onDrop={() => handleDrop(status)}
            className={`flex w-72 shrink-0 flex-col rounded-lg border bg-muted/40 transition-colors ${
              overStatus === status ? "border-primary bg-primary/5" : "border-transparent"
            }`}
          >
            <div className="flex items-center justify-between gap-2 border-b px-3 py-2.5">
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${meta.dot}`} />
                <span className="text-sm font-semibold">{meta.label}</span>
              </div>
              <span className="rounded-full bg-background px-2 py-0.5 text-xs text-muted-foreground">
                {items.length}
              </span>
            </div>

            <div className="flex min-h-24 flex-col gap-3 p-3">
              {items.map((project) => (
                <div
                  key={project.id}
                  draggable
                  onDragStart={() => setDraggingId(project.id)}
                  onDragEnd={() => {
                    setDraggingId(null)
                    setOverStatus(null)
                  }}
                  className={`group rounded-lg border bg-card p-3 shadow-sm transition-opacity ${
                    draggingId === project.id ? "opacity-50" : ""
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <GripVertical className="mt-0.5 h-4 w-4 shrink-0 cursor-grab text-muted-foreground" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium text-card-foreground">{project.title}</p>
                      {project.description ? (
                        <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{project.description}</p>
                      ) : null}
                      {project.tags.length > 0 ? (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {project.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-end gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
                      <Link href={`/admin/projects/${project.id}`} aria-label={`Edit ${project.title}`}>
                        <Pencil className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-destructive hover:text-destructive"
                          aria-label={`Delete ${project.title}`}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete {project.title}?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This permanently removes the project from the board. This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <form
                            action={async (fd) => {
                              await deleteProject(fd)
                              setProjects((prev) => prev.filter((p) => p.id !== project.id))
                            }}
                          >
                            <input type="hidden" name="id" value={project.id} />
                            <AlertDialogAction type="submit">Delete</AlertDialogAction>
                          </form>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              ))}
              {items.length === 0 ? (
                <p className="py-4 text-center text-xs text-muted-foreground">Drop here</p>
              ) : null}
            </div>
          </div>
        )
      })}
    </div>
  )
}
