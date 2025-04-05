
let tasks = [];

function saveTask(task) {
    tasks.push(task);
    console.log("Tarea almacenada:", task);
}

function getTasks() {
    return tasks;
}

module.exports = { saveTask, getTasks };

/*
📌 Escalabilidad: Se puede reemplazar esta lista con una base de datos real como MongoDB o MySQL.
📌 Mantenibilidad: Separar la lógica de almacenamiento facilita futuras modificaciones.
📌 Seguridad: Para producción, se deben implementar controles de acceso y autenticación.
*/
