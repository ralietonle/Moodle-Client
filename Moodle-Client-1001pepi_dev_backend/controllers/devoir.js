const db = require("../models");
const Devoir = db.devoir;
const Op = db.Sequelize.Op;

// Create and Save a new homeworks
exports.createHomework = (req, res) => {
    // Validate request
  if (!req.body.date_limite) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Homework
  const devoir = {
    enonce: req.body.enonce,
    date_limite: req.body.date_limite,
    etat: req.body.etat,
    remoteId: req.body.remoteId,
  };

  // Save Homework in the database
  Devoir.create(devoir)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the homework."
      });
    });
  
};

// Retrieve all homeworks from the database.
exports.findAllHomeworks = (req, res) => {
  const enonce = req.query.enonce;
  var condition = enonce ? { enonce: { [Op.like]: `%${enonce}%` } } : null;

  Devoir.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving homeworks."
      });
    });  
};

// Find a single homework with an id
exports.findOneHomework = (req, res) => {
  const id = req.params.id;

  Devoir.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find homework with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving homework with id=" + id
      });
    });  
};

// Update a homework by the id in the request
exports.updateHomework = (req, res) => {
  const id = req.params.id;

  Devoir.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Homework was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update homework with id=${id}. Maybe homework was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating homework with id=" + id
      });
    });
};

// Delete a homework with the specified id in the request
exports.deleteHomework = (req, res) => {
  const id = req.params.id;

  Devoir.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Homework was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete homework with id=${id}. Maybe homework was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete homework with id=" + id
      });
    });
  
};

// Delete all homeworks from the database.
exports.deleteAllHomeworks = (req, res) => {
  Devoir.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Homeworks were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all homeworks."
      });
    })
  
};
