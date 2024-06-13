import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the tasks!", error);
      });
  }, []);

  const addTask = (task) => {
    axios
      .post("http://localhost:4000/tasks", task)
      .then((response) => {
        setTasks([...tasks, response.data]);
      })
      .catch((error) => {
        console.error("There was an error adding the task!", error);
      });
  };

  const updateTask = (updatedTask) => {
    axios
      .put(`http://localhost:4000/tasks/${updatedTask.id}`, updatedTask)
      .then((response) => {
        setTasks(
          tasks.map((task) =>
            task.id === updatedTask.id ? response.data : task
          )
        );
      })
      .catch((error) => {
        console.error("There was an error updating the task!", error);
      });
  };

  const deleteTask = (taskId) => {
    axios
      .delete(`http://localhost:4000/tasks/${taskId}`)
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== taskId));
      })
      .catch((error) => {
        console.error("There was an error deleting the task!", error);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
