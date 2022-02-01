// Import express
const express = require('express');

const router = express.Router();

const docCtrl = require('../controllers/doc');
 
 
// Route get all documents
router.get('/', docCtrl.findAllDocuments);
// Route create a new document
router.post('/', docCtrl.createDocument);
// Route get document by id
router.get('/:id', docCtrl.findOneDocument);
// Route update document by id
router.put('/:id', docCtrl.updateDocument);
// Route delete document by id
router.delete('/:id', docCtrl.deleteDocument);
// Route delete all document 
//router.delete('/', docCtrl.deleteAllDocuments) 

// export router
module.exports = router;