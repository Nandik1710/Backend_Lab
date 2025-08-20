const fs = require('fs');
const path = require('path');
const outputPath = path.join(__dirname, 'Q2_output.txt');
const contentToWrite = 'Hello, Node.js!';
const writeStream = fs.createWriteStream(outputPath);

writeStream.write(contentToWrite, 'utf8');
writeStream.end();
writeStream.on('finish', () => {
  console.log(`Successfully wrote to '${outputPath}'`);
});
writeStream.on('error', (err) => {
  console.error('An error occurred while writing to the file:');
  console.error(err.message);
});
console.log("Attempting to write to 'output.txt' using a stream...");
