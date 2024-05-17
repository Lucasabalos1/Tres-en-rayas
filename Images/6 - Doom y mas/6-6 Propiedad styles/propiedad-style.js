// Propiedad Style

const Titulo = document.querySelector(".Titulo");

// con el .style aplicamos cualquier cosa de css para modificar el estilo 

Titulo.style.color = "#ff0000"
Titulo.style.fontSize = "40px"
Titulo.style.filter = "drop-shadow(5px 5px 10px rgba(0, 0, 0, 1))"

// Si hay una propiedad que usa gion, como en el caso de background-color, en javascript se remplasa con backgroundColor, es decir el gion se remplaza aplicando camel case