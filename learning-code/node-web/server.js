const http = require('http');
const server = http.createServer();
 
// El servidor funciona con eventos
server.on('request', (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello world\n');
})

server.listen(8000);
console.log('Servidor en la URL http://localhost:8000');