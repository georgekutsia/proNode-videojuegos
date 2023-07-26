const Videojuego = require("../models/videojuegos.model");


const getVideojuego = async(req,res)=>{
  try {
    const allVideojuegos = await Videojuego.find();
    return res.status(200).json(allVideojuegos)
  } catch (error) {
    return res.status(500).json(error)
  }
}



module.exports = {getVideojuego}