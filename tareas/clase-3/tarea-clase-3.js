// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const nombreDeUsuario = prompt('¿Cual es tu nombre?').toLowerCase();
if (nombreDeUsuario === 'miguel'){
    console.log (`Hola Tocayo`);
}else if (nombreDeUsuario === 'bob'){
    console.log (`Te llamas como mi amigo`);
}else {
    console.log (`Hola ${nombreDeUsuario}`)
};


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const edadUsuario = Number (prompt ('¿Cuantos años tienes?'))
if (edadUsuario === 34){
    console.log ('Tenemos la misma edad!');
}else if (edadUsuario < 34){
    console.log ('Eres mas joven que yo que tengo 34 años!!');
}else if (edadUsuario > 34){
    console.log ('Eres mayor que yo que tengo 34 años!!');
}else {
    console.log ('No comprendo ese valor')
};

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const dniUsuario = prompt('¿Tienes DNI? responde con "si" o "no"').toLowerCase();
const edad = Number (prompt ('¿Qué edad tienes?'));
if (dniUsuario === 'si' && edad >= 18){
    console.log('Bienvenido al Bar de MOE')
}else if (edad < 18){
    console.log('No puedes ingresar al Bar de MOE siendo menor de edad')
}else if (dniUsuario === 'no'){
    console.log('No puedes ingresar al Bar de MOE sin documento de identidad')
}else if (dniUsuario !== 'si' && dniUsuario !== 'no'){
    console.log(`No comprendo tu respuesta ${dniUsuario}`)
} else {
    console.log('No podrás ingresar al Bar de MOE')
};

