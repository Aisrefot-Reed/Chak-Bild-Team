import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Code, Database, Server, GitBranch, CheckCircle } from "lucide-react"

export function ExpertiseCards() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Complementary Expertise</h2>
          <p className="text-pretty text-lg text-muted-foreground">Two specialists, one powerful team</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Henry - QA Engineer & Security */}
          <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <CardHeader>
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">QA Engineer & Security</CardTitle>
              </div>
              <CardDescription className="text-base">Co-founder, CTO</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="mb-3 font-semibold">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    QA Engineering
                  </Badge>
                  <Badge variant="secondary">AI/LLM Integration</Badge>
                  <Badge variant="secondary">DevSecOps</Badge>
                  <Badge variant="secondary">SAST Tools</Badge>
                  <Badge variant="secondary">AppArmor</Badge>
                  <Badge variant="secondary">Kubernetes Security</Badge>
                  <Badge variant="secondary">OWASP ZAP</Badge>
                  <Badge variant="secondary">CTF / Hack The Box</Badge>
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
                    <span>AI/LLM integration experience in production environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>DevSecOps: container security, CI/CD hardening, security scanning</span>
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
