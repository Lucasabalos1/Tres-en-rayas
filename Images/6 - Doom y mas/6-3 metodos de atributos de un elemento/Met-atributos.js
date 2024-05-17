// Metodos para definir, obtener y eliminar valores de los atributos

const rangoEtario = document.querySelector("#rangoEtario");
const colorSelector = document.querySelector("#colorSelector");


// setAttribute() - modifica el valor de  un atributo 

rangoEtario.setAttribute("type","color"); 



// getAttribute() - obtiene el valor de un atributo

document.write("<br> El atributo es: " + rangoEtario.getAttribute("type"));

// removeAttribute - remueve el valor de un atributo

colorSelector.removeAttribute("type");