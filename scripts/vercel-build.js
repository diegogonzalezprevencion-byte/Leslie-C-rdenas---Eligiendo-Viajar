const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'index.html',
  'destinos.html',
  'cotizar.html',
  'experiencias.html',
  'contacto.html',
  'politicas.html',
  'assets/styles.css',
  'assets/app.js',
  'assets/data.js'
];

const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(process.cwd(), file)));

if (missing.length > 0) {
  console.error('Faltan archivos necesarios para desplegar:');
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

console.log('Sitio estatico validado correctamente. No se requiere compilacion Next.js.');
