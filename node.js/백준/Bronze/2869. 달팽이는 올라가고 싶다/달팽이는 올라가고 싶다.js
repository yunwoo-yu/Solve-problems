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
  const [a, b, v] = input[0].split(" ").map(Number);
  const day = (v - b) / (a - b);
  const result = Number.isInteger(day) ? day : Math.ceil(day);

  console.log(result);
});