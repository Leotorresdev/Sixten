import { CatalogItem } from "@/interfaces/Catalog";

// Número principal de WhatsApp en formato internacional (sin '+').
// Usuario proporcionó el número venezolano `04144016327` — en formato internacional es 58 414 4016327.
export const WHATSAPP_NUMBER = "584144016327"; // Venezuela (0414...)

// Número alternativo previo, se mantiene por si se necesita
export const LEGACY_WHATSAPP_NUMBER = "4144016327";

const DEFAULT_WHATSAPP_TEXT =
  "Hola. Vengo de la landing de Sixten y quiero consultar por sus relojes.";

export const siteConfig = {
  brandName: "Sixten",
  iconPath: "/icono.png",
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_WHATSAPP_TEXT
  )}`,
};

/**
 * Construye una URL de WhatsApp para cualquier número en formato internacional (sin '+').
 * Si no se pasa `numberOverride`, usa `WHATSAPP_NUMBER`.
 */
export function buildWhatsAppUrl(message: string, numberOverride?: string) {
  const number = numberOverride ?? WHATSAPP_NUMBER;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Helper para generar el mensaje por producto */
export function productInfoMessage(productName: string) {
  return `Hola, quiero información del modelo ${productName} que vi en la landing de Sixten.`;
}

export const catalogProducts: CatalogItem[] = [
  {
    id: "sixten-c01",
    name: "reloj arabe gris",
    price: 15.00,
    originalPrice: 48,
    imageUrl: "/modelos/caballero1.jpg",
  },
  {
    id: "sixten-c02",
    name: "SKMEI 2382",
    price: 21.50,
    originalPrice: 42,
    imageUrl: "/modelos/caballero2.jpg",
  },
  {
    id: "sixten-c03",
    name: "Curren 8458",
    price: 25.00,
    originalPrice: 50,
    imageUrl: "/modelos/caballero3.jpg",
  },
  {
    id: "sixten-c04",
    name: "Reloj arabe rosa",
    price: 15.00,
    originalPrice: 44,
    imageUrl: "/modelos/caballero4.jpg",
  },
  {
    id: "sixten-c05",
    name: "Reloj arabe blanco",
    price: 15.00,
    originalPrice: 38,
    imageUrl: "/modelos/caballero5.jpg",
  },
  {
    id: "sixten-c06",
    name: "Reloj arabe Blanco marfil",
    price: 15.00,
    originalPrice: 54,
    imageUrl: "/modelos/caballero6.jpg",
  },
  {
    id: "sixten-c07",
    name: "Reloj arabe negro",
    price: 15.00,
    originalPrice: 46,
    imageUrl: "/modelos/caballero7.jpg",
  },
  {
    id: "sixten-c08",
    name: "Daytona Rolex",
    price: 21.50,
    originalPrice: 52,
    imageUrl: "/modelos/caballero8.jpg",
  },
  {
    id: "sixten-c09",
    name: "Daytona Rolex",
    price: 21.50,
    originalPrice: 45,
    imageUrl: "/modelos/caballero9.jpg",
  },
  {
    id: "sixten-c10",
    name: "Daytona Rolex",
    price: 21.50,
    originalPrice: 40,
    imageUrl: "/modelos/caballero10.jpg",
  },
  {
    id: "sixten-c11",
    name: "Poedagar 930 reloj de cuarzo cara negra",
    price: 24.00,
    originalPrice: 40,
    imageUrl: "/modelos/caballero11.jpg",
  },
    {
    id: "sixten-c12",
    name: "Poedagar 613",
    price: 25.00,
    originalPrice: 40,
    imageUrl: "/modelos/caballero12.jpg",
  },
    {
    id: "sixten-c13",
    name: "Poedagar 930 reloj de cuarzo cara azul y correa de cuero",
    price: 24.00,
    originalPrice: 40,
    imageUrl: "/modelos/caballero13.jpg",
  },
    {
    id: "sixten-c14",
    name: "Poedagar 613 reloj cara blanca",
    price: 23.00,
    originalPrice: 40,
    imageUrl: "/modelos/caballero14.jpg",
  },
    {
    id: "sixten-c15",
    name: "Poedagar 613 reloj cuadrado cara negra",
    price: 25.00,
    originalPrice: 40,
    imageUrl: "/modelos/caballero15.jpg",
  },
];
