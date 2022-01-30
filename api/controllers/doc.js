const db = require("../models");
const Document = db.doc;
const Op = db.Sequelize.Op;

// Create and Save a new documents
exports.createDocument = (req, res) => {
    // Validate request
  if (!req.body.titre) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Document
  const document = {
    titre: req.body.titre
  };

  // Save Document in the database
  Document.create(document)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the document."
      });
    });
  
};

// Retrieve all documents from the database.
exports.findAllDocuments = (req, res) => {
  const titre = req.query.titre;
  var condition = titre ? { titre: { [Op.like]: `%${titre}%` } } : null;

  Document.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving documents."
      });
    });  
};

// Find a single document with an id
exports.findOneDocument = (req, res) => {
  const id = req.params.id;

  Document.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find document with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving document with id=" + id
      });
    });  
};

// Update a document by the id in the request
exports.updateDocument = (req, res) => {
  const id = req.params.id;

  Document.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Document was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update document with id=${id}. Maybe document was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating document with id=" + id
      });
    });
};

// Delete a document with the specified id in the request
exports.deleteDocument = (req, res) => {
  const id = req.params.id;

  Document.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Document was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete document with id=${id}. Maybe document was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete document with id=" + id
      });
    });
  
};

// Delete all documents from the database.
exports.deleteAllDocuments = (req, res) => {
  Document.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Documents were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all documents."
      });
    })
  
};
