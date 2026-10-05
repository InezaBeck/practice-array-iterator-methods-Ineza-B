// Adding and Removing Elements
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
fruits.shift();
fruits.unshift("grape");
console.log("fruits:", fruits);
console.log("");

// Query and Access
let colors = ["red", "blue", "green", "blue", "yellow"];
let includesResult = colors.includes("blue");
let firstIndex = colors.indexOf("blue");
let lastIndex = colors.lastIndexOf("blue");
console.log("Results:", [includesResult, firstIndex, lastIndex]);
console.log("");

// Combining Arrays
let teamA = ["Alice", "Bob"];
let teamB = ["Charlie", "Diana"];
let allTeams = teamA.concat(teamB);
allTeams.push("Eve");
console.log("allTeams:", allTeams);
console.log("");

// Extracting and Splicing
let numbers = [10, 20, 30, 40, 50];
let middleNumbers = numbers.slice(1, 3);
numbers.splice(3, 2, 60, 70);
console.log("middleNumbers:", middleNumbers);
console.log("numbers:", numbers);
console.log("");

// Sorting and Reversing
let scores = [85, 70, 95, 60, 75];
scores.sort((a, b) => a - b);
scores.reverse();
console.log("scores:", scores);