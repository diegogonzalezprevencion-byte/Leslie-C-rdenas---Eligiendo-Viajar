# Eligiendo Viajar - APP-web Next.js

Proyecto corregido para GitHub + Vercel.

## Por qué esta versión corrige el error

Vercel estaba intentando ejecutar `next build`, pero el proyecto anterior no tenía `next` instalado. Esta versión sí es una app Next.js real e incluye en `package.json`:

- `next`
- `react`
- `react-dom`
- script `build`: `next build`

## Cómo subir a GitHub

1. Descomprime este ZIP.
2. Sube todos los archivos y carpetas a la raíz del repositorio.
3. Elimina archivos antiguos que no estén en este ZIP, especialmente:
   - `index.html`, `destinos.html`, `cotizar.html`, `experiencias.html`, `contacto.html`, `politicas.html` si quedaron de la versión estática anterior.
   - carpetas antiguas no usadas.
   - `package-lock.json` antiguo si GitHub no lo reemplaza.
4. En Vercel, usa Framework Preset: **Next.js**.
5. Build Command: `npm run build`.
6. Output Directory: dejar vacío.

## Editar destinos y valores

Modifica el archivo:

`data/destinos.js`

Ahí puedes cambiar:

- Nombre del destino.
- Región o zona.
- Descripción.
- Duración.
- Precio por persona.
- Precio para grupos.
- Sitios a visitar.
- Qué incluye.

## Páginas incluidas

- Inicio: `/`
- Destinos: `/destinos`
- Cotizar: `/cotizar`
- Experiencias: `/experiencias`
- Contacto: `/contacto`
- Políticas: `/politicas`

## Comandos locales

```bash
npm install
npm run dev
npm run build
```

## Nota

Los valores, destinos, textos comerciales, WhatsApp y correo son referenciales. Deben reemplazarse por información real del emprendimiento antes de publicar oficialmente.
