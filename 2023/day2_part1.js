let fs = require("fs");

let data = fs.readFileSync("./2023/day2.txt", "utf-8").split("\n");
let thresholds = { red: 12, green: 13, blue: 14 };

let filtered = data.filter(game => {
  let colors = game.match(/(\d+)\s(red|blue|green)/g);
  return colors.every(subgame => Number(subgame.split(' ')[0]) <= thresholds[subgame.split(' ')[1]])
})

console.log(filtered.map(game => Number(game.match(/Game\s(\d+)/)[1])).reduce((sum, game) => sum += game, 0))