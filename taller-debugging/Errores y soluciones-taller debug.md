# ERRORES Y SOLUCIONES - TALLER DEBUGGING REACT

---

## ERROR 1: Propiedad 'categoria' undefined

**Línea de error:** `tarea.categoria.toUpperCase()`

**Mensaje en consola:** `TypeError: Cannot read property 'toUpperCase' of undefined`

**¿Qué pasaba?**
La tarea con id=4 no tenía la propiedad 'categoria', por lo que al intentar llamar `.toUpperCase()` sobre undefined, la app se rompía.

---

## ERROR 2: Loop infinito en consola

**Línea de error:** `useEffect sin dependencias`

**Síntoma:** La consola imprime "Renderizando App, contador: X" infinitamente

**¿Qué pasaba?**
Sin el arreglo de dependencias `[]`, el useEffect se ejecuta después de cada render. Dentro del effect llama a `setContador()`, que causa otro render, que ejecuta el effect de nuevo, infinitamente.

**ANTES (Incorrecto):**
```javascript
useEffect(() => {
  console.log('Renderizando App, contador:', contador);
  setContador(contador + 1);
});
```

---

## ERROR 3: Filtros no funcionan (no muestran tareas)

**Línea de error:** Comparación en filter `tarea.completada === 'true'`

**Síntoma:** Al hacer clic en "Pendientes" o "Completadas", no aparecen tareas

**¿Qué pasaba?**
Se comparaba un booleano (true/false) con un string ("true"/"false"). En JavaScript: `true === "true"` es siempre false porque son tipos diferentes.

---

## ERROR 4: Agregar tarea no la muestra en la lista

**Línea de error:** `tareas.push() + setTareas(tareas)`

**Síntoma:** Al escribir una tarea y hacer clic en "Agregar", la lista no se actualiza

**¿Qué pasaba?**
Se estaba mutando el arreglo original con `push()`, pero React compara referencias, no contenido. Como la referencia es la misma, React no detectaba el cambio y no re-renderizaba.

---

## ERROR 5: "Cargando perfil..." se queda pegado (error oculto)

**Línea de error:** `throw new Error()` sin try/catch en setTimeout

**Síntoma:** 50% de las veces, el perfil nunca carga y muestra "Cargando perfil..." para siempre. Solo aparece error en consola.

**¿Qué pasaba?**
El error se lanzaba dentro de setTimeout sin ser capturado. El error aparecía en consola pero no se mostraba en la interfaz, dejando el UI en estado incompleto.
