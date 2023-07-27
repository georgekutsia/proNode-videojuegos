const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const documentoSchema = new Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        usuarios: [{type: Schema.ObjectId, ref: "usuario"}],
        cliente: [{type: Schema.ObjectId, ref: "cliente"}],
    },
    {collection: "documento"}
    
)

const Documento = mongoose.model("documento", documentoSchema);

module.exports = Documento;