/*

El Document Object Model (DOM) es una representación del contenido de una página web como un árbol de nodos. 
Cada elemento HTML (como párrafos, encabezados, imágenes, etc.) se representa como un nodo en el árbol, 
y el DOM define métodos para acceder y manipular estos nodos dinámicamente mediante JavaScript. 
Esto permite a los desarrolladores web interactuar con la estructura, estilo y contenido de una página web 
de manera programática.

*/

// nodo - un nodo en el DOM es cualquier etiqueta del cuerpo, como un parrafo, el mismo body e incluso las etiquetas de una listas 

// mirar imagen

/*

Tipos de nodos

Document: El nodo document es el nodo raiz, a partir del cual derivan el resto de nodo
Element: Nodos definidos por etiquetas html, un ejemplo un <p> o un <h1>, etc
Text: El texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text
Attribute: Los atributos de las etiquetas definen nodos (en javascript no los veremos como nodos, si no como informacion asociada al nodo tipo element), ejemplo class"nombreDeLaClase"
Comentarios y otros: Los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos html generan nodos

*/