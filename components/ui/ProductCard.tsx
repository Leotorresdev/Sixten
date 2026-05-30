"use client";

import Image from "next/image";
import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { CatalogItem } from "@/interfaces/Catalog";
import { buildWhatsAppUrl, productInfoMessage } from "@/lib/site";

interface ProductCardProps {
  product: CatalogItem;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-VE", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}

function calculateDiscount(original: number, current: number): number {
  return Math.round(((original - current) / original) * 100);
}

export const ProductCard = memo(function ProductCard({ product }: ProductCardProps) {
  const discount = calculateDiscount(product.originalPrice, product.price);
  const productWhatsappUrl = buildWhatsAppUrl(productInfoMessage(product.name));

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      className="group relative flex h-full"
    >
      <div className="absolute -inset-0.5 rounded-[1.35rem] bg-gradient-to-br from-[var(--sixten-aqua)]/0 via-[var(--sixten-aqua)]/30 to-[var(--sixten-coral)]/28 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[1.35rem] border border-white/12 bg-gradient-to-b from-[var(--sixten-smoke)] via-[var(--sixten-black)] to-[#02040b] shadow-xl transition-all duration-500 group-hover:border-[var(--sixten-aqua)]/40 group-hover:shadow-[0_24px_70px_rgba(56,189,248,0.14)]">
        <div className="relative mx-3 mt-3 aspect-[4/4.55] overflow-hidden rounded-[1rem] bg-[var(--sixten-black)]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            quality={84}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--sixten-black)] via-transparent to-transparent opacity-70" />

          {discount > 0 && (
            <motion.div
              initial={{ scale: 0, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 190 }}
              className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[var(--sixten-coral)] to-[var(--sixten-champagne)] px-2.5 py-1"
            >
              <Sparkles size={10} className="text-[#171512]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#171512]">
                -{discount}%
              </span>
            </motion.div>
          )}

        </div>

        <div className="flex flex-grow flex-col px-4 pb-4 pt-3">
          <div className="mb-2.5 flex items-center gap-1.5">
            <div className="h-px w-6 bg-gradient-to-r from-[var(--sixten-aqua)]/70 to-transparent" />
            <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[var(--sixten-aqua)]/90">
              Coleccion 2026
            </span>
          </div>

          <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-[var(--sixten-aqua)]">
            {product.name}
          </h3>

          <div className="mt-auto flex items-end justify-between gap-3 pt-3.5">
            <div className="flex flex-col">
              <span className="text-2xl font-semibold tracking-tight text-[var(--sixten-aqua)]">
                {formatPrice(product.price)}
              </span>
            </div>

            <a
              href={productWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group/btn inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[var(--sixten-onyx)]/22 text-[var(--sixten-ivory)]/82 transition-all duration-300 hover:border-[var(--sixten-aqua)]/50 hover:bg-[var(--sixten-aqua)] hover:text-[#040712]"
              aria-label={`Consultar ${product.name}`}
            >
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover/btn:rotate-45"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
});
