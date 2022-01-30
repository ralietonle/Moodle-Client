const express = require('express');
const router = express.Router();
const homeworkCtrl = require('../controllers/ressource_devoir');
	
router.post('/upload', homeworkCtrl.upload);
router.get("/files", homeworkCtrl.getListFiles);
router.get("/files/:name", homeworkCtrl.download);


 



module.exports = router;