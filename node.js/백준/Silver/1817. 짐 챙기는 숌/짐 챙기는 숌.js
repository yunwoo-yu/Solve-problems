const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [n, m] = input[0].split(' ').map(Number);
  const booksWeight = n ? input[1].split(' ').map(Number) : 0;
  let weight = 0;
  let result = 1;

  if (n) {
    for (let i = 0; i < n; i++) {
      weight += booksWeight[i];

      if (weight + booksWeight[i + 1] > m) {
        result++;
        weight = 0;
      }
    }
  } else {
    result = 0;
  }

  console.log(result);
});
