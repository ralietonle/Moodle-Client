const fs = require("fs");
const baseUrl = "http://localhost:3000/api/courses/files/";
const db = require("../models");
const Fichierc = db.ressource_cours;

const uploadFile = require("../config/uploadCours");

const upload = async (req, res) => {
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      res.status(400).send({ message: "Please upload a file!" });
    } else {
      // Create a file
      const ressource_cours = {
        nom: req.file.originalname,
        type: req.file.type,
        fichier: baseUrl + req.file.originalname,
        path: req.file.path,
        docId: req.body.docId,
        sectionId: req.body.sectionId,
      };

      // Save file in the database
      Fichierc.create(ressource_cours)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the file.",
          });
        });
    }
  } catch (err) {
    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size cannot be larger than 100MB!",
      });
    }

    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

const getListFiles = (req, res) => {
  const directoryPath = __basedir + "/resources/static/assets/uploads/cours/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];
    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/resources/static/assets/uploads/cours/";

  res.download(directoryPath + fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

const findResoucesBySectionId = (req, res) => {
  console.log(req.params.sectionId);
  Fichierc.findAll({ where: { sectionId: req.params.sectionId } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving resources.",
      });
    });
};

const CoursesResources = (req, res) => {
  const nom = req.query.nom;
  var condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null;

  Fichierc.findAll({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving courses.",
      });
    });
};

module.exports = {
  upload,
  download,
  CoursesResources,
  findResoucesBySectionId,
};
