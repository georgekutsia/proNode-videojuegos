const express = require("express");
const {register, login} = require("../controllers/usuarios.controllers")
const usuariosRoutes = express.Router();

usuariosRoutes.post("/register", register);
usuariosRoutes.post("/login", login);

module.exports = usuariosRoutes;