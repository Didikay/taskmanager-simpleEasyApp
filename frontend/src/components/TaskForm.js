import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({ text: task, completed: false });
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
}

export default TaskForm;
