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
  const graph = input.slice(1).map((el) => el.split("").map(Number));
  const moves = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const getIsValid = (y, x) => {
    if (y >= 0 && x >= 0 && y < n && x < m && graph[y][x]) return true;

    return false;
  };

  const bfs = () => {
    const queue = [[0, 0, 1]];

    graph[0][0] = 0;

    while (queue.length) {
      const [currentY, currentX, curMoveNum] = queue.shift();

      if (currentY === n - 1 && currentX === m - 1) return curMoveNum;

      moves.forEach(([dy, dx]) => {
        const [ny, nx] = [dy + currentY, dx + currentX];

        if (getIsValid(ny, nx)) {
          graph[ny][nx] = 0;
          queue.push([ny, nx, curMoveNum + 1]);
        }
      });
    }
  };

  console.log(bfs());
});