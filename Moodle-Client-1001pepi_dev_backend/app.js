const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const db = require("./models");

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

//Routeurs
const coursRoutes = require('./routes/coursRoutes');

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
app.use("/",(req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
 });

//Routes pour les cours
app.use('/api/cours', coursRoutes);

module.exports = app;