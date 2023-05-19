# Actualizar el DOM con JavaScript:

When you visit a website, your browser will display a website that is made up of three syntaxes: HTML, CSS & Javascript. HTML provides structure and content, CSS provides styles and lastly JavaScript provides interactivity.

Although JavaScript contains a lot of functionality on its own, it needs a little help from the browser to perform many of the features that we’re used to. To provide these native features, browsers have APIs built into them, called “Web APIs”

Some examples:
- Fetch API - to make network connections
- HTML DOM API - to interact with HTML elements
- URL API - to structure and parse URLs

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

