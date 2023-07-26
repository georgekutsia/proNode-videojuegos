const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videojuegoSchema = new Schema(
      {
        nombre:{type:String, required:true},
        año:{type:String, required:true},
        desarrollador:{type:String, required:true},
        plataformas:{type:Array, required:true},
        foto:{type:String, required:false}
      },{
        timestamps:true
        // esto nos genera una fecha de creación y modificación automatica de este objeto
      }
)

const Videojuego = mongoose.model("videojuego", videojuegoSchema)

module.exports = Videojuego;