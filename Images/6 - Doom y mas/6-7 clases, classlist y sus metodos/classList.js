// Clases, classlist y sus metodos

// Definicion: classList en JavaScript es una propiedad de los elementos DOM que proporciona una forma de acceder y manipular las clases CSS de un elemento de manera más conveniente. La propiedad classList devuelve un objeto DOMTokenList, que es una lista de tokens (las clases CSS) asociados con el elemento.

const titulo = document.querySelector(".Titulo");
const titulo2 = document.querySelector(".grande");
const titulo3 = document.querySelector(".Titulo2");
const titulo4 = document.querySelector(".Titulo3");
const titulo5 = document.querySelector(".Titulo4");

// add() - añade una clase

titulo.classList.add("colorizar");

// remove() - remueve una clase

titulo2.classList.remove("grande");

// item() - devielve la clase del indice especifico

let valor = titulo3.classList.item(1); // obtenemos la clase en la posicion 1, en este caso rojo y ahora la vamos a remover

titulo3.classList.remove(valor);    

// contains() - verifica si el elemento posee o no, la clase especificada

let flag = titulo.classList.contains("colorizar");

if (flag) {
    document.write("La clase existe");
}else{
    document.write("La clase no existe  ");
}
// replace() - remplaza una clase por otra

titulo5.classList.replace("rojo", "azul"); //remplazamos la clase rojo por azul

// toggle() - si no tiene clase especificada la agrega, si ya la tiene, la elimina

titulo4.classList.toggle("rojo");

/*

El toggle se puede usar para resumir este codigo

if(titulo4.classList.contains("rojo")){
    titulo4.classList.add("rojo");
}else{
    titulo4.classList.remove("rojo");
}

con toggle seria asi 

titulo4.classList.toggle("rojo");


*/