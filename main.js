// Definimos un array que van a contener a las tareas
const tareas = [];

// Definimos una función para añadir tareas
function añadirtarea(nombreTarea) {
  const tarea = {
    id: tareas.length + 1,
    nombre: nombreTarea,
    completado: false
  };
  tareas.push(tarea);
  console.log(`Tarea "${tarea.nombre}" agregada.`);
}

// Definimos una función para marcar una tarea como completada
function completetarea(tareaId) {
  const tarea = tareas.find(item => item.id === tareaId);
  if (tarea) {
    tarea.completado = true;
    console.log(`Tarea "${tarea.nombre}" marcada como completada.`);
  } else {
    console.log('Tarea no encontrada.');
  }
}

// Definimos una función para buscar tareas por nombre
function buscartareas(clave) {
  const foundtareas = tareas.filter(tarea =>
    tarea.nombre.toLowerCase().includes(clave.toLowerCase())
  );
  if (foundtareas.length === 0) {
    console.log('No se encontraron tareas que coincidan con la búsqueda.');
  } else {
    console.log(`Tareas encontradas para "${clave}":`);
    foundtareas.forEach(tarea => {
      console.log(`${tarea.id}. ${tarea.nombre} - ${tarea.completado ? 'Completada' : 'Pendiente'}`);
    });
  }
}

// Definimos una función para listar todas las tareas
function listartareas() {
  if (tareas.length === 0) {
    console.log('No hay tareas en la lista.');
  } else {
    console.log('Lista de tareas:');
    tareas.forEach(tarea => {
      console.log(`${tarea.id}. ${tarea.nombre} - ${tarea.completado ? 'Completada' : 'Pendiente'}`);
    });
  }
}

// Creamos la función que va a interactuar con el usuario
function menuFuncional() {
  console.log('Bienvenido al sistema donde puedes agendar tus tareas!');
  console.log('1. Agregar tarea');
  console.log('2. Marcar tarea como completada');
  console.log('3. Buscar tareas');
  console.log('4. Mostrar tareas');
  console.log('5. Salir');

  const opcion = parseInt(prompt('Seleccione una opción:'));

  switch (opcion) {
    case 1:
      const nuevoNombreTarea = prompt('Digite el nombre de la tarea:');
      añadirtarea(nuevoNombreTarea);
      break;
    case 2:
      const tareaId = parseInt(prompt('Digite el ID de la tarea a marcar como completada:'));
      completetarea(tareaId);
      break;
    case 3:
      const TerminoBusqueda = prompt('Digite el término de búsqueda:');
      buscartareas(TerminoBusqueda);
      break;
    case 4:
      listartareas();
      break;
    case 5:
      console.log('Salida con éxito!');
      return;
    default:
      console.log('Opción inválida. Por favor, seleccione una opción válida.');
  }

  menuFuncional(); 
}

// Llamamos al menú funcional
menuFuncional(); 
