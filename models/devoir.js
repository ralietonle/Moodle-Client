module.exports = (sequelize, Sequelize) => {
    const Devoir = sequelize.define("devoir", {
      enonce: {
        type: Sequelize.STRING
      },
      date_limite: {
        type: Sequelize.STRING,
        required: true
      },
      etat: {
        type: Sequelize.DataTypes.ENUM('Non rendu', 'Rendu'),
        defaultValue: 'Non rendu',
      },
      remoteId:{
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  
    return Devoir;
  };