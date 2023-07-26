//Buenas noches

const express = require("express");
const dotenv = require("dotenv").config();
const {connect} = require("./source/utils/db");

const PORT = process.env.PORT;

const app = express();
connect()
app.listen(PORT, ()=>console.log(`buenas noches ${PORT}`))
