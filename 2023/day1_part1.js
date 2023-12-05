let fs = require("fs");

let data = fs.readFileSync("./2023/day1.txt", "utf-8").split("\n");

console.log(data.reduce((sum, string) => {
    let numbers = string.match(/\d/g);
    return sum += Number(`${string.match(/\d/g)[0]}${string.match(/\d/g).pop()}`)
}, 0));
