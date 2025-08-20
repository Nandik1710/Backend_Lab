process.stdout.write('What is your name? ');
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Hello, ${name}!`);
  process.exit();
});
