//1. Convierte todos los ejercicios de la parte 1 a usar Promises (1,2,5)

["esto", "es", "un", "callback"].forEach(a => new Promise((resolve, reject) => resolve(() => console.log(a))));

let foo = () => console.log('in callback 3sec!');
setTimeout(foo, 3000)

const asyncHell = async () => {
  const firstValue = await Promise.resolve ('first');//va a epserar a la promesa igual que callbacks 
  const secondValue = await Promise.resolve (`second, ${firstValue}`);
  const thirdValue = await Promise.resolve (`third, (${secondValue}), ${thirdValue}`);
  console.log(thirdValue);
}

//2. Crea una Cadena de Promesas en la cual una lanza un error (no hagas Catch)

Promise.resolve(1).then (v => console.log(v));
Promise.resolve(1).then (v => v+3 ).then (v => v - 1).then (v => console.log(v));

//3. Agrega un catch al ejercicio anterior

Promise.resolve(1).then(v => v + 3).then(v => Promise.reject(v))
  .then(v => v * 3).catch(e => console.log(e));


//4. Agrega un finally al ejercicio anterior

Promise.resolve(1).then(v => v + 3).then(v => Promise.reject(v))
  .then(v => v * 3).catch(e => console.log(e)).finally(() => console.log('end'));

//5. Crea una función con 3 promesas, que acaben a tiempos diferentes y regresa en cuanto la primera termina

let promesas = () => {
let p1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'promesa1'));
let p2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'promesa2'));
let p3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 'promesa3'));
return Promise.race ([p1,p2,p3]);
}
promesas().then((resultado) => console.log(resultado)); 

//opcion 2 con await
async function ej3(){
  let resultado = await promesas();
  console.log(resultado);
}
ej3()


//6. Crea una función con 4 promesas, que acaben a tiempos diferentes y regresa cuando todas acaben

let promesas = () => {
  let p1 = new Promise((resolve, reject) => setTimeout(resolve, 4000, 'promesa1'));
  let p2 = new Promise((resolve, reject) => setTimeout(resolve, 5000, 'promesa2'));
  let p3 = new Promise((resolve, reject) => setTimeout(resolve, 6000, 'promesa3'));
  let p4 = new Promise((resolve, reject) => setTimeout(resolve, 6000, 'promesa4'));
  return Promise.all ([p1,p2,p3,p4]);
  }
  promesas().then((resultado) => console.log(resultado)); 

//7. Crea una Cadena de Promesas en la cual una se rechaza, asegurate de agregar un catch

let rechazo = Promise.reject('next'); // Crea una Promesa rechazada
Promise.all([Promise.resolve('promesa1'), Promise.resolve('promesa2'), Promise.resolve('promesa3'), Promise.resolve('promesa4'), rechazo])
  .then(arr => console.log(arr)).catch(arr => console.log(arr));


//8. Crea una Cadena de Promesas en la cual una se rechaza, agrega varios catch
