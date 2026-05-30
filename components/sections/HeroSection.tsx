"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Gem, ShieldCheck, Watch, Zap } from "lucide-react";

import { MotionReveal } from "@/components/ui/MotionReveal";
import { HeroSectionProps } from "@/interfaces/Hero";

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
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Evitar llamado síncrono a setState dentro del efecto (causa "cascading renders").
    // Programamos la activación en el siguiente frame o task para que no disparar renders encadenados.
    let id: number;
    if (typeof window !== "undefined" && typeof window.requestAnimationFrame === "function") {
      id = window.requestAnimationFrame(() => setMounted(true));
    } else {
      id = window.setTimeout(() => setMounted(true), 0);
    }
    return () => {
      if (typeof window !== "undefined" && typeof window.cancelAnimationFrame === "function") {
        window.cancelAnimationFrame(id);
      } else {
        clearTimeout(id);
      }
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative mt-4 overflow-hidden rounded-[2.25rem] border border-white/8 lg:mt-8"
    >
       {/* ── IMAGEN DE FONDO (publicidad.jpg) ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/publicidad.jpg"
          alt="Colección Sixten — Relojes de estilo premium"
          fill
          priority
          loading="eager"
          quality={90}
          // Aplicamos un filtro para aumentar brillo y saturación
          style={{ filter: "brightness(1.12) saturate(1.18)" }}
          className="object-cover object-center"
          sizes="100vw"
        />
            {/* Capas de oscurecimiento y color para que el texto sea legible (ligeramente atenuadas) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--sixten-black)]/88 via-[var(--sixten-black)]/60 to-[var(--sixten-black)]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--sixten-black)]/70 via-transparent to-[var(--sixten-black)]/18" />
        {/* Overlay de color azul platino sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(56,189,248,0.08),transparent_55%)]" />
      </div>
      {/* ── ANIMACIÓN PARALLAX DE LA IMAGEN ── */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden rounded-[2.25rem]"
        initial={{ scale: 1.08 }}
        animate={prefersReducedMotion ? { scale: 1 } : { scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        {/* Ken Burns: zoom lento permanente. Animación sólo en cliente montado. */}
        <motion.div
          className="absolute inset-0"
          animate={mounted && !prefersReducedMotion ? { scale: [1, 1.06] } : undefined}
          transition={mounted && !prefersReducedMotion ? { duration: 14, ease: "linear", repeat: Infinity, repeatType: "reverse" } : undefined}
        >
          <Image
            src="/publicidad.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            loading="eager"
            quality={90}
            className="object-cover object-center opacity-0"
            sizes="100vw"
          />
        </motion.div>
      </motion.div>
      {/* ── PARTÍCULAS DECORATIVAS ── */}
      {/* Partículas: siempre renderizadas en HTML (evita mismatches). Las animaciones se activan tras montaje. */}
      <>
        <motion.div
          className="pointer-events-none absolute right-[10%] top-[15%] z-10 h-2 w-2 rounded-full bg-[var(--sixten-aqua)]/60"
          animate={mounted && !prefersReducedMotion ? { y: [-8, 8], opacity: [0.4, 1, 0.4] } : undefined}
          transition={mounted && !prefersReducedMotion ? { duration: 3.2, repeat: Infinity, ease: "easeInOut" } : undefined}
        />
        <motion.div
          className="pointer-events-none absolute right-[25%] top-[60%] z-10 h-1.5 w-1.5 rounded-full bg-white/40"
          animate={mounted && !prefersReducedMotion ? { y: [6, -6], opacity: [0.3, 0.8, 0.3] } : undefined}
          transition={mounted && !prefersReducedMotion ? { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 } : undefined}
        />
        <motion.div
          className="pointer-events-none absolute right-[5%] bottom-[20%] z-10 h-1 w-1 rounded-full bg-[var(--sixten-aqua)]/50"
          animate={mounted && !prefersReducedMotion ? { y: [-4, 4], opacity: [0.5, 1, 0.5] } : undefined}
          transition={mounted && !prefersReducedMotion ? { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 } : undefined}
        />
      </>
      {/* ── CONTENIDO ── */}
      <div className="relative z-10 flex min-h-[620px] flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        {/* Línea lateral izquierda decorativa */}
        <div className="absolute left-0 top-0 h-full w-0.75 bg-gradient-to-b from-[var(--sixten-aqua)]/80 via-[var(--sixten-champagne)]/40 to-transparent" />
        <div className="max-w-2xl">
          {/* Eyebrow badge */}
          <MotionReveal>
            <div className="inline-flex items-center gap-2.5 self-start rounded-full border border-[var(--sixten-aqua)]/35 bg-[var(--sixten-aqua)]/10 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--sixten-aqua)] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--sixten-aqua)]" />
              </span>
                     <Zap size={12} className="text-[var(--sixten-aqua)]" strokeWidth={2.5} />
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[var(--sixten-aqua)]">
                {eyebrow}
              </p>
            </div>
          </MotionReveal>
           <MotionReveal delay={0.12}>
            <h1 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-[86px]">
              {title}
              <motion.span
                className="mt-2 block bg-gradient-to-r from-white via-[var(--sixten-silver)] to-[var(--sixten-aqua)] bg-clip-text text-transparent"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={mounted && !prefersReducedMotion ? { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] } : undefined}
                transition={mounted && !prefersReducedMotion ? { duration: 6, repeat: Infinity, ease: "linear" } : undefined}
              >
                {headline}
              </motion.span>
              </h1>
          </MotionReveal>
          {/* Descripción */}
          <MotionReveal delay={0.18}>
             <p className="mt-6 max-w-lg text-base leading-7 text-[var(--sixten-ivory)]/72 sm:text-lg sm:leading-8">
              {description}
            </p>
          </MotionReveal>
          {/* CTAs */}
          <MotionReveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
              <a
                href={ctaHref}
                target="_blank"
                rel="noreferrer"
                 className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-[#040712] transition-all hover:shadow-[0_16px_44px_rgba(56,189,248,0.30)] sm:w-auto sm:px-9"
              >
                 <span className="absolute inset-0 bg-gradient-to-r from-white via-[var(--sixten-silver)] to-[var(--sixten-aqua)]" />
                <span className="relative">{ctaLabel}</span>
                <ArrowRight size={18} className="relative transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#catalog"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[var(--sixten-aqua)]/35 bg-[var(--sixten-aqua)]/10 px-8 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--sixten-ivory)] backdrop-blur-sm transition-all hover:border-[var(--sixten-aqua)]/60 hover:bg-[var(--sixten-aqua)]/18 hover:text-white sm:w-auto sm:px-9"
              > Ver colección
              </a>
            </div>
          </MotionReveal>
          {/* Métricas */}
          <MotionReveal delay={0.34}>
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:gap-8">
              {metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.label}>
                    <div className="mb-1.5 flex items-center gap-2 text-[var(--sixten-aqua)]">
                      <Icon size={17} strokeWidth={1.5} />
                      <span className="text-2xl font-semibold text-white sm:text-3xl">
                        {metric.value}
                      </span>
                  </div>
                        <p className="text-[9px] uppercase tracking-[0.22em] text-[var(--sixten-ivory)]/45 sm:text-[10px]">
                      {metric.label}
                    </p>
                  </div>
                );
              })}
            </div>
          
           </MotionReveal>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-[var(--sixten-black)] to-transparent" />
    </section>
  );
}
