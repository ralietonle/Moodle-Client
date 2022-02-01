module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "1001pepi@Beaumonde",
    DB: "moodleclientdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };