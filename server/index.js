const express = require('express');
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

// json body parser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())

// Database Config
// const db = pgp(process.env.DATABASE_URL)

// send "hello" onto the webpage when you visit localhost:3001/hello
app.get('/hello', function(req, res){
  res.send('hello');
});

app.listen(process.env.PORT || 3001, () =>
  console.log('Express server is running on localhost:3001 ┬──┬◡ﾉ(°-°ﾉ)')
);