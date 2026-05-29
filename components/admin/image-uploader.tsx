"use client"

import { useState } from "react"
import Image from "next/image"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { Upload, X } from "lucide-react"

interface ImageUploaderProps {
  /** Hidden input name that holds the resulting URL(s) */
  name: string
  multiple?: boolean
  defaultValue?: string | string[]
}

export function ImageUploader({ name, multiple = false, defaultValue }: ImageUploaderProps) {
  const initial =
    Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : []
  const [urls, setUrls] = useState<string[]>(initial)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return
    setUploading(true)
    setError(null)
    const supabase = createClient()
    const uploaded: string[] = []

    try {
      for (const file of Array.from(files)) {
        const ext = file.name.split(".").pop()
        const path = `${crypto.randomUUID()}.${ext}`
        const { error: upErr } = await supabase.storage.from("project-images").upload(path, file, {
          cacheControl: "3600",
          upsert: false,
        })
        if (upErr) throw upErr
        const { data } = supabase.storage.from("project-images").getPublicUrl(path)
        uploaded.push(data.publicUrl)
      }
      setUrls((prev) => (multiple ? [...prev, ...uploaded] : uploaded.slice(0, 1)))
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed")
    } finally {
      setUploading(false)
    }
  }

  const removeAt = (i: number) => setUrls((prev) => prev.filter((_, idx) => idx !== i))

  return (
    <div>
      {/* Serialize to a hidden field: single value or comma-separated list */}
      <input type="hidden" name={name} value={multiple ? urls.join(",") : (urls[0] ?? "")} />

      {urls.length > 0 ? (
        <div className="mb-3 flex flex-wrap gap-3">
          {urls.map((url, i) => (
            <div key={url} className="relative h-24 w-32 overflow-hidden rounded-md border bg-muted">
              <Image src={url || "/placeholder.svg"} alt="Uploaded preview" fill className="object-cover" sizes="128px" />
              <button
                type="button"
                onClick={() => removeAt(i)}
                className="absolute right-1 top-1 rounded-full bg-background/90 p-1 text-foreground shadow hover:bg-background"
                aria-label="Remove image"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      ) : null}

      <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-dashed px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground">
        {uploading ? <Spinner className="h-4 w-4" /> : <Upload className="h-4 w-4" />}
        {uploading ? "Uploading..." : multiple ? "Upload images" : "Upload image"}
        <input
          type="file"
          accept="image/*"
          multiple={multiple}
          className="sr-only"
          disabled={uploading}
          onChange={(e) => handleFiles(e.target.files)}
        />
      </label>

      {error ? <p className="mt-2 text-sm text-destructive">{error}</p> : null}
    </div>
  )
}
