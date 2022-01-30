const db = require("../models");
const Cours = db.cours;
const Op = db.Sequelize.Op;

// Create and Save a new courses
exports.createCourse = (req, res) => {
    // Validate request
  if (!req.body.nom) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Course
  const cours = {
    nom: req.body.nom,
    description: req.body.description
  };

  // Save Course in the database
  Cours.create(cours)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the course."
      });
    });
  
};


//Retrieve all courses from the database.
exports.findAllCourses = (req, res) => {
  const nom = req.query.nom;
  var condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null;

  Cours.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving courses."
      });
    });  
};

// Find a single course with an id
exports.findOneCourse = (req, res) => {
  const id = req.params.id;

  Cours.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find course with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving course with id=" + id
      });
    });  
};

// Update a course by the id in the request
exports.updateCourse = (req, res) => {
  const id = req.params.id;

  Cours.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Course was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update course with id=${id}. Maybe course was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating course with id=" + id
      });
    });
};

// Delete a course with the specified id in the request
exports.deleteCourse = (req, res) => {
  const id = req.params.id;

  Cours.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Course was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete course with id=${id}. Maybe course was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete course with id=" + id
      });
    });
  
};

// Delete all courses from the database.
exports.deleteAllCourses = (req, res) => {
  Cours.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Courses were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all courses."
      });
    })
  
};
