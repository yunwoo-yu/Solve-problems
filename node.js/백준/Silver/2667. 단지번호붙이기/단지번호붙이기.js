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
  const n = Number(input[0]);
  const graph = input.slice(1).map((el) => el.split("").map(Number));
  const result = [];

  const getIsValid = (y, x) => {
    if (x >= 0 && y >= 0 && x < n && y < n && graph[y][x]) {
      return true;
    }

    return false;
  };

  const bfs = (y, x) => {
    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0, 0];
    const queue = [[y, x]];
    let count = 1;

    graph[y][x] = 0;

    while (queue.length) {
      const [currentY, currentX] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = currentX + dx[i];
        const ny = currentY + dy[i];

        if (getIsValid(ny, nx)) {
          graph[ny][nx] = 0;
          queue.push([ny, nx]);

          count++;
        }
      }
    }

    return count;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j]) {
        result.push(bfs(i, j));
      }
    }
  }

  result.sort((a, b) => a - b);

  console.log(`${result.length}\n${result.join("\n")}`);
});
