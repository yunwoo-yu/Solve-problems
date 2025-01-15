const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [node, _, startNodeNumber] = input[0].split(" ").map(Number);
  const edges = input.slice(1).map((el) => el.split(" ").map(Number));
  const graph = Array.from({ length: node + 1 }, () => []);
  const visited = Array.from({ length: 2 }, () => Array(node + 1).fill(false));
  const result = [[], []];

  edges.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  graph.forEach((el) => el.sort((a, b) => a - b));

  const getIsValid = (target, number) => {
    if (target && !visited[number][target]) return true;

    return false;
  };

  const dfs = (startNode) => {
    visited[0][startNode] = true;
    result[0].push(startNode);

    for (const nextNode of graph[startNode]) {
      if (getIsValid(nextNode, 0)) dfs(nextNode);
    }
  };

  const bfs = (startNode) => {
    const queue = [startNode];

    visited[1][startNode] = true;
    result[1].push(startNode);

    while (queue.length) {
      const currentNodeNumber = queue.shift();

      for (const nextNode of graph[currentNodeNumber]) {
        if (getIsValid(nextNode, 1)) {
          queue.push(nextNode);
          result[1].push(nextNode);
          visited[1][nextNode] = true;
        }
      }
    }
  };

  dfs(startNodeNumber);
  bfs(startNodeNumber);

  console.log(`${result[0].join(" ")}\n${result[1].join(" ")}`);
});