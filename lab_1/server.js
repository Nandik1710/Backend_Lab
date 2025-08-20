const http = require('http');

const port = 3000;

const server = http.createServer((request, response) => {

  response.writeHead(200, { 'Content-Type': 'text/html' });

  
  response.write('<h1>Hello from my Node.js Server!</h1>');
  response.write('<p>You have successfully received a response.</p>');
  response.write(`<p>You requested the URL: ${request.url}</p>`);

  response.end();
});

server.listen(port, () => {
  console.log(`Server is running and listening on http://localhost:${port}`);
});