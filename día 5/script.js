let nombre = prompt("introduce tu nombre");
let edad = prompt ("cual es tu edad");
let ciudad = prompt ("Donde vives");
let saludo1 = ["Mi nombre es "];
let saludo_completo = saludo1 + nombre;

console.log(saludo_completo);
console.log(edad);
console.log(ciudad);


function suma (num1, num2){

    console.log(num1 + num2)

}

suma(5, 5);

//Estructuras de control

if (nombre == "javier"){
    console.log("hola javier");
}

else{
    console.log("nombre_incorrecto");
}

if (edad > 18){
    console.log("eres mayor de edad")

}
else if (edad < 18){
    console.log("eres menor de edad")
}

let booleano = true;
let booleano_falso = false;
let coches = ["Vento", "Gol", "Volcho"];
let nums = [1, 2, 3, 4, 5];
let cosas = [1, "hola", true];
let x = {firstname:"John", lastname:"perez"};
let indefinido;

console.log("hola mundo!");