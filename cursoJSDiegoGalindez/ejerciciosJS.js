//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
//https://vuejs.org/
// Ejemplo para conseguir input del usuario
/*
  let a = window.prompt('dame un valor'); // Siempre regresa una cadena
*/
// Ejemplo para imprimir a consola
/*
  console.log('esto es un mensaje', 'este también');
*/
// Ejemplo para imprimir a documento

  //document.writeln('esto es un mensaje');

  //alert

//1. Imprime la fecha actual
  
//console.log(Date());
 
document.write(Date());

//2. Obten el área de un triángulo. Pidele los 3 lados al usuario

/*
let ladoA = window.prompt('L1');

let ladoB = window.prompt('L2');

let ladoC = window.prompt('L3');

function triangulo (ladoA,ladoB,ladoC) {
  let semiperimetro = (ladoA + ladoB +ladoC)/2;
  let area = semiperimetro * (semiperimetro-ladoA) * (semiperimetro-ladoB) * (semiperimetro-ladoC);
  return Math.sqrt(area);
};

document.writeln(triangulo(ladoA, ladoB, ladoB))
*/


//3. Voltea una string dada por el usuario

/*

let str = prompt('voltearstring');
//let divstr = str.split();
let revstr = str.split('').reverse().join('');
console.log(revstr + ' reverse');

// -. convertir str en arreglo
// -. voltear el arreglo
// -. convertir el arreglo en string
// -. imprimir string


//4. Voltea una string dada por el usuario sin usar el método de reverse

let norev = '';
for(let i = str.length-1; i>=0; i--)
{
  norev += str[i]
}
console.log(norev +' NOreverse');

*/

//5. Convierte una temperatura dada en C o F a F o C, respectivamente
/*
  C -> F: (C x 9/5) + 32
  F -> C: (F - 32) x 5/9
  Ejemplos:
  60C: 140F
  45C: 7.222222222222222C
*/

/*
let C = window.prompt('Convierte Celsius a Farenheit'); 
console.log((C*9/5)+32 + ' °C to °F');
let F = window.prompt('Convierte Farenheit a Celsius');
console.log((F-32)*5/9 + ' °F to °C');
*/

//6. Crea un objeto que tenga una propiedad cuyo nombre es definido por el usuario. Su valor debe ser verdadero

/*
  si prop es el nombre,
  a  = {};
  a.prop = true
*/

/*
let a = window.prompt('Accede a la propiedad');
let o = {};
o[a] = true // nombredefinido:true
//o.a = true //a:true

console.log(o);
*/

//7. Realiza la suma de los valores que de el usuario hasta recibir un valor negativo

/*
let n = Number(window.prompt('Ingresa cantidades a sumar'));
let negt = 0;

while (n >= 0){
  negt += n;
  n = Number(window.prompt('Ingresa cantidades a sumar'))
}
console.log('Total de suma: ' + negt);
*/

//8. Convierte a mayúscula la primer letra de cada palabra en una cadena dada por el usuario
 
/*
 let ingresar = (window.prompt('Ingresa una palabra o frase en minúscula'));
 let contenido = ingresar.split(' ');
 let convertir = contenido.map(palabras => palabras.charAt().toUpperCase() + palabras.slice(1))
 console.log(convertir.join(' '));
 */

 /*
 //regexp .replace(/\W|^/g, '_')
let ingresar = String(window.prompt('escibir algo en minusculas'));
let convertir = ingresar.replace(/\b\w/g, function(palabra){
  return palabra.toUpperCase()
});
alert(convertir);
*/

//9. Revisa si un número dado es múltiplo de 3 o de 7
/*
NO FUNCIONA, TAL VEZ SEA EL Number, ME ARROJA QUE VALOR YA ESTA DECLARADO
function revisar(valor,multiplo){
  let valor = Number(window.prompt('Ingresa número a revisar'));
  let multiplo = Number(window.prompt('Ingresa multiplo a revisar'));
  resto = valor % multiplo;
  if (resto % 3 == 0){
    console.log('El número '+ valor + 'es múltiplo de ' + multiplo);
  } else if (resto % 7 == 0){
    console.log('El número '+ valor + 'es múltiplo de ' + multiplo);
  } else {
    alert ('El número que ingresaste no es múltiplo de 3 ó 7, sigue participando');
  }
};
*/

//10. Revisa cuantas veces se repite un caracter dado en una cadena dada
/*
let str = String(window.prompt('Escribeeeee'));
let conteo = 0
let r = window.prompt('Escribe caracter a revisar');
for (let i = 0; i < str.length; i++){
  if(str[i] === r) conteo ++;
}
alert('Se repite '+ conteo + ' veces el caracter '+ r);
*/
//https://medium.com/@caymanbruce/finding-duplicate-characters-in-a-string-in-javascript-94e2cb23ab5e

//11. Revisa cuantas veces se repite un valor dado en un arreglo

/*
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
*/

//12. Divide un número de 3 dígitos en sus centenas, decenas y unidades
  // 103 -> 1 centena, 0 decenas, 3 unidades
/*
function digitos(cantidad){
  let num = cantidad.toString().split('');
  let result =num[0] + ' centenas' + ', ' + num [1] + ' decenas' + ', ' + num [2] + ' unidades ';
  console.log(result);
}
digitos(789);
*/

//13. Regresa todos los caracteres que no sean letras de una cadena
/*
let pal = String (window.prompt('Escribe :) '))
let arrr = [];
let regr = /[A-Za-z]/   //regex

for (var i = 0; i < pal.length; i++) {
  if(!pal[i].match(regr)) {
    arrr.push(pal[i]);
  }
}
console.log(arrr.join('') + ' estos caracteres no son letras');
*/

//14. Haz una función que lanza un error con el mensaje dado por el usuario
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Error
/*
let mensaje = window.prompt ('Ingrese su mensaje de error: ');

try {
  throw new Error('Error');
} catch (e) {
  console.log(e.name);
};
*/

//15. Extiende la función anterior para atrapar el error e imprimir su mensaje y stack



//16. Suma los contenidos de un arreglo de números
//*refactorizar hacer compacto un codigo
/*
var array = [1, 2, 3];

for (var i = 0, sum = 0; i < array.length; sum += array[i++]);

console.log(sum);
*/

//17. Regresa un arreglo nuevo con el cuadrado de cada valor del arreglo original



//18. Regresa que tipo de ángulo es el dado

 /* Agudo: 0 a 90 grados
  Recto: 90 grados
  Obtuso: 90 a 180 grados
  Llano: 180 grados*/

  /*
var angulos =Number(window.prompt('Ingresa el numero de grados de un ángulo'));

if (angulos >=0 && angulos <=89) {
  alert('Ángulo agudo')
  }
*/

//19. Regresa un arreglo nuevo sin los valores repetidos de un arreglo original


//20. Quita los valores repetidos de un arreglo (sin usar otro arreglo)


//21. Convierte un número binario dado por el usuario a decimal



//22. Convierte un número decimal dado por el usuario a binario, octal y hexadecimal (bases 2, 8 y 16)


//23. Regresa la cantidad de valores que comparten dos arreglos diferentes
// https://codeburst.io/comparison-of-two-arrays-using-javascript-3251d03877fe


//const arr1= [1,5,6,7,5,6,5,56,11,78,7,10];
//const arr2= [1,5,6,7,8,5,6,7,8,10,11,78];
/*
const arr1= [1,2,3,4];
const arr2= [3,4,5,6,7];
function compare (arr1,arr2) {
  const finalarray=[];
  arr1.forEach((e1)=>arr2.forEach((e2)=>
      {if(e1 === e2){
        finalarray.push(e1)
    }
   }
 ));
 return finalarray;
}

console.log(compare(arr1,arr2));

*/

//24. Valida que una cadena dada no tenga espacios en blanco
  //expresion regular

//25. Dada una cadena, determina su valor de scrabble

/*
  1: E, A, I, O, N, R, T, L, S, U
  2: D, G
  3: B, C, M, P
  4: F, H, V, W, Y
  5: K
  8: J, X
  10: Q, Z
*/

//26. Determina si una cadena dada por el usuario es un palíndromo
  //solucion primeros dias
//27. Implementa una lista ligada

//28. Implementa una lista doblemente ligada

//29. Obten el Máximo común divisor de dos números dados