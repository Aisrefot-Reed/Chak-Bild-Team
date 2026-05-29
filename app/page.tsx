import { Hero } from "@/components/hero"
import { ExpertiseCards } from "@/components/expertise-cards"
import { ProjectShowcase } from "@/components/project-showcase"
import { CollaborationApproach } from "@/components/collaboration-approach"
import { ServicesOffered } from "@/components/services-offered"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ExpertiseCards />
      <ProjectShowcase />
      <CollaborationApproach />
      <ServicesOffered />
      <ContactSection />
    </main>
  )
}
