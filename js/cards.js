const contenedor = document.getElementById('container');

const  miCards = document.getElementsByClassName('cards');

const  cardImg = document.getElementsByClassName('card');

const  cardInfo = document.getElementsByClassName('card-body');

const  button = document.getElementsByClassName('btn');

console.log (cardInfo);

let carrito = [];
let stock = [];

stock.push(new Articulo('Mantel', 1300));
stock.push(new Articulo('Vasos', 800));
stock.push(new Articulo('Cuadros', 950));
stock.push(new Articulo('Ollas', 1580));
stock.push(new Articulo('Cubiertos', 760));
stock.push(new Articulo('Lapices', 500));

localStorage.setItem('stock',JSON.stringify(stock));