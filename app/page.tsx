import Link from "next/link"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const aboutServices = [
  "Website development",
  "Lead capture systems",
  "Marketing tracking infrastructure",
  "Advertising integrations",
  "Call and CRM setup",
]

const primaryServices = [
  {
    title: "Website Development",
    description: "Custom business websites designed and built for performance.",
    items: ["Responsive design", "Fast loading pages", "SEO-friendly structure", "Conversion-focused layouts"],
  },
  {
    title: "Lead Capture Systems",
    description: "Systems that turn website traffic into leads.",
    items: ["Landing pages", "Form capture systems", "Click-to-call integration", "Appointment request systems"],
  },
  {
    title: "Marketing Infrastructure",
    description: "Install the tracking systems businesses need to measure growth.",
    items: ["Meta Pixel installation", "Google Analytics setup", "Ad conversion tracking", "Campaign attribution"],
  },
  {
    title: "Automation & CRM Setup",
    description: "Basic automation and CRM infrastructure so businesses can manage incoming leads.",
    items: ["CRM integrations", "Lead pipelines", "Automated follow-up systems", "Call tracking setups"],
  },
]

const pricingGroups = [
  {
    title: "Website Builds",
    rows: [
      { name: "Starter Business Website", price: "$500 – $1,500" },
      { name: "Custom Business Website", price: "$1,500 – $3,500" },
      { name: "Advanced Build + Lead Systems", price: "$3,500+" },
    ],
  },
  {
    title: "Infrastructure Setup",
    rows: [
      { name: "Analytics & Tracking Install", price: "$300 – $800" },
      { name: "CRM & Lead Pipeline Setup", price: "$800 – $2,000" },
      { name: "Ad Tracking & Pixel Integration", price: "$300 – $700" },
    ],
  },
  {
    title: "Monthly Support",
    rows: [
      { name: "Website Hosting & Maintenance", price: "$100 – $300/month" },
      { name: "Lead System Monitoring & Updates", price: "$300 – $1,000/month" },
    ],
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />

      <section id="about" className="border-y border-border/40 bg-card/20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">About SNRG Labs</h2>
              <p className="text-muted-foreground">
                SNRG Labs is a web development and digital systems studio focused on building websites that actually
                support business growth.
              </p>
              <p className="text-muted-foreground">
                Beyond design and development, SNRG installs the core infrastructure businesses need to track leads,
                run ads, and convert traffic into customers.
              </p>
            </div>

            <Card className="border-border/60 bg-card/50 text-foreground shadow-none">
              <CardHeader>
                <CardTitle className="text-xl">Services include:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {aboutServices.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">Services</h2>
            <p className="mt-4 text-muted-foreground">Clear systems built for real business outcomes.</p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2">
            {primaryServices.map((service) => (
              <Card key={service.title} className="border-border/60 bg-card/50 text-foreground shadow-none">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-accent">Includes</p>
                  <ul className="space-y-2 text-muted-foreground">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-y border-border/40 bg-card/20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">Pricing</h2>
            <p className="mt-4 text-muted-foreground">Simple baseline pricing for builds and systems setup.</p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-3">
            {pricingGroups.map((group) => (
              <Card key={group.title} className="border-border/60 bg-card/50 text-foreground shadow-none">
                <CardHeader>
                  <CardTitle className="text-xl">{group.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {group.rows.map((row) => (
                    <div key={row.name} className="rounded-lg border border-border/50 bg-background/50 p-3">
                      <p className="text-sm text-foreground">{row.name}</p>
                      <p className="mt-1 font-mono text-sm text-accent">{row.price}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border/60 bg-card/40 p-10 text-center">
            <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">Need a Website or Lead System Built?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              SNRG Labs helps businesses launch modern websites and install the infrastructure needed to capture and
              convert leads.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-4xl text-center text-lg font-medium md:text-xl">
            SNRG Labs builds websites and installs the systems businesses need to generate and track leads.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
