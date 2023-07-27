const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Videojuego = require("../api/models/videojuegos.model");
const Usuario = require("../api/models/usuarios.model");
const Producto = require("../api/models/productos.model");
const faker = require("faker");
const bcrypt = require("bcrypt");

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
  //  Producto
  //  Producto
  // .then(async () => {
  // const allVideojuegos = await Producto.find();
  // if (allVideojuegos.length > 0) {
  //     await Producto.collection.drop();
  //     console.log("DB videojuegos vaciada");
  // }
  // const videojuegosData = [];
  // for (let i = 0; i < 40; i++) {
  //     let plataformas = ["playstation", "xbox360", "nintendo", "pc", "wii"];
  //     let plataformaAleatoria1 =plataformas[Math.floor(Math.random() * plataformas.length)];
  //     let plataformaAleatoria2;
  //     do {plataformaAleatoria2 =plataformas[Math.floor(Math.random() * plataformas.length)];
  //     } while (plataformaAleatoria2 === plataformaAleatoria1);
  //     videojuegosData.push({
  //       nombre: faker.commerce.productName(),
  //       precio: faker.commerce.price({ min: 30, max: 120, dec: 0, symbol: "€" }),
  //       compatibilidad: [`${plataformaAleatoria1}`, `${plataformaAleatoria2}`],
  //     });
  // }
  // await Producto.insertMany(videojuegosData);
  // console.log("Insertados correctamente los videojuegos");
  // })
  // .catch((error) => console.log("error insertando los Videojuegos", error))
  // .finally(() => mongoose.disconnect());

  //jugador/user
  //jugador/user
  .then(async () => {
    const allUsuarios = await Usuario.find();
    if (allUsuarios.length > 0) {
      await Usuario.collection.drop();
      console.log("DB usuarios vaciada");
    }

    const usuariosData = [];
    for (let i = 0; i < 40; i++) {
      const randomNumber = Math.floor(Math.random() * 151) + 100;
      let plataformas = ["playstation", "xbox360", "nintendo", "pc", "wii"];
      let plataformaAleatoria1 =
        plataformas[Math.floor(Math.random() * plataformas.length)];
      let plataformaAleatoria2;
      do {
        plataformaAleatoria2 =
          plataformas[Math.floor(Math.random() * plataformas.length)];
      } while (plataformaAleatoria2 === plataformaAleatoria1);

      // Generar una contraseña aleatoria
      const password = faker.lorem.word() + "Bla" + 123;
      // Hashear la contraseña antes de guardarla en el usuario
      const hashedPassword = bcrypt.hashSync(password, 15);

      usuariosData.push({
        nombre: faker.lorem.word(),
        email: faker.internet.email(),
        edad: faker.datatype.number(100),
        password: hashedPassword, // Asignar la contraseña hasheada
        foto: `https://placekitten.com/${randomNumber}/${randomNumber}`,
        favorito: [],
      });
    }

    await Usuario.insertMany(usuariosData);
    console.log("Insertados correctamente los usuarios");
  })
  .catch((error) => console.log("Error insertando los usuarios", error))
  .finally(() => mongoose.disconnect());



//Videojuego
//   .then(async () => {
//     const allVideojuegos = await Videojuego.find();
//     if (allVideojuegos.length > 0) {
//       await Videojuego.collection.drop();
//       console.log("DB videojuegos vaciada");
//     }
//     const videojuegosData = [];
//     for (let i = 0; i < 40; i++) {
//       let plataformas = ["playstation", "xbox360", "nintendo", "pc", "wii"];
//       let plataformaAleatoria1 =
//         plataformas[Math.floor(Math.random() * plataformas.length)];
//       let plataformaAleatoria2;
//       do {
//         plataformaAleatoria2 =
//           plataformas[Math.floor(Math.random() * plataformas.length)];
//       } while (plataformaAleatoria2 === plataformaAleatoria1);
//       videojuegosData.push({
//         nombre: faker.commerce.productName(),
//         año: faker.date.between("2000-01-01", "2023-01-01"),
//         desarrollador: faker.company.bs(),
//         plataformas: [`${plataformaAleatoria1}`, `${plataformaAleatoria2}`],
//         foto: faker.image.fashion(),
//         descripcion: faker.lorem.paragraph(6),
//       });
//     }
//     await Videojuego.insertMany(videojuegosData);
//     console.log("Insertados correctamente los videojuegos");
//   })
//   .catch((error) => console.log("error insertando los Videojuegos", error))
//   .finally(() => mongoose.disconnect());
