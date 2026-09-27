#!/usr/bin/node

const dict = require('./101-data').dict;
const newDict = {};

Object.keys(dict).forEach((userId) => {
  const occurrence = dict[userId];

  if (newDict[occurrence] === undefined) {
    newDict[occurrence] = [];
  }

  newDict[occurrence].push(userId);
});

console.log(newDict);
