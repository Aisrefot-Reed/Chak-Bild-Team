import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Wrench, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Wrench className="h-5 w-5 text-primary" />
          <span>Chak Bild</span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="hidden sm:inline-flex" asChild>
            <Link href="/admin/projects">Admin</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
