import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsOfService() {
  const anchors = [
    { id: "services", label: "1. Services" },
    { id: "scope-of-work", label: "2. Scope of Work" },
    { id: "project-work", label: "3. Project Work, Deposits, and Retainers" },
    { id: "recurring-services", label: "4. Recurring Services and Subscription Billing" },
    { id: "revisions", label: "5. Revisions and Added Scope" },
    { id: "client-responsibilities", label: "6. Client Responsibilities" },
    { id: "third-party", label: "7. Third-Party Platforms and Costs" },
    { id: "ownership", label: "8. Ownership" },
    { id: "access", label: "9. Access and Account Control" },
    { id: "launches", label: "10. Launches, Deployments, and Deliverability" },
    { id: "performance", label: "11. Performance Disclaimer" },
    { id: "cancellation", label: "12. Cancellation and Pause" },
    { id: "liability", label: "13. Limitation of Liability" },
    { id: "security", label: "14. Security and Credential Use" },
    { id: "no-professional-advice", label: "15. No Professional Advice" },
    { id: "governing-law", label: "16. Governing Law" },
    { id: "venue", label: "17. Venue" },
    { id: "contact", label: "18. Contact" },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <p className="text-sm uppercase tracking-[0.16em] text-zinc-500">Last updated: March 13, 2026</p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">SNRG Labs Terms of Service</h1>
            <p className="mt-4 text-lg text-zinc-300">Terms for project-based, recurring, and implementation services</p>
            <p className="mt-5 text-zinc-400">
              These Terms of Service govern services provided by SNRG Labs, including project-based builds, recurring
              infrastructure support, CRM and automation implementation, lead capture systems, local visibility work,
              revenue tracking installs, and related consulting or technical services.
            </p>
          </div>

          <div className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6">
            <h2 className="text-base font-semibold text-white">In plain English:</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
              <li>Payments secure scheduling, production time, or active service.</li>
              <li>Deposits and retainers are non-refundable once work begins.</li>
              <li>Monthly services continue until canceled in writing.</li>
              <li>
                Added scope, revisions beyond the agreed scope, or new features may require additional pricing.
              </li>
              <li>
                Client remains responsible for third-party fees like domains, hosting, ad spend, software
                subscriptions, call tracking, telephony, email/SMS usage, or CRM platform costs unless explicitly
                included in writing.
              </li>
              <li>SNRG Labs does not guarantee rankings, lead volume, closed revenue, or platform uptime.</li>
              <li>
                Client owns their domains and business assets once paid and in good standing, subject to any agreed
                license for SNRG Labs proprietary frameworks or internal systems.
              </li>
            </ul>
          </div>

          <div className="mb-10 rounded-2xl border border-zinc-800 bg-zinc-950/50 p-6">
            <h2 className="text-base font-semibold text-white">Jump to section</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {anchors.map((anchor) => (
                <a
                  key={anchor.id}
                  href={`#${anchor.id}`}
                  className="rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white"
                >
                  {anchor.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-10 text-zinc-300">
            <section id="services" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white">1. Services</h2>
              <p className="mt-3">
                SNRG Labs provides implementation and support services including website design and development,
                landing pages and lead capture systems, CRM setup and pipeline configuration, GoHighLevel or similar
                platform implementation, automation workflows, call tracking and SMS systems, Google Business Profile
                and local visibility work, analytics and conversion tracking, hosting and DNS coordination, recurring
                infrastructure management, and related consulting.
              </p>
            </section>

            <section id="scope-of-work" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white">2. Scope of Work</h2>
              <p className="mt-3">
                Each engagement is governed by the written scope, proposal, invoice, message thread, payment link,
                order summary, or other written agreement between SNRG Labs and the client.
              </p>
              <p className="mt-3">If there is a conflict, the most recent written scope controls.</p>
            </section>

            <section id="project-work" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white">3. Project Work, Deposits, and Retainers</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Deposits and retainers secure project scheduling and active production time.</li>
                <li>Deposits and retainers are non-refundable once work begins.</li>
                <li>
                  One-time payments may cover production phases, implementation stages, setup work, strategy, or build
                  work.
                </li>
                <li>Work may be paused for non-payment.</li>
                <li>Additional scope may require additional invoicing.</li>
              </ul>
            </section>

            <section id="recurring-services" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white">4. Recurring Services and Subscription Billing</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Some SNRG Labs services are recurring monthly services.</li>
                <li>
                  Recurring billing is charged through the agreed payment method unless otherwise agreed in writing.
                </li>
                <li>Client may cancel recurring services in writing.</li>
                <li>
                  Cancellation stops future recurring work, but does not refund prior billing periods already delivered
                  or started.
                </li>
              </ul>
            </section>

            <section id="revisions" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white">5. Revisions and Added Scope</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Reasonable revisions may be included only if expressly stated in writing.</li>
                <li>
                  New requests, additional pages, expanded automation, CRM expansion, copywriting expansion, extra
                  locations, redesign work, advanced integrations, or strategy changes may require added pricing.
                </li>
              </ul>
            </section>

            <section id="client-responsibilities" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white">6. Client Responsibilities</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Client must provide timely approvals, logins, business information, content, assets, and
                  decision-making feedback.
                </li>
                <li>Delays in approvals or missing materials may delay delivery.</li>
              </ul>
            </section>

            <section id="third-party" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white">7. Third-Party Platforms and Costs</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  SNRG Labs may work with hosting providers, domains, GoHighLevel, Google Business Profile, Google
                  Workspace, analytics tools, telephony/SMS providers, call tracking tools, ad platforms, and other
                  software.
                </li>
                <li>
                  Those third-party tools are governed by their own terms, uptime, policies, and fee structures.
                </li>
                <li>
                  Unless explicitly included in writing, the client is responsible for those third-party platform
                  costs.
                </li>
              </ul>
            </section>

            <section id="ownership" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white">8. Ownership</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Domains, business accounts, business assets, and client-specific deliverables belong to the client
                  once paid and in good standing.
                </li>
                <li>SNRG Labs does not claim ownership of the client&apos;s domain or business identity.</li>
                <li>
                  Pre-existing SNRG Labs frameworks, internal systems, templates, reusable code, operating methods,
                  and proprietary implementation structures remain property of SNRG Labs unless otherwise agreed in
                  writing.
                </li>
              </ul>
            </section>

            <section id="access" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white">9. Access and Account Control</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  SNRG Labs may retain administrative access during active work for management, support, and
                  implementation purposes.
                </li>
                <li>Upon completion and payment, reasonable handoff or shared access will be provided where applicable.</li>
              </ul>
            </section>

            <section id="launches" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white">10. Launches, Deployments, and Deliverability</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  SNRG Labs will use commercially reasonable efforts to configure, deploy, or launch systems correctly.
                </li>
                <li>
                  SNRG Labs does not guarantee uninterrupted uptime, inbox placement, ranking placement, ad approval,
                  lead volume, call volume, or revenue outcomes.
                </li>
              </ul>
            </section>

            <section id="performance" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white">11. Performance Disclaimer</h2>
              <p className="mt-3">
                SNRG Labs does not guarantee specific rankings, traffic levels, consultations, conversions,
                appointments, closed revenue, or business growth. Results depend on many factors outside direct
                control, including offer quality, pricing, market conditions, competition, ad spend, sales
                responsiveness, platform policy, and client follow-up.
              </p>
            </section>

            <section id="cancellation" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white">12. Cancellation and Pause</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Client may cancel recurring services in writing.</li>
                <li>Project work already started remains non-refundable.</li>
                <li>
                  SNRG Labs may pause work for non-payment, abuse, missing access, or repeated approval delays.
                </li>
                <li>If a project sits inactive for more than 30 days, it may require re-scoping before restart.</li>
              </ul>
            </section>

            <section id="liability" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white">13. Limitation of Liability</h2>
              <p className="mt-3">
                To the maximum extent permitted by law, SNRG Labs is not liable for indirect, incidental, special,
                consequential, lost-profit, lost-data, or business interruption damages. Any liability is limited to
                the amount actually paid by the client to SNRG Labs for the specific service giving rise to the claim.
              </p>
            </section>

            <section id="security" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white">14. Security and Credential Use</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Client is responsible for maintaining strong passwords and enabling security features such as
                  two-factor authentication where available.
                </li>
                <li>
                  SNRG Labs is not responsible for breaches caused by client credential misuse, weak passwords, or
                  third-party platform failures.
                </li>
              </ul>
            </section>

            <section id="no-professional-advice" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white">15. No Professional Advice</h2>
              <p className="mt-3">
                SNRG Labs provides technical, operational, marketing, and implementation services, not legal, tax,
                accounting, insurance, or regulated professional advice.
              </p>
            </section>

            <section id="governing-law" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white">16. Governing Law</h2>
              <p className="mt-3">
                These Terms are governed by the laws of the State of Wyoming, without regard to its conflict of law
                principles.
              </p>
            </section>

            <section id="venue" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white">17. Venue</h2>
              <p className="mt-3">
                Any dispute arising out of or relating to these Terms shall be brought exclusively in the state or
                federal courts located in Sheridan County, Wyoming.
              </p>
            </section>

            <section id="contact" className="scroll-mt-24 pb-4">
              <h2 className="text-2xl font-bold text-white">18. Contact</h2>
              <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-zinc-200">
                <p>SNRG Labs</p>
                <p>cruz@snrglabs.com</p>
                <p>support@snrglabs.com</p>
                <p>30 N Gould St Ste R</p>
                <p>Sheridan, WY 82801</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
