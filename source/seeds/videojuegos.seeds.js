const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Videojuego = require("../api/models/videojuegos.model");
const faker = require("faker");

// const arrayVideojuegos = [
//   {
//     nombre: "League of Legends",
//     año: "2008",
//     desarrollador: "Riot Games",
//     plataformas: ["PC"],
//     foto: "https://phantom-marca.unidadeditorial.es/14c48c8130ee7083d3f8343b67180af7/crop/0x0/1980x1112/resize/720/f/webp/assets/multimedia/imagenes/2022/03/16/16474267987028.jpg",
//   },
//   {
//     nombre: "WOW",
//     año: "2008",
//     desarrollador: "Riot Games",
//     plataformas: ["PC"],
//     foto: "https://phantom-marca.unidadeditorial.es/14c48c8130ee7083d3f8343b67180af7/crop/0x0/1980x1112/resize/720/f/webp/assets/multimedia/imagenes/2022/03/16/16474267987028.jpg",
//   },
//   {
//     nombre: "League of Legends",
//     año: "2008",
//     desarrollador: "Riot Games",
//     plataformas: ["PC"],
//     foto: "https://phantom-marca.unidadeditorial.es/14c48c8130ee7083d3f8343b67180af7/crop/0x0/1980x1112/resize/720/f/webp/assets/multimedia/imagenes/2022/03/16/16474267987028.jpg",
//   },
//   {
//     nombre: "League of Legends",
//     año: "2008",
//     desarrollador: "Riot Games",
//     plataformas: ["PC"],
//     foto: "https://phantom-marca.unidadeditorial.es/14c48c8130ee7083d3f8343b67180af7/crop/0x0/1980x1112/resize/720/f/webp/assets/multimedia/imagenes/2022/03/16/16474267987028.jpg",
//   },
// ];

const DB_url = process.env.DB_url;

mongoose
.connect(DB_url)

.then(async () => {
const allVideojuegos = await Videojuego.find();
if (allVideojuegos.length > 0) {
    await Videojuego.collection.drop();
    console.log("DB videojuegos vaciada");
}
const videojuegosData = [];
for (let i = 0; i < 50; i++) {
    let plataformas = ["playstation", "xbox360", "nintendo", "pc", "wii"];
    let plataformaAleatoria1 =plataformas[Math.floor(Math.random() * plataformas.length)];
    let plataformaAleatoria2;
    do {plataformaAleatoria2 =plataformas[Math.floor(Math.random() * plataformas.length)];
    } while (plataformaAleatoria2 === plataformaAleatoria1);
    videojuegosData.push({
    nombre: faker.commerce.productName(),
    año: faker.date.between("2000-01-01", "2023-01-01"),
    desarrollador: faker.company.bs(),
    plataformas: [`${plataformaAleatoria1}`, `${plataformaAleatoria2}`],
    foto: faker.image.abstract(1234, 2345),
    descripcion: faker.lorem.paragraph(6),
    });
}
await Videojuego.insertMany(videojuegosData);
console.log("Insertados correctamente los videojuegos");
})
.catch((error) => console.log("error insertando los Videojuegos", error))
.finally(() => mongoose.disconnect());
