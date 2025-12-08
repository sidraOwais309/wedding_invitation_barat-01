"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const targetDate = new Date("2026-01-01T00:00:00").getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return null
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.1 }}
      className="mt-10"
    >
      <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-6">Counting Down To</p>
      <div className="flex justify-center gap-3 sm:gap-6">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border border-primary/40 rounded-lg flex items-center justify-center bg-background/30 backdrop-blur-sm gold-border-glow">
                <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary gold-glow">
                  {String(unit.value).padStart(2, "0")}
                </span>
              </div>
              {/* Corner accents */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-primary/60" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-primary/60" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-primary/60" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-primary/60" />
            </div>
            <span className="text-muted-foreground text-xs sm:text-sm tracking-wider uppercase mt-2">{unit.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
