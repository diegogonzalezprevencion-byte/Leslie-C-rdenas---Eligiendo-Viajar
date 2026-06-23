# Eligiendo Viajar - APP-web estática para Vercel

Esta versión fue preparada para evitar completamente errores de `npm install` en Vercel.

## Características técnicas

- Sitio estático puro: HTML + CSS + JavaScript.
- No usa Next.js.
- No usa React.
- No usa Node.js.
- No contiene `package.json`.
- No contiene `package-lock.json`.
- No requiere `npm install`.
- No requiere `npm run build`.
- Incluye `vercel.json` con:
  - `framework: null`
  - `installCommand: ""`
  - `buildCommand: null`
  - `outputDirectory: "."`

## Muy importante antes de subir a GitHub

Para que Vercel no siga leyendo configuraciones antiguas, borra TODO el contenido actual del repositorio y luego sube solamente los archivos de este ZIP.

Elimina especialmente estos archivos o carpetas si existen en tu repositorio antiguo:

- `package.json`
- `package-lock.json`
- `node_modules`
- `.next`
- `app`
- `pages`
- `components`
- `data`
- `lib`
- `next.config.js`
- `next.config.ts`
- `tsconfig.json`
- `tailwind.config.js`
- `postcss.config.js`

## Configuración recomendada en Vercel

En Project Settings > Build & Development Settings:

- Framework Preset: Other
- Install Command: vacío
- Build Command: vacío
- Output Directory: `.`

Aunque el panel tenga otra configuración guardada, el archivo `vercel.json` de esta entrega está preparado para forzar sitio estático.

## Editar contenido

- Textos principales: editar los archivos `.html`.
- Colores y estilos: editar `assets/styles.css`.
- Cotizador y destinos: editar `assets/script.js`.
- Imágenes: reemplazar los bloques `.image-slot` por etiquetas `<img>` o agregar imágenes dentro de `assets/img/`.

## Páginas incluidas

- `index.html`
- `destinos.html`
- `cotizar.html`
- `experiencias.html`
- `contacto.html`
- `politicas.html`
- `404.html`
