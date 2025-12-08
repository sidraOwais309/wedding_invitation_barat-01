export default function Contact() {
  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-20 animate-in fade-in-50 duration-700">
        <h2 className="text-2xl md:text-3xl font-semibold">Get in Touch with Serave</h2>
        <p className="mt-3 text-muted-foreground">
          {"We’d love to hear from you — for orders, collaborations, or custom fragrances."}
        </p>

        <form className="mt-8 grid gap-5">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="h-10 rounded-md border border-border bg-card px-3 text-sm outline-none ring-0 focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Your name"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="h-10 rounded-md border border-border bg-card px-3 text-sm outline-none ring-0 focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="you@example.com"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="rounded-md border border-border bg-card px-3 py-2 text-sm outline-none ring-0 focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="How can we help?"
            />
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send Message
            </button>
          </div>
        </form>

        <p className="mt-6 text-sm text-muted-foreground">
          Contact us directly at{" "}
          <a
            href="mailto:muhammadtalhayousaf3@gmail.com"
            className="underline decoration-accent underline-offset-4 hover:opacity-90"
          >
            muhammadtalhayousaf3@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}
