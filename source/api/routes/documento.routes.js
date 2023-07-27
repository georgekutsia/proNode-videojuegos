const express = require('express');
const {
    addDocumentos,
    getAllDocumentos,
    getAllDocumentosById,
} = require('../controllers/documento.controller');

const router = express.Router()

router.post("/", addDocumentos);
router.get("/", getAllDocumentos);
router.get("/:id", getAllDocumentosById)
module.exports = router;