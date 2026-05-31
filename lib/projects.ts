export type ProjectStatus = "idea" | "backlog" | "in_progress" | "review" | "done" | "archived" | "paused"

export interface Project {
  id: string
  title: string
  slug: string
  description: string | null
  long_description: string | null
  status: ProjectStatus
  cover_image: string | null
  screenshots: string[]
  tags: string[]
  tech_stack: string[]
  live_url: string | null
  github_url: string | null
  figma_url: string | null
  sort_order: number
  created_at: string
  updated_at: string
}

export const PROJECT_STATUSES: ProjectStatus[] = [
  "idea",
  "backlog",
  "in_progress",
  "paused",
  "review",
  "done",
  "archived",
]

interface StatusMeta {
  label: string
  /** Tailwind classes for badges / column accents */
  badge: string
  dot: string
}

export const STATUS_META: Record<ProjectStatus, StatusMeta> = {
  idea: {
    label: "Idea",
    badge: "bg-muted text-muted-foreground border-border",
    dot: "bg-muted-foreground",
  },
  backlog: {
    label: "Backlog",
    badge: "bg-secondary/10 text-secondary border-secondary/30",
    dot: "bg-secondary",
  },
  in_progress: {
    label: "In Progress",
    badge: "bg-amber-500/10 text-amber-600 border-amber-500/30",
    dot: "bg-amber-500",
  },
  paused: {
    label: "Paused",
    badge: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    dot: "bg-blue-500",
  },
  review: {
    label: "Review",
    badge: "bg-primary/10 text-primary border-primary/30",
    dot: "bg-primary",
  },
  done: {
    label: "Done",
    badge: "bg-green-500/10 text-green-600 border-green-500/30",
    dot: "bg-green-500",
  },
  archived: {
    label: "Archived",
    badge: "bg-muted text-muted-foreground border-border",
    dot: "bg-muted-foreground/60",
  },
}

export function statusLabel(status: ProjectStatus): string {
  return STATUS_META[status]?.label ?? status
}
