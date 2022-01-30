const fs = require('fs');
const baseUrl = "http://localhost:3000/api/homework/files/";
const db = require("../models");
const Fichierd = db.ressource_devoir;

const uploadFile = require("../config/uploadDevoir");
 

const upload = async (req, res) => {
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      res.status(400).send({ message: "Please upload a file!" });
    }else{
         // Create a file
    const ressource_devoir = {
    nom: req.file.originalname,
    type: req.file.type,
    fichier: baseUrl + req.file.originalname,
    docId: req.body.docId,
    sectionId: req.body.sectionId
  };

  // Save file in the database
  Fichierd.create(ressource_devoir)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the file."
      });
    });
  
      res.status(200).send({
      message: "Uploaded file successfully: " + req.file.originalname,
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
  const directoryPath = __basedir + "/resources/static/assets/uploads/devoirs/";

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
  const directoryPath = __basedir + "/resources/static/assets/uploads/devoirs/";

  res.download(directoryPath + fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

module.exports = {
  upload,
  getListFiles,
  download,
};
