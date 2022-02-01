const util = require("util");
const multer = require("multer");
const maxSize = 100 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/cours/");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;






