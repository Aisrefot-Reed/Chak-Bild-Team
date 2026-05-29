import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Github, Globe } from "lucide-react"

export function CollaborationApproach() {
  const approaches = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every feature ships with security scanning built in, not bolted on after.",
    },
    {
      icon: Zap,
      title: "Developer Experience",
      description: "Tools that integrate into existing workflows in minutes, not days.",
    },
    {
      icon: Github,
      title: "Open Source",
      description: "We build in the open. Our tools are auditable, forkable, and free to start.",
    },
    {
      icon: Globe,
      title: "Remote & Async",
      description: "Small team, fast decisions, no overhead.",
    },
  ]

  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">How We Work</h2>
          <p className="text-pretty text-lg text-muted-foreground">
            A proven process for delivering secure, innovative solutions
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {approaches.map((approach, index) => {
            const Icon = approach.icon
            return (
              <Card key={index} className="group relative overflow-hidden transition-all hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{approach.title}</h3>
                  <p className="text-sm text-muted-foreground">{approach.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
