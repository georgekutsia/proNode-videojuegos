    //Buenas noches

const express = require("express");
const dotenv = require("dotenv").config();
const {connect} = require("./source/utils/db");
const vidRouter = require("./source/api/routes/videojuegos.routes")

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/videojuegos", vidRouter)
connect()
app.listen(PORT, ()=>console.log(`buenas noches ${PORT}`))
