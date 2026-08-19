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
  
R// JavaScript es un lenguaje de programación interpretado, dinámico y de tipado débil, que se ejecuta principalmente en el navegador (y también en servidores con Node.js). El navegador lee el código línea por línea y lo va ejecutando, permitiendo manipular el HTML y el CSS de una página en tiempo real (esto se conoce como DOM — Document Object Model).

Variables:
Son espacios en memoria que almacenan valores. Se declaran con tres palabras clave:

javascript
var nombre = "Ana";   // forma antigua, tiene alcance de función
let edad = 25;         // forma moderna, tiene alcance de bloque
const PI = 3.1416;     // valor que no puede reasignarse

var: forma antigua de declarar variables. Su alcance (scope) es de función, no de bloque, lo que puede causar errores. Se recomienda evitarla.
let: permite declarar variables cuyo valor puede cambiar. Su alcance es de bloque ({ }).
const: declara una constante, cuyo valor no puede reasignarse una vez definido (aunque si es un objeto o array, su contenido interno sí puede modificarse).

Tipos de variables (tipos de datos)

Tipo	
String	Ejemplo= "Hola"
Number	Ejemplo= 42, 3.14
Boolean	Ejemplo= true, false
Undefined	Ejemplo= variable declarada sin valor
Null	Ejemplo= ausencia intencional de valor
Object	Ejemplo= { nombre: "Ana" }
Array Ejemplo=	[1, 2, 3]
Function	Ejemplo= function() {}

Variables globales vs locales:

Variable global: se declara fuera de cualquier función, y puede usarse en cualquier parte del código.
Variable local: se declara dentro de una función o bloque, y solo existe dentro de ese contexto.
  
javascript 
let global = "Soy accesible en todo el archivo";

function ejemplo() {
  let local = "Solo existo dentro de esta función";
}


-Explicar las estructuras de flujo


  
  Estructuras de flujo (estructuras de control)

Controlan el orden en que se ejecutan las instrucciones:

Condicionales

javascript
if (edad >= 18) {
  console.log("Es mayor de edad");
} else if (edad > 12) {
  console.log("Es adolescente");
} else {
  console.log("Es niño");
}
javascript
switch (dia) {
  case "Lunes":
    console.log("Inicio de semana");
    break;
  default:
    console.log("Otro día");
}

Bucles (loops)
javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

do {
  console.log(i);
  i++;
} while (i < 5);
for: se usa cuando se conoce cuántas veces se repetirá.
while: repite mientras se cumpla una condición (evalúa antes).
do...while: repite y evalúa la condición al final, por lo que se ejecuta al menos una vez.

3).CSS

  
Consultar selectores css y como modificar elementos:

Selectores CSS y cómo modificar elementos

CSS (Cascading Style Sheets) se usa para dar estilo a los elementos HTML mediante selectores, que indican a qué elementos se les aplicará el estilo.

Selector: Elemento     	Ejemplo: P { }	       Descripción: Selecciona todas las etiquetas <p>
Selector: Clase  	      Ejemplo: .destacado { }	     Descripción: Selecciona elementos con class="destacado"
Selector: ID	          Ejemplo: #titulo { }		 Descripción : Selecciona el elemento con id="titulo"
Selector: Universal   	Ejemplo: * { }		  Descripción : Selecciona todos los elementos
Selector: Descendiente	Ejemplo: div p { }		 Descripción : Selecciona <p> dentro de <div>
Selector: Hijo directo	Ejemplo: div > p { }		Descripción : Selecciona <p> que sea hijo directo de <div>
Selector: Pseudo-clase	Ejemplo: a:hover { }	  	Descripción : Aplica estilo en un estado, ej. al pasar el mouse
Selector: Pseudo-elemento	  Ejemplo: p::first-line { }		Descripción : Aplica estilo a una parte específica del elemento
Selector: Atributo	   Ejemplo: input[type="text"] { }	  	Descripción :Selecciona por un atributo específico


  
- Cómo se modifican elementos:

css
.destacado {
  color: red;
  font-size: 18px;
  background-color: yellow;
  padding: 10px;
  border-radius: 5px;
}

Y se enlaza en el HTML así:
html
<link rel="stylesheet" href="estilos.css">

o directamente en línea:
html
<p style="color: blue;">Texto</p>

4).React

  
-Hacer una analogia explicativa de un componente de React de como se comporta como una etiqueta de HTML
-Consultar como funcionan los props en los componentes de React
-Como y cuando se usa VseEffect en un componente de React
-Como se usa UseSTaTe para las variables de un componente


Analogía: un componente de React como una etiqueta HTML

Un componente de React puede pensarse como una etiqueta HTML personalizada y reutilizable. Así como <button> ya trae su propio comportamiento y apariencia definidos por el navegador, un componente como <TarjetaProducto /> trae su propia estructura, estilo y lógica definidos por el programador.

La diferencia es que, mientras <button> siempre se comporta igual, un componente de React puede recibir información distinta cada vez que se usa (a través de props), igual que una etiqueta <img src="foto.jpg"> recibe un atributo que cambia qué imagen se muestra. En React, en lugar de solo atributos fijos, se pueden pasar textos, números, funciones o incluso otros componentes como "atributos" (props), haciendo que la etiqueta personalizada sea mucho más flexible y dinámica.

jsx
<TarjetaProducto nombre="Zapatos" precio={50} />
<TarjetaProducto nombre="Camisa" precio={30} />

Igual que:

html
<img src="foto1.jpg">
<img src="foto2.jpg">
¿Cómo funcionan los props?

Los props (properties) son la forma en que un componente padre le pasa información a un componente hijo. Son de solo lectura: el componente que los recibe no puede modificarlos directamente.

jsx
function Saludo(props) {
  return <h1>Hola, {props.nombre}</h1>;
}

// Uso:
<Saludo nombre="Carlos" />

Esto renderiza: Hola, Carlos

Los props permiten que un mismo componente se reutilice mostrando datos diferentes cada vez.

¿Cómo y cuándo se usa useEffect?

useEffect es un Hook que permite ejecutar código que produce un "efecto secundario" (side effect) después de que el componente se renderiza. Se usa para tareas como:

Peticiones a una API (fetch)
Suscripciones a eventos
Modificar el DOM manualmente
Temporizadores (setTimeout, setInterval)
jsx
import { useEffect, useState } from "react";

function Ejemplo() {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    fetch("https://api.ejemplo.com/datos")
      .then(res => res.json())
      .then(data => setDatos(data));
  }, []); // el array vacío indica que se ejecuta solo una vez, al montar el componente

  return <div>{datos ? datos.nombre : "Cargando..."}</div>;
}
Si el array de dependencias está vacío [], el efecto se ejecuta solo una vez (al montar el componente).
Si tiene variables [variable], se ejecuta cada vez que esa variable cambia.
Si no se pone array, se ejecuta en cada renderizado.
¿Cómo se usa useState?

useState es el Hook que permite que un componente tenga estado propio (una variable que, al cambiar, hace que el componente se vuelva a renderizar automáticamente).

jsx
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0); // valor inicial: 0

  return (
    <div>
      <p>Valor actual: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  );
}
contador es la variable de estado (el valor actual).
setContador es la función usada para actualizar ese valor.
useState(0) define el valor inicial.

Cada vez que se llama a setContador, React vuelve a renderizar el componente mostrando el nuevo valor.
