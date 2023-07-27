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
    const createdVideojuego = new Videojuego(newVideojuego);
    const created = await createdVideojuego.save()
    return res.status(200).json(created);
  } catch (error) {
    return res.status(500).json(error);
  }
}

const updateVideojuego = async (req, res) => {
  try {
    const {id} = req.params;
    const updateVideojuego = new Videojuego(req.body);
    updateVideojuego.id = id;
    const updatedInfo = await Videojuego.findByIdAndUpdate(id, updateVideojuego, {new: true})
    if (!updatedInfo){
      return res.status(404).json({message: "No encontrado :("});
    }
    return res.status(200).json(updatedInfo);
  } catch (error) {
    return res.status(500).json(error);
  }
}

const deleteVideojuego = async (req, res) =>{
  try {
    const {id} = req.params;
    const deleteVideojuego = await Videojuego.findByIdAndDelete(id)
    if(!deleteVideojuego){
      return res.status(418).json({message: "¿Que haces?"})
    }
    return res.status(200).json(deleteVideojuego)
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = { getVideojuego, postVideojuego, updateVideojuego, deleteVideojuego};