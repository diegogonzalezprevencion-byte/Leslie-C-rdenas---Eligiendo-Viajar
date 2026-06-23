# Eligiendo Viajar - APP Web estática

Proyecto listo para subir a GitHub y desplegar en Vercel como sitio estático.

## Archivo principal

El archivo principal es:

- `index.html`

Ese archivo debe quedar en la raíz del repositorio, junto con:

- `destinos.html`
- `cotizar.html`
- `experiencias.html`
- `contacto.html`
- `politicas.html`
- `assets/`
- `vercel.json`
- `robots.txt`
- `sitemap.xml`

## Importante

Esta versión NO incluye `404.html` para evitar confusiones en GitHub.

También NO incluye:

- `package.json`
- `package-lock.json`
- `node_modules`
- Next.js
- React
- dependencias npm

Por lo tanto, Vercel no debería ejecutar `npm install` ni `next build`.

## Cómo subirlo correctamente

1. En GitHub, entra al repositorio.
2. Elimina todos los archivos antiguos del repositorio.
3. Sube solamente el contenido de este ZIP.
4. Verifica que `index.html` esté en la raíz del repositorio, no dentro de una carpeta.
5. En Vercel, usa el repositorio conectado.

## Configuración recomendada en Vercel

- Framework Preset: Other
- Root Directory: ./
- Build Command: vacío
- Install Command: vacío
- Output Directory: ./

El archivo `vercel.json` ya viene configurado para forzar sitio estático.
