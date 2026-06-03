"use client";

import { ArrowRight, Gem, ShieldCheck, Watch, Zap } from "lucide-react";

import { MotionReveal } from "@/components/ui/MotionReveal";
import { HeroSectionProps } from "@/interfaces/Hero";
import { HeroVideoBackground } from "@/components/sections/HeroVideoBackground";

const metrics = [
  { label: "Modelos disponibles", value: "10+", icon: Watch },
  { label: "Atención directa", value: "24h", icon: ShieldCheck },
  { label: "Calidad premium", value: "100%", icon: Gem },
] as const;

export function HeroSection({
  eyebrow = "Colección 2026",
  title,
  headline,
  description,
  ctaLabel,
  ctaHref,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative mt-3 min-h-[min(88vh,720px)] overflow-hidden rounded-[1.45rem] border border-white/8 sm:min-h-[620px] sm:rounded-[2.25rem] lg:mt-8"
    >
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]">
        <HeroVideoBackground />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex min-h-[inherit] flex-col justify-end px-5 pb-10 pt-28 sm:justify-center sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--sixten-aqua)]/80 via-[var(--sixten-champagne)]/40 to-transparent sm:block" />

        <div className="max-w-2xl">
          <MotionReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--sixten-aqua)]/35 bg-[var(--sixten-black)]/50 px-3 py-2 backdrop-blur-md sm:gap-2.5 sm:px-4">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--sixten-aqua)] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--sixten-aqua)]" />
              </span>
              <Zap size={12} className="text-[var(--sixten-aqua)]" strokeWidth={2.5} />
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--sixten-aqua)] sm:text-[10px] sm:tracking-[0.34em]">
                {eyebrow}
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <h1 className="mt-5 max-w-[11ch] text-5xl font-semibold leading-[0.92] tracking-tight text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.5)] sm:mt-7 sm:max-w-none sm:text-7xl lg:text-[86px]">
              {title}
              <span className="mt-2 block bg-gradient-to-r from-white via-[var(--sixten-silver)] to-[var(--sixten-aqua)] bg-clip-text text-transparent">
                {headline}
              </span>
            </h1>
          </MotionReveal>

          <MotionReveal delay={0.16}>
            <p className="mt-5 max-w-md text-sm leading-6 text-[var(--sixten-ivory)]/85 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] sm:mt-6 sm:max-w-lg sm:text-lg sm:leading-8">
              {description}
            </p>
          </MotionReveal>

          <MotionReveal delay={0.22}>
            <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a
                href={ctaHref}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full px-7 py-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#040712] transition-all hover:shadow-[0_16px_44px_rgba(56,189,248,0.30)] sm:w-auto sm:px-9 sm:text-[11px] sm:tracking-[0.25em]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white via-[var(--sixten-silver)] to-[var(--sixten-aqua)]" />
                <span className="relative">{ctaLabel}</span>
                <ArrowRight
                  size={18}
                  className="relative transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#catalog"
                className="inline-flex w-full items-center justify-center rounded-full border border-[var(--sixten-aqua)]/35 bg-[var(--sixten-black)]/40 px-7 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sixten-ivory)] backdrop-blur-md transition-all hover:border-[var(--sixten-aqua)]/60 hover:bg-[var(--sixten-aqua)]/18 hover:text-white sm:w-auto sm:px-9 sm:text-[11px] sm:tracking-[0.25em]"
              >
                Ver colección
              </a>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.3}>
            <div className="mt-9 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:mt-12 sm:gap-8 sm:pt-8">
              {metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.label}>
                    <div className="mb-1.5 flex items-center gap-2 text-[var(--sixten-aqua)]">
                      <Icon size={15} strokeWidth={1.5} />
                      <span className="text-xl font-semibold text-white sm:text-3xl">
                        {metric.value}
                      </span>
                    </div>
                    <p className="text-[8px] uppercase tracking-[0.12em] text-[var(--sixten-ivory)]/55 sm:text-[10px] sm:tracking-[0.22em]">
                      {metric.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </MotionReveal>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-20 bg-gradient-to-t from-[var(--sixten-black)] to-transparent sm:h-24" />
    </section>
  );
}
