import { SiteHeader } from "@/components/layout/SiteHeader";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CatalogSection } from "@/components/sections/CatalogSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { siteConfig } from "@/lib/site";
export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden text-(--sixten-ivory)">
      <SiteHeader />
      <main className="px-3 pt-20 sm:px-5 lg:px-8">
        <HeroSection
          eyebrow="Colección Sixten 2026"
          title="Relojes Sixten"
          headline="Diseño que marca presencia."
          description="Piezas seleccionadas para quien valora el detalle, la precisión y el estilo. Cada reloj combina materiales premium con una estética moderna: diseño pensado para durar y destacar. Compra directa por WhatsApp: consulta disponibilidad y personalización al instante."
          ctaLabel="Consultar por WhatsApp"
          ctaHref={siteConfig.whatsappUrl}
          images={[]}
          imageAlt="Colección Sixten"
        />
          
        <CatalogSection />
        <BenefitsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <FooterSection />
    </div>
  );
}
