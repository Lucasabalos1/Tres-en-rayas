// Atributos globales

const titulo = document.querySelector(".titulo");
const titulo2 = document.querySelector(".titulo2");
const titulo3 = document.querySelector(".titulo3");

// contenteditable - indica si el elemento puede ser mosificado por el usuario(bool)

titulo.setAttribute("contentEditable", "true")

// dir - indica la direccion del texto

titulo.setAttribute("dir", "rtl")


// hidden - indica si un elemento es, o ya no es relevante

titulo2.removeAttribute("hidden");

// tadindex - indica si el elemento puede obtener un focus input

titulo3.setAttribute("tabindex","0");

// tittle - contiene un texto con informacion relacionada al elemento que pertenece

titulo.setAttribute("title", "Hola mundo")