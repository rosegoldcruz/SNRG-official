import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
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
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Last updated: February 2026</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <p className="mb-4">
                  We collect information you provide directly to us when you contact us, subscribe to services,
                  request support, or complete a payment.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Business details relevant to onboarding and service delivery</li>
                  <li>Account, billing, and transaction-related details</li>
                  <li>Support communications and service requests</li>
                  <li>Technical data such as IP address, browser type, and analytics data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and manage digital infrastructure and support services</li>
                  <li>Process recurring subscription billing and payment records</li>
                  <li>Respond to support inquiries and troubleshoot technical issues</li>
                  <li>Improve website performance, reliability, and user experience</li>
                  <li>Send service updates, billing notices, and security communications</li>
                  <li>Comply with legal, regulatory, and contractual obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">How We Share Information</h2>
                <p className="mb-4">We do not sell personal information. We may share information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers that help us operate our business (for example: hosting and payment processors)</li>
                  <li>Professional advisors and legal authorities when required by law</li>
                  <li>Authorized client representatives as needed to deliver contracted services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Payments</h2>
                <p>
                  Payment transactions are processed by Stripe. We do not store full payment card details on our
                  servers. Please review Stripe&apos;s privacy policy for details on how payment information is handled.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
                <p>
                  We retain personal information only as long as necessary to provide services, maintain business and
                  financial records, resolve disputes, enforce agreements, and comply with legal obligations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                <p>
                  We use commercially reasonable administrative, technical, and organizational safeguards to protect
                  personal information. No method of transmission or storage is completely secure, and we cannot
                  guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Your Choices</h2>
                <p>
                  You may request to access, update, or delete personal information we hold about you, subject to
                  applicable law and legitimate business needs. To make a request, contact us at the email below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Policy Updates</h2>
                <p>
                  We may update this Privacy Policy from time to time. Updates will be posted on this page with a
                  revised effective date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:info@snrglabs.com" className="text-blue-400 hover:text-blue-300">
                    info@snrglabs.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
