const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models");

global.__basedir = __dirname;

db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
});

//Routeurs
const coursRoutes = require('./routes/coursRoutes');
const devoirRoutes = require('./routes/devoirRoutes');
const docRoutes = require('./routes/docRoutes');
const sectionRoutes = require('./routes/sectionRoutes');
const ressourceCoursRoutes = require('./routes/ressourceCoursRoutes');
const ressourceDevoirRoutes = require('./routes/ressourceDevoirRoutes');

var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

// for parsing multipart/form-data
//app.use(upload.array()); 
//app.use(express.static('resources'));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Moodle Client application." });
});

//Routes 
app.use('/api/cours', coursRoutes);
app.use('/api/devoir', devoirRoutes);
app.use('/api/doc', docRoutes);
app.use('/api/section', sectionRoutes);
app.use('/api/courses', ressourceCoursRoutes);
app.use('/api/homework', ressourceDevoirRoutes);
// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});