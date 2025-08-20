const fs = require('fs');
const path = require('path');
const inputPath = path.join(__dirname, 'input.txt');
const outputPath = path.join(__dirname, 'output.txt');

const readStream = fs.createReadStream(inputPath);
const writeStream = fs.createWriteStream(outputPath);

readStream.on('error', (err) => {
  console.error('An error occurred with the readable stream:');
  if (err.code === 'ENOENT') {
    console.error(`Error: The input file at '${inputPath}' was not found.`);
  } else {
    console.error(err.message);
  }
});

writeStream.on('error', (err) => {
  console.error('An error occurred with the writable stream:');
  console.error(err.message);
});

console.log(`Piping data from '${inputPath}' to '${outputPath}'...`);
readStream.pipe(writeStream);

writeStream.on('finish', () => {
  console.log('Piping complete. Data has been successfully written.');
});
