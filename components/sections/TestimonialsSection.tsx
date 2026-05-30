"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Quote, Star, UserCircle } from "lucide-react";

import { MotionReveal } from "@/components/ui/MotionReveal";

const testimonials = [
  {
    name: "Cliente Sixten",
    location: "Caracas",
    quote:
      "La presentacion del reloj se ve premium y el contacto por WhatsApp hace muy facil preguntar por disponibilidad.",
  },
  {
    name: "Comprador verificado",
    location: "Valencia",
    quote:
      "Me gusto que los modelos se ven claros, con precio visible y un estilo distinto al catalogo tradicional.",
  },
] as const;

export const TestimonialsSection = memo(function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative px-2 py-20 lg:py-28">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-[50%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--sixten-aqua)]/22 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal className="mx-auto mb-14 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--sixten-aqua)]/28 bg-[var(--sixten-aqua)]/10 px-4 py-1.5">
            <Star size={14} className="fill-[var(--sixten-aqua)] text-[var(--sixten-aqua)]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--sixten-aqua)]">
              Confianza
            </p>
          </div>

          <h2 className="mt-5 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Una marca que se siente
            <span className="bg-gradient-to-r from-[var(--sixten-champagne)] to-[var(--sixten-coral)] bg-clip-text text-transparent"> seria desde el primer vistazo</span>
          </h2>
        </MotionReveal>

        <div className="mx-auto grid max-w-5xl gap-5 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <MotionReveal key={testimonial.name} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-[var(--sixten-smoke)] via-[var(--sixten-black)] to-[#02040b] p-6 shadow-xl transition-all duration-500 hover:border-[var(--sixten-coral)]/32 sm:p-8"
              >
                <Quote className="absolute right-5 top-5 h-12 w-12 text-[var(--sixten-coral)]/18 sm:h-16 sm:w-16" strokeWidth={1.2} />
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={16}
                      className="fill-[var(--sixten-champagne)] text-[var(--sixten-champagne)]"
                    />
                  ))}
                </div>
                <p className="mt-5 text-base leading-7 text-[var(--sixten-ivory)]/85 sm:text-lg sm:leading-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--sixten-aqua)]/16 ring-1 ring-[var(--sixten-aqua)]/24">
                    <UserCircle size={20} className="text-[var(--sixten-aqua)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                      {testimonial.name}
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-[var(--sixten-ivory)]/50">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
});
