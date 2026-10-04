#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request({ url: url, json: true }, function (error, response, body) {
  if (error) {
    console.log(error);
    return;
  }

  const completedTasks = {};

  body.forEach(function (task) {
    if (task.completed) {
      if (completedTasks[task.userId]) {
        completedTasks[task.userId]++;
      } else {
        completedTasks[task.userId] = 1;
      }
    }
  });

  console.log(completedTasks);
});
