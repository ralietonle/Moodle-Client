const dbConfig = require("../config/database.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.js")(sequelize, Sequelize);
db.cours = require("./cours.js")(sequelize, Sequelize);
db.devoir = require("./devoir.js")(sequelize, Sequelize);
db.doc = require("./doc.js")(sequelize, Sequelize);
db.section = require("./section.js")(sequelize, Sequelize);
db.ressource_cours = require("./ressource_cours.js")(sequelize, Sequelize);
db.ressource_devoir = require("./ressource_devoir.js")(sequelize, Sequelize);

//Associations

//Entre un cours et sa section
db.cours.hasMany(db.section, {
  as: "sections",
});
db.section.belongsTo(db.cours, {
  foreignKey: "courId",
  as: "cours",
});

//Entre les documents et leurs fichiers
db.doc.hasMany(db.ressource_cours, {
  as: "ressource_cours",
});
db.ressource_cours.belongsTo(db.doc, {
  foreignKey: "docId",
  as: "docs",
});

//Entre les documents et leurs sections
db.section.hasMany(db.ressource_cours, {
  as: "ressource_cours",
});
db.ressource_cours.belongsTo(db.section, {
  foreignKey: "sectionId",
  as: "sections",
});

//Entre les devoirs et leurs fichiers
db.devoir.hasMany(db.ressource_devoir, {
  as: "ressource_devoirs",
});
db.ressource_devoir.belongsTo(db.devoir, {
  foreignKey: "devoirId",
  as: "devoirs",
});

//Entre les devoirs et leurs cours
db.cours.hasMany(db.devoir, {
  as: "devoirs",
});
db.devoir.belongsTo(db.cours, {
  foreignKey: "coursId",
  as: "cours",
});

module.exports = db;
