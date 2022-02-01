module.exports = (sequelize, Sequelize) => {
    const Section = sequelize.define("section", {
      nom: {
        type: Sequelize.STRING,
        required: true,
      },
      courId: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      
    });
  
    return Section;
  };