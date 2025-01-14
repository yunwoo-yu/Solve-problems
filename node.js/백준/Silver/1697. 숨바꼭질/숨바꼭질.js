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
  const [nPos, kPos] = input[0].split(" ").map(Number);
  const MAX_POS = 100000;
  const visited = Array(MAX_POS).fill(false);

  const getIsValid = (target) => {
    if (target >= 0 && target <= MAX_POS && !visited[target]) return true;

    return false;
  };

  const bfs = (pos) => {
    const queue = [[pos, 0]];
    visited[pos] = true;

    while (queue.length) {
      const [currentPos, second] = queue.shift();
      const travelDistance = [currentPos + 1, currentPos - 1, currentPos * 2];

      if (currentPos === kPos) return second;

      for (const nextMove of travelDistance) {
        if (getIsValid(nextMove)) {
          visited[nextMove] = true;
          queue.push([nextMove, second + 1]);
        }
      }
    }
  };

  console.log(bfs(nPos));
});
