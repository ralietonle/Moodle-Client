// Import express
const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user');
 
 
// Route get all users
router.get('/', userCtrl.findAllUsers);
// Route create a new user
router.post('/', userCtrl.createUser);
// Route delete a user
router.delete('/', userCtrl.deleteUser); 

// export router
module.exports = router;