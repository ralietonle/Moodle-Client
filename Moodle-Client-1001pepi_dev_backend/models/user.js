module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      username: {
        type: Sequelize.STRING,
        required: true,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        required: true,
      },
      token: {
        type: Sequelize.STRING,
        required: true
      },
    });
  
    return User;
  };