"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <header className="bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="flex flex-col items-start gap-6 animate-in fade-in-50 duration-700">
          <p className="uppercase tracking-widest text-sm text-muted-foreground">Serave</p>
          <h1 className="text-pretty text-4xl md:text-6xl font-semibold leading-tight">
            Serave — Where Every Scent Tells a Story
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-muted-foreground">
            Luxurious, minimal, and timeless fragrances crafted with intention.
          </p>
          <div>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:opacity-90">
              <Link href="#collection">Shop Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
