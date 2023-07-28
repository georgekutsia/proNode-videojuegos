const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Videojuego = require("../api/models/videojuegos.model");
const Usuario = require("../api/models/usuarios.model");
const Producto = require("../api/models/productos.model");
const Country = require("../api/models/country.model")
const faker = require("faker");
const bcrypt = require("bcrypt");

const countriesArray = [
  {
    title: "Europa",
    description: "Continente medianamente grande lleno de movidas raras",
    usuarios: [
      "64c3011e0088a9a8925b6ecc",
      "64c3011e0088a9a8925b6ecd",
      "64c3011e0088a9a8925b6ecf",
    ],
  },
  {
    title: "EEUU",
    description: "Juegan de todo",
    usuarios: ["64c3011e0088a9a8925b6ed0", "64c3011e0088a9a8925b6ed1"],
  },
  {
    title: "Africa",
    description: "Lleno de jugadores aficionados a los Shooters",
    usuarios: ["64c3011e0088a9a8925b6ed2"],
  },
  {
    title: "Asia",
    description: "Continente medianamente grande lleno de movidas raras",
    usuarios: ["64c3011e0088a9a8925b6ed3"],
  },
  {
    title: "Antártida",
    description: "Continente medianamente grande lleno de movidas raras",
    usuarios: ["64c24d29d8b0e1b5f5169596", "64c3011e0088a9a8925b6ed7"],
  },
  {
    title: "America del sur",
    description: "Continente medianamente grande lleno de movidas raras",
    usuarios: ["64c3011e0088a9a8925b6ed5", "64c3011e0088a9a8925b6ed6"],
  },
];

const DB_url = process.env.DB_url;

mongoose
  .connect(DB_url)
  .then(async()=> {
    Country.collection.drop()
    const countriesMap = countriesArray.map((count) => new Country(count));
    await Country.insertMany(countriesMap)
      console.log("países creados correctamente")
  })



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

  // jugador/user
  // jugador/user


  // .then(async () => {
  //   const allUsuarios = await Usuario.find();
  //   if (allUsuarios.length > 0) {
  //     await Usuario.collection.drop();
  //     console.log("DB usuarios vaciada");
  //   }

  //   const usuariosData = [];
  //   for (let i = 0; i < 40; i++) {
  //     const randomNumber = Math.floor(Math.random() * 151) + 100;
  //     let plataformas = ["playstation", "xbox360", "nintendo", "pc", "wii"];
  //     let plataformaAleatoria1 =
  //       plataformas[Math.floor(Math.random() * plataformas.length)];
  //     let plataformaAleatoria2;
  //     do {
  //       plataformaAleatoria2 =
  //         plataformas[Math.floor(Math.random() * plataformas.length)];
  //     } while (plataformaAleatoria2 === plataformaAleatoria1);

  //     // Generar una contraseña aleatoria
  //     const password = faker.lorem.word() + "Bla" + 123;
  //     // Hashear la contraseña antes de guardarla en el usuario
  //     const hashedPassword = bcrypt.hashSync(password, 4);

  //     usuariosData.push({
  //       nombre: faker.lorem.word(),
  //       email: faker.internet.email(),
  //       edad: faker.datatype.number(100),
  //       password: hashedPassword, // Asignar la contraseña hasheada
  //       foto: `https://placekitten.com/${randomNumber}/${randomNumber}`,
  //       favorito: ["64c24d29d8b0e1b5f5169596"],
  //     });
  //   }

  //   await Usuario.insertMany(usuariosData);
  //   console.log("Insertados correctamente los usuarios");
  // })
  // .catch((error) => console.log("Error insertando los usuarios", error))
  // .finally(() => mongoose.disconnect());



// Videojuego
//   .then(async () => {
//     const allVideojuegos = await Videojuego.find();
//     if (allVideojuegos.length > 0) {
//       await Videojuego.collection.drop();
//       console.log("DB videojuegos vaciada");
//     }
//     const videojuegosData = [];
//     for (let i = 0; i < 12; i++) {
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
  .catch((error) => console.log("error insertando los Videojuegos", error))
  .finally(() => mongoose.disconnect());
