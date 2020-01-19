const express = require('express');
const app = express();
const bodyParser = require("body-parser"); //Node.js body parsing middleware
const pgp = require('pg-promise')(); //PostgreSQL interface for Node.js 
require("dotenv").config(); //Allows us to connect to our hidden environment variables

//Database Config - connect to our database
const db = pgp(process.env.DATABASE_URL) 

// json body parser middleware
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

// visit localhost:3001/info to test db connection, should return all users email in database
app.get('/info', function(req, res){
  db
  .any("SELECT * FROM users") //selects all the users from the db
  .then(function(data){
    let user_data = {
      users: data
    }
    res.json({ info: user_data }) //displays all the users onto our webpage
  })
});

app.listen(process.env.PORT || 3001, () =>
  console.log('Express server is running on localhost:3001 ┬──┬◡ﾉ(°-°ﾉ)')
)