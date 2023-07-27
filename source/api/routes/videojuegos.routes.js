const express = require("express");
const {getVideojuego, postVideojuego, updateVideojuego, deleteVideojuego} = require("../controllers/videojuegos.controllers")

const vidRouter = express.Router();

vidRouter.get("/", getVideojuego);
vidRouter.post("/", postVideojuego);
vidRouter.put("/:id", updateVideojuego);
vidRouter.delete("/:id", deleteVideojuego)

module.exports = vidRouter