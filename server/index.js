const express = require('express');
const app = express();

// send "hello" onto the webpage when you visit localhost:3001/hello

app.get('/hello', function(req, res){
  res.send('hello');
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);