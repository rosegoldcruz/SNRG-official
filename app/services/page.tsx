import Link from "next/link"
import { ArrowRight, BarChart3, Bot, MapPinned, PhoneCall, Workflow } from "lucide-react"

import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const serviceGroups = [
  {
    id: "revenue-infrastructure",
    title: "Revenue Infrastructure",
    icon: Workflow,
    items: [
      "GoHighLevel CRM systems",
      "Lead pipelines",
      "Automation workflows",
      "Call tracking systems",
      "SMS lead response",
      "GBP optimization",
      "Local SEO",
    ],
  },
  {
    id: "crm-infrastructure",
    title: "CRM Infrastructure",
    icon: Bot,
    items: ["GoHighLevel setup", "Pipeline design", "Lead routing", "Workflow automations"],
  },
  {
    id: "lead-capture-systems",
    title: "Lead Capture Systems",
    icon: PhoneCall,
    items: ["Landing pages", "Form integrations", "Call tracking", "Automated follow-up"],
  },
  {
    id: "local-visibility",
    title: "Local Visibility",
    icon: MapPinned,
    items: ["Google Business Profile optimization", "Local SEO campaigns", "Map ranking systems"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-40 pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl space-y-6 text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-gray-400">SNRG Labs Services</p>
            <h1 className="text-4xl font-semibold md:text-5xl">Revenue Infrastructure for Home Service Companies</h1>
            <p className="text-lg text-gray-300">
              We install and optimize the CRM, pipeline, automation, and local visibility systems that turn leads into
              closed jobs and measurable revenue.
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
            <h2 className="text-2xl font-semibold md:text-3xl">Know Where Every Dollar Comes From</h2>
            <p className="mt-3 text-gray-300">
              Track lead origin, response speed, pipeline movement, and closed-job revenue inside one system.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild className="rounded-full bg-white text-black hover:bg-gray-200">
                <Link href="/contact">
                  Book a System Review
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10">
                <Link href="/#revenue-engine">
                  See Revenue Engine Flow
                  <BarChart3 className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
