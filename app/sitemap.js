const baseUrl = 'https://eligiendo-viajar.vercel.app';

export default function sitemap() {
  return ['', '/destinos', '/cotizar', '/experiencias', '/contacto', '/politicas'].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));
}
