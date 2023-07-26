const express = require("express");
const {getVideojuego} = require("../controllers/videojuegos.controllers")

const vidRouter = express.Router();

vidRouter.get("/", getVideojuego);

module.exports = vidRouter