const Country = require ('../models/country.model');

const addCountrys = async (req,res) => {
    try {
    const newCountry = new Country (req.body);
    const createdCountry = await newCountry.save(newCountry);
    return res.status(200).json(createdCountry);
    } catch (error) {
        return res.status(500).json(error);
    };
}

const getAllCountrys = async(req,res) => {
    try {
        const allCountrys = await Country.find().populate("usuarios");
        return res.status(200).json(allCountrys);
    } catch (error) {
        return res.status(500).json(error);
    }
}
const getAllCountrysById = async (req,res) => {
    try {
        const {id} = req.params;
        const doc = await Country.findById(id).populate("usuarios");
        if (!doc){
        return res.status(400).json({message: "Country no encontrado"});
        }   
        return res.status(200).json(getAllCountrysById);

    } catch (error) {
        return res.status(400).json({message: "Country no encontrado"});
    }
}
module.exports = { addCountrys, getAllCountrys, getAllCountrysById };