const fs = require('fs');
const path = require('path');

const nonExistentFilePath = path.join(__dirname, 'non-existent-file.txt');

console.log(`Attempting to read from '${nonExistentFilePath}'...`);
const readStream = fs.createReadStream(nonExistentFilePath);
readStream.on('error', (err) => {
  console.error('--- An error was caught! ---');
  if (err.code === 'ENOENT') {
    console.error(`Error: The file at '${nonExistentFilePath}' was not found.`);
  } else {
    console.error('An unexpected error occurred:', err.message);
  }
});
readStream.on('data', (chunk) => {
  console.log('This will not be printed because an error occurs first.');
});

readStream.on('end', () => {
  console.log('This will also not be printed.');
});
