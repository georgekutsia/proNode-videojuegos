const express = require("express");
const {getProducto, postProducto, updateProducto, deleteProducto} = require("../controllers/productos.controller")

const prodRouter = express.Router();

prodRouter.get("/", getProducto);
prodRouter.post("/", postProducto);
prodRouter.put("/:id", updateProducto);
prodRouter.delete("/:id", deleteProducto)

module.exports = prodRouter;