var request = require('request');

var l = 0;
var p = 200;
var number = Math.floor((l+p)/2);
var reqBody = "";

var sendNumber = function(n){
  request('http://localhost:3000/hello/'+ number, function(error,response,body){
    console.log("I choose " + number);
    if(!error && response.statusCode == 200){
      reqBody = body;
      if(reqBody === "you won"){
        console.log("I won, the number is " + number);
      } else if(reqBody === "the number is lower"){
          console.log(reqBody + ", changing p to " + number);
          p = number;
          number = Math.floor((l+p)/2);
          return sendNumber(number);
      } else if (reqBody === "the number is greater") {
          l = number;
          console.log(reqBody + ", changing l to " + number);
          number = Math.floor((l+p)/2);
          return sendNumber(number);
      }
    }
    else{
      console.log("connection error")
    }
    reqBody = body;
  });
};

request('http://localhost:3000/start', function(error,response,body){
  if(!error && response.statusCode == 200){
    console.log(body);
    sendNumber(number);
  }
});
