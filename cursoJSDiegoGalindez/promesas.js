//1. Convierte todos los ejercicios de la parte 1 a usar Promises

["esto", "es", "un", "callback"].forEach(a => new Promise((resolve, reject) => resolve(() => console.log(a))));

//2. Crea una Cadena de Promesas en la cual una lanza un error (no hagas Catch)

Promise.resolve(1).then (v => console.log(v));
Promise.resolve(1).then (v => v+3 ).then (v => v - 1).then (v => console.log(v));

//3. Agrega un catch al ejercicio anterior

Promise.resolve(1).then(v => v + 3).then(v => Promise.reject(v))
  .then(v => v * 3).catch(e => console.log(e));


//4. Agrega un finally al ejercicio anterior

//5. Crea una función con 3 promesas, que acaben a tiempos diferentes y regresa en cuanto la primera termina

//6. Crea una función con 4 promesas, que acaben a tiempos diferentes y regresa cuando todas acaben

//7. Crea una Cadena de Promesas en la cual una se rechaza, asegurate de agregar un catch

//8. Crea una Cadena de Promesas en la cual una se rechaza, agrega varios catch
