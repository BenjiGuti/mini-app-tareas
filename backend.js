// BACKEND: Recibe la tarea, la valida y la guarda

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const database = require("./baseDeDatos");

// Ruta para agregar tarea
app.post("/addTask", (req, res) => {
    const { task } = req.body;

    if (!task || task.trim() === "") {
        return res.status(400).json({ message: "Error: La tarea no puede estar vacía." });
    }

    database.saveTask(task);
    res.json({ message: `Tarea guardada: ${task}` });
});

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));

/*
📌 Escalabilidad: Se puede mejorar separando las rutas en un archivo independiente y utilizando una base de datos real.
📌 Mantenibilidad: Código modular y reutilizable, permite fácil expansión con nuevas rutas.
📌 Seguridad: Se valida la entrada del usuario y se usan respuestas con códigos de estado HTTP.
*/
