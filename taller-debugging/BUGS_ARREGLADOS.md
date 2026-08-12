# Taller de Debugging en React - Bugs Arreglados

## 📋 Resumen de los 5 bugs encontrados y corregidos

---

## 🐛 BUG 1 — La app ni siquiera carga

### ¿Cuál era el problema?
La tarea con `id: 4` no tenía la propiedad `categoria`, por lo que cuando el código intentaba ejecutar `tarea.categoria.toUpperCase()`, fallaba porque `undefined` no tiene el método `.toUpperCase()`.

### Error en consola:
```
TypeError: Cannot read property 'toUpperCase' of undefined
```

### ¿Por qué ocurría?
En el arreglo `tareasIniciales`, la tarea 4 faltaba la propiedad `categoria`:
```javascript
// ❌ ANTES (sin categoria)
{ id: 4, texto: 'Practicar debugging', completada: false }

// ✅ DESPUÉS (con categoria)
{ id: 4, texto: 'Practicar debugging', categoria: 'estudio', completada: false }
```

### Línea corregida:
```javascript
const tareasIniciales = [
  { id: 1, texto: 'Aprender React', categoria: 'estudio', completada: false },
  { id: 2, texto: 'Hacer ejercicio', categoria: 'salud', completada: true },
  { id: 3, texto: 'Leer un libro', categoria: 'ocio', completada: false },
  { id: 4, texto: 'Practicar debugging', categoria: 'estudio', completada: false }, // ✅ Agregado categoria
];
```

### Lección:
Siempre verifica que los objetos en un arreglo tengan **todas las propiedades** que se usarán después. Si una propiedad puede faltar, usa **optional chaining** (`?.`) o **validación**: `tarea.categoria?.toUpperCase() || 'SIN CATEGORÍA'`

---

## 🐛 BUG 2 — La consola no para de imprimir

### ¿Cuál era el problema?
El `useEffect` estaba ejecutándose **infinitamente** porque le faltaba el **arreglo de dependencias**.

### Comportamiento:
- El `useEffect` se ejecuta después de cada render
- Dentro llama a `setContador(contador + 1)`
- Eso causa un nuevo render
- Que ejecuta el `useEffect` de nuevo
- Y así infinitamente...

### ¿Por qué ocurría?
```javascript
// ❌ ANTES (sin arreglo de dependencias)
useEffect(() => {
  console.log('Renderizando App, contador:', contador);
  setContador(contador + 1);
});  // 👈 FALTA el []

// ✅ DESPUÉS (con arreglo vacío)
useEffect(() => {
  console.log('Renderizando App, contador:', contador);
  setContador(contador + 1);
}, []);  // 👈 [] = ejecutar UNA SOLA VEZ al montar
```

### Línea corregida:
```javascript
useEffect(() => {
  console.log('Renderizando App, contador:', contador);
  setContador(contador + 1);
}, []);  // ✅ Arreglo de dependencias vacío
```

### Lección:
El **arreglo de dependencias** de `useEffect` es obligatorio:
- `[]` = ejecutar 1 sola vez cuando el componente monta
- `[variable]` = ejecutar cuando `variable` cambia
- Omitir el arreglo = ejecutar después de CADA render (loop infinito)

---

## 🐛 BUG 3 — Los filtros "Pendientes" y "Completadas" no funcionan

### ¿Cuál era el problema?
Se comparaba `tarea.completada` (un **booleano**: `true` o `false`) contra los **strings** `"true"` y `"false"`.

### Comparación fallida:
```javascript
tarea.completada === 'true'   // false === "true" → FALSO
tarea.completada === 'false'  // true === "false" → FALSO
```

En JavaScript, `true !== "true"` porque son tipos de datos diferentes.

### ¿Por qué ocurría?
```javascript
// ❌ ANTES (comparando con strings)
if (filtro === 'completadas') return tarea.completada === 'true';
if (filtro === 'pendientes') return tarea.completada === 'false';

// ✅ DESPUÉS (comparando con booleanos)
if (filtro === 'completadas') return tarea.completada === true;
if (filtro === 'pendientes') return tarea.completada === false;
```

### Líneas corregidas:
```javascript
const tareasFiltradas = tareas.filter((tarea) => {
  if (filtro === 'todas') return true;
  if (filtro === 'completadas') return tarea.completada === true;   // ✅ Comparar con true
  if (filtro === 'pendientes') return tarea.completada === false;   // ✅ Comparar con false
  return true;
});
```

### Lección:
En JavaScript, **los tipos de datos importan**. `true` ≠ `"true"`. Siempre asegúrate de que ambos lados de una comparación sean del **mismo tipo de dato**. Usa `console.log(typeof variable)` para verificar qué tipo es.

---

## 🐛 BUG 4 — Agregar una tarea no la muestra en la lista

### ¿Cuál era el problema?
Se estaba **mutando** el arreglo original con `push()` en lugar de crear uno nuevo. React compara referencias de objetos, no el contenido interno, así que no detectaba que el arreglo "cambió".

### Mutación vs. Inmutabilidad:
```javascript
// ❌ ANTES (mutando el original)
tareas.push({ id: Date.now(), texto, categoria: 'general', completada: false });
setTareas(tareas);  // React sigue viendo la misma referencia, no re-renderiza

// ✅ DESPUÉS (creando uno nuevo)
setTareas([...tareas, { id: Date.now(), texto, categoria: 'general', completada: false }]);
// [...tareas] crea un NUEVO arreglo, React detecta el cambio y re-renderiza
```

### Línea corregida:
```javascript
function agregarTarea(texto) {
  if (!texto.trim()) return;
  // ✅ Usar spread operator [...] para crear nuevo arreglo
  setTareas([...tareas, { id: Date.now(), texto, categoria: 'general', completada: false }]);
}
```

### Lección:
**Nunca mutes el estado directamente** en React. Siempre crea nuevos objetos/arreglos:
- Para arreglos: `[...tareas, nuevoItem]` o `tareas.filter(...)`
- Para objetos: `{...objeto, nuevoValor}`
- React solo detecta cambios de **referencia**, no cambios internos

---

## 🐛 BUG 5 — "Cargando perfil..." se queda pegado

### ¿Cuál era el problema?
El error en `setTimeout` no era capturado ni manejado. Se lanzaba en la consola pero no se mostraba en pantalla, dejando el UI en estado "Cargando..." para siempre.

### Error silencioso:
```javascript
// ❌ ANTES (sin try/catch)
setTimeout(() => {
  if (exito) {
    setUsuario({ nombre: 'Estudiante React' });
  } else {
    throw new Error('No se pudo cargar el usuario');  // Error en consola, pero UI no se entera
  }
}, 1000);

// ✅ DESPUÉS (con try/catch y estado de error)
try {
  if (exito) {
    setUsuario({ nombre: 'Estudiante React' });
    setError(null);
  } else {
    throw new Error('No se pudo cargar el usuario');
  }
} catch (err) {
  console.error('Error al cargar usuario:', err.message);
  setError(err.message);  // Guardar error en estado para mostrarlo
}
```

### Código corregido:
```javascript
function PerfilUsuario() {
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState(null);  // ✅ Nuevo estado para errores

  useEffect(() => {
    obtenerUsuario();
  }, []);

  function obtenerUsuario() {
    const exito = Math.random() > 0.5;

    setTimeout(() => {
      try {  // ✅ Envolver en try/catch
        if (exito) {
          setUsuario({ nombre: 'Estudiante React' });
          setError(null);
        } else {
          throw new Error('No se pudo cargar el usuario');
        }
      } catch (err) {  // ✅ Capturar el error
        console.error('Error al cargar usuario:', err.message);
        setError(err.message);  // ✅ Guardar en estado
      }
    }, 1000);
  }

  // ✅ Mostrar error en pantalla si existe
  if (error) return <p className="perfil" style={{ color: 'red' }}>Error: {error}</p>;
  if (!usuario) return <p className="perfil">Cargando perfil...</p>;

  return <p className="perfil">Perfil: {usuario.nombre}</p>;
}
```

### Lección:
**Siempre maneja los errores** que pueden ocurrir en operaciones asincrónicas:
- Usa `try/catch` en funciones `async`
- Usa `.catch()` con Promesas
- Guarda el error en el estado para mostrarlo al usuario
- No confíes solo en la consola; los usuarios no la ven

---

## 🎯 Resumen de técnicas de debugging usadas

| Técnica | Cuándo usarla |
|---------|---------------|
| **Leer error completo** | Cuando la app crashea |
| **console.log()** | Para ver valor de variables |
| **typeof variable** | Para verificar tipo de dato |
| **Comparar código similar** | Encontrar diferencias |
| **try/catch** | Para errores en async/await |
| **Breakpoints (Sources)** | Para pausar y inspeccionar paso a paso |

---

## 🚀 La app está lista

Ahora el proyecto debería funcionar completamente:
- ✅ Carga sin errores
- ✅ Los filtros funcionan
- ✅ Agregar tareas funciona
- ✅ El perfil se carga o muestra errores apropiadamente
