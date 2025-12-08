"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Nocturne Bloom",
    price: "$89",
    notes: "Jasmine • Sandalwood • Vanilla",
    img: "/elegant-perfume-bottle-on-beige-background.jpg",
  },
  {
    name: "Aurora Mist",
    price: "$79",
    notes: "Citrus • Musk • Amber",
    img: "/minimal-glass-perfume-bottle-studio-light.jpg",
  },
  {
    name: "Velvet Oud",
    price: "$99",
    notes: "Oud • Rose • Patchouli",
    img: "/dark-luxury-perfume-bottle-with-soft-shadow.jpg",
  },
  // New items
  {
    name: "Amber Whisper",
    price: "$85",
    notes: "Amber • Vanilla • Cedarwood",
    img: "/amber-whisper-perfume-amber-vanilla-cedarwood-bott.jpg",
  },
  {
    name: "Luna Petal",
    price: "$92",
    notes: "Rose • Peony • White Musk",
    img: "/luna-petal-rose-peony-white-musk-perfume-bottle.jpg",
  },
  {
    name: "Golden Mirage",
    price: "$110",
    notes: "Oud • Leather • Saffron",
    img: "/golden-mirage-oud-leather-saffron-luxury-perfume-b.jpg",
  },
  {
    name: "Ocean Veil",
    price: "$78",
    notes: "Sea Salt • Jasmine • Driftwood",
    img: "/ocean-veil-sea-salt-jasmine-driftwood-perfume-bott.jpg",
  },
]

export default function Collection() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<(typeof products)[number] | null>(null)

  return (
    <section id="collection" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Our Collection</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {products.map((p, idx) => (
            <article
              key={p.name}
              className="group rounded-lg border border-border bg-card p-4 md:p-6 animate-in fade-in-50 duration-700"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div
                role="button"
                tabIndex={0}
                aria-label={`View details for ${p.name}`}
                onClick={() => {
                  setSelected(p)
                  setOpen(true)
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setSelected(p)
                    setOpen(true)
                  }
                }}
                className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-muted cursor-pointer outline-none ring-0 focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Image
                  src={p.img || "/placeholder.svg?height=800&width=600&query=elegant perfume product shot"}
                  alt={`${p.name} bottle`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-lg font-medium">{p.name}</h3>
                <span className="text-sm text-muted-foreground">{p.price}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.notes}</p>
            </article>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-2xl">
            {selected && (
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-muted">
                  <Image
                    src={selected.img || "/placeholder.svg?height=800&width=600&query=luxury perfume bottle closeup"}
                    alt={`${selected.name} bottle large`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-col">
                  <DialogHeader>
                    <DialogTitle className="text-xl md:text-2xl">{selected.name}</DialogTitle>
                    <DialogDescription className="mt-1">{selected.notes}</DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 text-lg font-medium">{selected.price}</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A refined composition crafted for enduring elegance and quiet luxury.
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <Button className="bg-primary text-primary-foreground hover:opacity-90">Add to bag</Button>
                    <Button variant="secondary" onClick={() => setOpen(false)}>
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
