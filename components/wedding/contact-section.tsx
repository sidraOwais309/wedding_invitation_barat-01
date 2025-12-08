"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 bg-secondary/20">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary gold-glow mb-4">RSVP</h2>
          <p className="text-muted-foreground tracking-widest uppercase text-sm">We would love to hear from you</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-card border border-border p-8 md:p-12 gold-border-glow"
        >
            {/* Semi-opaque tile under textual content (50-60% opacity) */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-card/60 backdrop-blur-sm" />

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-primary/40" />
            <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-primary/40" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-primary/40" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-primary/40" />

            <div className="relative z-10">
              <div className="text-center mb-8">
                <p className="font-serif text-2xl text-primary mb-2">Tanveer Yousaf</p>
                <p className="text-muted-foreground text-sm">Contact for RSVP</p>
              </div>

          <div className="space-y-4">
            {/* Phone Numbers */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:03422161007"
                className="flex items-center justify-center gap-3 px-6 py-4 border border-border hover:border-primary transition-colors group"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-secondary-foreground group-hover:text-primary transition-colors">
                  0342-2161007
                </span>
              </a>
              <a
                href="tel:03462468393"
                className="flex items-center justify-center gap-3 px-6 py-4 border border-border hover:border-primary transition-colors group"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-secondary-foreground group-hover:text-primary transition-colors">
                  0346-2468393
                </span>
              </a>
            </div>

            {/* WhatsApp Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://wa.me/923422161007"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp (0342)</span>
              </a>
              <a
                href="https://wa.me/923462468393"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp (0346)</span>
              </a>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  )
}
