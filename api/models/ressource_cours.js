module.exports = (sequelize, Sequelize) => {
    const Ressource_cours = sequelize.define("ressource_cours", {
      nom: {
		type: Sequelize.STRING
	  },
	  type: {
		type: Sequelize.STRING
	  },
      fichier: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      sectionId: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      devoirId: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      }
    });
  
    return Ressource_cours;
  };