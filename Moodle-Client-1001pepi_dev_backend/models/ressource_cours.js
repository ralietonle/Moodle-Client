module.exports = (sequelize, Sequelize) => {
  const Ressource_cours = sequelize.define("ressource_cours", {
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
    sectionId: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
    },

    docId: {
      type: Sequelize.STRING,
      required: true,
      allowNull: true,
    },
  });

  return Ressource_cours;
};
