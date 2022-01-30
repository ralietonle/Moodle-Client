// Import express
const express = require('express');

const router = express.Router();

const sectionCtrl = require('../controllers/section');
 
 

// Route create a new section
router.post('/', sectionCtrl.createSection);
// Route get course by id
router.get('/', sectionCtrl.findAllSections);
// Route get course by id
router.get('/:id', sectionCtrl.findOneSection);
// Route update course by id
router.put('/:id', sectionCtrl.updateSection);
// Route delete course by id
router.delete('/:id', sectionCtrl.deleteSection);

// export router
module.exports = router;