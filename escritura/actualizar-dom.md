# Actualizar el DOM con JavaScript:

When you visit a website, your browser will display HTML, CSS & Javascript. HTML provides structure and content, CSS provides styles and lastly JavaScript provides interactivity.

In order to make changes to HTML, we utilize a data representation of the HTML (instead of editing the HTML directly). This representation is called the DOM, which stands for Document Object Model. When we make changes to the DOM, they are reflected in the HTML.

In order to utilize the DOM, browsers provide "Web APIs" which give native functionality to Javascript. The Web API to manipulate the DOM is called the "HTML DOM API." Other Web APIs include the Fetch API, to make network connections and the URL API to structure and parse URLs.

Let’s take a look at how some of these would work:

<html>
    <head></head>
    <body>
        <div id="app">
            <h1>Develop. Preview. Ship. #</h1>
            <p>My List:</p>
            <ul id=”list”>
              <li>Example</li>
            </ul>
        </div>
        <script>// Javascript goes here</script>
    </body>
</html>

<!-- Render here -->

Now we can use the HTML DOM API which gives us:
- The `document` element and all the methods (functions) on that element, for example:
  - `getElementById`
  - `createElement`
  - `createTextNode`
  - `appendChild`

<html>
  <head></head>
  <body>
    <div class="envase">
      <h1>hola, mundo</h1>
      <p>Mi Lista:</p>
      <ul id="lista">
        <li>Ejemplo</li>
      </ul>
    </div>
    <style>
      html { font-family: sans-serif; }
      li { margin-bottom: 0.5rem; }

      .envase {
        margin: 100px auto;
        width: 500px;
      }
    </style>
    <script>
      const lista = document.getElementById("lista");
      var nuevoElemento = document.createElement("li");
      var texto = document.createTextNode("Nuevo elemento");
      nuevoElemento.appendChild(texto);
      lista.appendChild(nuevoElemento);
    </script>
  </body>
</html>

And the resulting change is: [render html]

Now, let’s utilize the fetch api in conjunction with what we just learned.

