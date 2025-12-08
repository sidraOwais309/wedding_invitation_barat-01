"use client"

import { motion } from "framer-motion"
import EventCard from "./event-card"

const events = [
  {
    title: "Barat — January 01, 2026",
    groom: "M. Talha Yousaf",
    groomParents: "S/o. M. Tanveer Yousaf",
    bride: "Muskan Kashan",
    brideParents: "D/o. Mr. & Mrs. M. Kashan",
    date: "Thursday, 01 January - 2026",
    venue: "FC MARRIAGE BANQUET (Premium Lawn-B)",
    venueDetails: [
      "Shahra-e-Faisal Opposite Iqra University",
      "Malir Campus, Shamsi Society Rafah-e-Aam",
      "Society Malir Hall, Shah Faisal Town.",
    ],
    programme: [
      { time: "08:00 PM", event: "ARRIVAL OF BARAT" },
      { time: "09:30 PM", event: "DINNER" },
      { time: "10:00 PM", event: "RUKHSATI" },
    ],
    rsvp: {
      name: "Mr. & Mrs. Kashan",
      label: "M. Shayan",
      phones: ["0300-2556740", "0313-2519223", "0319-4336740"],
    },
    mapUrl: "https://maps.google.com/?q=FC+Marriage+Banquet+Shahra-e-Faisal+Karachi",
    calendarUrl:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Barat+Ceremony+-+Talha+%26+Muskan&dates=20260101T150000Z/20260101T170000Z&details=Barat+Ceremony&location=FC+Marriage+Banquet,+Shahra-e-Faisal,+Karachi",
  },
]

export default function EventsSection() {
  return (
    <section id="events" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-accent gold-glow mb-4">Our Event</h2>
          <p className="text-muted-foreground tracking-widest uppercase text-sm">Join us in celebration</p>
        </motion.div>

        <div className="flex justify-center">
          {events.map((event, index) => (
            <EventCard key={event.title} {...event} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
