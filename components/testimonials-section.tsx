"use client"

const testimonials = [
  {
    company: "G3 Home Remodel",
    quote:
      "SNRG cleaned up our lead flow, rebuilt our follow-up process, and made it easy for our team to track every opportunity from first call to signed job.",
    byline: "Todd Gentner, G3 Home Remodel",
  },
  {
    company: "Raw2Recruited",
    quote:
      "SNRG gave us a full operating system for inbound leads and client communication. We respond faster, miss less, and close with a lot more consistency.",
    byline: "Dylan Katzenburger, Raw2Recruited",
  },
  {
    company: "RefaceKit",
    quote:
      "What used to be scattered across texts and sticky notes is now organized, automated, and measurable. SNRG built a process we can actually scale.",
    byline: "Chris Montoya, RefaceKit",
  },
  {
    company: "Vulpine Homes",
    quote:
      "SNRG helped us tighten up our sales pipeline and follow-up cadence. We can now see exactly where deals stall and fix issues before revenue slips.",
    byline: "Michael Musonda, Vulpine Homes",
  },
  {
    company: "Freedom Kitchen and Bath",
    quote:
      "From intake to estimate to close, everything is smoother. SNRG set up the automations and reporting so we always know what is working.",
    byline: "Jim Galdea, Freedom Kitchen and Bath",
  },
  {
    company: "Renew Cabinets",
    quote:
      "As an installer partner, I needed cleaner communication and fewer dropped handoffs. SNRG made referrals, scheduling, and follow-up feel seamless.",
    byline: "Chris Botta, Renew Cabinets",
  },
  {
    company: "American MPS",
    quote:
      "SNRG put structure around our outreach and lead tracking so our team can move fast without losing visibility. It has been a major upgrade for operations.",
    byline: "Scott Topps, American MPS",
  },
  {
    company: "The Driftwoods AZ",
    quote:
      "SNRG helped us tighten response times and standardize follow-up, which made our pipeline easier to manage and improved conversion from inbound leads.",
    byline: "Michael Brown, The Driftwoods AZ",
  },
]

export function TestimonialsSection() {
  const items = [...testimonials, ...testimonials]

  return (
    <section className="py-16 border-y border-border/40 bg-card/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">
          Trusted by home service teams that need measurable revenue.
        </h2>

        <div className="relative mt-10 marquee">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

          <div className="overflow-hidden">
            <div className="marquee-track flex w-max gap-6 py-2">
              {items.map((item, index) => (
                <article
                  key={`${item.company}-${index}`}
                  className="group relative w-[85vw] max-w-[420px] overflow-hidden rounded-2xl border border-border/60 bg-[#141414] p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/20"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <p className="relative z-10 font-mono text-sm uppercase tracking-wider text-accent">{item.company}</p>
                  <p className="relative z-10 mt-4 text-sm leading-relaxed text-muted-foreground">“{item.quote}”</p>
                  <p className="relative z-10 mt-4 text-sm font-medium text-foreground">— {item.byline}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee-scroll 70s linear infinite;
          will-change: transform;
        }

        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}