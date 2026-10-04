#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request({ url: url, json: true }, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    let count = 0;

    body.results.forEach(function (film) {
      film.characters.forEach(function (character) {
        if (character.endsWith('/18/')) {
          count++;
        }
      });
    });

    console.log(count);
  }
});
