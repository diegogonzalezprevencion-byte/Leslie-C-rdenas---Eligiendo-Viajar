const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
};

const server = http.createServer((req, res) => {
  const cleanUrl = decodeURIComponent(req.url.split('?')[0]);
  let filePath = cleanUrl === '/' ? '/index.html' : cleanUrl;

  const cleanRoutes = ['destinos', 'cotizar', 'experiencias', 'contacto', 'politicas'];
  if (cleanRoutes.includes(filePath.slice(1))) filePath += '.html';

  const absolutePath = path.join(process.cwd(), filePath);
  if (!absolutePath.startsWith(process.cwd())) {
    res.writeHead(403);
    res.end('Acceso no permitido');
    return;
  }

  fs.readFile(absolutePath, (err, data) => {
    if (err) {
      fs.readFile(path.join(process.cwd(), 'index.html'), (fallbackErr, fallbackData) => {
        if (fallbackErr) {
          res.writeHead(404);
          res.end('No encontrado');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(fallbackData);
      });
      return;
    }
    res.writeHead(200, { 'Content-Type': types[path.extname(absolutePath)] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(port, () => console.log(`Vista local disponible en http://localhost:${port}`));
