const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
  const n = +input[0];
  const stack = [];
  const targetSequence = input.slice(1);
  let count = 1;
  let result = [];

  for (let i = 0; i < n; i++) {
    const target = targetSequence[i];

    while (count <= +target) {
      stack.push(`${count}`);
      result.push("+");
      count++;
    }

    const lastElement = stack.pop();
    result.push(`-`);

    if (lastElement !== target) {
      result = ["NO"];
      break;
    }
  }

  console.log(result.join("\n"));
});
