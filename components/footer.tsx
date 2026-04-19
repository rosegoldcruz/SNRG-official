import Link from "next/link"

const productLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
]

const supportLinks = [
  { label: "Start Your Project", href: "/contact" },
  { label: "Call Now", href: "tel:+14803648205" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Services", href: "/services" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-background">

      {/* Globe watermark — blasted behind all footer content */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center"
      >
        {/* outer glow halo */}
        <div className="absolute h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.22)_0%,rgba(6,182,212,0.12)_45%,transparent_70%)] blur-3xl" />
        {/* the logo itself */}
        <img
          src="/snrg.svg"
          alt=""
          width={640}
          height={640}
          className="h-[640px] w-[640px] opacity-[0.28]"
          style={{ mixBlendMode: "screen", animation: "globe-drift 18s ease-in-out infinite alternate" }}
        />
      </div>

      <style>{`
        @keyframes globe-drift {
          0%   { transform: scale(1)    rotate(-1deg); opacity: 0.22; }
          50%  { transform: scale(1.05) rotate( 1deg); opacity: 0.32; }
          100% { transform: scale(1)    rotate(-1deg); opacity: 0.22; }
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border/60 bg-card/40 p-8 backdrop-blur-sm">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
                  <span className="text-sm font-bold text-background">S</span>
                </div>
                <span className="text-lg font-semibold tracking-tight font-mono">SNRG Labs</span>
              </Link>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                Revenue systems for businesses stuck in manual chaos.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Product</h3>
              <ul className="mt-4 space-y-2">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Support</h3>
              <ul className="mt-4 space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SNRG Labs. All rights reserved.
          </p>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            SNRG Labs builds revenue systems. Automation, telephony, lead systems, websites, follow-up, and conversion infrastructure.
          </p>
        </div>
      </div>
    </footer>
  )
}
