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
o[a] = true
//o.a = true

console.log(o);

*/

//7. Realiza la suma de los valores que de el usuario hasta recibir un valor negativo

/*
let n = Number(window.prompt('Ingresa cantidades a sumar'));
let ntvo = 0;

while (n >= 0){
  ntvo += n;
  n = Number(window.prompt('Ingresa cantidades a sumar'))
}
console.log('Total de suma:' + '' +ntvo);
*/

//8. Convierte a mayúscula la primer letra de cada palabra en una cadena dada por el usuario

/*
let primerLetra = window.prompt('Ingresa una palabra o frase en minúscula');

function mayuscula() {
  return resultado
  .toLowerCase()
  .trim()
  .split(' ')
  .map ( v=> v[0].toUpperCase() + v.substr(1) ) //equivalente a un for each y va iterando entre ellos for
  .join(' ');
}
 document.writeln(mayuscula(resultado));

 */
/*
 let ingresar = (window.prompt('Ingresa una palabra o frase en minúscula'));
 let contenido = ingresar.split('Ingresa frase o palabra');
 let convertir = contenido.map(contenido => palabra.chartAt(0).toUpperCase() + palabra.slice(1))
 console.log(convertir.join(' '));
 */

//9. Revisa si un número dado es múltiplo de 3 o de 7



//10. Revisa cuantas veces se repite un caracter dado en una cadena dada



//11. Revisa cuantas veces se repite un valor dado en un arreglo
/*
function rpt (valor,arr) {
  let vlr
}
*/

//12. Divide un número de 3 dígitos en sus centenas, decenas y unidades
  // 103 -> 1 centena, 0 decenas, 3 unidades
/*
function digitos(cantidad){
  let num = cantifaf.toString().split('');
  let result =num[0]+'centenas'+','
}
*/

//13. Regresa todos los caracteres que no sean letras de una cadena




//14. Haz una función que lanza un error con el mensaje dado por el usuario

/*
function error() {
  let mensaje = window.prompt ('Ingrese su mensaje de error: ');
  throw new Error(mensaje);
}
*/

//15. Extiende la función anterior para atrapar el error e imprimir su mensaje y stack
/*

try{
  error()  
  }catch(Error){
    document.getElementById('err').innerHTML = Error;
    document.getElementById()
  }
*/

//16. Suma los contenidos de un arreglo de números
//*refacrtorizar hacer compacto un codigo



//18. Regresa un arreglo nuevo con el cuadrado de cada valor del arreglo original




//19. Regresa que tipo de ángulo es el dado
/*
  Agudo: 0 a 90 grados
  Recto: 90 grados
  Obtuso: 90 a 180 grados
  Llano: 180 grados

var angulos =Number(window.prompt('Ingresa el numero de grados de un ángulo'));

if (angulos >=0 && angulos <=89) {
  alert('Ángulo agudo')
  }
*/
//20. Regresa un arreglo nuevo sin los valores repetidos de un arreglo original


//21. Quita los valores repetidos de un arreglo (sin usar otro arreglo)


//22. Convierte un número binario dado por el usuario a decimal



//23. Convierte un número decimal dado por el usuario a binario, octal y hexadecimal (bases 2, 8 y 16)


//24. Regresa la cantidad de valores que comparten dos arreglos diferentes
// https://codeburst.io/comparison-of-two-arrays-using-javascript-3251d03877fe


//const arr1= [1,5,6,7,5,6,5,56,11,78,7,10];
//const arr2= [1,5,6,7,8,5,6,7,8,10,11,78];

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



//25. Valida que una cadena dada no tenga espacios en blanco
  //expresion regular

//26. Dada una cadena, determina su valor de scrabble

/*
  1: E, A, I, O, N, R, T, L, S, U
  2: D, G
  3: B, C, M, P
  4: F, H, V, W, Y
  5: K
  8: J, X
  10: Q, Z
*/

//27. Determina si una cadena dada por el usuario es un acrónimo
  //solucion primeros dias
//28. Implementa una lista ligada

//29. Implementa una lista doblemente ligada

//30. Obten el Máximo común divisor de dos números dados