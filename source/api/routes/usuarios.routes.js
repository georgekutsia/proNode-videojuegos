const express = require("express");
const {register, login, deleteUsuarios, getUsuarios} = require("../controllers/usuarios.controllers")
const usuariosRoutes = express.Router();

usuariosRoutes.post("/register", register);
usuariosRoutes.post("/login", login);

usuariosRoutes.get("/", getUsuarios);
usuariosRoutes.delete("/:id", deleteUsuarios);
module.exports = usuariosRoutes;