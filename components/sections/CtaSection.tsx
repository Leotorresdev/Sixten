"use client";

import { ArrowRight, Clock, MessageCircle, Send } from "lucide-react";

import { MotionReveal } from "@/components/ui/MotionReveal";
import { siteConfig } from "@/lib/site";

const features = [
  { icon: Clock, text: "Respuesta rapida" },
  { icon: Send, text: "Atencion directa" },
  { icon: MessageCircle, text: "Pedido por WhatsApp" },
] as const;

export function CtaSection() {
  return (
    <section id="contact" className="relative px-2 py-20 lg:py-28">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--sixten-coral)]/26 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <MotionReveal className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--sixten-coral)]/30 bg-[var(--sixten-coral)]/10 px-4 py-1.5">
            <Send size={14} className="text-[var(--sixten-coral)]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--sixten-coral)]">
              Contacto directo
            </p>
          </div>

          <h2 className="mt-5 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Elige el modelo y
            <span className="bg-gradient-to-r from-white via-[var(--sixten-silver)] to-[var(--sixten-aqua)] bg-clip-text text-transparent whitespace-nowrap">
              {" "}consultalo al instante
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-(--sixten-ivory)/70 sm:text-lg sm:leading-8">
            La landing esta preparada para llevar cada producto a una conversacion concreta.
          </p>
        </MotionReveal>

        <MotionReveal delay={0.18} className="mt-12">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative flex min-h-70 flex-col items-center justify-center overflow-hidden rounded-4xl border border-[var(--sixten-aqua)]/35 bg-gradient-to-br from-[var(--sixten-aqua)]/20 via-white/5 to-[var(--sixten-coral)]/18 p-8 text-center transition-all duration-500 hover:border-[var(--sixten-coral)]/50 hover:shadow-[0_24px_70px_rgba(56,189,248,0.14)] sm:p-12"
          >
            <div className="relative flex flex-col items-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-(--sixten-coral)/20 ring-1 ring-(--sixten-coral)/30 transition-transform group-hover:scale-110">
                <MessageCircle size={32} className="text-(--sixten-coral)" />
              </div>
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                Abrir conversacion por <span className="text-(--sixten-coral)">WhatsApp</span>
              </h3>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--sixten-coral)] px-8 py-4 text-sm font-bold uppercase tracking-[0.24em] text-[var(--sixten-black)] transition-all hover:bg-[var(--sixten-champagne)] hover:text-[var(--sixten-black)] hover:shadow-lg hover:scale-105">
                Contactar
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.text} className="flex items-center gap-2 text-(--sixten-ivory)/55">
                      <Icon size={14} className="text-(--sixten-aqua)" />
                      <span className="text-[10px] uppercase tracking-[0.2em]">
                        {feature.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </a>
        </MotionReveal>
      </div>
    </section>
  );
}
