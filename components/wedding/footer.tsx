"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="font-serif text-3xl md:text-4xl text-primary gold-glow mb-4">Talha & Muskan</p>
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-6">January 1 – 2, 2026</p>
        <div className="w-16 h-px bg-primary/50 mx-auto mb-6" />
        <p className="text-muted-foreground text-xs">Made with love for our special day</p>
      </motion.div>
    </footer>
  )
}
