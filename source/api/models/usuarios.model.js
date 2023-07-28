const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usuarioSchema = new Schema(
  {
    nombre: { type: String, required: true, trim: true},
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    edad: { type: Number, required: true },
    foto: { type: String, required: false },
    favorito: [{ type: Schema.Types.ObjectId, ref: "videojuego" }],
  },
  {
    timestamps: true,
    toJSON: {
      transform: (req, res) => {
        res.id = res._id;
        delete res._id;
        delete res.__v;
        delete res.password;
        return res;
      },
    },
  }
);

const Usuario = mongoose.model("usuario", usuarioSchema);

module.exports = Usuario;
