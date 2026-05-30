"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Flame, Sparkles, Watch } from "lucide-react";

import { MotionReveal } from "@/components/ui/MotionReveal";
import { ProductCard } from "@/components/ui/ProductCard";
import { catalogProducts } from "@/lib/site";

export const CatalogSection = memo(function CatalogSection() {
  return (
    <section id="catalog" className="relative px-2 py-20 lg:py-28">
      {/* Fondos decorativos */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--sixten-aqua)]/30 to-transparent" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-[var(--sixten-coral)]/10 blur-[100px]" />
        <div className="absolute bottom-10 left-0 h-80 w-80 rounded-full bg-[var(--sixten-aqua)]/12 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--sixten-aqua)]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* ── ENCABEZADO ── */}
        <MotionReveal className="mb-14">
          <div className="flex flex-col items-center gap-5 text-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--sixten-aqua)]/30 bg-[var(--sixten-aqua)]/10 px-5 py-2 backdrop-blur-sm"
            >
              <Watch size={13} className="text-[var(--sixten-aqua)]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--sixten-aqua)]">
                Colección Sixten 2026
              </p>
            </motion.div>

            {/* Título — enfocado en vender */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Diseños pensados para durar.
            </motion.h2>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="max-w-xl text-base leading-7 text-[var(--sixten-ivory)]/65 sm:text-lg"
            >
              Explora nuestra selección curada de {catalogProducts.length} relojes
            </motion.p>

            {/* Badges de confianza */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5">
                <Sparkles size={11} className="text-[var(--sixten-aqua)]" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--sixten-ivory)]/70">
                  Estilo premium
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5">
                <Flame size={11} className="text-[var(--sixten-coral)]" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--sixten-ivory)]/70">
                  Entrega garantizada
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5">
                <Watch size={11} className="text-[var(--sixten-aqua)]" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--sixten-ivory)]/70">
                  {catalogProducts.length} modelos
                </span>
              </div>
            </motion.div>
          </div>
        </MotionReveal>

        {/* ── GRID DE PRODUCTOS — todos en una sola sección ── */}
        <div className="grid auto-rows-fr grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {catalogProducts.map((product, index) => (
            <MotionReveal key={product.id} delay={index * 0.04}>
              <ProductCard product={product} />
            </MotionReveal>
          ))}
        </div>

      </div>
    </section>
  );
});
