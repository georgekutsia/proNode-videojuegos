const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const documentoSchema = new Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        usuarios: [{type: Schema.ObjectId, ref: "usuario"}],
    },
    {collection: "countries"}
    
)

const Country = mongoose.model("countries", documentoSchema);

module.exports = Country;