import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-white mb-4">SNRG Labs Digital Infrastructure Subscription Terms</h1>
            <p className="text-gray-400">Effective Date: __________</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-gray-300">
              <p>
                By subscribing to SNRG Labs services, Client agrees to the following:
              </p>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Scope of Services</h2>
                <p className="mb-4">Subscription includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Website hosting & uptime monitoring</li>
                  <li>DNS and domain configuration management</li>
                  <li>Google Workspace email setup & support</li>
                  <li>Basic website updates (menus, hours, content edits)</li>
                  <li>Infrastructure oversight and technical coordination</li>
                </ul>
                <p className="mt-4">
                  Major redesigns, rebuilds, custom development, or advanced integrations are not included unless separately agreed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Ownership</h2>
                <p className="mb-2">
                  All domains, email accounts, hosting configurations, and digital assets remain the sole property of the Client.
                </p>
                <p>
                  SNRG Labs does not retain ownership of Client assets.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Payment Terms</h2>
                <p>
                  Subscription fees are defined at the time of checkout and may vary depending on service tier or scope. Billing is processed automatically via Stripe on a recurring monthly basis unless otherwise agreed in writing.
                </p>
                <p>
                  Failure to pay may result in suspension of management services. Client retains ownership of all digital assets.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Termination</h2>
                <p className="mb-4">Client may cancel at any time.</p>
                <p className="mb-2">Upon cancellation:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Administrative access is transferred</li>
                  <li>Ongoing management services cease</li>
                  <li>No assets are withheld</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Liability</h2>
                <p className="mb-4">SNRG Labs is not responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Third-party outages</li>
                  <li>Client credential misuse</li>
                  <li>Security issues caused by weak passwords</li>
                  <li>Platform-level failures beyond SNRG Labs control</li>
                </ul>
                <p className="mt-4">
                  Client agrees to enable two-factor authentication on all administrative accounts.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
