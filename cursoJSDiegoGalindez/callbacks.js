
//1. Recorre un arreglo usando un callback, imprime cada elemento

["esto", "es", "un", "callback"].forEach(a =>console.log(a));

//2. Haz varios callbacks de forma que se imprima:
    //1 después de 3 segundos
    
    let foo = () => console.log('in callback 3sec!');
    setTimeout(foo, 3000)  // Escribe 'in callback' después de 3 segundos


    //2 después de 1 segundo

    setTimeout(foo => console.log('1sec'),1000);

    //3 después de 4 segundos

    setTimeout(foo => console.log('4sec'),4000);

//3. En consola debería verse 2 1 3

['2'+' 1 '+'3'].forEach(n =>console.log(n));

//4. Escribe un callback que recibe un argumento y lo imprime

let argumento = ['Escribe', 'otro', 'metodo'];
let 


//5. Crea una función que recibe el callback anterior y lo ejecuta

//6. Crea una función que llama a un callback y usa el valor que regresa para llamar a otro. 
let 


//7. Después debe llamar a un tercer callback con el valor que regresa el segundo.


/////////////////////////////////////////

/* REPASO POR LA TARDE
let nombres = ['Sandra', 'Liz', 'Ale'];
undefined
let despedida = function (persona){}
undefined
let despedida = function (persona){
console.log('bye ' + persona)
};


let desp = function (persona){
console.log('bye ' + persona)
};
undefined
desp('Homero');
VM292:2 bye Homero
undefined
nombres.forEach(function(elemento){console.log(elemento)})
VM428:1 Sandra
VM428:1 Liz
VM428:1 Ale
undefined
nombres.forEach(function(elemento){console.log('bye '+ elemnto)})
VM535:1 Uncaught ReferenceError: elemnto is not defined
    at <anonymous>:1:56
    at Array.forEach (<anonymous>)
    at <anonymous>:1:9
(anonymous) @ VM535:1
(anonymous) @ VM535:1
nombres.forEach(function(elemento){console.log('bye '+ elemento)})
VM547:1 bye Sandra
VM547:1 bye Liz
VM547:1 bye Ale
undefined
nombres.forEach(function(elemento){
console.log('bye '+ elemento)})
VM551:2 bye Sandra
VM551:2 bye Liz
VM551:2 bye Ale
undefined
nombres.forEach(desp)
VM292:2 bye Sandra
VM292:2 bye Liz
VM292:2 bye Ale
u*/
