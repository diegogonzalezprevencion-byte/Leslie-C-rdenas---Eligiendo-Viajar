# Rutas Nativas Chile - App web para viajes nacionales

App-web desarrollada en **Next.js + TypeScript**, lista para subir a GitHub y desplegar en Vercel. Está pensada como base para un emprendimiento de viajes nacionales en Chile.

## Qué incluye

- Página inicial con estética pastel, crema, verde y amarillo.
- 10 destinos turísticos de ejemplo en Chile.
- Valores referenciales para personas y grupos.
- Sección de sitios a visitar por cada destino.
- Galería editable para experiencias de otros viajeros.
- Formulario de cotización con cálculo estimado.
- Botón flotante de WhatsApp.
- Páginas internas: Destinos, Cotizar, Contacto y Políticas.
- Imágenes SVG referenciales en `/public/destinos` y `/public/experiencias`.

## Cómo usar

1. Descomprime el ZIP.
2. Abre la carpeta en Visual Studio Code.
3. Instala dependencias:

```bash
npm install
```

4. Ejecuta en modo desarrollo:

```bash
npm run dev
```

5. Abre `http://localhost:3000`.

## Cómo editar datos principales

Edita el archivo:

```bash
data/destinations.ts
```

Ahí puedes cambiar:

- Nombre de destinos.
- Región y zona.
- Duración.
- Sitios a visitar.
- Incluye / no incluye.
- Precios individuales.
- Precios grupales.
- Mínimo de personas por grupo.
- Ruta de imágenes.
- Textos de experiencias.

## Cambiar WhatsApp y correo

Edita:

```bash
lib/format.ts
```

Busca esta línea y reemplaza por el número real:

```ts
const phone = "56912345678";
```

En las páginas y componentes puedes reemplazar `contacto@rutasnativas.cl` por el correo real del emprendimiento.

## Reemplazar imágenes

Puedes reemplazar los SVG por fotografías reales manteniendo el mismo nombre, o cambiar la ruta en `data/destinations.ts`.

Carpetas:

```bash
public/destinos
public/experiencias
```

## Subir a GitHub y Vercel

1. Crea un repositorio en GitHub.
2. Sube todos los archivos de esta carpeta.
3. Entra a Vercel.
4. Selecciona **New Project**.
5. Conecta el repositorio.
6. Framework detectado: **Next.js**.
7. Presiona **Deploy**.

## Nota

Los destinos, valores, textos e imágenes son referenciales/ficticios para maqueta inicial. Antes de usar comercialmente, reemplazar por información real, condiciones comerciales, políticas de reserva y fotografías autorizadas.
