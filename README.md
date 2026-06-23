# Eligiendo Viajar - APP-web estática corregida

Esta versión fue corregida para evitar el error de Vercel durante `npm install`.

## Cambio principal

El ZIP anterior estaba hecho en Next.js y llevaba un `package-lock.json` generado dentro del entorno de trabajo. Ese archivo podía contener rutas internas no accesibles desde Vercel. Por eso esta versión se entrega como sitio estático puro:

- No tiene `package.json`.
- No tiene `package-lock.json`.
- No requiere `npm install`.
- No requiere `npm run build`.
- Puede desplegarse directamente en Vercel como sitio estático.

## Cómo subir a GitHub y Vercel

1. Crea un repositorio nuevo o limpia el repositorio anterior.
2. Sube todos los archivos de esta carpeta a la raíz del repositorio.
3. En Vercel, importa el repositorio.
4. Framework Preset: `Other` o `Static` si Vercel lo muestra.
5. Build Command: dejar vacío.
6. Output Directory: dejar vacío o `.`.
7. Deploy.

## Importante si usas el repositorio anterior

Borra estos archivos si quedaron del proyecto anterior:

- `package.json`
- `package-lock.json`
- `node_modules`
- `.next`
- carpeta `app/`
- carpeta `components/`
- carpeta `data/`
- carpeta `lib/`

Si quedan esos archivos, Vercel puede volver a intentar ejecutar `npm install`.

## Edición rápida

- Textos y páginas: editar `index.html`, `destinos.html`, `cotizar.html`, `experiencias.html`, `contacto.html`, `politicas.html`.
- Colores y diseño: editar `assets/styles.css`.
- Destinos, precios y sitios: editar `assets/data.js`.
- Imágenes: reemplazar archivos en `assets/img/destinos/` y `assets/img/experiencias/` manteniendo los mismos nombres.
- WhatsApp: buscar `56900000000` y reemplazar por el número real.

## Contenido incluido

- 10 destinos turísticos nacionales de ejemplo.
- Valores referenciales por persona y grupo.
- Sitios a visitar por destino.
- Galería de experiencias de viajeros.
- Cotizador referencial interactivo.
- Diseño en tonos crema, verdes y amarillos pastel.
