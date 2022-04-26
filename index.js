// EJERCICIO 1

function ejercicio1() {
  var primero = prompt("Dime el primer número");
  var segundo = prompt("Dime el segundo número");
  var tercero = prompt("Dime el tercer número");

  primero = parseInt(primero);
  segundo = parseInt(segundo);
  tercero = parseInt(tercero);

  var operacion = primero + segundo + tercero;

  if (primero < segundo && primero < tercero) {
    alert("El número " + primero + " es menor");
  } else if (segundo < primero && segundo < tercero) {
    alert("El número " + segundo + " es menor");
  } else if (tercero < primero && tercero < segundo) {
    alert("El número " + tercero + " es menor");
  } else {
    alert("Algo raro pasa");
  }
  /* 
console.log(primero)
console.log(segundo)
console.log(tercero)
*/
  if (operacion < 15) {
    console.log(operacion);
    alert("El mayor es " + Math.max(primero, segundo, tercero));
  } else {
    alert("Por ahí no");
  }
}

// EJERCICIO 2
function ejercicio2() {
  const frase = prompt("Escribe una frase");
  const letra = prompt("Escribe una letra");

  const separar = frase.split("");

  var contador = 0;
  var arrr = [];

  for (let i = 0; i < separar.length; i++) {
    if (separar[i] === letra) {
      arrr.push(i);
    }
  }

  alert("La letra " + letra + " aparece " + arrr.length + " veces");
}

/* 

*/

// EJERCICIO 3
function ejercicio3() {
  var primero = prompt("Dime el primer número");
  primero = parseInt(primero);
  var segundo = prompt("Dime el segundo número");
  segundo = parseInt(segundo);

  var operacion = prompt("¿Quieres sumar o restar?");

  var sumar = primero + segundo;
  var restar = primero - segundo;

  if (operacion === "sumar") {
    alert("El resultado es " + sumar);
  } else if (operacion === "restar") {
    alert("El resultado es " + restar);
  } else {
    alert("No me trolees");
  }

  if (primero === segundo) {
    var nombre = prompt("Dime tu nombre");
    alert(nombre.length);
  }
}

/* 

*/

// EJERCICIO 4
function ejercicio4() {
  const usuario = "usuario1";
  const contraseña = "abcd";
  var comprobar = 1;

  const preguntaUsuario = prompt("Dime tu usuario");
  const preguntaContraseña = prompt("Dime tu contraseña");

  do {
    if (preguntaUsuario === usuario && preguntaContraseña === contraseña) {
      alert("Bienvenido");
      comprobar = 4;
      break;
    } else {
      alert("Hubo un error vuelve a intentarlo");
      const preguntaUsuario = prompt("Dime tu usuario");
      const preguntaContraseña = prompt("Dime tu contraseña");
      comprobar++;
    }
  } while (comprobar < 3);
}
/* 

*/

// EJERCICIO 5
function ejercicio5() {
  var letra = prompt("Dime una letra por favor");

  if (letra === "a") {
    alert("7");
  } else if (letra === "b") {
    alert("9");
  } else if (letra === "c") {
    alert("101");
  } else {
    alert("ahaha");
  }
}
/* 

*/

// EJERCICIO 6
function ejercicio6() {
    const palabras = ["Tigre", "Anaconda", "León", "Boa", "Mariposa", "Delfín", "Ballena"];

    const orden = palabras.sort();
    alert(orden); 
}
/* 

*/
