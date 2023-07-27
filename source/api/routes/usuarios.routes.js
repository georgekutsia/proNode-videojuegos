const express = require("express");
const {register, login, getUsuarios} = require("../controllers/usuarios.controllers")
const usuariosRoutes = express.Router();

usuariosRoutes.post("/register", register);
usuariosRoutes.post("/login", login);



usuariosRoutes.get("/", getUsuarios);
module.exports = usuariosRoutes;