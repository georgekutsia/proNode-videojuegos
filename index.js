    //Buenas noches
const express = require("express");
const dotenv = require("dotenv").config();
const {connect} = require("./source/utils/db");
const vidRouter = require("./source/api/routes/videojuegos.routes");
const usuariosRoutes = require("./source/api/routes/usuarios.routes");
const productosRoutes = require("./source/api/routes/productos.routes");
const documentoRoutes = require("./source/api/routes/country.routes")
const cors = require ("cors");

const PORT = process.env.PORT;
const app = express();

app.use(cors(
    {
        origin:"*",
        credentials:true
    }
))
app.use(express.json());

app.use("/videojuegos", vidRouter)
app.use("/usuarios", usuariosRoutes);
app.use("/productos", productosRoutes);
app.use("/countries", documentoRoutes);


connect()
app.listen(PORT, ()=>console.log(`buenas noches ${PORT}`))
