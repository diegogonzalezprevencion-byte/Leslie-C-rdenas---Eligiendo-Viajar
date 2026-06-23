# Eligiendo Viajar - APP-web estatica

Sitio web estatico para un emprendimiento de viajes nacionales en Chile. Esta version esta corregida para GitHub + Vercel y evita el error de `No Next.js version detected`.

## Que cambio en esta version

- Se agrego `package.json` con script `vercel-build`.
- Se agrego `vercel.json` con `buildCommand` personalizado.
- No usa Next.js.
- No tiene dependencias externas.
- No requiere `next build`.
- Los archivos vienen pensados para quedar en la raiz del repositorio.

## Como subirlo correctamente a GitHub

1. Descomprime este ZIP.
2. En tu repositorio, elimina archivos antiguos de Next.js si existen:
   - `app/`
   - `components/`
   - `lib/`
   - `data/`
   - `.next/`
   - `next.config.js`
   - `next.config.mjs`
   - `next.config.ts`
   - `tsconfig.json`
   - `tailwind.config.js`
   - `postcss.config.js`
   - `package-lock.json` antiguo
3. Sube todos los archivos de esta carpeta directamente a la raiz del repositorio.
4. Confirma que en la raiz esten:
   - `index.html`
   - `package.json`
   - `vercel.json`
   - `assets/`

## Configuracion recomendada en Vercel

- Framework Preset: Other
- Build Command: `npm run vercel-build`
- Output Directory: `.`
- Install Command: `npm install`

Si el proyecto ya estaba creado como Next.js, entra a Settings > Build & Development Settings en Vercel y cambia Framework Preset a `Other`.

## Vista local

Puedes revisar el sitio localmente con:

```bash
npm run preview
```

Luego abre:

```txt
http://localhost:3000
```

## Donde editar contenidos

- Destinos, precios y sitios a visitar: `assets/data.js`
- Textos principales: archivos `.html`
- Colores y diseño: `assets/styles.css`
- Logica del cotizador y tarjetas: `assets/app.js`
- Imagenes referenciales: `assets/img/`

## Nota

Los destinos y valores son referenciales y editables. Las imagenes son placeholders SVG para reemplazarlas por fotografias reales del emprendimiento.
