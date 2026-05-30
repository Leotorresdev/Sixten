"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, MessageCircleMore, X } from "lucide-react";
import { useState, useEffect, useCallback, type MouseEvent } from "react";
import { siteConfig } from "@/lib/site";
const navLinks = [
  { href: "#hero", label: "Inicio" },
  { href: "#catalog", label: "Colección" },
  { href: "#benefits", label: "Servicio" },
  { href: "#contact", label: "Contacto" },
] as const;
export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileMenuOpen]);

  const headerSolid = scrolled || mobileMenuOpen;

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  const handleMobileNavClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return;
      event.preventDefault();
      const targetId = href.slice(1);
      closeMobileMenu();
      document.body.style.overflow = "";
      window.setTimeout(() => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState(null, "", href);
        }
      }, 50);
    },
    [closeMobileMenu],
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] w-full transition-all duration-500 ${
        headerSolid
          ? "border-b border-[var(--sixten-aqua)]/10 bg-[var(--sixten-black)]/92 backdrop-blur-2xl shadow-[0_4px_40px_rgba(4,7,18,0.8)]"
          : "bg-transparent"
      }`}
    >
      {/* Accent line top */}
      <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[var(--sixten-aqua)]/55 to-transparent" />
       <div className="relative z-[101] mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
      <div className="flex h-[76px] items-center justify-between gap-6">
         <motion.a
            href="#hero"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className ="group relative flex items-center"
            aria-label="Ir al inicio"
          >
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[var(--sixten-aqua)]/15 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="relative h-[56px] w-[56px] overflow-hidden rounded-2xl ring-1 ring-white/10 transition-all duration-500 group-hover:ring-[var(--sixten-aqua)]/40 group-hover:shadow-[0_0_28px_rgba(56,189,248,0.22)]">
              <Image
                src="/icono.png"
                alt="Logo Sixten — Relojes Premium"
                fill
                loading="eager"
                priority
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="56px"
              />
            </div>
          </motion.a>
         <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.07, duration: 0.45 }}
                className="group/link relative px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--sixten-ivory)]/55 transition-colors duration-300 hover:text-[var(--sixten-champagne)]"
              >
                 {link.label}
                 <span className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--sixten-aqua)]/70 to-transparent transition-all duration-300 group-hover/link:w-4/5" />

              </motion.a>
            ))}
          </nav>
       <div className="hidden items-center gap-3 md:flex">
        <motion.a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 }}
               className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[var(--sixten-ivory)]/60 backdrop-blur-sm transition-all duration-300 hover:border-[#25D366]/35 hover:bg-[#25D366]/10 hover:text-[#25D366] hover:shadow-[0_0_18px_rgba(37,211,102,0.18)]"
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircleMore size={16} strokeWidth={1.8} />
            </motion.a>
            <div className="h-5 w-px bg-white/10" />
               <motion.a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.42 }}
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-2.5 text-[9px] font-bold uppercase tracking-[0.30em] text-[var(--sixten-black)] transition-all duration-300 hover:shadow-[0_8px_28px_rgba(56,189,248,0.30)] hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--sixten-champagne)] via-[var(--sixten-silver)] to-[var(--sixten-aqua)]" />
               <span className="relative">Realiza&nbsp;tu&nbsp;pedido</span>
            </motion.a>
       </div>
        <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="relative z-[102] inline-flex h-10 w-10 shrink-0 touch-manipulation items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[var(--sixten-ivory)]/70 backdrop-blur-sm transition-all hover:border-[var(--sixten-aqua)]/30 hover:text-[var(--sixten-aqua)] md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X size={18} strokeWidth={1.8} /> : <Menu size={18} strokeWidth={1.8} />}
          </button>
      </div>
       </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-[101] w-full border-t border-white/[0.06] bg-[var(--sixten-black)] md:hidden"
          >
            <nav
              aria-label="Navegación móvil"
              className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-1 px-5 py-6 sm:px-8"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={(event) => handleMobileNavClick(event, link.href)}
                  className="min-w-0 touch-manipulation rounded-lg px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--sixten-ivory)]/65 transition-colors hover:bg-white/[0.04] hover:text-[var(--sixten-champagne)] sm:tracking-[0.28em]"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-4 h-px w-full bg-white/[0.06]" />
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMobileMenu}
                className="mt-3 inline-flex w-full min-w-0 touch-manipulation items-center justify-center gap-2.5 rounded-full border border-[#25D366]/25 bg-[#25D366]/10 px-4 py-3.5 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-[#25D366] transition-all hover:bg-[#25D366]/18 sm:px-6 sm:text-[11px] sm:tracking-[0.22em]"
              >
                <MessageCircleMore size={16} strokeWidth={1.8} className="shrink-0" />
                <span className="min-w-0">Contactar por WhatsApp</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}