const express = require("express");
const {register, login, postUsuarios, deleteUsuarios, getUsuarios} = require("../controllers/usuarios.controllers")
const usuariosRoutes = express.Router();

usuariosRoutes.post("/register", register);
usuariosRoutes.post("/login", login);



usuariosRoutes.get("/", getUsuarios);
usuariosRoutes.post("/", postUsuarios);
usuariosRoutes.delete("/", deleteUsuarios);
module.exports = usuariosRoutes;