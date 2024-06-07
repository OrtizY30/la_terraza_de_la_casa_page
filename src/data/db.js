import { v4 as uuidv4 } from 'uuid';

export const MenuCompleto = [
  {
    id: uuidv4(),
    nombre: "Mozzarela en carroza",
    ingredientes: [],
    img: "carroza.avif",
    categoria: "entradas",
    precioMedio: null,
    precioFull: '32.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Carpaccio de salmón",
    ingredientes: [],
    img: "",
    categoria: "entradas",
    precioMedio: null,
    precioFull: '34.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Carpaccio de lomito",
    ingredientes: [],
    img: "carpaccio_res.avif",
    categoria: "entradas",
    precioMedio: null,
    precioFull: '36.000',
    favorito: false
  },
  // Sandwiches
  {
    id: uuidv4(),
    nombre: "Sándwich de la casa",
    ingredientes: ['Pollo desmenuzado, lomo fino, pernil de cerdo, queso mozzarella, tomate verde y lechuga'],
    img: "delacasa.avif",
    categoria: "sandwich",
    precioMedio: '37.000',
    precioFull: "54.000",
    favorito: false,
    principal: true
  },
  {
    id: uuidv4(),
    nombre: "Sándwich de pollo",
    ingredientes: ['pechuga desmenuzada, queso mozzarella, tomate verde y lechuga'],
    img: "pollo-desmenuzado.webp",
    categoria: "sandwich",
    precioMedio: "32.000",
    precioFull: '43.000',
    favorito: false,
    principal: true
  },
  {
    id: uuidv4(),
    nombre: "Sándwich cubano de pollo",
    ingredientes: ['pollo, jamon, queso mozzarella, tomate verde y lechuga'],
    img: "cubanopollo.webp",
    categoria: "sandwich",
    precioMedio: "34.000",
    precioFull: '46.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Sándwich de pernil",
    ingredientes: ['pernil de cerdo, queso mozzarella, tomate verde y lechuga'],
    img: "pernil.webp",
    categoria: "sandwich",
    precioMedio: "32.000",
    precioFull: '43.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Sándwich cubano de pernil",
    ingredientes: ['pernil de cerdo, jamon, queso mozzarella, tomate verde y lechuga'],
    img: "cubano-pernil.webp",
    categoria: "sandwich",
    precioMedio: "35.000",
    precioFull: '46.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Sándwich de lomito",
    ingredientes: ['lomo fino, queso mozzarella, tomate verde y lechuga'],
    img: "lomito.avif",
    categoria: "sandwich",
    precioMedio: "35.000",
    precioFull: '47.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Sándwich king david",
    ingredientes: ['lomo condimentado con las 7 especias árabes, tomate rojo y cebolla picada sobre salsa de tahini y ajo'],
    img: "kingdavid.webp",
    categoria: "sandwich",
    precioMedio: "37.000",
    precioFull: '54.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Cochinito",
    ingredientes: ['salchicha alemana, queso sabana y tocineta'],
    img: "cochinito.avif",
    categoria: "sandwich",
    precioMedio: null,
    precioFull: '29.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Sándwich combinado (PAN MOLDE)",
    ingredientes: ['jamon, queso mozzarella y salsa de la casa'],
    img: "combinado.webp",
    categoria: "sandwich",
    precioMedio: null,
    precioFull: '27.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Sándwich combinado (G, Q, F)",
    ingredientes: ['jamon, queso mozzarella y salsa de la casa'],
    img: "combinado.avif",
    categoria: "sandwich",
    precioMedio: '27.000',
    precioFull: '37.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Sándwich chorizo picante español",
    ingredientes: ['chorizo español, queso mozzarella, tomate verde, lechuga y salsa de la casa'],
    img: "chorizo.webp",
    categoria: "sandwich",
    precioMedio: '35.000',
    precioFull: '48.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Sándwich de cordero",
    ingredientes: ['jamon de cordero ahumado, queso mozzarella, tomate rojo y lechuga'],
    img: "",
    categoria: "sandwich",
    precioMedio: '34.000',
    precioFull: '45.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Sándwich de pavo ahumado",
    ingredientes: ['jamon de pavo ahumado, queso mozzarella, tomate verde y lechuga'],
    img: "spavo.webp",
    categoria: "sandwich",
    precioMedio: '34.000',
    precioFull: '45.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Sándwich tres quesos",
    ingredientes: ['queso ementhal, mozzarella, sabana, salsas'],
    img: "tresquesos.webp",
    categoria: "sandwich",
    precioMedio: '32.000',
    precioFull: '45.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Sándwich vegetariano",
    ingredientes: ['antipasto variado, queso mozzarella, tomate verde y lechuga'],
    img: "vegetariano.webp",
    categoria: "sandwich",
    precioMedio: '32.000',
    precioFull: '45.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Sándwich de roastbeef",
    ingredientes: ['roastbeef, queso mozzarella, tomate verde y lechuga'],
    img: "roastbeef.webp",
    categoria: "sandwich",
    precioMedio: '34.000',
    precioFull: '45.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Sándwich de pastrami de pavo",
    ingredientes: ['pastrami de pavo, queso mozzarella, tomate verde y lechuga'],
    img: "pastrami.webp",
    categoria: "sandwich",
    precioMedio: '36.000',
    precioFull: '46.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Sándwich italiano",
    ingredientes: ['queso mozzarella, rodajas de tomate rojo, aceite de oliva, finas hierbas y salsas'],
    img: "italiano.webp",
    categoria: "sandwich",
    precioMedio: '29.000',
    precioFull: '40.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Sándwich de pepperoni",
    ingredientes: ['pepperonni americano, queso mozzarella, finas hierbas, aceite de oliva y tomate fresco'],
    img: "pepperoni.webp",
    categoria: "sandwich",
    precioMedio: '36.000',
    precioFull: '46.000',
    favorito: false
  },

  // Sandwiches guormet

  {
    id: uuidv4(),
    nombre: "Lomito con champiñones",
    ingredientes: 'trocitos de lomito de res, salsa de champiñones, finas hierbas ',
    img: "lomo_champiñones.avif",
    categoria: "gourmet",
    precioMedio: '37.000',
    precioFull: '54.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Portobello y pechuga",
    ingredientes: 'champiñones portobello al ajillo, pechuga de pello a la plancha',
    img: "portobello.webp",
    categoria: "gourmet",
    precioMedio: '37.000',
    precioFull: '54.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "mediterraneo",
    ingredientes: 'chorizo picante español, queso mozzarella, lechuga romana, queso feta, aceitunas negras, tomate cherry, pimineta fresca, aceite de oliva',
    img: "mediterraneo.webp",
    categoria: "gourmet",
    precioMedio: '37.000',
    precioFull: '54.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "montecristo",
    ingredientes: 'pavo ahumado, tocineta, queso holandes, mozzarella, pan suave dorado con matequilla, espolvoreado con azúcar gacé para darle un sabor aterciopalado',
    img: "monte_cristo.webp",
    categoria: "gourmet",
    precioMedio: '37.000',
    precioFull: '54.000',
    favorito: false,
    principal: true
  },
  {
    id: uuidv4(),
    nombre: "Philadelphia cheese steak",
    ingredientes: 'lomo fino, cebolla y pimintón a la parrilla salteado y servido con abundante queso',
    img: "philaderphia.webp",
    categoria: "gourmet",
    precioMedio: '37.000',
    precioFull: '54.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "sándwich lulú",
    ingredientes: 'pollo desmenuzado, maíz tierno, piña en trocitos, champiñones, crocante tocineta',
    img: "lulu.webp",
    categoria: "gourmet",
    precioMedio: '37.000',
    precioFull: '54.000',
    favorito: false
  },

  // Ensaladas
  {
    id: uuidv4(),
    nombre: "César",
    ingredientes: 'lechuga romana, crotones, queso parmesano, salsa cesar',
    img: "cesar.webp",
    categoria: "ensaladas",
    precioMedio: '26.000',
    precioFull: '33.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "césar con pollo",
    ingredientes: 'pollo grille, lechuga romana, crotones, queso parmesano, salsa cesar',
    img: "cesar_pollo.avif",
    categoria: "ensaladas",
    precioMedio: '32.000',
    precioFull: '40.000',
    favorito: false,
    principal: true
  },
  {
    id: uuidv4(),
    nombre: "Ensalada de la casa",
    ingredientes: 'lechuga variada, aceitunas negras, queso mozzarella, champiñones, espárragos, tomate, jamon, ajojolí, salsa del chef',
    img: "ensalada-de-la-casa.webp",
    categoria: "ensaladas",
    precioMedio: '32.000',
    precioFull: '40.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Ensalada ligth de pavo",
    ingredientes: 'lechuga morada, aceitunas negras, queso finesse, tomate rojo, rolitos de pavo, baño de vinagre balsámico con ajonjolí',
    img: "ensalada_ligth_pavo.avif",
    categoria: "ensaladas",
    precioMedio: '33.000',
    precioFull: '42.000',
    favorito: false
  },

  // Hamburguesas

  {
    id: uuidv4(),
    nombre: "Hamburguesa de la casa",
    ingredientes: 'carne de res, queso, tomate, lechuga, salsas',
    img: "h_delacasa.avif",
    categoria: "burgers",
    precioMedio: null,
    precioFull: '39.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Hamburguesa de pollo",
    ingredientes: 'pollo, queso, tomate, lechuga, salsas',
    img: "h-pollo.webp",
    categoria: "burgers",
    precioMedio: null,
    precioFull: '39.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Nany Burger",
    ingredientes: '125 gr de carne artesanal, tomate rojo, cebolla, queso cheddar,, espinaca baby',
    img: "nany.webp",
    categoria: "burgers",
    precioMedio: null,
    precioFull: '33.000',
    favorito: false
  },

  // Planchitas
  {
    id: uuidv4(),
    nombre: "Planchita de lomito",
    ingredientes: 'lomo fino, bollo limpio, ensalada',
    img: "",
    categoria: "planchitas",
    precioMedio: null,
    precioFull: '49.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "lomito sabanero",
    ingredientes: 'lomo fino queso sabana, bollo limpio, ensalada',
    img: "lomitosabanero.avif",
    categoria: "planchitas",
    precioMedio: null,
    precioFull: '54.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Planchita de pollo",
    ingredientes: 'pechuga de pollo, bollo limpio, ensalada',
    img: "planchita-pollo.webp",
    categoria: "planchitas",
    precioMedio: null,
    precioFull: '45.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "pollo sabenero",
    ingredientes: 'pechuga de pollo, queso sabada, bollo limpio, ensalada',
    img: "pollosabanero.avif",
    categoria: "planchitas",
    precioMedio: null,
    precioFull: '52.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "planchita combinada",
    ingredientes: 'lomo fino, pechuga de pollo, bollo limpio, ensalada',
    img: "planchitacombinada.avif",
    categoria: "planchitas",
    precioMedio: null,
    precioFull: '47.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Combinada sabanera ",
    ingredientes: 'pechuga de pollo, lomo fino, queso sabada, bollo limpio, ensalada',
    img: "pollosabanero.avif",
    categoria: "planchitas",
    precioMedio: null,
    precioFull: '54.000',
    favorito: false
  },

  // Menu kids
  {
    id: uuidv4(),
    nombre: "Hamburguesa baby + gaseosa ",
    ingredientes: '',
    img: "",
    categoria: "terraza Kids",
    precioMedio: null,
    precioFull: '26.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Hamburguesa baby de pollo + gaseosa",
    ingredientes: '',
    img: "h-baby.webp",
    categoria: "terraza Kids",
    precioMedio: null,
    precioFull: '26.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Combinado en molde + gaseosa",
    ingredientes: '',
    img: "combinado.webp",
    categoria: "terraza Kids",
    precioMedio: null,
    precioFull: '26.000',
    favorito: false
  },

  // Malteadas
  {
    id: uuidv4(),
    nombre: "oreo shake 14 Onz",
    ingredientes: 'Malteada de oreo con helado de vainilla y trozos de galletas',
    img: "oreoShake.avif",
    categoria: "malteadas",
    precioMedio: null,
    precioFull: '19.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "fresa 14 Onz",
    ingredientes: 'Malteada de fresa natural con helado de vainilla.',
    img: "",
    categoria: "malteadas",
    precioMedio: null,
    precioFull: '19.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "vainilla 14 Onz",
    ingredientes: 'Malteada de helado de vainilla.',
    img: "",
    categoria: "malteadas",
    precioMedio: null,
    precioFull: '19.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "chocolate 14 Onz",
    ingredientes: 'Malteada de chocolate con helado de vainilla.',
    img: "",
    categoria: "malteadas",
    precioMedio: null,
    precioFull: '19.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "arequipe 14 Onz",
    ingredientes: 'Malteada de arequipe con helado de vainilla.',
    img: "",
    categoria: "malteadas",
    precioMedio: null,
    precioFull: '19.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "café 14 Onz",
    ingredientes: 'Malteada de café con helado de vainilla.',
    img: "",
    categoria: "malteadas",
    precioMedio: null,
    precioFull: '19.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "brownie 14 Onz",
    ingredientes: 'Malteada de brownie con helado de vainilla y salsa de chocolate.',
    img: "",
    categoria: "malteadas",
    precioMedio: null,
    precioFull: '20.000',
    favorito: false
  },

  // Postres
  {
    id: uuidv4(),
    nombre: "brownie",
    ingredientes: '',
    img: "brownie.webp",
    categoria: "postres",
    precioMedio: null,
    precioFull: '8.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "brownie con helado",
    ingredientes: 'Delicioso Brownie más una copa de helado de vainilla',
    img: "browniehelado.webp",
    categoria: "postres",
    precioMedio: null,
    precioFull: '18.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "copa de helado",
    ingredientes: '',
    img: "",
    categoria: "postres",
    precioMedio: null,
    precioFull: '10.000',
    favorito: false
  },

  // Menu bebidas

  {
    id: uuidv4(),
    nombre: "Jugos naturales 14 Onz",
    ingredientes: 'fresa , naranja , piña , maracuyá , zapote , nispero , melón , lulo , limón , mango , guanabana , mandarina , samoa',
    img: "jugos.avif",
    categoria: "bebidas",
    precioMedio: null,
    precioFull: '12.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "limonadas 14 Onz",
    ingredientes: 'natural , cerezada , coco',
    img: "limonadas.avif",
    categoria: "bebidas",
    precioMedio: null,
    precioFull: '12.000',
    favorito: false
  }, 
  {
    id: uuidv4(),
    nombre: "Jugos en crema 14 Onz",
    ingredientes: 'fresa , naranja , piña , maracuyá , zapote , nispero , melón , lulo , limón , mango , guanabana',
    img: "jugoscrema.webp",
    categoria: "bebidas",
    precioMedio: null,
    precioFull: '18.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "gaseosas postobon 400ml",
    ingredientes: 'pepsi , uva , naranjada , manzana , kola , colombiana , 7UP ',
    img: "gaseosas.avif",
    categoria: "bebidas",
    precioMedio: null,
    precioFull: '8.500',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "mr tea",
    ingredientes: '',
    img: "mrtea.webp",
    categoria: "bebidas",
    precioMedio: null,
    precioFull: '8.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "té hatsu",
    ingredientes: 'amarillo , lila , blanco , verde , negro',
    img: "te-hatsu.avif",
    categoria: "bebidas",
    precioMedio: null,
    precioFull: '10.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "soda hatsu",
    ingredientes: 'frambuesa, sandia , uva blanca',
    img: "sodahatsu.webp",
    categoria: "bebidas",
    precioMedio: null,
    precioFull: '9.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "bretaña",
    ingredientes: '',
    img: "bretaña.webp",
    categoria: "bebidas",
    precioMedio: null,
    precioFull: '8.500',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "agua 600ml",
    ingredientes: '',
    img: "agua.webp",
    categoria: "bebidas",
    precioMedio: null,
    precioFull: '6.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "Aguila ligth",
    ingredientes: '',
    img: "aguila.avif",
    categoria: "cervezas",
    precioMedio: null,
    precioFull: '12.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "miller lite",
    ingredientes: 'cerveza importada miller lite',
    img: "miller.avif",
    categoria: "cervezas",
    precioMedio: null,
    precioFull: '12.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "club colombia",
    ingredientes: 'cerveza club colombia dorada',
    img: "clubcolombia.avif",
    categoria: "cervezas",
    precioMedio: null,
    precioFull: '13.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "corona",
    ingredientes: 'cerveza importada corona de 355ml',
    img: "corona.avif",
    categoria: "cervezas",
    precioMedio: null,
    precioFull: '15.000',
    favorito: false
  },
  {
    id: uuidv4(),
    nombre: "stella",
    ingredientes: 'cerveza importada stella artois de 330ml',
    img: "stella.webp",
    categoria: "cervezas",
    precioMedio: null,
    precioFull: '15.000',
    favorito: false
  },

];

export const menuBebidas = [
  {
    nombre: "Jugos naturales 14 Onz",
    ingredientes: ['fresa','naranja','piña','maracuyá','zapote','nispero','melón','lulo','limón','mango','guanabana','mandarina', 'samoa'],
    img: "",
    categoria: "bebidas",
    precioMedio: null,
    precioFull: '12.000',
    favorito: false
  },
  {
    nombre: "liminadas 14 Onz",
    ingredientes: ['natural','cerezada','coco'],
    img: "",
    categoria: "bebidas",
    precioMedio: null,
    precioFull: '12.000',
    favorito: false
  }, 
  {
    nombre: "Jugos en cremas 14 Onz",
    ingredientes: ['fresa','naranja','piña','maracuyá','zapote','nispero','melón','lulo','limón','mango','guanabana'],
    img: "",
    categoria: "bebidas",
    precioMedio: null,
    precioFull: '18.000',
    favorito: false
  },
  {
    nombre: "té lipton",
    ingredientes: '',
    img: "",
    categoria: "bebidas",
    precioMedio: null,
    precioFull: '8.000',
    favorito: false
  },
  {
    nombre: "té hatsu",
    ingredientes: '',
    img: "",
    categoria: "bebidas",
    precioMedio: null,
    precioFull: '10.000',
    favorito: false
  },
  {
    nombre: "soda hatsu",
    ingredientes: '',
    img: "",
    categoria: "bebidas",
    precioMedio: null,
    precioFull: '9.000',
    favorito: false
  },
  {
    nombre: "bretaña",
    ingredientes: '',
    img: "",
    categoria: "bebidas",
    precioMedio: null,
    precioFull: '8.500',
    favorito: false
  },
  {
    nombre: "agua 600ml",
    ingredientes: '',
    img: "",
    categoria: "bebidas",
    precioMedio: null,
    precioFull: '',
    favorito: false
  },
  {
    nombre: "",
    ingredientes: '',
    img: "",
    categoria: "bebidas",
    precioMedio: null,
    precioFull: '',
    favorito: false
  },
]

export const menuPdf = [
'entradas.png',
'sandwiches.png',
'sandwiches2.png',
'sandwichesg.png',
'snadwichesg2.png',
'ensaladas.jpg',
'planchitas.png',
'hamburguesas.jpg',
'adiciones.png',
'terrazakids.png',
'bebidas.png',
'malteadas.png',
'postres.png'
]

 