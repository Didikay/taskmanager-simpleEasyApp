import React from "react";
import "./TaskList.css";

function TaskList({ tasks, updateTask, deleteTask }) {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            task.completed ? "task-completed" : "task-not-completed"
          }`}
        >
          <span>{task.text}</span>
          <div>
            <button
              className="btn btn-sm btn-success mr-2"
              onClick={() =>
                updateTask({ ...task, completed: !task.completed })
              }
            >
              {task.completed ? "Mark as not completed" : "Mark as completed"}
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
