export const dynamic = "force-static";

import type { MetadataRoute } from "next";

const baseUrl = "https://tu-dominio.cl";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/destinos", "/agenda", "/contacto", "/politicas"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));
}
