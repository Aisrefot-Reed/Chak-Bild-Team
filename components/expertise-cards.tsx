import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Server, GitBranch, TestTube } from "lucide-react"

export function ExpertiseCards() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Complementary Expertise</h2>
          <p className="text-pretty text-lg text-muted-foreground">Two specialists, one powerful team</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Henry - QA Engineer & DevOps */}
          <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <CardHeader>
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-3">
                  <TestTube className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">QA Engineer & DevOps</CardTitle>
              </div>
              <CardDescription className="text-base">Co-founder, CTO</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="mb-3 font-semibold">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">
                    <TestTube className="mr-1 h-3 w-3" />
                    QA Engineering
                  </Badge>
                  <Badge variant="secondary">AI/LLM Integration</Badge>
                  <Badge variant="secondary">CI/CD Pipelines</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Load Testing</Badge>
                  <Badge variant="secondary">Cloud Infrastructure</Badge>
                  <Badge variant="secondary">Automation</Badge>
                  <Badge variant="secondary">E2E Testing</Badge>
                </div>
              </div>

              <div>
                <h4 className="mb-3 font-semibold">Experience</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>QA Engineer and fullstack developer at a product startup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>AI/LLM integration and prompt engineering in production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>CI/CD automation, containerization, and cloud deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Freelance on Kwork and Profiru, technical articles on Habr</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Partner - Backend Developer */}
          <Card className="group relative overflow-hidden border-2 transition-all hover:border-secondary hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <CardHeader>
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-secondary/10 p-3">
                  <Code className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Backend Developer</CardTitle>
              </div>
              <CardDescription className="text-base">Co-founder</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="mb-3 font-semibold">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">
                    <Server className="mr-1 h-3 w-3" />
                    Backend Architecture
                  </Badge>
                  <Badge variant="secondary">API Development</Badge>
                  <Badge variant="secondary">
                    <Database className="mr-1 h-3 w-3" />
                    Database Design
                  </Badge>
                  <Badge variant="secondary">GitHub Integrations</Badge>
                  <Badge variant="secondary">Infrastructure</Badge>
                  <Badge variant="secondary">
                    <GitBranch className="mr-1 h-3 w-3" />
                    CI/CD Pipelines
                  </Badge>
                </div>
              </div>

              <div>
                <h4 className="mb-3 font-semibold">Experience</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span>Backend and infrastructure for Chak Bild products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span>API integrations and database architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span>GitHub Action development and deployment pipelines</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
