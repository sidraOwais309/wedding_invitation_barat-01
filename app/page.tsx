import Navbar from "@/components/wedding/navbar"
import HeroSection from "@/components/wedding/hero-section"
import EventsSection from "@/components/wedding/events-section"
import FamilySection from "@/components/wedding/family-section"
import ContactSection from "@/components/wedding/contact-section"
import Footer from "@/components/wedding/footer"

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <EventsSection />
      <FamilySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
