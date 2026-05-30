"use client";

import Image from "next/image";
import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircleMore, Sparkles } from "lucide-react";

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

      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[1.15rem] border border-white/12 bg-gradient-to-b from-[var(--sixten-smoke)] via-[var(--sixten-black)] to-[#02040b] shadow-xl transition-all duration-500 group-hover:border-[var(--sixten-aqua)]/40 group-hover:shadow-[0_24px_70px_rgba(56,189,248,0.14)] sm:rounded-[1.35rem]">
        <div className="relative mx-2.5 mt-2.5 aspect-[4/4.65] overflow-hidden rounded-[0.9rem] bg-[var(--sixten-black)] sm:mx-3 sm:mt-3 sm:rounded-[1rem]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            quality={84}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--sixten-black)] via-transparent to-transparent opacity-68" />

          {discount > 0 && (
            <motion.div
              initial={{ scale: 0, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 190 }}
              className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[var(--sixten-coral)] to-[var(--sixten-champagne)] px-2 py-0.5 sm:left-3 sm:top-3 sm:px-2.5 sm:py-1"
            >
              <Sparkles size={10} className="text-[#171512]" />
              <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#171512] sm:text-[9px]">
                -{discount}%
              </span>
            </motion.div>
          )}

        </div>

        <div className="flex flex-grow flex-col px-3 pb-3 pt-3 sm:px-4 sm:pb-4">
          <div className="mb-2.5 flex items-center gap-1.5">
            <div className="h-px w-6 bg-gradient-to-r from-[var(--sixten-aqua)]/70 to-transparent" />
            <span className="text-[7px] font-semibold uppercase tracking-[0.22em] text-[var(--sixten-aqua)]/90 sm:text-[8px] sm:tracking-[0.28em]">
              Coleccion 2026
            </span>
          </div>

          <h3 className="min-h-[2.4rem] text-base font-semibold leading-tight text-white transition-colors group-hover:text-[var(--sixten-aqua)] sm:min-h-0 sm:text-xl">
            {product.name}
          </h3>

          <div className="mt-auto flex flex-col gap-3 pt-3">
            <div className="flex flex-col">
              <span className="text-xl font-semibold tracking-tight text-[var(--sixten-aqua)] sm:text-2xl">
                {formatPrice(product.price)}
              </span>
            </div>

            <a
              href={productWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group/btn inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[var(--sixten-aqua)]/35 bg-gradient-to-r from-[var(--sixten-aqua)] via-[var(--sixten-silver)] to-[var(--sixten-champagne)] px-3 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#040712] shadow-[0_10px_28px_rgba(56,189,248,0.16)] transition-all duration-300 hover:shadow-[0_14px_34px_rgba(56,189,248,0.26)] sm:text-[11px] sm:tracking-[0.22em]"
              aria-label={`Consultar ${product.name}`}
            >
              <MessageCircleMore size={15} className="shrink-0" />
              <span>Consultar</span>
              <ArrowUpRight size={15} className="shrink-0 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
});
