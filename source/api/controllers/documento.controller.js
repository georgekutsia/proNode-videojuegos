const Documento = require ('../models/documento.model');

const addDocumentos = async (req,res) => {
    try {
    const newDocumento = new Documento (req.body);
    const createdDocumento = await newDocumento.save(newDocumento);
    return res.status(200).json(createdDocumento);
    } catch (error) {
        return res.status(500).json(error);
    };
}

const getAllDocumentos = async(req,res) => {
    try {
        const allDocumentos = await Documento.find().populate("usuarios");
        return res.status(200).json(allDocumentos);
    } catch (error) {
        
    }
}
const getAllDocumentosById = async (req,res) => {
    try {
        const {id} = req.params;
        const doc = await Documento.findById(id).populate("usuarios");
        if (!doc){
            return res.status(400).json({message: "Documento no encontrado"});
        }   
        return res.status(200).json(getAllDocumentosById);

    } catch (error) {
        
    }
}
module.exports = { addDocumentos, getAllDocumentos, getAllDocumentosById };