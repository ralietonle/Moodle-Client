module.exports = (sequelize, Sequelize) => {
    const Cours = sequelize.define("cours", {
      nom: {
        type: Sequelize.STRING,
        required: true,
        unique: true
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      remoteId:{
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  
    return Cours;
  };