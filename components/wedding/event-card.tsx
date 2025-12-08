"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Phone, Calendar } from "lucide-react"

interface EventCardProps {
  title: string
  subtitle?: string
  groom: string
  bride: string
  groomParents?: string
  brideParents?: string
  additionalCouple?: {
    groom: string
    groomParents?: string
    bride: string
    brideParents?: string
    label: string
  }
  date: string
  venue: string
  venueDetails: string[]
  programme: { time: string; event: string }[]
  rsvp: { name: string; phones: string[]; label?: string }
  mapUrl: string
  calendarUrl: string
  index: number
}

export default function EventCard({
  title,
  subtitle,
  groom,
  groomParents,
  bride,
  brideParents,
  additionalCouple,
  date,
  venue,
  venueDetails,
  programme,
  rsvp,
  mapUrl,
  calendarUrl,
  index,
}: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative bg-card/80 backdrop-blur-sm border-2 border-primary/30 p-6 md:p-10 lg:p-12 shadow-2xl overflow-hidden max-w-2xl"
    >
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/40" />
      <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-primary/40" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-primary/40" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/40" />

      {/* Semi-opaque tile under textual content (50-60% opacity) */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-card/60 backdrop-blur-sm" />

      <div className="relative z-10">
        {/* Title */}
        <div className="text-center mb-8">
          <h3 className="font-serif text-3xl md:text-4xl text-accent gold-glow mb-2">{title}</h3>
          {subtitle && <p className="text-muted-foreground text-sm tracking-widest uppercase">{subtitle}</p>}
        </div>

        {/* Couple Names */}
        <div className="text-center mb-8">
          {subtitle && <p className="text-muted-foreground text-xs tracking-widest uppercase mb-4">Wedding Ceremony</p>}
          <p className="font-serif text-2xl md:text-3xl text-accent/90 mb-1">{groom}</p>
          {groomParents && <p className="text-muted-foreground text-sm">{groomParents}</p>}
          <p className="text-muted-foreground text-sm tracking-widest my-3">&</p>
          <p className="font-serif text-2xl md:text-3xl text-accent/90">{bride}</p>
          {brideParents && <p className="text-muted-foreground text-sm">{brideParents}</p>}
        </div>

        {/* Additional Couple */}
        {additionalCouple && (
          <div className="text-center mb-8 pt-6 border-t border-border">
            <p className="text-muted-foreground text-xs tracking-widest uppercase mb-4">{additionalCouple.label}</p>
            <p className="font-serif text-xl md:text-2xl text-primary/80">{additionalCouple.groom}</p>
            {additionalCouple.groomParents && (
              <p className="text-muted-foreground text-sm">(Son of {additionalCouple.groomParents})</p>
            )}
            <p className="text-muted-foreground text-sm my-2">with</p>
            <p className="font-serif text-xl md:text-2xl text-primary/80">{additionalCouple.bride}</p>
            {additionalCouple.brideParents && (
              <p className="text-muted-foreground text-sm">(Daughter of {additionalCouple.brideParents})</p>
            )}
          </div>
        )}

        {/* Date */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <Calendar className="w-5 h-5 text-primary" />
          <p className="text-secondary-foreground tracking-wide">{date}</p>
        </div>

        {/* Venue */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-primary" />
            <p className="text-secondary-foreground font-medium">{venue}</p>
          </div>
          {venueDetails.map((detail, i) => (
            <p key={i} className="text-muted-foreground text-sm">
              {detail}
            </p>
          ))}
        </div>

        {/* Programme Timeline */}
        <div className="mb-8">
          <h4 className="text-center text-primary text-sm tracking-widest uppercase mb-6">Programme</h4>
          <div className="space-y-4">
            {programme.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex items-center gap-2 min-w-[120px]">
                  <Clock className="w-4 h-4 text-primary/70" />
                  <span className="text-primary text-sm">{item.time}</span>
                </div>
                <div className="flex-1 h-px bg-border" />
                <span className="text-secondary-foreground text-sm">{item.event}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RSVP */}
        <div className="text-center mb-8 p-4 bg-accent/10 border border-primary/30">
          <p className="text-accent text-sm tracking-widest uppercase mb-3">Awaiting To Welcome</p>
          <p className="text-foreground font-medium mb-1">{rsvp.name}</p>
          {rsvp.label && <p className="text-muted-foreground text-sm mb-2">{rsvp.label}</p>}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-3">
            {rsvp.phones.map((phone, i) => (
              <a
                key={i}
                href={`tel:${phone}`}
                className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-3 h-3" />
                {phone}
              </a>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm tracking-wide"
          >
            <MapPin className="w-4 h-4" />
            View on Map
          </a>
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-sm tracking-wide"
          >
            <Calendar className="w-4 h-4" />
            Add to Calendar
          </a>
        </div>
      </div>
    </motion.div>
  )
}
