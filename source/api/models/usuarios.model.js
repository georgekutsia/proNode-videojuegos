const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const usuarioSchema = new Schema(
    {
        nombre:{type:String, required:true, trim:true},
        email:{type:String, required:true},
        edad:{type:Number, required:true},
        favorito:[{type:Schema.ObjectId, ref:"videojuego"}]
    }
    
)

const Usuario = mongoose.model("usuario", usuarioSchema);

module.exports = Usuario;