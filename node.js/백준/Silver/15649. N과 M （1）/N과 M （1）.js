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

  const dfs = (num) => {
    if (num === m) {
      result += `${temp.join(' ')}\n`;
    }

    for (let i = 1; i <= n; i++) {
      if (!checkVisits[i]) {
        checkVisits[i] = true;
        temp.push(i);

        dfs(num + 1);

        temp.pop();
        checkVisits[i] = false;
      }
    }
  };

  dfs(0);

  console.log(result);
});