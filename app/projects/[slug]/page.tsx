import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { STATUS_META, type Project } from "@/lib/projects"
import { ArrowLeft, Github, ExternalLink, Figma } from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const supabase = await createClient()
  const { data } = await supabase.from("projects").select("title, description").eq("slug", slug).single()
  if (!data) return { title: "Project not found | Chak Bild" }
  return {
    title: `${data.title} | Chak Bild`,
    description: data.description ?? undefined,
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const supabase = await createClient()
  const { data } = await supabase.from("projects").select("*").eq("slug", slug).single()

  if (!data) notFound()

  const project = data as Project
  const meta = STATUS_META[project.status]

  return (
    <main className="min-h-screen px-6 py-16 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to board
        </Link>

        <div className="mb-3 flex items-center gap-3">
          <Badge variant="outline" className={meta.badge}>
            {meta.label}
          </Badge>
        </div>

        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>
        {project.description ? (
          <p className="mt-3 text-pretty text-lg text-muted-foreground">{project.description}</p>
        ) : null}

        {(project.github_url || project.live_url || project.figma_url) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.live_url ? (
              <Button asChild>
                <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit site
                </a>
              </Button>
            ) : null}
            {project.github_url ? (
              <Button variant="outline" asChild>
                <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            ) : null}
            {project.figma_url ? (
              <Button variant="outline" asChild>
                <a href={project.figma_url} target="_blank" rel="noopener noreferrer">
                  <Figma className="mr-2 h-4 w-4" />
                  Figma
                </a>
              </Button>
            ) : null}
          </div>
        )}

        {project.cover_image ? (
          <div className="relative mt-10 aspect-video overflow-hidden rounded-xl border bg-muted">
            <Image
              src={project.cover_image || "/placeholder.svg"}
              alt={`${project.title} cover`}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>
        ) : null}

        {project.long_description ? (
          <div className="mt-10">
            <h2 className="mb-3 text-xl font-semibold">About</h2>
            <p className="whitespace-pre-line leading-relaxed text-muted-foreground">{project.long_description}</p>
          </div>
        ) : null}

        {project.tech_stack.length > 0 ? (
          <div className="mt-10">
            <h2 className="mb-3 text-xl font-semibold">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech_stack.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ) : null}

        {project.tags.length > 0 ? (
          <div className="mt-8">
            <h2 className="mb-3 text-xl font-semibold">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ) : null}

        {project.screenshots.length > 0 ? (
          <div className="mt-10">
            <h2 className="mb-4 text-xl font-semibold">Screenshots</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.screenshots.map((src, i) => (
                <div key={src} className="relative aspect-video overflow-hidden rounded-lg border bg-muted">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 360px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </article>
    </main>
  )
}
