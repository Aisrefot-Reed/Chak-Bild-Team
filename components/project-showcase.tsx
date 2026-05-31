import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Shield, Terminal, Pause } from "lucide-react"

export function ProjectShowcase() {
  return (
    <section className="bg-muted/30 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          <p className="text-pretty text-lg text-muted-foreground">Tools and projects we build</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* SecureCI Card */}
          <Card className="overflow-hidden border-2">
            <div className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 p-8">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <Shield className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-2xl font-bold">SecureCI</h3>
                  <p className="text-muted-foreground">GitHub Action + CLI</p>
                </div>
              </div>
            </div>

            <CardHeader>
              <div className="mb-2 flex flex-wrap gap-2">
                <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/30">
                  <Pause className="mr-1 h-3 w-3" />
                  Paused
                </Badge>
                <Badge variant="secondary">Security</Badge>
                <Badge variant="outline">GitHub Action</Badge>
              </div>
              <CardTitle className="text-xl">Automated Security Scanner</CardTitle>
              <CardDescription className="text-base">
                Automated security scanner for Pull Requests. Runs SAST analysis, dependency CVE scanning, AI-powered code review, and OWASP checklist in parallel. Posts a structured report as a PR comment within 60 seconds.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="mb-3 font-semibold">Key Features</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>SAST via Semgrep with OWASP Top 10 rules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Dependency CVE scanning via OSV.dev API</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>AI code analysis via Claude API</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Custom YAML security rules engine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>GitHub PR comment with severity table</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3 font-semibold">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Semgrep</Badge>
                  <Badge variant="outline">Claude API</Badge>
                  <Badge variant="outline">GitHub Actions</Badge>
                  <Badge variant="outline">Next.js</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ChakLoad-CLI Card */}
          <Card className="overflow-hidden border-2">
            <div className="relative bg-gradient-to-br from-secondary/10 via-primary/10 to-secondary/5 p-8">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <Terminal className="mx-auto mb-4 h-12 w-12 text-secondary" />
                  <h3 className="mb-2 text-2xl font-bold">ChakLoad-CLI</h3>
                  <p className="text-muted-foreground">CLI Tool</p>
                </div>
              </div>
            </div>

            <CardHeader>
              <div className="mb-2 flex flex-wrap gap-2">
                <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/30">
                  <Pause className="mr-1 h-3 w-3" />
                  Paused
                </Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="outline">Open Source</Badge>
              </div>
              <CardTitle className="text-xl">Load Testing Tool</CardTitle>
              <CardDescription className="text-base">
                Advanced CLI tool for load testing web applications and Telegram bots. Supports multiple frameworks including simple HTTP and K6. The only tool with native Telegram bot load testing support.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="mb-3 font-semibold">Key Features</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span>Load testing for web apps and REST APIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span>Native Telegram bot load testing (unique feature)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span>K6 and simple HTTP framework support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span>Flexible configuration and reporting</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3 font-semibold">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">K6</Badge>
                  <Badge variant="outline">HTTP</Badge>
                  <Badge variant="outline">Telegram API</Badge>
                </div>
              </div>

              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/Aisrefot-Reed/ChakLoad-CLI" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
