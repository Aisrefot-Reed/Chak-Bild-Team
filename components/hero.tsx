import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Terminal, Wrench, Brain } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 flex items-center justify-center gap-2">
          <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary">
            <Brain className="mr-1 h-3 w-3" />
            AI/LLM Projects
          </Badge>
          <Badge variant="outline" className="border-secondary/50 bg-secondary/10 text-secondary">
            <Terminal className="mr-1 h-3 w-3" />
            ChakLoad-CLI — open source
          </Badge>
        </div>

        <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">Chak Bild</h1>

        <p className="mb-4 text-pretty text-xl text-muted-foreground sm:text-2xl">
          AI, DevOps and QA testing — from idea to production
        </p>

        <p className="mb-10 text-pretty text-lg text-muted-foreground">
          Two engineers building AI-powered tools, DevOps pipelines, and QA infrastructure for modern teams
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="min-w-[200px]" asChild>
            <a href="https://github.com/Aisrefot-Reed/ChakLoad-CLI" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </Button>
          <Button size="lg" variant="outline" className="min-w-[200px] bg-transparent">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
