import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Phone, CreditCard, LifeBuoy } from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
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
            <h1 className="text-4xl font-bold text-white mb-4">Support</h1>
            <p className="text-gray-300">
              Need help with your SNRG Labs service, account, or billing? Contact our support team and we will assist
              you as quickly as possible.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3 mb-4">
                <LifeBuoy className="h-5 w-5 text-white" />
                <h2 className="text-xl font-semibold text-white">Technical Support</h2>
              </div>
              <p className="text-gray-300 mb-3">
                For website, DNS, hosting, or Google Workspace support, please email us with your company name and a
                short description of the issue.
              </p>
              <a href="mailto:support@snrglabs.com" className="text-blue-400 hover:text-blue-300">
                support@snrglabs.com
              </a>
            </section>

            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="h-5 w-5 text-white" />
                <h2 className="text-xl font-semibold text-white">Billing Support</h2>
              </div>
              <p className="text-gray-300 mb-3">
                For subscription or payment questions related to Stripe charges, include the billing email and invoice
                details (if available).
              </p>
              <a href="mailto:support@snrglabs.com" className="text-blue-400 hover:text-blue-300">
                support@snrglabs.com
              </a>
            </section>
          </div>

          <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6 mt-6">
            <h2 className="text-xl font-semibold text-white mb-4">Direct Contact</h2>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                General: <a href="mailto:info@snrglabs.com" className="text-blue-400 hover:text-blue-300">info@snrglabs.com</a>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                Phone: <a href="tel:+14803648205" className="text-blue-400 hover:text-blue-300">(480) 364-8205</a>
              </p>
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6 mt-6">
            <h2 className="text-xl font-semibold text-white mb-4">Support Hours</h2>
            <p className="text-gray-300">Monday to Friday, 8:00 AM - 6:00 PM (Arizona Time)</p>
            <p className="text-gray-400 mt-2">
              Priority and emergency responses are available for active managed service clients according to service tier.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
