// Atributos de inputs

const input = document.querySelector(".inputNormal");
const input2 = document.querySelector(".inputFile");
const input3 = document.querySelector(".input-form");
// className - nos muestra el nombre de la clase en la que esta asociada
document.write(input.className);

document.write("<br>");

// value - nos devuelve el valor del input

document.write(input.value);
document.write("<br>");


// type - cambia el tipo del input

input.type = "number";

// accept - es lo que va a aceptar

input2.accept = "image/png";

// form - (ver ejemplo en html) se utiliza para asociar un botón de envío con un formulario específico cuando el botón está fuera del formulario. 

// minlengt - (ver ejemplo en html) es la cantidad de caracteres minimo que debe de tener un input

// placeholder - es el texto de fondo que tendra el input

input.placeholder = "Ingrese un numero";

// Al imput se le pone que es requerido para poder enviar el form 

input3.required = "required";