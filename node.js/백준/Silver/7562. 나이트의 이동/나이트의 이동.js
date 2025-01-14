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
  const testCaseCount = Number(input.shift());
  const startNodes = [];
  const endNodes = [];
  const graphs = [];
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];
  let result = "";

  const getIsValid = (y, x, graph) => {
    if (
      y >= 0 &&
      x >= 0 &&
      graph.length > y &&
      graph[0].length > x &&
      !graph[y][x]
    )
      return true;

    return false;
  };

  for (let i = 0; i < testCaseCount; i++) {
    const [len, start, end] = input
      .splice(0, 3)
      .map((el, idx) => (idx > 0 ? el.split(" ").map(Number) : +el));
    const graph = Array.from({ length: len }, () => Array(len).fill(0));

    graphs.push(graph);
    startNodes.push(start);
    endNodes.push(end);
  }

  const bfs = (startNode, endNode, graph) => {
    const [startY, startX] = startNode;
    const [endY, endX] = endNode;
    const queue = [[startY, startX, 0]];

    graph[startY][startX] = 1;

    while (queue.length) {
      const [currentY, currentX, moveCount] = queue.shift();

      if (endY === currentY && endX === currentX) return moveCount;

      moves.forEach(([dy, dx]) => {
        const ny = dy + currentY;
        const nx = dx + currentX;

        if (getIsValid(ny, nx, graph)) {
          graph[ny][nx] = 1;
          queue.push([ny, nx, moveCount + 1]);
        }
      });
    }
  };

  for (let i = 0; i < graphs.length; i++) {
    result += `${bfs(startNodes[i], endNodes[i], graphs[i])}\n`;
  }

  console.log(result);
});
