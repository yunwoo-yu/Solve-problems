const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  // 풀이
  const [n, m] = input[0].split(' ').map(Number);
  const sequence = input[1].split(' ').map(Number);
  let [start, end] = [0, 0];
  let result = 0;
  let sum = 0;

  while (true) {
    if (sum >= m) {
      sum -= sequence[start++];
    } else if (end === n) {
      break;
    } else {
      sum += sequence[end++];
    }

    if (sum === m) result++;
  }

  console.log(result);
});
