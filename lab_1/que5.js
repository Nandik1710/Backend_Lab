// Import the required modules
const http = require('http');
const fs = require('fs');

const port = 5000;

// Create the HTTP server
const server = http.createServer((request, response) => {
  
  const filePath = 'my-story.txt';

  fs.readFile(filePath, 'utf8', (error, data) => {
    
    if (error) {
      console.error(error);
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.end('Server Error: Could not read the file.');
      return;
    }
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(data);
  });
});
server.listen(port, () => {
  console.log(`Server is running and listening on http://localhost:${port}`);
  console.log('It will serve the contents of message.txt');
});