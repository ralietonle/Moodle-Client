const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new user
exports.createUser = (req, res) => {
    // Validate request
  if (!req.body.username) {
    res.status(400).send({
      message: "username required!"
    });
    return;
  }

  if (!req.body.password) {
    res.status(400).send({
      message: "password required!"
    });
    return;
  }

  if (!req.body.token) {
    res.status(400).send({
      message: "token required!"
    });
    return;
  }

  // Create a user
  const user = {
    username: req.body.username,
    password: req.body.password,
    token: req.body.token,
  };

  // Save user in the database
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });
  
};


//Retrieve all users from the database.
exports.findAllUsers = (req, res) => {

  User.findAll()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving courses."
      });
    });  
};

// Delete all users
exports.deleteUser = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { },
    truncate: false
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete the user. Maybe the user was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete the user"
      });
    });
  
};
