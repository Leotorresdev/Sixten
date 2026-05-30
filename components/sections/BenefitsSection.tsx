"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Headset, ShieldCheck, Truck } from "lucide-react";

import { MotionReveal } from "@/components/ui/MotionReveal";

const benefits = [
  {
    title: "Diseño Atemporal",
    description:
      "Formas y acabados que resisten modas pasajeras: relojes concebidos para acompañarte por años.",
    icon: ShieldCheck,
  },
  {
    title: "Calidad y Precisión",
    description:
      "Movimiento fiable y materiales selectos: cada pieza pasa controles que garantizan rendimiento y durabilidad.",
    icon: Truck,
  },
  {
    title: "Servicio Personalizado",
    description:
      "Asesoría directa por WhatsApp para resolver dudas, combinaciones y opciones de personalización.",
    icon: Headset,
  },
] as const;

export const BenefitsSection = memo(function BenefitsSection() {
  return (
    <section id="benefits" className="relative px-2 py-20 lg:py-28">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-[42%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--sixten-coral)]/24 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--sixten-coral)]/30 bg-[var(--sixten-coral)]/10 px-4 py-1.5">
            <CheckCircle2 size={14} className="text-[var(--sixten-coral)]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--sixten-coral)]">
              Experiencia de compra
            </p>
          </div>

          <h2 className="mt-5 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl text-center whitespace-nowrap">
            Elegancia
            <span className="inline bg-gradient-to-r from-white via-[var(--sixten-silver)] to-[var(--sixten-aqua)] bg-clip-text text-transparent">
              {" "}sin ruido
            </span>
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--sixten-ivory)]/70 sm:text-lg sm:leading-8">
            Sixten se diferencia con una paleta metalica, fondos grafito y llamados a la accion limpios.
          </p>
        </MotionReveal>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-[var(--sixten-smoke)] via-[var(--sixten-black)] to-[#02040b] p-6 shadow-xl transition-all duration-500 hover:border-[var(--sixten-aqua)]/36 hover:shadow-[0_22px_60px_rgba(56,189,248,0.12)] sm:p-8"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--sixten-coral)]/18 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--sixten-aqua)]/16 ring-1 ring-[var(--sixten-aqua)]/24 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={24} strokeWidth={1.5} className="text-[var(--sixten-aqua)]" />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-white sm:text-2xl">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--sixten-ivory)]/65 sm:mt-4 sm:text-base sm:leading-7">
                  {benefit.description}
                </p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-[var(--sixten-aqua)]/36 via-[var(--sixten-coral)]/22 to-transparent" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
});
