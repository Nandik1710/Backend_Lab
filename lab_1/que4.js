const fs = require('fs');

const filePath = 'my-story.txt';

console.log(`Attempting to read file: ${filePath}`);

fs.readFile(filePath, 'utf8', (error, data) => {

  if (error) {
    if (error.code === 'ENOENT') {
      console.error(`\nError: The file at '${filePath}' was not found.`);
    } else {
      console.error('\nAn unexpected error occurred:', error);
    }
    return;
  }
  console.log('\nFile read successfully! Contents:');
  console.log(data);
});

console.log('This message logs first, showing the code is non-blocking.');