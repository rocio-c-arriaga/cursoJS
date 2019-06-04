//1. Escribe una función llamada calculateDogAge que reciba un número (la edad humana del perro) y calcule su edad en años de perro (edad x 7)

/*
function calculateDogAge (humDog) {
return (humDog*7)
}
let a = window.prompt('Enter your human dog age');
document.writeln(calculateDogAge(a) + ' dog age');
*/

//2. Escribe una función llamada getCandySupply que reciba dos números (edad, cantidad por día) y calcule cuantos dulces consumirías por el resto de tu vida.
  // El resto de tu vida es definido por una edad constante (por ejemplo, 75 años)

  /*
  function getCandySupply(edad,cantxdia) {
    const e = 75;
    return (e - edad) * cantxdia * 365
  };

  let c = Number(window.prompt ('Enter your age'));
  let canD = Number(window.prompt ('Enter candy consume in a day'));
  document.writeln(getCandySupply(c,canD) + ' candy consume for the rest of your life (...or until your 75)');
*/

//3. Crea una función que permita encadenar llamadas
  // a().a().a() ... etc
/*
  function encadenarll (){
    return 
  }
*/

//4. Crea una función que recibe un tipo (formal/casual) y dos funciones, una para un saludo casual (hola!) y otra para un saludo formal (buenos dias)
  //La función debe regresar el tipo de saludo que va a usarse
/*
function saludo(tipo, formal, casual) {
  if (tipo === 'formal') {
    // llamar a formal
    return(formal())
  } else { 
    // Llamar a casual
    return(casual())
  }
};

//let x = () => 1
//x() // 1

let f = () => 'buenos días'
let c = () => 'hola!'
saludo('formal', f, c)
let w = (window.prompt(' Saludo '))
document.writeln(saludo(w,f,c) + ' :)')
*/

//6. Conviertan cualquier ciclo for que use un arreglo de la parte 1 para que use forEach o map
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach
let str = prompt('voltearstring');
let revstr = str.split('').reverse().join('');
let strArray = str.split('');
console.log(strArray.map((c, index) => strArray[strArray.length - index - 1]))
console.log(revstr + ' reverse');
let norev = '';
for(let i = str.length-1; i>=0; i--)
{
  norev += str[i]
}
console.log(norev +' NOreverse');

//7. Explica cual es la salida de las siguientes funciones y porqué:

/*
var a = 12;
(function() {
  alert(a);
})();

// La salida es una alerta de 12, la función llama a la variable definida como numero 12

*/

/*
var a = 5;
(function() {
  var a = 12;
  alert(a);
})();

//La salida de la alerta es 12, se declara la variable dentro de la función

*/

/*
var a = 10;
var x = (function() {
  var a = 12;
  return (function() {
    alert(a);
  });
})();
x();

*/

/*
var a = 10;
var x = (function() {
  var y = function() {
    var a = 12;
  };
  return function() {
    alert(a);
  }
})();
x();
//

*/

/*
var a = 10;
var x = (function() {
  (function() {
    a = 12;
  })();
  return (function() {
    alert(a);
  });
})();
x();
*/

/*
var a = 10;
(function() {
  var a = 15;
  window.x = function() {
    alert(a);
  }
})();
x();
*/

/*
function leFunction() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
     return 2;
  }
}
leFunction();
*/

/*
var a = 1;
function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  a = 5;
  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
*/

/*
var fullname = 'A Name';
var obj = {
  fullname: 'Full Name',
  prop: {
    fullname: 'Le Name',
    getFullname: function() {
      return this.fullname;
    }
  }
};
console.log(obj.prop.getFullname());
var aCall = obj.prop.getFullname;
console.log(aCall());
console.log(obj.fullname);
*/

/*
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
*/

/*
  Crea una clase persona que recibe un nombre, apellido y edad
  Agrega métodos para cambiar y obtener cada una de las propiedades
  Agrega un método (describe) que regrese una cadena como esta:
  {Nombre} {Apellido}, {edad} años.
*/

/*
  Crea una clase Product que recibe un nombre y un valor
  tiene un método (value) que regresa su valor con iva (x1.16)

  Crea otra clase Cart que recibe un arreglo de Product
  tiene un método (add) que recibe un Product y lo agrega a su lista
  tiene un método (total) que regresa el total de todos los Product(con iva)

  Crea otra clase Food que hereda de product
  su método value regresa el valor sin iva
  Esta clase debería poder usarse en Cart
*/