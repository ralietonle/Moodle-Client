// Import express
const express = require('express');

const router = express.Router();

const coursCtrl = require('../controllers/cours');
 
 
// Route get all courses
router.get('/', coursCtrl.findAllCourses);
// Route create a new course
router.post('/', coursCtrl.createCourse);
// Route get course by id
router.get('/:id', coursCtrl.findOneCourse);
//router.get('/:id', coursCtrl.findCourseById);
// Route update course by id
router.put('/:id', coursCtrl.updateCourse);
// Route delete course by id
router.delete('/:id', coursCtrl.deleteCourse);
// Route delete all course 
//router.delete('/', coursCtrl.deleteAllCourses) 

// export router
module.exports = router;