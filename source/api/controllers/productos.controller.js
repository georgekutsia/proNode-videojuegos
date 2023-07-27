const Producto = require("../models/productos.model");


const getProducto = async(req,res)=>{
  try {
    const allProductos = await Producto.find();
    return res.status(200).json(allProductos)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const postProducto = async (req, res) => {
  try {
    const newProducto = req.body;
    const createdProducto = new Producto(newProducto);
    const created = await createdProducto.save()
    return res.status(200).json(created);
  } catch (error) {
    return res.status(500).json(error);
  }
}

const updateProducto = async (req, res) => {
  try {
    const {id} = req.params;
    const updateProducto = new Producto(req.body);
    updateProducto.id = id;
    const updatedInfo = await Producto.findByIdAndUpdate(id, updateProducto, {new: true})
    if (!updatedInfo){
      return res.status(404).json({message: "No encontrado :("});
    }
    return res.status(200).json(updatedInfo);
  } catch (error) {
    return res.status(500).json(error);
  }
}

const deleteProducto = async (req, res) =>{
  try {
    const {id} = req.params;
    const deleteProducto = await Producto.findByIdAndDelete(id)
    if(!deleteProducto){
      return res.status(418).json({message: "¿Que haces?"})
    }
    return res.status(200).json(deleteProducto)
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = { getProducto, postProducto, updateProducto, deleteProducto};