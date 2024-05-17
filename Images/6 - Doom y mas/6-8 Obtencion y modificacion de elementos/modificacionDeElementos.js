    //obtencion y modificacion de elementos

    const titulo = document.querySelector(".titulo");

    /*

    textContent - Devuelve el texto de cualquier nodo sin importar el estilo que este aplicado, 
    es decir si el modificar de elementos a modificar tiene un visibilitu hidden y solo se ve elementos a, 
    este devolvera toda el texto, es decir devuelve elemento a modificar

    */
    let resultado = titulo.textContent;

    console.log(resultado);

    /*

    innerText - es parecido a textContent pero este si tiene en cuenta los estilos
    si en la pantalla el texto muestra elementos a, este guardara exactamente eso, elementos a.

    */

    let resultado2 = titulo.innerText;
    console.log(resultado2);

    //innerText quedo obsoleto asi que se recomienda usar textContent

    //innerHtml - devielve el contenido html de un elemento

    let resultado3 = titulo.innerHTML;
    alert(resultado3);
    
    // outerHtml - devuelve el codigo Html completo del elemento

    let resultado4 = titulo.outerHTML;
    alert(resultado4);
