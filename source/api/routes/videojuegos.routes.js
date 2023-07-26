const express = require("express");
const {getVideojuego, postVideojuego} = require("../controllers/videojuegos.controllers")

const vidRouter = express.Router();

vidRouter.get("/", getVideojuego);
vidRouter.post("/", postVideojuego);

module.exports = vidRouter