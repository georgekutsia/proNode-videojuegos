const Videojuego = require("../models/videojuegos.model");


const getVideojuego = async(req,res)=>{
  try {
    const allVideojuegos = await Videojuego.find();
    return res.status(200).json(allVideojuegos)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const postVideojuego = async (req, res) => {
  try {
    const newVideojuego = req.body;
    const createdVideojuego = await new Videojuego(newVideojuego);
    const created = await createdVideojuego.save()
    return res.status(200).json(created);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = { getVideojuego, postVideojuego };