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
  const numArr = input
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b);
  const result = [];
  const commandArr = ["average", "centerValue", "mode", "range"];
  const commandObj = {
    average: (arr) => {
      const average = arr.reduce((acc, cur) => acc + cur, 0);

      result.push(Math.round(average / arr.length));
    },
    centerValue: (arr) => {
      result.push(arr[Math.floor(arr.length / 2)]);
    },
    mode: (arr) => {
      const tempObj = {};

      arr.forEach((el) => (tempObj[el] = (tempObj[el] || 0) + 1));

      const max = Math.max(...Object.values(tempObj));

      const mode = Object.entries(tempObj)
        .filter((el) => el[1] === max)
        .sort((a, b) => a[0] - b[0]);

      result.push(mode.length !== 1 ? +mode[1][0] : +mode[0][0]);
    },
    range: (arr) => {
      result.push(arr[arr.length - 1] - arr[0]);
    },
  };

  commandArr.forEach((el) => {
    const exec = commandObj[el];

    exec(numArr);
  });

  console.log(result.join("\n"));
});
