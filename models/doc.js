module.exports = (sequelize, Sequelize) => {
    const Doc = sequelize.define("doc", {
      titre: {
        type: Sequelize.STRING,
        required: true,
      }
    });
  
    return Doc;
  };