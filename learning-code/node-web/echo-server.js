const http = require('http');
const server = http.createServer();
 
// El servidor funciona con eventos
server.on('request', (request, response) => {
  if(request.method === 'POST' && request.url=='/echo'){
    let body = [];
    request.on('data', chunk => {
      body.push(chunk);
    })
    .on('end', () => {
      response.writeHead(200, {'Content-Type': 'text/plain'});
      body = Buffer.concat(body).toString();
      response.end(body);
    })
  } else {
    response.statusCode = 404;
    response.end();
  }
})

server.listen(8001);
console.log('Servidor en la URL http://localhost:8001');