"use client"

import { motion } from "framer-motion"
import FloralDecoration from "./floral-decoration"
import CountdownTimer from "./countdown-timer"
import Link from "next/link"

function WeddingMonogram() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative mx-auto mb-8"
    >
      {/* Subtle golden glow behind */}
      <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full scale-150" />

      <div className="relative flex items-center justify-center gap-6">
        {/* T & M monogram */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 border-2 border-primary rounded-full flex items-center justify-center bg-accent/10 backdrop-blur-sm shadow-lg">
            <span className="font-serif text-2xl sm:text-3xl text-primary gold-glow">T & M</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function CouplesDisplay() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="my-8"
    >
      {/* Ornate decorative frame */}
      <div className="relative max-w-2xl mx-auto">
        {/* Top border decoration */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        
        {/* Single couple display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center px-6 py-4"
        >
          <p className="text-muted-foreground text-xs tracking-[0.25em] uppercase mb-3">
            Wedding Ceremony
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-accent mb-4 gold-glow">
            Muskan & Talha
          </h2>
          <div className="space-y-2 text-sm md:text-base text-foreground/80">
            <p className="font-medium">
              <span className="text-primary">Muskan Kashan</span>
            </p>
            <p className="text-xs text-muted-foreground">Daughter of</p>
            <p className="text-accent/90">Mr. & Mrs. M. Kashan</p>
            
            <div className="py-2">
              <span className="font-serif text-2xl text-primary">with</span>
            </div>
            
            <p className="font-medium">
              <span className="text-primary">M. Talha Yousaf</span>
            </p>
            <p className="text-xs text-muted-foreground">Son of</p>
            <p className="text-accent/90">Mr. & Mrs. M. Tanveer Yousaf</p>
          </div>
        </motion.div>

        {/* Bottom border decoration */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
    </motion.div>
  )
}

function EventDates() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="space-y-1 mb-2"
    >
      <p className="text-foreground/80 text-base md:text-lg tracking-[0.15em] mb-1">
        on Thursday | 01 | January - 2026
      </p>
      <div className="w-48 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto my-2" />
      <p className="text-muted-foreground text-sm tracking-[0.2em]">
        FC MARRIAGE BANQUET <span className="text-xs">(Premium Lawn-B)</span>
      </p>
    </motion.div>
  )
}

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Floral Decorations */}
      <FloralDecoration position="top-left" />
      <FloralDecoration position="top-right" />
      <FloralDecoration position="bottom-left" />
      <FloralDecoration position="bottom-right" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Decorative title tile: keep all central text inside this framed area */}
        <div className="mx-auto w-full max-w-3xl relative decorative-tile px-6 sm:px-8 md:px-12 py-8 sm:py-12 flex flex-col items-center justify-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground tracking-[0.3em] uppercase text-xs md:text-sm mb-6"
            style={{ zIndex: 2 }}
          >
            You are cordially invited
          </motion.p>

          <WeddingMonogram />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-accent mb-6 gold-glow leading-tight wrap-break-word"
            style={{ zIndex: 2 }}
          >
            Invitation
          </motion.h1>

          {/* Couples + frame */}
          <div className="w-full">
            <CouplesDisplay />
          </div>

          <div className="w-full mt-4">
            <EventDates />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-muted-foreground text-sm md:text-base tracking-wide mt-3"
            style={{ zIndex: 2 }}
          >
            Karachi, Pakistan
          </motion.p>

          <div className="mt-6">
            <CountdownTimer />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-8"
          >
            <Link
              href="#events"
              className="inline-block px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 tracking-widest uppercase text-sm gold-border-glow"
            >
              View Events
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.8 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-px h-20 bg-linear-to-b from-primary/50 to-transparent"
      />
    </section>
  )
}
