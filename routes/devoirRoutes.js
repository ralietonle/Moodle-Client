// Import express
const express = require('express');

const router = express.Router();

const devoirCtrl = require('../controllers/devoir');
 
 
// Route get all courses
router.get('/', devoirCtrl.findAllHomeworks);
// Route create a new course
router.post('/', devoirCtrl.createHomework);
// Route get course by id
router.get('/:id', devoirCtrl.findOneHomework);
// Route update course by id
router.put('/:id', devoirCtrl.updateHomework);
// Route delete course by id
router.delete('/:id', devoirCtrl.deleteHomework);
// Route delete all course 
//router.delete('/', devoirCtrl.deleteAllCourses) 

// export router
module.exports = router;