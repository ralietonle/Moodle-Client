const db = require("../models");
const Section = db.section;
const Op = db.Sequelize.Op;

// Create and Save a new section
exports.createSection = (req, res) => {
    // Validate request
  if (!req.body.nom) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Section
  const section = {
    nom: req.body.nom,
    courId: req.body.courId
  };

  // Save Section in the database
  Section.create(section)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the section."
      });
    });
  
};


// Find a single section with an id
exports.findOneSection = (req, res) => {
    const id = req.params.id;
  
    Section.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find section with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving section with id=" + id
        });
      });  
  };

// Delete a section with the specified id in the request
exports.deleteSection = (req, res) => {
    const id = req.params.id;
  
    Section.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Section was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete section with id=${id}. Maybe section was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete section with id=" + id
        });
      });
    
  };

exports.findAllSections = (req, res) => {
    const nom = req.query.nom;
    var condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null;
  
    Section.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving sections."
        });
      });  
  };

  // Update a section by the id in the request
exports.updateSection = (req, res) => {
    const id = req.params.id;
  
    Section.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Section was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update section with id=${id}. Maybe section was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating section with id=" + id
        });
      });
  };