
//Bienvenida
let saludo = prompt("Ingrese su nombre")
alert(`Bienvenide!!! ${saludo}`)

//Solicito edad y altura para pormedio de crecimiento
let edad = 0
let altura = 0

do{
    edad = prompt("Ingrese su edad porfavor");
}while (isNaN(edad));

do{
    altura = prompt("Ingrese su altura en cm porfavor");
}while (isNaN(altura));

let PromedioCrecimiento = altura / (edad ** 2)
console.log(PromedioCrecimiento)

//variables de productos
let crecimiento = 95.000

let mantenimiento = 30.000

let disminucion= 48.000


//recomendacion de cant. productos
const productosRecomendados = (altura) =>{

    let crecicash = crecimiento * altura
    let mantecash = mantenimiento * altura
    let dismicash = disminucion * altura
    alert(`En ese caso se recomienda:\n${altura} Producto de Crecimiento ($${crecicash})\n${altura} Producto de mantenimiento ($${mantecash})\n${altura} Producto de disminucion ($${dismicash})`)
}

if (PromedioCrecimiento <= 0,5) {
    productosRecomendados(2)
}else if(PromedioCrecimiento <= 0,7){
    productosRecomendados(2)
} else if(PromedioCrecimiento <= 1){
    productosRecomendados(2)
}
else{
    productosRecomendados(12)
}

//lista de producs
class Producto{
    constructor(nombreProdu, precioProdu, diaProdu){
        this.nombreProdu = nombreProdu;
        this.precioProdu = precioProdu;
        this.diaProdu = diaProdu;
    }

    get_datos(){
        console.log("............")
        console.log("Nombre del producto:", this.nombreProdu);
        console.log("Precio del producto:", this.precioProdu);
        console.log("Dia del producto", this.diaProdu);
        console.log("............")
    }
}

let lista_produ = []

lista_produ.push( new Producto("Crecimiento", 300 , "Martes"));
lista_produ.push( new Producto("Mantenimiento", 650 , "Jueves"));
lista_produ.push( new Producto("Disminucion", 330 , "viernes" ));



console.log(lista_produ);

for ( let producto of lista_produ){
    producto.get_datos();
}
//Seleccion de produ

function busqueda_producto(servicio){
    return servicio.nombreProdu == seleccion_produ
}

let seleccion_produ = prompt("Ingrese producto\nCrecimiento\nMantenimiento\nDisminucion");

let resultado_busqueda = lista_produ.find( busqueda_producto );

while(resultado_busqueda == undefined){

        alert("No se encontro el producto")
        seleccion_produ = prompt("Ingrese nuevamente el producto (respete las  mayusculas y minusculas)\nCrecimiento\nMantenimiento\nDisminucion")
        resultado_busqueda = lista_produ.find( busqueda_producto )
}

//Producto seleccionado

let precio_producto = 0

if ( seleccion_produ == "Crecimiento"){
    precio_producto = crecimiento
}
else if ( seleccion_produ == "Mantenimiento"){
    precio_servicio = mantenimiento
}
else if ( seleccion_produ == "Disminucion"){
    precio_producto = disminucion
}
else{
    console.log("Producto erroneo")
}

//Calculamos la cant. de productos que quiera el cliente

let cantidad_producto = 0

do{
    cantidad_producto = prompt("Ingrese la cantidad de productos que desea obtener")
}while(isNaN(cantidad_producto))

//precio final
let precio_final = 0

function precio_total(producto, cantidad){
    precio_final = (producto * cantidad)
}

precio_total(precio_producto, cantidad_producto);

alert(`Total a pagar: $${precio_final}`)




//Arrays
//