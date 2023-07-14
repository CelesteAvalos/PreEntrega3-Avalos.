const contenedor = document.getElementById('container');

const  miCards = document.getElementsByClassName('cards');

const  cardImg = document.getElementsByClassName('card');

const  cardInfo = document.getElementsByClassName('card-body');

const  button = document.getElementsByClassName('btn');

const tabla = document.getElementById('items');

const total = document.getElementById('total');

console.log (cardInfo);

let carrito = [];
let stock = [];

stock.push(new Articulo('mantel', 1300));
stock.push(new Articulo('Vasos', 800));
stock.push(new Articulo('Cuadros', 950));
stock.push(new Articulo('Ollas', 1580));
stock.push(new Articulo('Cubiertos', 760));
stock.push(new Articulo('Lapices', 500));

localStorage.setItem('stock',JSON.stringify(stock));
 
function traerItems() {

    stock = JSON.parse(localStorage.getItem('stock')) || [];
    carrito = JSON.parse(localStorage.getitem('carrito')) || [];
}

function contenedoresCards()  {

    stock.forEach((articulo,index) =>  {

        let option = document.createElement('option');
        option.textContent = articulo.nombre;
        option.value = index;
        selectArticulos.appendChild(option);
    })
}