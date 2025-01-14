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
  const checkVisits = Array.from({ length: n }, () => false);
  const temp = [];
  let result = '';

  const dfs = (count, start) => {
    if (count === m) {
      result += `${temp.join(' ')}\n`;
    } else {
      for (let i = start; i <= n; i++) {
        if (!checkVisits[i]) {
          checkVisits[i] = true;
          temp.push(i);

          dfs(count + 1, i);

          checkVisits[i] = false;
          temp.pop();
        }
      }
    }
  };

  dfs(0, 1);

  console.log(result);
});
