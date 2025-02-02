require('dotenv').config();
 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
 
const app = express();
 
var corsOptions = {
  // TODO - Add concrete URLs
  origin: "*"
};
// enable CORS
app.use(cors(corsOptions));

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// database conection
const db = require("./models");

// TODO - Possibly remove following lines. Sync is now not necessary, because is made with the migrations.
// For explotation. Database is not dropped.
// db.sequelize.sync(); 

// Development only. Drops and re-sync db everytime the server starts.
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// API routes
require("./routes/bicycle.routes")(app);

module.exports = app;