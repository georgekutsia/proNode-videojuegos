const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Videojuego = require("../api/models/videojuegos.model");

const arrayVideojuegos = [    
    {
        "nombre": "League of Legends",
        "año": "2008",
        "desarrollador": "Riot Games", 
        "plataformas": ["PC"],
        "foto": "https://phantom-marca.unidadeditorial.es/14c48c8130ee7083d3f8343b67180af7/crop/0x0/1980x1112/resize/720/f/webp/assets/multimedia/imagenes/2022/03/16/16474267987028.jpg"
    },
    {
        "nombre": "League of Legends",
        "año": "2008",
        "desarrollador": "Riot Games", 
        "plataformas": ["PC"],
        "foto": "https://phantom-marca.unidadeditorial.es/14c48c8130ee7083d3f8343b67180af7/crop/0x0/1980x1112/resize/720/f/webp/assets/multimedia/imagenes/2022/03/16/16474267987028.jpg"
    },
    {
        "nombre": "League of Legends",
        "año": "2008",
        "desarrollador": "Riot Games", 
        "plataformas": ["PC"],
        "foto": "https://phantom-marca.unidadeditorial.es/14c48c8130ee7083d3f8343b67180af7/crop/0x0/1980x1112/resize/720/f/webp/assets/multimedia/imagenes/2022/03/16/16474267987028.jpg"
    },
    {
        "nombre": "League of Legends",
        "año": "2008",
        "desarrollador": "Riot Games", 
        "plataformas": ["PC"],
        "foto": "https://phantom-marca.unidadeditorial.es/14c48c8130ee7083d3f8343b67180af7/crop/0x0/1980x1112/resize/720/f/webp/assets/multimedia/imagenes/2022/03/16/16474267987028.jpg"
    },
    {
        "nombre": "League of Legends",
        "año": "2008",
        "desarrollador": "Riot Games", 
        "plataformas": ["PC"],
        "foto": "https://phantom-marca.unidadeditorial.es/14c48c8130ee7083d3f8343b67180af7/crop/0x0/1980x1112/resize/720/f/webp/assets/multimedia/imagenes/2022/03/16/16474267987028.jpg"
    }
]

const DB_url= process.env.DB_url;

mongoose.connect(DB_url)
.then(async()=> {
    const allVideojuegos = await Videojuego.find();
    if (allVideojuegos.length > 0) {
        await Videojuego.collection.drop();
        console.log("Videojuegos borrados");
    }
})
.catch((error)=> console.log("error borrando los Videojuegos",error))
.then(async ()=> {
    const videojuegoMap = arrayVideojuegos.map((videojuego) => new Videojuego(videojuego));
    await Videojuego.insertMany(videojuegoMap);
    console.log("Videojuegos insertados correctamente");
})
.catch((error) => console.log("error insertando los Videojuegos", error))
.finally(()=> mongoose.disconnect())