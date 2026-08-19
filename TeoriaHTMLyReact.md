ACTIVIDAD
1). HTML
-Cuales son las etiquetas de estructura de un HTML

R//Etiquetas de estructura de un HTML
Son las etiquetas que forman el "esqueleto" básico de cualquier documento HTML:

Etiquetas:
<!DOCTYPE html> : Su función es indicar al navegador que el documento usa HTML5.
<html> : Su función	es etiquetar la raíz que envuelve todo el documento.
<head>	: Su función seria contener metadatos: título, enlaces a CSS, meta tags, etc. (no es visible en pantalla).
<title>	: Define el título que aparece en la pestaña del navegador.
<meta>	: Su función es metadatos como charset, descripción, viewport.
<body>	: Su función seria abarcar todo el contenido visible de la página.
<header>	Su Función es el encabezado de la página o de una sección.
<nav>	: Su función es sección de enlaces de navegación.
<main> :Es el contenido principal del documento.
<section>	Agrupa contenido temáticamente relacionado.
<article>	: Es el contenido independiente y autocontenible (por ejemplo: un post).
<aside>	: Es el contenido secundario, relacionado pero separado (por ejemplo: barra lateral).
<footer> : Es el pie de página.
<div>	: Contenedor genérico sin significado.

  
-Cuales son las etiquecas para agregar código

Cuando se necesita mostrar o vincular código en una página:

Etiqueta
<script> : Su función es insertar o enlazar códigos JavaScript.
<style> :Su	Función	es inserta CSS directamente en el HTML.
<link>	:Su	Función	es enlaza archivos externos, como hojas de estilo CSS (rel="stylesheet").
<code>	:Su	Función	es muestrar un fragmento de código en línea, con formato monoespaciado.
<pre>	:Su	Función	es preservar espacios y saltos de línea, útil para bloques de código.
<noscript>	:Su	Función es	contenido alternativo si JavaScript está deshabilitado.

  
-Explicar 5 etiquetas de texto

  
1.<h1> a <h6> — Encabezados o títulos, <h1> es el más importante y <h6> el menos importante. Se usan para dar estructura.
2.<p> — Define un párrafo de texto. Cada <p> genera un bloque separado con espacio antes y después.
3.<strong> — Resalta texto dándole importancia o significado; se observa en negrilla.
4.<em> — Enfatiza texto de forma semántica; visualmente se muestra en cursiva. A diferencia de <i>, sí tiene significado (énfasis real).
5.<span> — Contenedor de texto en línea sin significado propio, usado para aplicar estilos o scripts a una parte específica del texto sin romper el orden del párrafo.

2). Javascript
-Explica como funciona, las variables, tipos de variables, constantes y globales
  Actividad: HTML, JavaScript, CSS y React
1) HTML
Etiquetas de estructura de un HTML

Son las etiquetas que forman el "esqueleto" básico de cualquier documento HTML:

Etiqueta	Función
<!DOCTYPE html>	Indica al navegador que el documento usa HTML5
<html>	Etiqueta raíz que envuelve todo el documento
<head>	Contiene metadatos: título, enlaces a CSS, meta tags, etc. (no visible en pantalla)
<title>	Define el título que aparece en la pestaña del navegador
<meta>	Metadatos como charset, descripción, viewport
<body>	Contiene todo el contenido visible de la página
<header>	Encabezado de la página o de una sección
<nav>	Sección de enlaces de navegación
<main>	Contenido principal del documento
<section>	Agrupa contenido temáticamente relacionado
<article>	Contenido independiente y autocontenible (ej: un post)
<aside>	Contenido secundario, relacionado pero separado (ej: barra lateral)
<footer>	Pie de página
<div>	Contenedor genérico sin significado semántico
Etiquetas para agregar código

Cuando se necesita mostrar o vincular código en una página:

Etiqueta	Función
<script>	Inserta o enlaza código JavaScript
<style>	Inserta CSS directamente en el HTML
<link>	Enlaza archivos externos, como hojas de estilo CSS (rel="stylesheet")
<code>	Muestra un fragmento de código en línea, con formato monoespaciado
<pre>	Preserva espacios y saltos de línea, útil para bloques de código
<noscript>	Contenido alternativo si JavaScript está deshabilitado

Ejemplo típico:

html
<pre><code>
function saludar() {
  console.log("Hola mundo");
}
</code></pre>
5 etiquetas de texto explicadas
<h1> a <h6> — Encabezados o títulos, <h1> es el más importante (mayor jerarquía) y <h6> el menos importante. Se usan para dar estructura y jerarquía visual/semántica al contenido.
<p> — Define un párrafo de texto. Cada <p> genera un bloque separado con espacio antes y después.
<strong> — Resalta texto dándole importancia semántica fuerte; visualmente se muestra en negrita.
<em> — Enfatiza texto de forma semántica; visualmente se muestra en cursiva. A diferencia de <i>, sí tiene significado (énfasis real).
<span> — Contenedor de texto en línea sin significado semántico propio, usado para aplicar estilos o scripts a una parte específica del texto sin romper el flujo del párrafo.
2) JavaScript
¿Cómo funciona? Variables, tipos, constantes y globales

JavaScript es un lenguaje de programación interpretado, dinámico y de tipado débil, que se ejecuta principalmente en el navegador (y también en servidores con Node.js). El navegador lee el código línea por línea y lo va ejecutando, permitiendo manipular el HTML y el CSS de una página en tiempo real (esto se conoce como DOM — Document Object Model).

Variables

Son espacios en memoria que almacenan valores. Se declaran con tres palabras clave:

javascript
var nombre = "Ana";   // forma antigua, tiene alcance de función
let edad = 25;         // forma moderna, tiene alcance de bloque
const PI = 3.1416;     // valor que no puede reasignarse
var: forma antigua de declarar variables. Su alcance (scope) es de función, no de bloque, lo que puede causar errores. Se recomienda evitarla.
let: permite declarar variables cuyo valor puede cambiar. Su alcance es de bloque ({ }).
const: declara una constante, cuyo valor no puede reasignarse una vez definido (aunque si es un objeto o array, su contenido interno sí puede modificarse).

Tipos de variables (tipos de datos)

Tipo	Ejemplo
String	"Hola"
Number	42, 3.14
Boolean	true, false
Undefined	variable declarada sin valor
Null	ausencia intencional de valor
Object	{ nombre: "Ana" }
Array	[1, 2, 3]
Function	function() {}

Variables globales vs locales

Variable global: se declara fuera de cualquier función, y puede usarse en cualquier parte del código.
Variable local: se declara dentro de una función o bloque, y solo existe dentro de ese contexto.
javascript
let global = "Soy accesible en todo el archivo";

function ejemplo() {
  let local = "Solo existo dentro de esta función";
}
Estructuras de flujo (estructuras de control)

Controlan el orden en que se ejecutan las instrucciones:

Condicionales
-Explicar las estructuras de flujo

3).CSS
Consultar selectores css y como modificar elementos

4).React
-Hacer una analogia explicativa de un componente de React de como se comporta como una etiqueta de HTML
-Consultar como funcionan los props en los componentes de React
-Como y cuando se usa VseEffect en un componente de React
-Como se usa UseSTaTe para las variables de un componente
