import { useState, useEffect } from 'react';
import './App.css';

// Datos iniciales de tareas.
// 👀 Miren con atención: una de estas tareas es distinta a las demás...
const tareasIniciales = [
  { id: 1, texto: 'Aprender React', categoria: 'estudio', completada: false },
  { id: 2, texto: 'Hacer ejercicio', categoria: 'salud', completada: true },
  { id: 3, texto: 'Leer un libro', categoria: 'ocio', completada: false },
  { id: 4, texto: 'Practicar debugging', categoria: 'estudio', completada: false },
];

function App() {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [filtro, setFiltro] = useState('todas');
  const [contador, setContador] = useState(0);

  // ✅ BUG 2 ARREGLADO — useEffect AHORA tiene arreglo de dependencias []
  // El arreglo vacío [] significa: ejecutar UNA SOLA VEZ cuando el componente monta.
  // Sin él, se ejecutaría después de cada render, causando un loop infinito.
  useEffect(() => {
    console.log('Renderizando App, contador:', contador);
    setContador(contador + 1);
  }, []);

  // Filtra las tareas según el botón elegido
  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === 'todas') return true;
    // ✅ BUG 3 ARREGLADO — Ahora comparamos con BOOLEANOS, no strings
    // tarea.completada es true o false (booleanos), no "true" o "false" (strings)
    if (filtro === 'completadas') return tarea.completada === true;
    if (filtro === 'pendientes') return tarea.completada === false;
    return true;
  });

  // Agrega una tarea nueva a la lista
  function agregarTarea(texto) {
    if (!texto.trim()) return;
    // ✅ BUG 4 ARREGLADO — Ahora creamos un NUEVO arreglo con spread operator [...]
    // En lugar de mutar el original con push(), React detecta el cambio y re-renderiza
    setTareas([...tareas, { id: Date.now(), texto, categoria: 'general', completada: false }]);
  }

  // Marca una tarea como completada
  function completarTarea(id) {
    const nuevasTareas = tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completada: true } : tarea
    );
    setTareas(nuevasTareas);
  }

  return (
    <div className="app">
      <h1>Mis Tareas</h1>

      <div className="filtros">
        <button onClick={() => setFiltro('todas')}>Todas</button>
        <button onClick={() => setFiltro('pendientes')}>Pendientes</button>
        <button onClick={() => setFiltro('completadas')}>Completadas</button>
      </div>

      <ul className="lista-tareas">
        {tareasFiltradas.map((tarea) => (
          <li key={tarea.id} className={tarea.completada ? 'completada' : ''}>
            <span>{tarea.texto}</span>
            {/* ✅ BUG 1 ARREGLADO — Ahora tarea 4 TIENE la propiedad 'categoria'
                La tarea con id 4 en tareasIniciales ahora tiene categoria: 'estudio'
                Por eso tarea.categoria.toUpperCase() funciona sin error */}
            <span className="categoria">{tarea.categoria.toUpperCase()}</span>
            <button onClick={() => completarTarea(tarea.id)}>✔</button>
          </li>
        ))}
      </ul>

      <AgregarTarea onAgregar={agregarTarea} />
      <PerfilUsuario />
    </div>
  );
}

function AgregarTarea({ onAgregar }) {
  const [texto, setTexto] = useState('');

  function manejarEnvio(e) {
    e.preventDefault();
    onAgregar(texto);
    setTexto('');
  }

  return (
    <form onSubmit={manejarEnvio} className="form-agregar">
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

function PerfilUsuario() {
  const [usuario, setUsuario] = useState(null);
  // ✅ BUG 5 ARREGLADO — Añadimos estado para manejar errores
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerUsuario();
  }, []);

  // Simula una llamada a una API que a veces falla (como pasa en la vida real)
  function obtenerUsuario() {
    const exito = Math.random() > 0.5;

    setTimeout(() => {
      // ✅ BUG 5 ARREGLADO — Ahora envolvemos en try/catch
      // Si hay error, lo capturamos y mostramos en pantalla, no solo en consola
      try {
        if (exito) {
          setUsuario({ nombre: 'Estudiante React' });
          setError(null);
        } else {
          throw new Error('No se pudo cargar el usuario');
        }
      } catch (err) {
        console.error('Error al cargar usuario:', err.message);
        setError(err.message);
      }
    }, 1000);
  }

  if (error) return <p className="perfil" style={{ color: 'red' }}>Error: {error}</p>;
  if (!usuario) return <p className="perfil">Cargando perfil...</p>;

  return <p className="perfil">Perfil: {usuario.nombre}</p>;
}

export default App;
