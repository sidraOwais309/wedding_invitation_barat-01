"use client"

import { motion } from "framer-motion"

const families = [
  {
    title: "Groom's Family",
    subtitle: "Yousaf Family",
    members: [
      { role: "Father", name: "M. Tanveer Yousaf" },
      { role: "Mother", name: "Mrs. Tanveer Yousaf" },
      { role: "Groom", name: "M. Talha Yousaf" },
    ],
  },
  {
    title: "Bride's Family",
    subtitle: "Kashan Family",
    members: [
      { role: "Father", name: "Mr. M. Kashan" },
      { role: "Mother", name: "Mrs. M. Kashan" },
      { role: "Bride", name: "Muskan Kashan" },
    ],
  },
]

export default function FamilySection() {
  return (
    <section id="family" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-accent gold-glow mb-4">Our Families</h2>
          <p className="text-muted-foreground tracking-widest uppercase text-sm">Two families becoming one</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {families.map((family, index) => (
            <motion.div
              key={family.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative bg-card/80 backdrop-blur-sm border-2 border-primary/30 p-8 md:p-10 text-center shadow-lg"
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-primary/40" />
              <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-primary/40" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-primary/40" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-primary/40" />

              <h3 className="font-serif text-2xl md:text-3xl text-accent mb-2">{family.title}</h3>
              <p className="text-muted-foreground text-sm tracking-widest uppercase mb-8">{family.subtitle}</p>

              <div className="space-y-4">
                {family.members.map((member, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="py-3 border-b border-border last:border-b-0"
                  >
                    <p className="text-muted-foreground text-xs tracking-widest uppercase mb-1">{member.role}</p>
                    <p className="text-secondary-foreground text-lg">{member.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
