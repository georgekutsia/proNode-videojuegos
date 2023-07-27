const Usuario = require("../models/usuarios.model");
const bcrypt = require ("bcrypt")
const {validateEmail, validatePassword, usedEmail} = require ("../../utils/validators");
const {generateSign} = require("../../utils/jwt");


const register = async(req,res)=>{
  try {
    const newUsuario = new Usuario(req.body);
    if (!validateEmail(newUsuario.email)){
        return res.status(400).json({message: "email inválido"})
    }
    if (!validatePassword(newUsuario.Password)) {
    return res.status(400).json({message: "password inválido"})
  }
  if (await usedEmail(newUsuario.email)){
    return res.status(400).json({message:"email introducido ya existe"})
  }
  newUser.password = bcrypt.hashSync(newUsuario.password, 15);
  const createdUsuario = await newUsuario.save();
  return res.status(201).json(createdUsuario);
} catch (error){
    return res.status(500).json(error)
}
};
const login = async (req,res) => {
    try{
        const usuarioInfo = await Usuario.findOne({email:req.body.email})
        if (!usuarioInfo) {
            return res.status(404).json({message: "email no encontrado"})
        }
        if (!bcrypt.compareSync(req.body.password,usuarioInfo.password)){
            return res.status(404).json({message: "password incorrecto"})
        }
        const token = generateSign(usuarioInfo._id, usuarioInfo.email);
        return res.status(200).json({usuario:usuarioInfo,token:token})

    } catch(error){
        return res.status(500).json(error)
    }
}

const postUsuarios = async (req, res) => {
    try {
      const newUsuario = req.body;
      const createdUsuario = new Usuario(newUsuario);
      const created = await createdUsuario.save()
      return res.status(200).json(created);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  const deleteUsuarios = async (req, res) =>{
    try {
      const {id} = req.params;
      const deleteUsuarios = await Usuario.findByIdAndDelete(id)
      if(!deleteUsuario){
        return res.status(418).json({message: "¿Que haces?"})
      }
      return res.status(200).json(deleteUsuario)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

const getUsuarios = async (req, res) => {
  try {
    const allUsuarios = await Usuario.find();
    return res.status(200).json(allUsuarios);
  } catch (error) {
    return res.status(500).json(error);
  }
};
module.exports = { register, login, getUsuarios, postUsuarios, deleteUsuarios };