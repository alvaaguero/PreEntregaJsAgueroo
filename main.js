
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
let saludo = prompt("Ingrse su nombre")
alert(`Bienvenide ${saludo}`)

//Solicito edad y altura para pormedio de crecimiento
let edad = 0
let altura = 0

do{
    edad = prompt("Ingrese su edad porfavor");
}while (isNaN(edad));

do{
    altura = prompt("Ingrese su altura en cm porfavor");
}while (isNaN(altura));

let PromedioCrecimiento = edad / (altura ** 2)
console.log(PromedioCrecimiento)
