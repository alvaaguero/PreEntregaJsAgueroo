
//Acceso a compra de entradas"Fiesta Dump"
 
/* let edad = parseInt(prompt("ingrese su edad"))
edad = Number(edad)

if (edad > 17){
    alert("Puedes comprar la entrada.");
} else{
    alert("Acceso denegado");
}

function ingrese(){
    let nombre = prompt("Ingrese su nombre")
    while(nombre === ""){
        nombre = prompt("Ingrese su nombre")
    }
    console.log(nombre)
}
ingrese(); */

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
let crecimiento

let mantenimiento

let disminucion


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

