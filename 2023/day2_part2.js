let fs = require("fs");

let data = fs.readFileSync("./2023/day2.txt", "utf-8").split("\n");

let colorsArr = data.map(game => game.match(/(\d+)\s(red|blue|green)/g));
let colorsObj = colorsArr.map(arr => arr.reduce((obj, color) => {
  if(Number(color.split(' ')[0]) > obj[color.split(' ')[1]]){
    obj[color.split(' ')[1]] = Number(color.split(' ')[0]);
  }
  return obj;
},{red:0, blue:0, green:0})).map(obj => Object.values(obj).reduce((produce,num) => produce *= num, 1)).reduce((sum, num) => sum+= num, 0)
console.log(colorsObj);



