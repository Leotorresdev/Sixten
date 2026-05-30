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
        <div className="relative mx-1 mt-1 aspect-[4/5.35] overflow-hidden rounded-[0.85rem] bg-[var(--sixten-black)] sm:mx-1.5 sm:mt-1.5 sm:aspect-[4/5.15] sm:rounded-[0.95rem] lg:aspect-[4/4.95]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            quality={88}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--sixten-black)]/75 via-transparent to-transparent opacity-45" />

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

        <div className="flex flex-grow flex-col px-2 pb-2 pt-1.5 sm:px-2.5 sm:pb-2.5 sm:pt-2">
          <div className="mb-1 flex items-center gap-1">
            <div className="h-px w-4 bg-gradient-to-r from-[var(--sixten-aqua)]/70 to-transparent sm:w-5" />
            <span className="text-[6px] font-semibold uppercase tracking-[0.18em] text-[var(--sixten-aqua)]/90 sm:text-[7px] sm:tracking-[0.22em]">
              Coleccion 2026
            </span>
          </div>

          <h3 className="line-clamp-2 min-h-[2rem] text-sm font-semibold leading-snug text-white transition-colors group-hover:text-[var(--sixten-aqua)] sm:min-h-0 sm:text-base lg:text-lg">
            {product.name}
          </h3>

          <div className="mt-auto flex flex-col gap-1.5 pt-1.5 sm:gap-2 sm:pt-2">
            <span className="text-base font-semibold tracking-tight text-[var(--sixten-aqua)] sm:text-lg">
              {formatPrice(product.price)}
            </span>

            <a
              href={productWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group/btn inline-flex min-h-8 w-full items-center justify-center gap-1.5 rounded-full border border-[var(--sixten-aqua)]/35 bg-gradient-to-r from-[var(--sixten-aqua)] via-[var(--sixten-silver)] to-[var(--sixten-champagne)] px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.14em] text-[#040712] shadow-[0_8px_22px_rgba(56,189,248,0.14)] transition-all duration-300 hover:shadow-[0_12px_28px_rgba(56,189,248,0.22)] sm:min-h-9 sm:gap-2 sm:px-3 sm:py-2 sm:text-[9px] sm:tracking-[0.18em]"
              aria-label={`Consultar ${product.name}`}
            >
              <MessageCircleMore className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
              <span>Consultar</span>
              <ArrowUpRight className="h-3 w-3 shrink-0 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 sm:h-3.5 sm:w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
});
