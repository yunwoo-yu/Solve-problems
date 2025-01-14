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
  const docs = input
    .slice(1)
    .map((el) => el.split(" "))
    .map((el) => el.map(Number));
  const result = [];
  for (let i = 0; i < docs.length; i += 2) {
    let [n, m] = docs[i];
    const documentsImportanceArray = [...docs[i + 1]];
    let count = 1;

    while (true) {
      const maxImportance = Math.max(...documentsImportanceArray);
      const printDoc = documentsImportanceArray.shift();

      if (printDoc < maxImportance) {
        documentsImportanceArray.push(printDoc);

        m === 0 ? (m = documentsImportanceArray.length - 1) : m--;
      } else if (printDoc === maxImportance) {
        if (m === 0) break;
        count++;
        m--;
      }
    }

    result.push(count);
  }

  console.log(result.join("\n"));
});