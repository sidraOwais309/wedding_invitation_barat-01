"use client"

import { motion } from "framer-motion"

interface FloralDecorationProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-top" | "center-bottom"
  className?: string
}

export default function FloralDecoration({ position, className = "" }: FloralDecorationProps) {
  const positionClasses = {
    "top-left": "top-0 left-0 -translate-x-1/4 -translate-y-1/4",
    "top-right": "top-0 right-0 translate-x-1/4 -translate-y-1/4 rotate-90",
    "bottom-left": "bottom-0 left-0 -translate-x-1/4 translate-y-1/4 -rotate-90",
    "bottom-right": "bottom-0 right-0 translate-x-1/4 translate-y-1/4 rotate-180",
    "center-top": "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "center-bottom": "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-180",
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`absolute pointer-events-none ${positionClasses[position]} ${className}`}
    >
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56"
      >
        {/* Floral corner ornament */}
        <path
          d="M10 190 Q50 150 30 100 Q10 50 50 30 Q90 10 100 50 Q110 10 150 30 Q190 50 170 100 Q150 150 190 190"
          stroke="#d4af37"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M30 170 Q60 140 50 100 Q40 60 70 50 Q100 40 100 70 Q100 40 130 50 Q160 60 150 100 Q140 140 170 170"
          stroke="#d4af37"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        {/* Flower details */}
        <circle cx="100" cy="100" r="8" stroke="#d4af37" strokeWidth="1" fill="none" opacity="0.7" />
        <circle cx="100" cy="100" r="3" fill="#d4af37" opacity="0.5" />
        {/* Leaves */}
        <path d="M60 140 Q70 120 60 100" stroke="#d4af37" strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M140 140 Q130 120 140 100" stroke="#d4af37" strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M60 60 Q70 80 60 100" stroke="#d4af37" strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M140 60 Q130 80 140 100" stroke="#d4af37" strokeWidth="1" fill="none" opacity="0.5" />
      </svg>
    </motion.div>
  )
}
