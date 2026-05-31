import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Shield, Bug, Bot } from "lucide-react"

export function ServicesOffered() {
  const services = [
    {
      icon: Shield,
      title: "Security Automation",
      description: "Automated security tooling that integrates into your existing development workflow without friction.",
      features: [
        "SAST scanning and vulnerability detection in CI/CD",
        "Dependency CVE monitoring and alerting",
        "AI-powered security code review",
        "Custom OWASP security rules for your stack",
      ],
    },
    {
      icon: Bug,
      title: "QA Engineering & Testing",
      description: "Comprehensive quality assurance from load testing to end-to-end test automation.",
      features: [
        "Load testing for web applications and APIs",
        "Telegram bot performance testing",
        "Test case design and QA process setup",
        "AI/LLM output validation and testing",
      ],
    },
    {
      icon: Bot,
      title: "AI Integration Development",
      description: "Production-ready AI and LLM integrations built with reliability and security in mind.",
      features: [
        "Claude API and OpenAI integrations",
        "AI-powered workflow automation",
        "Prompt engineering and output validation",
        "Secure handling of AI model credentials",
      ],
    },
  ]

  return (
    <section className="bg-muted/30 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Services We Offer</h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Comprehensive solutions from security to deployment
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
