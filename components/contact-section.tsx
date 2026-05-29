import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Card className="border-2 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <CardContent className="p-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Built for developers who ship fast and stay secure
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Available for consulting, security audits, and development partnerships
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="min-w-[180px]" asChild>
                <a href="mailto:henrytv2@outlook.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
              <Button size="lg" variant="outline" className="min-w-[180px] bg-transparent" asChild>
                <a href="https://github.com/Aisrefot-Reed" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a 
                href="https://www.linkedin.com/in/artem-derevyanchenko" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
                <span>Artem Derevyanchenko</span>
              </a>
              <a
                href="https://github.com/Aisrefot-Reed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Github className="h-4 w-4" />
                <span>Henry Vane</span>
              </a>
              <a
                href="mailto:henrytv2@outlook.com"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                <span>henrytv2@outlook.com</span>
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">Let&apos;s build technology that makes a difference</p>
        </div>
      </div>
    </section>
  )
}
