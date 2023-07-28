const express = require('express');
const {
  addCountrys,
  getAllCountrys,
  getAllCountrysById,
} = require("../controllers/country.controller");

const router = express.Router()

router.post("/", addCountrys);
router.get("/", getAllCountrys);
router.get("/:id", getAllCountrysById);
module.exports = router;