const express = require("express");
const {getVideojuego, postVideojuego, updateVideojuego} = require("../controllers/videojuegos.controllers")

const vidRouter = express.Router();

vidRouter.get("/", getVideojuego);
vidRouter.post("/", postVideojuego);
vidRouter.put("/:id", updateVideojuego);

module.exports = vidRouter