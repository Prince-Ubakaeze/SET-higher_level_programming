#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request({ url, json: true }, function (error, response, body) {
  if (error) {
    console.log(error);
    return;
  }

  body.characters.forEach(function (characterUrl) {
    request({ url: characterUrl, json: true }, function (error, response, character) {
      if (error) {
        console.log(error);
      } else {
        console.log(character.name);
      }
    });
  });
});
