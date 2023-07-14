/*const articulos = [
    {nombre: 'Vasos' , seccion: 'Vajilla' , precio: 800},
    {nombre: 'Mantel' , seccion: 'Textil' , precio: 1300},
    {nombre: 'Cuadros' , seccion: 'Decoracion' , precio: 950},
    {nombre: 'Ollas' , seccion: 'Cocina' , precio: 1580},
    {nombre: 'Cubiertos' , seccion: 'Cocina' , precio: 760},
    {nombre: 'Lapices' , seccion: 'Libreria' , precio: 500},
]; */

class Articulo {
    nombre;
    precio;
    
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Item {
  producto
  cantidad;

    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}