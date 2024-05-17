const contenedor = document.querySelector(".container");

const parrafo = document.createElement("P")

parrafo.innerHTML = "Parrafo";

const h2 = document.createElement("H2")

h2.innerHTML = "Titulo";

const h2_antiguo = document.querySelector(".h2");

const h4 = document.querySelector(".h4");
// reemplaza un hijo por otro nuevo, en este caso remplazamos el h2 Un h2 comun por el h2 con el contenido titulo
contenedor.replaceChild(h2,h2_antiguo);

// remueve el hijo pasado como parametro

contenedor.removeChild();