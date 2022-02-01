module.exports = (sequelize, Sequelize) => {
    const Ressource_devoir = sequelize.define("ressource_devoir", {
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
      docId: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      }
      
    });
  
    return Ressource_devoir;
  };