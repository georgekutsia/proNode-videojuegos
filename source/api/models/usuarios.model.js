const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usuarioSchema = new Schema(
  {
    nombre: { type: String, required: true, trim: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    edad: { type: Number, required: true },
    foto: { type: String, required: true },
    favorito: [{ type: Schema.Types.ObjectId, ref: "videojuego" }],
  },
  {
    timestamps: true,
    toJSON: {
      transform: (req, res) => {
        res.id = res._id;
        delete res._id;
        delete res.__v;
        return res;
      },
    },
  }
);

const Usuario = mongoose.model("usuario", usuarioSchema);

module.exports = Usuario;
