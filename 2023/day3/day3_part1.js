let fs = require("fs");

let data = fs.readFileSync("./2023/day3/day3.txt", "utf-8").split("\n").map(str => str.split(""));
console.log(data)
// for(let row = 0; row < data.length; row++){
//     for(let col = 0; col < row[0].length; col++){
        
//     }
// }