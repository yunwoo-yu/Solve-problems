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
  const [k, n] = input[0].split(" ").map(Number);
  const lanCables = input.slice(1).map(Number);

  const getCablesMaxLength = (arr, target) => {
    let min = 1;
    let max = Math.max(...arr);

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);

      const cutCablesCounts = arr.reduce((acc, cur) => {
        return acc + Math.floor(cur / mid);
      }, 0);
      target <= cutCablesCounts ? (min = mid + 1) : (max = mid - 1);
    }
    return max;
  };
  console.log(getCablesMaxLength(lanCables, n));
});