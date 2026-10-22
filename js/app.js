//Esto es un comentsrio
/*Esto es un comentario en bloque porque puedo escribir varias líneas de lo que yo quiero explicar de mi funcion*/
/**
 * hola 
 * chau
 * Me voy 
 * Me fui
 * Ya no estoy
 */
let numero = 42 //Esto es un comentario de una sola línea
console.log(numero);
let persona = {
    nombre: "Pepito",
    edad: 151,
    estatura: 1.68 //se quita el coma cuando es el último elemento de un objeto
};
console.log(persona);
console.log(persona.nombre);
console.log(persona.estatura);
console.log(persona.edad);


console.log(["estarura"]);
persona.edad = 16;
console.log(persona.edad);
console.log(["edad"]);

persona.estatura = 152;
console.log(persona.estatura);

persona["nombre"] = "Miguel";
console.log(persona["nombre"]);

let propiedad_1 = "equipo";
persona[propiedad_1] = "Real Madrid-Oriente Petrolero";
console.log(persona);

delete persona.estatura;
console.log(persona);

 let animales = ["mono", "gallina", "loro", "lemur"];
 console.log(animales [2]);
 animales. [4] = "perro";

 animales[10]="jichi";
 console.log(animales);
 console.log(animales[7]);
 console.log(typeof animales);