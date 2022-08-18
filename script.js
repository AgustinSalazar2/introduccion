/* //EJERCICIOS:

//1) PEDIR AL USUSARIO QUE INGRESE SU NOMBRE. GUARDAR ESE NOMBRE
//EN UNA VARIABLE Y UTILIZARLO PARA SALUDAR AL USUARIO
//EJ: "HOLA SANDRA"
let saludo = "Hola";
let nombre = prompt("Ingrese su nombre");
alert(`${saludo} ${nombre}`);


//2) PEDIR AL USUARIO QUE INGRESE 2 NUMEROS Y DEVOLVER LAS
//OPERACIONES BASICAS (SUMA, RESATA, MULT, DIV)
let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));
let suma = numero1 + numero2,
    resta = numero1 - numero2,
    multi = numero1 * numero2,
    div = numero1 / numero2;
alert(`Suma: ${suma}
resta: ${resta}
multiplicacion: ${multi}
division: ${div}`);

let string = "123";
console.log(typeof(+string)); */

//Pedir al ususario que ingrese su apellido y devolverle
//el apellido todo en mayuscula

/* let apellido = prompt("Ingrese su apellido");
alert(`${apellido.toUpperCase()}`);
alert(`${apellido.toLowerCase()}`); */

const miArray = ["agustin", 1, true, ()=>{}, []];
const nuevoArray = ["pera", "kiwi", 3, "kakaroto"];

//Manipulacion de Arrays:
//Obtener un elemento del array:
nuevoArray[1]; // arroja "kiwi"

//Longitud:
miArray.length; //Devuelve 5

//Modificar un elemento:
nuevoArray[0] = "Banana";  //Ahora cambia pera por banana

//Obtener un elemento
let element = nuevoArray[1];  //Crea una variable y le asigna el elemento que esta en el array en la posiscion 1 en este caso kiwi

//Acceder al ultimo elemento
const ultimoElemento = nuevoArray[nuevoArray.length-1];
//console.log(ultimoElemento);

//indexof : busca la indice donde se encuentra un elemento
const personas = ["Susana", "Ruth", "Lautaro"];
let indice = personas.indexOf("Lautaro");

personas[personas.indexOf("Lautaro")] = "Ruben"; //Modifica

personas.push("Agustin"); //Agrega un elemento al final
personas.pop()            //Remueve un elemento al final
personas.unshift("Juan"); //Arrega un elemento al principio
personas.shift()          //Remueve el primer elemento
//console.log(personas.shift())

//splice agregar
personas.splice(1,0,"NOMBREAGREGADO");
//console.log(personas);
//splice para eliminar uno o mas elementos de un arreglo y agregar uno nuevo
personas.splice(1,2,"nombreAgregado");
//console.log(personas);

//Funciones:
function validarNombre(){
    return `${nombre} nuevo.`
}

const validarNombre2 = (nombre) => `${nombre} nuevo.`

//HACER UNA FUNCION LLAMADA objetosNumericos QUE EL PRIMER PARAMETRO INDIQUE EL VALOR QUE TENEMOS QUE AGREGAR AL ARREGLO Y EL SEGUNDO PARAMETRO ME INDIQUE EL INDICE DONDE SERA AGREGADO, QUE MUESTRE POR CONSOLA EL NUEVO ARREGLO.

const objetosNumericos = [10, 8, 5, 15, 25, 32];
console.log(objetosNumericos);

const numeros = (valor, indice) => {
    objetosNumericos.splice(indice, 0, valor);
    console.log(objetosNumericos);
    return;
}
numeros(20,1);

const sumar = (num1,num2) => num1+num2;
console.log(sumar(8,3));

//Ejercicio2: 