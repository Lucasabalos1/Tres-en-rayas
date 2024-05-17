const contenedor = document.querySelector(".contenedor");

// crea un nuevo elemento con el nombre especificado, en este caso, "LI" para un elemento de lista.
const item = document.createElement("LI");

// crea un nuevo nodo de texto con el contenido "Este es un item de la lista" utilizando 
const textDelItem = document.createTextNode("Este es un item de la lista");

// agrega el nodo de texto textDelItem como un hijo del elemento item. Esto significa que el texto representado por textDelItem se mostrará como parte del contenido del elemento item.
item.appendChild(textDelItem);

// le agregamos al contenedor el item(li)
contenedor.appendChild(item);

// crateDocumentFragment - lo podemos usar para crear muchos li
const fragmento = document.createDocumentFragment();

for (let index = 0; index < 20; index++) {
    const item2 = document.createElement("LI");
    item2.innerHTML = "Este es un elemento de la lista 2"
    fragmento.appendChild(item2);
}

contenedor.appendChild(fragmento);

console.log(contenedor);
