# Actualizar el DOM con JavaScript:


## Colección Uno

1. Cuando visitas un sitio web, tu navegador muestra HTML, CSS y Javascript.
2. HTML proporciona estructura y contenido,
3. CSS proporciona estilos
4. y por último, JavaScript proporciona interactividad.
5. Para hacer cambios en las páginas web, Javascript necesita un poco de ayuda.
   - Afortunadamente, todos los navegadores modernos proporcionan a Javascript esta ayuda necesaria via Web APIs.
   - Las Web APIs son un conjunto de herramientas que permiten a Javascript interactuar con el navegador y el usuario.
   - El API para manipular el DOM HTML, se llama "HTML DOM API".
   - Algunos otros Web APIs incluyen
     - el Fetch API, para hacer conexiones de red y
     - el URL API para estructurar y analizar URLs.

## Colección Dos

1. Un escrito puede ser incluido en el ar<b>ch</b>ivo HTML de dos maneras.
2. Puede ser colocado (placed) entre dos etiquetas de escrito (script tag),
3. o puede ser colocado en un archivo separado y luego referenciado en el atributo SRC or "source tag" de la etiqueta escrito.
4. Para declarar variables, usamos la palabra clave "var", seguida del nombre de la variable. <br />En JavaScript moderno, esto ha cambiado, pero hablaremos de eso más tarde.
5. El objeto "document" es una propiedad de la ventana y nos lo da el navegador.
6. Él contiene muchos métodos que podemos usar para manipular el documento HTML. Por ejemplo
7. Podemos usar el método "getElementById" para recuperar un elemento con un id específico. En este caso, nuestra lista.
8. Podemos usar el método "createElement" para crear un nuevo elemento. En este caso, un elemento de lista.
9. Podemos usar el método "createTextNode" para crear un nuevo nodo de texto
10. Y finalmente podemos usar el método "appendChild" para agregar el elemento recién creado a la lista

## Collection Tres

Mostrar sin palabras

## Colección Cuatro

0. Usando el mismo script, agreguemos otra API web.
1. Usando la API Fetch, obtendremos una lista de frutas de un servidor remoto
2. La palabra clave "then" nos dice que el servidor devuelve una "Promise" o "función asíncrona". <br />
	También nos permite "esperar" a que la función termine.
3. Se usa la palabra clave "catch" para manejar errores.
4. Después de termine la función, tenemos una colección.
5. Recorremos la matriz usando la función "mapa"
6. e agregue cada elemento a la lista, con el mismo código que usamos antes.