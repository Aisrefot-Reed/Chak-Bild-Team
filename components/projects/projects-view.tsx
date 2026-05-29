"use client"

import { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { KanbanBoard } from "@/components/projects/kanban-board"
import { ProjectsTable } from "@/components/projects/projects-table"
import type { Project } from "@/lib/projects"
import { Columns3, Table2 } from "lucide-react"

export function ProjectsView({ projects }: { projects: Project[] }) {
  const [view, setView] = useState<"board" | "table">("board")

  return (
    <div>
      <div className="mb-6 flex justify-end">
        <ToggleGroup
          type="single"
          value={view}
          onValueChange={(v) => {
            if (v) setView(v as "board" | "table")
          }}
          variant="outline"
        >
          <ToggleGroupItem value="board" aria-label="Board view">
            <Columns3 className="mr-2 h-4 w-4" />
            Board
          </ToggleGroupItem>
          <ToggleGroupItem value="table" aria-label="Table view">
            <Table2 className="mr-2 h-4 w-4" />
            Table
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {view === "board" ? <KanbanBoard projects={projects} /> : <ProjectsTable projects={projects} />}
    </div>
  )
}
