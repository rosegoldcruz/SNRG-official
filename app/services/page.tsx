import Link from "next/link"
import { ArrowRight, BarChart3, Bot, Globe, PhoneCall } from "lucide-react"

import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const serviceGroups = [
  {
    id: "website-development",
    title: "Website Development",
    icon: Globe,
    items: ["Responsive design", "Fast loading pages", "SEO-friendly structure", "Conversion-focused layouts"],
  },
  {
    id: "lead-capture-systems",
    title: "Lead Capture Systems",
    icon: PhoneCall,
    items: ["Landing pages", "Form capture systems", "Click-to-call integration", "Appointment request systems"],
  },
  {
    id: "marketing-infrastructure",
    title: "Marketing Infrastructure",
    icon: BarChart3,
    items: ["Meta Pixel installation", "Google Analytics setup", "Ad conversion tracking", "Campaign attribution"],
  },
  {
    id: "automation-crm-setup",
    title: "Automation & CRM Setup",
    icon: Bot,
    items: ["CRM integrations", "Lead pipelines", "Automated follow-up systems", "Call tracking setups"],
  },
]

const setupPricing = [
  { label: "Analytics & Tracking Install", price: "$300 – $800" },
  { label: "CRM & Lead Pipeline Setup", price: "$800 – $2,000" },
  { label: "Ad Tracking & Pixel Integration", price: "$300 – $700" },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-40 pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl space-y-6 text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-gray-400">SNRG Labs Services</p>
            <h1 className="text-4xl font-semibold md:text-5xl">Websites + Lead Infrastructure</h1>
            <p className="text-lg text-gray-300">
              We design and build modern business websites, then install the systems needed to capture and convert
              leads.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
            {serviceGroups.map((group) => (
              <Card key={group.id} id={group.id} className="border-white/10 bg-white/5 text-white shadow-none">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <group.icon className="h-5 w-5 text-orange-300" />
                    {group.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <h2 className="text-2xl font-semibold md:text-3xl">Infrastructure Setup Pricing</h2>
            <div className="mt-6 grid gap-3 text-left sm:grid-cols-3">
              {setupPricing.map((item) => (
                <div key={item.label} className="rounded-lg border border-white/10 bg-black/30 p-3">
                  <p className="text-sm text-gray-200">{item.label}</p>
                  <p className="mt-1 text-sm font-mono text-orange-300">{item.price}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild className="rounded-full bg-white text-black hover:bg-gray-200">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10">
                <Link href="/#services">View Service Breakdown</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
