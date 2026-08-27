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
    id: "sixten-curren-8388",
    name: "Curren 8388",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8388-black.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-8388-black.jpg" },
      { colorName: "Verde", colorCode: "#008000", imageUrl: "/curren-8388-green.jpg" }
    ]
  },
  {
    id: "sixten-curren-8399",
    name: "Curren 8399",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8399-silver.jpg",
    variants: [
      { colorName: "Plateado", colorCode: "#C0C0C0", imageUrl: "/curren-8399-silver.jpg" },
      { colorName: "Marrón", colorCode: "#8B4513", imageUrl: "/curren-8399-brown.jpg" }
    ]
  },
  {
    id: "sixten-curren-8398",
    name: "Curren 8398",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8398.jpg",
    variants: []
  },
  {
    id: "sixten-curren-8402",
    name: "Curren 8402",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8402-black.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-8402-black.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/curren-8402-blue.jpg" }
    ]
  },
  {
    id: "sixten-curren-8442",
    name: "Curren 8442",
    price: 42.00,
    originalPrice: 50,
    imageUrl: "/curren-8442-blue.jpg",
    variants: [
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/curren-8442-blue.jpg" },
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-8442-black.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/curren-8442-white.jpg" },
      { colorName: "Rojo", colorCode: "#FF0000", imageUrl: "/curren-8442-red.jpg" },
      { colorName: "Naranja", colorCode: "#FFA500", imageUrl: "/curren-8442-orange.jpg" }
    ]
  },
  {
    id: "sixten-curren-8427",
    name: "Curren 8427",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8427-black.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-8427-black.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/curren-8427-white.jpg" }
    ]
  },
  {
    id: "sixten-curren-8444",
    name: "Curren 8444",
    price: 30.00,
    originalPrice: 38,
    imageUrl: "/curren-8444.jpg",
    variants: []
  },
  {
    id: "sixten-curren-8452",
    name: "Curren 8452",
    price: 28.00,
    originalPrice: 38,
    imageUrl: "/curren-8452-white.jpg",
    variants: [
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/curren-8452-white.jpg" },
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-8452-black.jpg" },
      { colorName: "Verde", colorCode: "#008000", imageUrl: "/curren-8452-green.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/curren-8452-blue.jpg" }
    ]
  },
  {
    id: "sixten-curren-8106-white",
    name: "Curren 8106 White",
    price: 29.00,
    originalPrice: 38,
    imageUrl: "/curren-8106.jpg",
    variants: [
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/curren-8106.jpg" },
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-8106-black.jpg" }
    ]
  },
  {
    id: "sixten-curren-8322",
    name: "Curren 8322",
    price: 30.00,
    originalPrice: 38,
    imageUrl: "/curren-8322.jpg",
    variants: []
  },
  {
    id: "sixten-curren-8314",
    name: "Curren 8314",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8314.jpg",
    variants: []
  },
  {
    id: "sixten-curren-8291",
    name: "Curren 8291",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8291-black.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-8291-black.jpg" },
      { colorName: "Marrón Claro", colorCode: "#D2B48C", imageUrl: "/curren-8291-light-brown.jpg" },
      { colorName: "Marrón Oscuro", colorCode: "#654321", imageUrl: "/curren-8291-dark-brown.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/curren-8291-blue.jpg" },
      { colorName: "Celeste", colorCode: "#87CEEB", imageUrl: "/curren-8291-sky-blue.jpg" }
    ]
  },
  {
    id: "sixten-curren-8329",
    name: "Curren 8329",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8329.jpg",
    variants: []
  },
  {
    id: "sixten-curren-8324",
    name: "Curren 8324",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8324.jpg",
    variants: []
  },
  {
    id: "sixten-curren-8346",
    name: "Curren 8346",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8346.jpg",
    variants: []
  },
  {
    id: "sixten-curren-8375",
    name: "Curren 8375",
    price: 34.99,
    originalPrice: 44,
    imageUrl: "/curren-8375.jpg",
    variants: []
  },
  {
    id: "sixten-curren-8384",
    name: "Curren 8384",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8384-black.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-8384-black.jpg" },
      { colorName: "Marrón", colorCode: "#8B4513", imageUrl: "/curren-8384-brown.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/curren-8384-blue.jpg" }
    ]
  },
  {
    id: "sixten-poedagar-613-silver-case-leather",
    name: "Poedagar 613 silver case leather",
    price: 24.00,
    originalPrice: 30,
    imageUrl: "/poedagar-613-silver-case-blue-leather.jpg",
    variants: [
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/poedagar-613-silver-case-blue-leather.jpg" },
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/poedagar-613-silver-case-black-leather.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/poedagar-613-silver-case-white-leather.jpg" }
    ]
  },
  {
    id: "sixten-poedagar-613-rose-gold",
    name: "Poedagar 613 rose gold",
    price: 32.00,
    originalPrice: 40,
    imageUrl: "/poedagar-613-rose-gold-black.jpg",
    variants: [
      { colorName: "Oro Rosa/Negro", colorCode: "#000000", imageUrl: "/poedagar-613-rose-gold-black.jpg" },
      { colorName: "Oro Rosa/Azul", colorCode: "#1E3A8A", imageUrl: "/poedagar-613-rose-gold-blue.jpg" }
    ]
  },
  {
    id: "sixten-poedagar-928-leather-silver",
    name: "Poedagar 928 Leather",
    price: 36.00,
    originalPrice: 45,
    imageUrl: "/poedagar-928-leather-black-silver.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/poedagar-928-leather-black-silver.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/poedagar-928-leather-case-silver-blue.jpg" }
    ]
  },
  {
    id: "sixten-poedagar-928-leather-black",
    name: "Poedagar 928 Leather Black",
    price: 36.00,
    originalPrice: 45,
    imageUrl: "/poedagar-928-leather-case-black-black.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/poedagar-928-leather-case-black-black.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/poedagar-928-leather-black-blue.jpg" }
    ]
  },
  {
    id: "sixten-poedagar-825-monocolor",
    name: "Poedagar 825",
    price: 32.00,
    originalPrice: 40,
    imageUrl: "/poedagar-black.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/poedagar-black.jpg" },
      { colorName: "Dorado", colorCode: "#D4AF37", imageUrl: "/poedagar-825-gold.jpg" }
    ]
  },
  {
    id: "sixten-poedagar-825",
    name: "Poedagar 825",
    price: 34.00,
    originalPrice: 40,
    imageUrl: "/poedagar-825-gold-white.jpg",
    variants: [
      { colorName: "Dorado/Blanco", colorCode: "#FFFFFF", imageUrl: "/poedagar-825-gold-white.jpg" },
      { colorName: "Dorado/Verde", colorCode: "#14532D", imageUrl: "/poedagar-825-gold-green.jpg" },
      { colorName: "Dorado/Azul", colorCode: "#1E3A8A", imageUrl: "/poedagar-825-gold-blue.jpg" },
      { colorName: "Dorado/Negro", colorCode: "#000000", imageUrl: "/poedagar-825-gold-black.jpg" }
    ]
  },
  {
    id: "sixten-poedagar-893",
    name: "Poedagar 893",
    price: 35.00,
    originalPrice: 45,
    imageUrl: "/poedagar-893-black.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/poedagar-893-black.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/poedagar-893-white.jpg" }
    ]
  },
  {
    id: "sixten-poedagar-928",
    name: "Poedagar 928",
    price: 35.00,
    originalPrice: 45,
    imageUrl: "/poedagar-928-silver-black.jpg",
    variants: [
      { colorName: "Plata/Negro", colorCode: "#333333", imageUrl: "/poedagar-928-silver-black.jpg" }
    ]
  },
  {
    id: "sixten-poedagar-613-leather",
    name: "Poedagar 613 Leather",
    price: 28.00,
    originalPrice: 35,
    imageUrl: "/poedagar-613-leather-green.jpg",
    variants: [
      { colorName: "Verde", colorCode: "#14532D", imageUrl: "/poedagar-613-leather-green.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/poedagar-613-leather-blue.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/poedagar-613-leather-white.jpg" },
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/poedagar-613-leather-black.jpg" }
    ]
  },
  {
    id: "sixten-poedagar-613",
    name: "Poedagar 613",
    price: 29.60,
    originalPrice: 35,
    imageUrl: "/poedagar-613-white.jpg",
    variants: [
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/poedagar-613-white.jpg" },
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/poedagar-613-black.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/poedagar-613-blue.jpg" },
      { colorName: "Verde", colorCode: "#14532D", imageUrl: "/poedagar-613-green.jpg" }
    ]
  },
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
