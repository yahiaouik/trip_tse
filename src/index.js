import express from 'express';
import mysql from'mysql'
import bodyParser from 'body-parser'
import * as  userRequest from "/home/kenza/Projets/trip_server/src/Application/userRequest"
console.log(userRequest.router);

var app = express();

//middleware pour parser les requetes
app.use('/message', bodyParser.urlencoded({extended: true}));


//app.use('/user', require("./Application/userRequest").router);
//app.use('/trip', require("./Application/tripRequest").router);

// Ecoute sur le port 1234
app.listen(1234, function() {
    console.log('Application is listening on port 1234');
  });

var con = mysql.createConnection({
  host: "localhost:3306",
  user: "kenza",
  password: "Ky15.M8.A28"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
})


