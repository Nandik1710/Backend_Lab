const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.txt');

const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });


readStream.on('data', (chunk) => {
  console.log('--- Received a chunk of data ---');
  console.log(chunk);
});

readStream.on('end', () => {
  console.log('--- End of file reached. ---');
});

readStream.on('error', (err) => {
  console.error('An error occurred:');
  if (err.code === 'ENOENT') {
    console.error(`Error: The file at '${filePath}' was not found.`);
  } else {
    console.error(err.message);
  }
});

console.log("Attempting to read from 'data.txt' using a stream...");
