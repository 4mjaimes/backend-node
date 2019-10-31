const fs = require('fs');
const server = require('http').createServer();

server.on('request', (request, response) => {
  fs.readFile('./big', (error, data) =>{
    if(error)
      console.log('error', error)
    response.end(data);
  })
})

server.listen(3000);