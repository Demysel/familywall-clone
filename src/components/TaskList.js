import React, { useEffect, useState } from "react";
import { fetchData, saveData } from "./api";

const TASKS_BIN_ID = "679b8a37ad19ca34f8f6fdce"; // Remplace par l'ID de ton bin

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const data = await fetchData(TASKS_BIN_ID);
      setTasks(data.record || []);
    }
    loadTasks();
  }, []);

  const addTask = async (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    await saveData(TASKS_BIN_ID, updatedTasks);
  };

  return (
    <div>
      <h2>Liste de Tâches</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button onClick={() => addTask(`Nouvelle tâche ${tasks.length + 1}`)}>
        Ajouter une tâche
      </button>
    </div>
  );
}

export default TaskList;
