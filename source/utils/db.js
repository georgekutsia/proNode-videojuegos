const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const DB_url= process.env.DB_url

const connect = async()=> {
    try {
        const db = await mongoose.connect(DB_url);
        const {name,host} = db.connection;
        
        console.log(`Buenas noches, ${name}`);

    } catch (error) {
        console.log(`error conectando la base de datos: ${error}`);
    }
}

module.exports = {connect}