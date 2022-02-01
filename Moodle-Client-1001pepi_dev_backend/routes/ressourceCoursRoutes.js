const express = require("express");
const router = express.Router();
const courseCtrl = require("../controllers/ressource_cours");

router.post("/upload", courseCtrl.upload);
router.get("/files", courseCtrl.CoursesResources);
router.get("/files/:name", courseCtrl.download);

module.exports = router;
