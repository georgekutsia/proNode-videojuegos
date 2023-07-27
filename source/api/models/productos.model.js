const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const productoSchema = new Schema(
    {
        nombre:{type:String, required:true, trim:true},
        precio:{type:String, required:true},
        origen:{type:String, required:true},
        compatibilidad:{type:Array, required:true}
    }
    
)

const Producto = mongoose.model("producto", productoSchema);

module.exports = Producto;