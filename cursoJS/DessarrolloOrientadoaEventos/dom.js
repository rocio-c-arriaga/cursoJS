// #id .class
// Para todos los ejercicios, si no se especifica que se espera que haga un listener, asuman que debe imprimir algo
window.onload = () => {

  // 1. Agrega contenido a div1 (ejemplo: 'I am a div!')

  let n1 = document.querySelector("#div1");
  n1.innerText = 'I am a div!'

  // 2. Agrega contenido al span de div2 (ejemplo: 'I am a span!')

  document.querySelector("#div2 .a-span").innerText = 'I am a span!'

  // 3. Agrega un listener de click al boton de div3, el listener debe imprimir algo (ejemplo: 'I was clicked')

  let n3 = document.querySelector("#div3 .a-button");
  n3.addEventListener("click", () => console.log('I was clicked'));

  // 4. Agrega un listener de click al boton de div4, no dejes que haga el submit e imprime 'Default prevented'

  document.querySelector("#div4 .a-button").addEventListener("click", (event) => {
    console.log('Default prevented');
    event.preventDefault()
  })

  // 5. Agrega un listener de click a div5, imprime el target del evento

  document.querySelector("#div5").addEventListener("click", (event) => {
    console.log(event.target)
    console.log('separador')
    console.log(event) //arroja toda la información que contiene y con target arroja el elemento en html
  })

  // 6. Agrega un listener de click al span de div6 y a la div6, imprime el target del evento en ambos y si es el listener de div o de span
  
  document.querySelector("#div6").addEventListener("click", (event) => {
    console.log('div', event.target)
  })

  document.querySelector("#div6 .a-span").addEventListener("click", (event) => {
    console.log('span', event.target)
  })

  // 7. Agrega un listener de click al span de div7 y a la div7, imprime el target del evento en ambos y si es el listener de div o de span, evita que el click del span se propague

  document.querySelector("#div7").addEventListener("click", (event) => {
    console.log('div', event.target)
  })

  document.querySelector("#div7 .a-span").addEventListener("click", (event) => {
    event.stopPropagation()
    console.log('span', event.target)
  })

  // 8. Selecciona los spans de div8, agrega el numero que son como contenido a cada una (1-6)
  
  document.querySelectorAll("#div8 .a-span").forEach((span, index) => span.innerText=index+1);
    
  // 9. Agrega un listener de click al primer y ultimo span de div9

  document.querySelector("#div9 .a-span:first-child").addEventListener("click", () => {
    console.log('primer span')
  })

  document.querySelector("#div9 .a-span:last-of-type").addEventListener("click", () => {
    console.log('ultimo span')
  })

  // 10. Agrega un listener de click a los spans impares de div10 (1, 3, 5)

  document.querySelectorAll("#div10 .a-span:nth-of-type(odd)").forEach((span) => {
    console.log('click' + span)
    span.addEventListener
  })


  // 11. Agrega otro span a div11, con 'not-a-span' como clase y 'Not a span!' como contenido

  

  // 12. Cambia el src de la imagen de div12 a dogge.jpg (adjunto)

  // Pon 'THE-span' como id del span de div13
  /**
   * Agrega listeners a los 3 inputs de div14.
   * change para changeInput
   * blur para blurInput
   * ambos para bothInput
   *
   * Los listeners deben imprimir el nombre del target del evento
   */
  /**
   * Agrega un listener al span de div15 que, cuando el mouse pase por encima,
   * cambie el texto a 'I am being hovered'.
   * Debe volver al texto original cuando el mouse deje de estar encima.
   */
  /**
   * Agrega un listener de scroll a la div16.
   * Debe imprimir algo ('I was scrolled') cada vez que se hace scroll de ella.
   * Se recomienda NO usar alert para este ejercicio.
   */
};