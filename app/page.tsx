import Link from "next/link"
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Bot,
  MapPinned,
  PhoneCall,
  Route,
  Search,
  Workflow,
} from "lucide-react"

import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const problemPoints = [
  "Leads falling through the cracks",
  "Slow response times",
  "Disconnected systems",
  "No visibility into where revenue comes from",
]

const revenuePipeline = [
  "Traffic Sources",
  "Website / Landing Pages",
  "CRM Capture (GoHighLevel)",
  "Automated SMS / Call Follow-Up",
  "Pipeline Tracking",
  "Closed Jobs",
]

const installBlocks = [
  {
    title: "CRM Infrastructure",
    icon: Workflow,
    items: ["GoHighLevel setup", "Pipeline design", "Automation workflows", "Lead routing"],
  },
  {
    title: "Lead Capture Systems",
    icon: PhoneCall,
    items: ["High-conversion landing pages", "Call tracking", "Form integrations", "SMS response"],
  },
  {
    title: "Local Visibility",
    icon: MapPinned,
    items: ["Google Business Profile optimization", "Local SEO", "Map ranking"],
  },
  {
    title: "Revenue Tracking",
    icon: BarChart3,
    items: ["Pipeline analytics", "Conversion tracking", "Lead attribution"],
  },
]

const revenueVisibilityPoints = [
  "Where leads originate",
  "How fast they’re contacted",
  "Which jobs close",
  "Which marketing sources generate revenue",
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <section className="relative border-b border-white/10 pt-40 pb-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl space-y-8 text-center">
              <p className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.16em] text-gray-300 uppercase">
                Revenue Infrastructure Architect for Home Service Businesses
              </p>
              <h1 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
                Install the System That Turns Leads Into Revenue
              </h1>
              <p className="mx-auto max-w-4xl text-pretty text-lg text-gray-300 md:text-xl">
                We build Revenue Engine CRM systems for home service businesses using platforms like GoHighLevel,
                automated lead pipelines, call tracking, and local SEO — so every call, form, and message turns into
                measurable revenue.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild className="h-11 rounded-full bg-white px-6 text-black hover:bg-gray-200">
                  <Link href="/contact">
                    Book a System Review
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-11 rounded-full border-white/30 bg-transparent px-6 text-white hover:bg-white/10">
                  <Link href="#revenue-engine">See How It Works</Link>
                </Button>
              </div>
              <p className="text-sm text-gray-400">
                Built for contractors, remodelers, roofers, HVAC, and cabinet companies doing $500k–$10M/year.
              </p>
            </div>
          </div>
        </section>

        <section id="problem" className="border-b border-white/10 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold md:text-4xl">The Problem</h2>
                <p className="text-gray-300">Most home service companies are losing revenue in operations, not demand.</p>
                <div className="grid gap-3">
                  {problemPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
                      <p className="text-gray-200">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="border-white/10 bg-white/5 text-white shadow-none">
                <CardHeader>
                  <CardTitle className="text-2xl">SNRG installs the infrastructure that fixes this.</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <p>
                    We install lead capture, automated response, CRM pipelines, and revenue tracking so your team can
                    move fast and close more jobs without guessing.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-white/10 bg-black/40 p-4">
                      <Bot className="mb-2 h-5 w-5 text-orange-300" />
                      <p className="text-sm">Automated lead response</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-black/40 p-4">
                      <Route className="mb-2 h-5 w-5 text-orange-300" />
                      <p className="text-sm">Lead routing & integrations</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-black/40 p-4">
                      <PhoneCall className="mb-2 h-5 w-5 text-orange-300" />
                      <p className="text-sm">Call tracking + SMS follow-up</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-black/40 p-4">
                      <Search className="mb-2 h-5 w-5 text-orange-300" />
                      <p className="text-sm">GBP + local SEO systems</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="revenue-engine" className="border-b border-white/10 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl space-y-10">
              <div className="space-y-3 text-center">
                <h2 className="text-3xl font-semibold md:text-4xl">The Revenue Engine</h2>
                <p className="mx-auto max-w-3xl text-gray-300">
                  One connected system from traffic to closed jobs, with every stage visible and measurable.
                </p>
              </div>

              <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="space-y-2">
                  {revenuePipeline.map((step, index) => (
                    <div key={step} className="flex flex-col items-center">
                      <div className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-center text-sm font-medium md:text-base">
                        {step}
                      </div>
                      {index < revenuePipeline.length - 1 && <ArrowDown className="my-2 h-4 w-4 text-orange-300" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-white/10 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl space-y-10">
              <div className="space-y-3 text-center">
                <h2 className="text-3xl font-semibold md:text-4xl">What We Install</h2>
                <p className="mx-auto max-w-3xl text-gray-300">
                  Revenue Infrastructure built for contractor workflows, pipeline control, and measurable outcomes.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {installBlocks.map((block) => (
                  <Card key={block.title} className="border-white/10 bg-white/5 text-white shadow-none">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <block.icon className="h-5 w-5 text-orange-300" />
                        {block.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-300">
                        {block.items.map((item) => (
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
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold md:text-4xl">Know Where Every Dollar Comes From</h2>
                <p className="text-gray-300">
                  SNRG systems give full visibility into the lead and revenue lifecycle so you can make decisions based
                  on real numbers, not assumptions.
                </p>
                <ul className="space-y-3 text-gray-200">
                  {revenueVisibilityPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-orange-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="border-white/10 bg-white/5 text-white shadow-none">
                <CardHeader>
                  <CardTitle className="text-xl">Revenue Dashboard View</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-gray-300">
                  <div className="rounded-lg border border-white/10 bg-black/50 p-4">
                    <p className="text-gray-200">Lead Source Performance</p>
                    <p className="mt-1">Google Business Profile, Local SEO, Paid Ads, Referral</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/50 p-4">
                    <p className="text-gray-200">Speed-to-Lead Tracking</p>
                    <p className="mt-1">First response time by channel and team member</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/50 p-4">
                    <p className="text-gray-200">Pipeline-to-Revenue Attribution</p>
                    <p className="mt-1">Which sources close and what they are worth</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 py-16">
          <div className="container mx-auto px-4">
            <p className="mx-auto max-w-4xl text-center text-xl font-medium text-gray-100 md:text-2xl">
              SNRG Labs installs the infrastructure that turns marketing into measurable revenue.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 px-6 py-12 text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">Get Your Revenue Engine Installed</h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-300">
                Book a 15-minute system review and we’ll show you where leads are leaking from your current setup.
              </p>
              <div className="mt-8">
                <Button asChild className="h-11 rounded-full bg-white px-6 text-black hover:bg-gray-200">
                  <Link href="/contact">Book a 15-minute system review</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
