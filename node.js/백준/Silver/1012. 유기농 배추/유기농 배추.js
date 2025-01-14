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
  const testCase = input.shift();
  const graphs = [];
  const moves = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  const result = [];

  for (let i = 0; i < testCase; i++) {
    const [x, y, elementLength] = input.shift().split(" ").map(Number);
    const edges = input
      .splice(0, elementLength)
      .map((el) => el.split(" ").map(Number));
    const graph = Array.from({ length: y }, () => Array(x).fill(0));

    edges.forEach(([x, y]) => {
      graph[y][x] = 1;
    });

    graphs.push(graph);
  }

  const getIsValid = (y, x, idx) => {
    if (
      x >= 0 &&
      y >= 0 &&
      x < graphs[idx][0].length &&
      y < graphs[idx].length &&
      graphs[idx][y][x]
    ) {
      return true;
    }
    return false;
  };

  const bfs = (y, x, testCaseIdx) => {
    const queue = [[y, x]];

    graphs[testCaseIdx][y][x] = 0;

    while (queue.length) {
      const [currentY, currentX] = queue.shift();

      moves.forEach(([dy, dx]) => {
        const [ny, nx] = [currentY + dy, currentX + dx];

        if (getIsValid(ny, nx, testCaseIdx)) {
          graphs[testCaseIdx][ny][nx] = 0;
          queue.push([ny, nx]);
        }
      });
    }
  };

  for (let i = 0; i < graphs.length; i++) {
    let count = 0;

    for (let j = 0; j < graphs[i].length; j++) {
      for (let k = 0; k < graphs[i][0].length; k++) {
        if (graphs[i][j][k]) {
          bfs(j, k, i);

          count++;
        }
      }
    }

    result.push(count);
  }

  console.log(result.join("\n"));
});
