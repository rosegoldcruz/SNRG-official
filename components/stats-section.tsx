"use client"

import { useEffect, useState } from "react"

type Stat = {
  target: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { target: 42, suffix: "%", label: "faster lead response" },
  { target: 87, suffix: "%", label: "lead contact rate in first 5 minutes" },
  { target: 3, suffix: "x", label: "pipeline visibility" },
  { target: 24, suffix: "/7", label: "automated follow-up coverage" },
]

export function StatsSection() {
  const [values, setValues] = useState<number[]>(stats.map(() => 0))

  useEffect(() => {
    const duration = 1300
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setValues(stats.map((stat) => Math.floor(stat.target * progress)))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [])

  return (
    <section className="border-y border-border/40 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center lg:text-center">
              <p className="font-mono text-5xl font-bold tracking-tight">
                {values[index]}
                {stat.suffix}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
