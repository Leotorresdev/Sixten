"use client";

import Image from "next/image";
import { memo } from "react";
import { Camera, Clock, Globe, MapPin, MessageCircleMore } from "lucide-react";

import { siteConfig } from "@/lib/site";

const quickLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Coleccion", href: "#catalog" },
  { name: "Servicio", href: "#benefits" },
  { name: "Contacto", href: "#contact" },
] as const;

const socialLinks = [
  { name: "Instagram", icon: Camera, href: "#" },
  { name: "Web", icon: Globe, href: "#" },
  { name: "Contacto", icon: MessageCircleMore, href: siteConfig.whatsappUrl },
] as const;

export const FooterSection = memo(function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--sixten-aqua)]/12 bg-gradient-to-b from-[var(--sixten-black)] via-[#08122c] to-[#02040b] px-4 py-12 sm:px-6 lg:px-12">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-start gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-[var(--sixten-aqua)]/28 bg-[var(--sixten-onyx)]/22 p-0.5">
                <Image
                  src={siteConfig.iconPath}
                  alt="Logo de Sixten"
                  fill
                  className="rounded-xl object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[var(--sixten-aqua)]">
                  {siteConfig.brandName}
                </p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--sixten-ivory)]/65">
                  Relojes Sixten: diseño contemporáneo, acabados premium y atención directa. Piezas pensadas para destacar en cada ocasión.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[var(--sixten-onyx)]/18 text-[var(--sixten-ivory)]/62 transition-all duration-300 hover:border-[var(--sixten-aqua)]/40 hover:bg-[var(--sixten-aqua)]/10 hover:text-[var(--sixten-aqua)]"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--sixten-coral)]">
              Navegacion
            </h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--sixten-ivory)]/60 transition-colors hover:text-[var(--sixten-aqua)]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--sixten-coral)]">
              Contacto
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MessageCircleMore size={16} className="mt-0.5 text-[var(--sixten-aqua)]" />
                <a
                  href={siteConfig.whatsappUrl}
                  className="text-sm text-[var(--sixten-ivory)]/60 transition-colors hover:text-[var(--sixten-aqua)]"
                >
                  WhatsApp directo
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-[var(--sixten-aqua)]" />
                <span className="text-sm text-[var(--sixten-ivory)]/60">Atención personalizada</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-[var(--sixten-aqua)]" />
                <span className="text-sm text-[var(--sixten-ivory)]/60">Envíos seguros a todo el país</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--sixten-ivory)]/40">
            © {currentYear} {siteConfig.brandName}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
});
