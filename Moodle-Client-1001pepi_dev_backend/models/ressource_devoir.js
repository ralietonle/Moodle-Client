module.exports = (sequelize, Sequelize) => {
  const Ressource_devoir = sequelize.define("ressource_devoir", {
    nom: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
    fichier: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
    },
    path: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    devoirId: {
      type: Sequelize.STRING,
      required: true,
      allowNull: true,
    },
  });

  return Ressource_devoir;
};
