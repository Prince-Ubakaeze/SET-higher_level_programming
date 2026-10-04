#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

function printCharacters (characters, index) {
  if (index >= characters.length) {
    return;
  }

  request({ url: characters[index], json: true }, function (error, response, character) {
    if (error) {
      console.log(error);
    } else {
      console.log(character.name);
    }

    printCharacters(characters, index + 1);
  });
}

request({ url: url, json: true }, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    printCharacters(body.characters, 0);
  }
});
