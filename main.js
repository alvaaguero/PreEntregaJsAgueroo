/*clase 1*/
//let numeroUno = 8;
//let numeroDos = 10;

//let promedio = (numeroUno + numeroDos) /2;
//console.log(promedio);
//clase 2.
//let edad = parseInt(prompt("ingrese su edad"))

//edad = Number(edad)

//if (edad > 18){
    //alert("Puedes entrar al bolche");
//} else{
    //alert("No puedes entrar...anda pa lla bobo");
//}

//dato booleano
//true or false.

//if(true){
    //alert("este codigo se va a ejecutar");
//}
//if(false){
    //alert("este codigo no se va a ejecutar");
//}

//para poder resolver un codigo se hace lo que esta dentro de () y despues al calculo general.

//console.log((true && true)&& false);

//ejemplo de edades para salir a bailar.
//let edad = parseInt(prompt("Ingrese su edad"));
//if (edad > 18 && edad < 60){
    //alert("Puedes seguir saliendo");
//} else if(edad >60){
    //alert("Mejor ve a descansar");
//} else if(edad<18){
    //alert("Ve a jugar con tus amigos");
//}
//CICLOS E INTERACCIONES

//Pido una contraseña a usuario hasta que ingrese la correcta

//let passwordUsuario = parseInt(prompt("Ingrese su contraseña"));
//const passAutorized = 2614;

//for (let i=0; i<2 ; i++){
    //if (passwordUsuario == passAutorized){
        //console.log("contraseña correcta");
        //break //para hcaer corte
    //}else{
        //passwordUsuario=parseInt(prompt("Contraseña incorrecta, ingrese nuevamente"));
    //}
//}



//Acceso a compra de entradas"Fiesta Dump"
 
let edad = parseInt(prompt("ingrese su edad"))
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
ingrese();