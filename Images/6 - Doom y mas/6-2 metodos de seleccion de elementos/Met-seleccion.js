// metodos de seleccion de elementos HTML


//getElementById() - Selecciona elemento por ID

const parrafo = document.getElementById("parrafo");

console.log(parrafo.textContent);

// getElementByTagName() - Selecciona todos los elementos que coincida con el nombre de la etiqueta especificada

// const  parrafos = getElementByTagName("p");

// console.log(parrafos[1],textContent);

// querySelector() - devuelve el primer elemento que coincida con el grupo especificado de selectores

const parrafo2 = document.querySelector(".parrafoClase");

console.log(parrafo2.textContent);

// querySelectorAll() - devuelve una lista de nodos de todos los elementos con el mismo nombre de que se le pase

const listaParrafos = document.querySelectorAll(".fruta");

listaParrafos.forEach(fruta =>{
    console.log(fruta.textContent);
});