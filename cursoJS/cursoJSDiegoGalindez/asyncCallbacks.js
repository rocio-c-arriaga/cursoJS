
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

function saludo(hola) {
    console.log(hola)
}

function recibe(callback){
    callback('hello')
}
//let recibe = (callback) => callback('hellooo');

recibe(saludo)


function recibeArgumento(callback) {
    callback('Esto', 'recibe', 'un', 'argumento');
}

function foo(a, b, c, d) {
    console.log(a + ' ' + b + ' ' + c + ' '+ d);
}

recibeArgumento(foo);


//5. Crea una función que recibe el callback anterior y lo ejecuta
//https://anexsoft.com/javascript-que-son-como-usar-y-ejemplos-del-uso-de-callbacks

function hagoAlgo(callback) {
    callback('Hola estoy aprendiendo');
}

hagoAlgo(function(valor){
    console.log(valor);
})


//6. Crea una función que llama a un callback y usa el valor que regresa para llamar a otro. 
// Después debe llamar a un tercer callback con el valor que regresa el segundo.

function first(callback){
    callback('first');

}
function second(value, callback){
callback(`second, ${value}`); //templates
}
function third(firstValue, secondValue, callback){
    callback(`third, (${secondValue}),${firstValue}`);

}

first(firstValue => { //a partir de aquí es el parametro
    second(firstValue, secondValue => {  //arrow function, con parametro
        third(firstValue, secondValue, thirdValue => {
            console.log (thirdValue);
        });
    });
});

//Promise 
//`second, ${firstValue}` --> 'second, ' +  firstValue; (dame valor y metelo en cadena)

Promise.resolve('first').then(firstValue => { //te rgresa una promesa resulta con first, el valor que recibe first value es first
    Promise.resolve(`second, ${firstValue}`).then(secondValue => {//un .then recibe una funcion 
        Promise.resolve(`third (${secondValue}), ${firstValue}`).then(console.log); //template stream, deja interpretar jd dentro de la stream
    })
})


//son funciones muy 
const firstP = new Promise((resolve,reject) => {
    first(() => {
        resolve (fisrt);
    });
});

const secondP = new Promise((resolve,reject) => {
    second(first, second, third => {
        resolve ('second, third');
    });
});

const thirdP = new Promise((resolve,reject) => {
    first(first, second, third => {
        resolve ('first, second, third');
    });
});
firstP.then(secondP.then(thirdP.then(console.log)))


//ASYNCH/AWAIT

const asyncHell = async () => {
    const firstValue = await Promise.resolve ('first');//va a epserar a la promesa igual que callbacks 
    const secondValue = await Promise.resolve (`second, ${firstValue}`);
    const thirdValue = await Promise.resolve (`third, (${secondValue}), ${thirdValue}`);
    console.log(thirdValue);
    //return 'some text';
}

//x().then(console.log);
asyncHell();

asyncHell().then(() => console.log ('secretly a promise'));





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
*/
