const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const clienteSchema = new Schema(
    {
        name: {type: String, required: true},
        lastName: {type: String, required: true},
    },
    {collection: "cliente"}
    
)

const Cliente = mongoose.model("cliente", clienteSchema);

module.exports = Cliente;