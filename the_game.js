var express = require('express');
var request = require('request');

var app = express();
var number;

app.get('/start', function (req, res) {
  res.send('Guess a number');
  number = Math.floor(Math.random()*200);
    console.log("number to guess: " + number);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/hello/:number', function (req, res) {
  if(req.params['number'] > number){
    res.send("the number is lower");
  } else if (req.params['number'] < number) {
    res.send("the number is greater");
  } else {
    res.send("you won");
  }
});
