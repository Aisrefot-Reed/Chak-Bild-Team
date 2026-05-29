import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { STATUS_META, type Project } from "@/lib/projects"
import { Github, ExternalLink } from "lucide-react"

export function ProjectCard({ project }: { project: Project }) {
  const meta = STATUS_META[project.status]

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-lg border bg-card p-4 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
    >
      {project.cover_image ? (
        <div className="relative mb-3 aspect-video overflow-hidden rounded-md bg-muted">
          <Image
            src={project.cover_image || "/placeholder.svg"}
            alt={`${project.title} cover`}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      ) : null}

      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="font-semibold leading-tight text-card-foreground">{project.title}</h3>
        <Badge variant="outline" className={meta.badge}>
          {meta.label}
        </Badge>
      </div>

      {project.description ? (
        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
      ) : null}

      {project.tags.length > 0 ? (
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      ) : null}

      <div className="flex items-center gap-3 text-muted-foreground">
        {project.github_url ? <Github className="h-4 w-4" aria-label="Has GitHub repo" /> : null}
        {project.live_url ? <ExternalLink className="h-4 w-4" aria-label="Has live URL" /> : null}
      </div>
    </Link>
  )
}
