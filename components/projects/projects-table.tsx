import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { STATUS_META, type Project } from "@/lib/projects"
import { Github, ExternalLink } from "lucide-react"

export function ProjectsTable({ projects }: { projects: Project[] }) {
  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden md:table-cell">Tags</TableHead>
            <TableHead className="hidden lg:table-cell">Tech</TableHead>
            <TableHead className="text-right">Links</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => {
            const meta = STATUS_META[project.status]
            return (
              <TableRow key={project.id}>
                <TableCell>
                  <Link href={`/projects/${project.slug}`} className="font-medium hover:text-primary">
                    {project.title}
                  </Link>
                  {project.description ? (
                    <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">{project.description}</p>
                  ) : null}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={meta.badge}>
                    {meta.label}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  <span className="text-sm text-muted-foreground">{project.tech_stack.slice(0, 3).join(", ")}</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-end gap-3 text-muted-foreground">
                    {project.github_url ? (
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="h-4 w-4 hover:text-foreground" />
                      </a>
                    ) : null}
                    {project.live_url ? (
                      <a href={project.live_url} target="_blank" rel="noopener noreferrer" aria-label="Live site">
                        <ExternalLink className="h-4 w-4 hover:text-foreground" />
                      </a>
                    ) : null}
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
