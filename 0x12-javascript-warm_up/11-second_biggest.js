#!/usr/bin/node
const numbers = process.argv.slice(2).map(arg => parseInt(arg, 10));
numbers.sort((a, b) => b - a);
console.log(numbers.length < 2 ? 0 : numbers[1]);
