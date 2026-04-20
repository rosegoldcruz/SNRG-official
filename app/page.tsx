"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FeaturesSection } from "@/components/features-section"
import { DeveloperExperience } from "@/components/developer-experience"
import { CodeSection } from "@/components/code-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const leakPoints = [
  "Leads coming in but nobody following up fast enough",
  "Phones not converting — staff wasting time on unqualified calls",
  "Too many tools with no system connecting them",
  "Business running on memory instead of data",
]

const aboutServices = [
  "Revenue-focused website development",
  "Lead capture and routing infrastructure",
  "Full marketing attribution and tracking",
  "Ad-to-CRM integrations",
  "Telephony, dialer, and CRM deployment",
]

const primaryServices = [
  {
    title: "Website Development",
    description: "High-converting websites built to turn traffic into leads — not win design awards.",
    items: ["Mobile-first, fast-loading design", "Conversion-focused page architecture", "Local SEO and map ranking structure", "Click-to-call and booking flow integrations"],
  },
  {
    title: "Lead Capture Systems",
    description: "Every form, call, and click captured and routed to the right place — instantly.",
    items: ["High-conversion landing pages and funnels", "Form capture with instant SMS alerts", "Click-to-call and call tracking", "Appointment booking and calendar sync"],
  },
  {
    title: "Marketing Infrastructure",
    description: "Attribution that shows you exactly which ad, campaign, or channel is closing deals.",
    items: ["Meta and Google Pixel installation", "Full GA4 and conversion tracking", "Offline conversion imports", "Lead source attribution to closed revenue"],
  },
  {
    title: "Automation & CRM Setup",
    description: "The pipeline, follow-up, and dialer infrastructure that stops leads from dying after the first touch.",
    items: ["CRM setup for any platform — HubSpot, GHL, Salesforce, and more", "Sales pipeline and stage design", "Multi-touch automated follow-up sequences", "Power dialer and call tracking setup"],
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
      <StatsSection />
      <TestimonialsSection />

      <motion.section
        id="problem"
        className="border-y border-border/40 bg-card/20 py-20 sm:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">Where Revenue Gets Left on the Table</h2>
              <p className="text-muted-foreground">
                When growth stalls, it's rarely because of a lack of demand. It's the system behind it.
              </p>
              <motion.div className="grid gap-3" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                {leakPoints.map((point) => (
                  <motion.div key={point} variants={fadeUp} className="flex items-start gap-3 rounded-lg border border-border/60 bg-card/50 px-4 py-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <p>{point}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <Card className="border-border/60 bg-card/50 text-foreground shadow-none">
                <CardHeader>
                  <CardTitle className="text-xl">Speed + System + Visibility</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>
                    We architect the system behind your revenue. Analytics, call infrastructure, CRM automation, and
                    follow-up sequences — installed so you can see exactly where leads come from, how fast they're
                    contacted, and which ones close.
                  </p>
                  <div className="rounded-lg border border-border/60 bg-background/50 p-4 text-sm">
                    <p className="text-foreground">Traffic → Website → Lead Capture → CRM → Follow-Up → Closed Customer</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <FeaturesSection />
      <DeveloperExperience />
      <CodeSection />

      <motion.section
        id="about"
        className="border-y border-border/40 bg-card/20 py-20 sm:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">About SNRG Labs</h2>
              <p className="text-muted-foreground">
                SNRG Labs builds revenue systems for businesses stuck in manual chaos. We're not an agency — we're a
                technical operator that architects solutions and ships.
              </p>
              <p className="text-muted-foreground">
                When others say "too complicated," "not possible," or "you need another team" — we build it anyway.
                Advanced AI and automation applied to old business problems: missed calls, slow follow-up, low close
                rates, and chaos.
              </p>
            </div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
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
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section id="services" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">Services</h2>
            <p className="mt-4 text-muted-foreground">We don't hand you software. We deploy the systems behind your revenue.</p>
          </motion.div>

          <motion.div
            className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {primaryServices.map((service) => (
              <motion.div key={service.title} variants={fadeUp}>
                <Card className="border-border/60 bg-card/50 text-foreground shadow-none h-full">
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="pricing" className="border-y border-border/40 bg-card/20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">Pricing</h2>
            <p className="mt-4 text-muted-foreground">Simple baseline pricing for builds and systems setup.</p>
          </motion.div>

          <motion.div
            className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {pricingGroups.map((group) => (
              <motion.div key={group.title} variants={fadeUp}>
                <Card className="border-border/60 bg-card/50 text-foreground shadow-none h-full">
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
        id="contact"
        className="py-20 sm:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border/60 bg-card/40 p-10 text-center">
            <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">Ready to Stop Leaking Revenue?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We build revenue systems for businesses stuck in manual chaos. Tell us what's broken — we'll build the
              machine that fixes it.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">Build My System</Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="pb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-4xl text-center text-lg font-medium md:text-xl">
            SNRG Labs builds revenue systems for businesses stuck in manual chaos. Missed calls, slow follow-up, low
            close rates — we build the machine behind it.
          </p>
        </div>
      </motion.section>

      <Footer />
    </main>
  )
}
