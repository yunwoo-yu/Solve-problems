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
  const [n, m] = input[0].split(" ").map(Number);
  const woods = input.slice(1)[0].split(" ").map(Number);

  const getWoodLength = (arr, target) => {
    let min = 1;
    let max = Math.max(...arr);
    let woodMaxLength = 0;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      const cutWoodSumLength = arr.reduce((acc, cur) => {
        cur = cur > mid ? cur - mid : 0;
        return acc + cur;
      }, 0);

      if (target === cutWoodSumLength) {
        woodMaxLength = mid;
        break;
      }

      if (target >= cutWoodSumLength) {
        max = mid - 1;
      } else {
        min = mid + 1;
        woodMaxLength = Math.max(woodMaxLength, mid);
      }
    }

    return woodMaxLength;
  };

  console.log(getWoodLength(woods, m));
});