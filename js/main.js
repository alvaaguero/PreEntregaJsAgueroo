const productos = [
    {id:1, nombre: "Adidas NMD_V3", descripcion: "Zapatillas de Moda unisex", precio: 20000, imagen: "Adidas NMD_V3.png", 
    categoria: "calzado"},
    {id:2, nombre: "Nike Dunk Low Retro", descripcion: "Zapatillas de Moda unisex", precio: 35000, imagen: "Nike Dunk Low Retro.png", 
    categoria: "calzado"},
    {id:3, nombre: "Nike Offcourt", descripcion: "Ojotas de Moda unisex", precio: 15000, imagen: "Nike Offcourt.png", 
    categoria: "calzado"},
    {id:4, nombre: "Adidas Predator", descripcion: "Botines de Futbol Unisex", precio: 40000, imagen: "Adidas Predator.png", 
    categoria: "calzado"},
    {id:5, nombre: "Stephen Curry Golden", descripcion: "Musculosa de Basquet unisex", precio: 18000, imagen: "Stephen Curry Golden.png", 
    categoria: "ropa"},
    {id:6, nombre: "Jordan Air", descripcion: "Remera Jordan unisex", precio: 15000, imagen: "Jordan Air.png", 
    categoria: "ropa"},
    {id:7, nombre: "Own the run", descripcion: "Remera Adidas unisex", precio: 20000, imagen: "own the run.png", 
    categoria: "ropa"},
    {id:8, nombre: "Nike Tee", descripcion: "Remera Nike unisex", precio: 22000, imagen: "Nike Tee.png", 
    categoria: "ropa"},
    {id:9, nombre: "Argentum flitch", descripcion: "Pelota de futbol", precio: 30000, imagen: "Argentum flitch.png", 
    categoria: "accesorios"},
    {id:10, nombre: "Nike bolso", descripcion: "Bolso organizador deportivo", precio: 8000, imagen: "Nike bolso.png", 
    categoria: "accesorios"},
    {id:11, nombre: "Medias Sportwear", descripcion: "Medias acolchadas Adidas par", precio: 6000, imagen: "Medias Sportwear.png", 
    categoria: "accesorios"},
    {id:12, nombre: "Guantes Nike Dump", descripcion: "Guantes de Arquero", precio: 25000, imagen: "Guantes Nike Dump.png", 
    categoria: "accesorios"}
];
function guardarProductosLS(productos){
    localStorage.setItem("productos", JSON.stringify(productos))
}
function cargarProductosLS(){
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);