import { PROJECT_STATUSES, STATUS_META, type Project, type ProjectStatus } from "@/lib/projects"
import { ProjectCard } from "@/components/projects/project-card"

export function KanbanBoard({ projects }: { projects: Project[] }) {
  const byStatus = (status: ProjectStatus) =>
    projects
      .filter((p) => p.status === status)
      .sort((a, b) => a.sort_order - b.sort_order)

  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {PROJECT_STATUSES.map((status) => {
        const meta = STATUS_META[status]
        const items = byStatus(status)
        return (
          <div key={status} className="flex w-72 shrink-0 flex-col rounded-lg bg-muted/40">
            <div className="flex items-center justify-between gap-2 border-b px-3 py-2.5">
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${meta.dot}`} />
                <span className="text-sm font-semibold">{meta.label}</span>
              </div>
              <span className="rounded-full bg-background px-2 py-0.5 text-xs text-muted-foreground">
                {items.length}
              </span>
            </div>
            <div className="flex flex-col gap-3 p-3">
              {items.length === 0 ? (
                <p className="py-6 text-center text-xs text-muted-foreground">No projects</p>
              ) : (
                items.map((project) => <ProjectCard key={project.id} project={project} />)
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
