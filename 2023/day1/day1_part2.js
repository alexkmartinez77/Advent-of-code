let fs = require("fs");

let data = fs.readFileSync("./2023/day1/day1.txt", "utf-8").split("\n");


/*console.log(data.reduce((sum, string) => {
    let dictionary = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5, 
        six: 6,
        seven: 7,
        eight: 8, 
        nine: 9,
        ten: 10
    }
    let numbers = string.replace(/one|two|three|four|five|six|seven|eight|nine/g, string => dictionary[string]).match(/\d/g).join('');
    console.log(`${numbers.match(/\d/g)[0]}${numbers.match(/\d/g).pop()}`)
    return sum += Number(`${numbers.match(/\d/g)[0]}${numbers.match(/\d/g).pop()}`)
}, 0));*/

let numbersArray = data.map(weatherMachine);
console.log(numbersArray);


function weatherMachine(n) {
    let newArray = [];
    for (let i = 0; i < n.length; i++) {
        let first = n.slice(i).match(/one|two|three|four|five|six|seven|eight|nine|\d/);
        newArray.push(first);
    }
    let dictionary = {
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
        };
 const result = newArray.join('').replace((/one|two|three|four|five|six|seven|eight|nine/g), (num) => dictionary [num]);
 const finalResult = result[0] + result[result.length - 1];
 return parseInt(finalResult);
}


const initialValue = 0;
const sumWithInitial = numbersArray.reduce(
  (sum, currentValue) => sum + currentValue,
  initialValue,
);

console.log(sumWithInitial);


