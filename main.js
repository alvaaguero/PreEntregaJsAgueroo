const productos = [
    {id:1, nombre: "Adidas NMD_V3", descripcion: "Zapatillas de Moda unisex", precio: 20.000, imagen: "", 
    categoria: "calzado"},
    {id:2, nombre: "Nike Dunk Low Retro", descripcion: "Zapatillas de Moda unisex", precio: 35.000, imagen: "", 
    categoria: "calzado"},
    {id:3, nombre: "Nike Offcourt", descripcion: "Ojotas de Moda unisex", precio: 15.000, imagen: "", 
    categoria: "calzado"},
    {id:4, nombre: "Adidas Predator", descripcion: "Botines de Futbol Unisex", precio: 40.000, imagen: "", 
    categoria: "calzado"},
    {id:5, nombre: "Stephen Curry Golden", descripcion: "Musculosa de Basquet unisex", precio: 18.000, imagen: "", 
    categoria: "ropa"},
    {id:6, nombre: "Jordan Air", descripcion: "Remera Jordan unisex", precio: 15.000, imagen: "", 
    categoria: "ropa"},
    {id:7, nombre: "Own the run", descripcion: "Remera Adidas unisex", precio: 20.000, imagen: "", 
    categoria: "ropa"},
    {id:8, nombre: "Nike Tee", descripcion: "Remera Nike unisex", precio: 22.000, imagen: "", 
    categoria: "ropa"},
    {id:9, nombre: "Argentum flitch", descripcion: "Pelota de futbol", precio: 30.000, imagen: "", 
    categoria: "accesorios"},
    {id:10, nombre: "Nike bolso", descripcion: "Bolso organizador deportivo", precio: 8.000, imagen: "", 
    categoria: "accesorios"},
    {id:11, nombre: "Medias Sportwear", descripcion: "Medias acolchadas Adidas par", precio: 6.000, imagen: "", 
    categoria: "accesorios"},
    {id:12, nombre: "Guantes Nike Dump", descripcion: "Guantes de Arquero", precio: 25.000, imagen: "", 
    categoria: "accesorios"}
];
function guardarProductosLS(productos){
    localStorage.setItem("productos", JSON.stringify(productos))
}
function cargarProductosLS(){
    return JSON.parse(localStorage.getItem("productos"))
}

guardarProductosLS(productos);