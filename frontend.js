
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("taskForm");
    const input = document.getElementById("taskInput");
    const message = document.getElementById("message");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const task = input.value.trim();
        if (!task) {
            message.textContent = "Error: La tarea no puede estar vacía.";
            return;
        }

        const response = await fetch("http://localhost:3000/addTask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ task }),
        });

        const data = await response.json();
        message.textContent = data.message;
        input.value = "";
    });
});

/*
📌 Escalabilidad: Se puede mejorar separando este código en diferentes módulos y agregando frameworks como React.
📌 Mantenibilidad: Está estructurado de forma sencilla y modular para facilitar futuras modificaciones.
📌 Seguridad: Se valida la entrada del usuario antes de enviarla al backend.
*/
