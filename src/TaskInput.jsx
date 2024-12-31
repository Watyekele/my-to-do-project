import React, { useState } from "react";

function TaskInput({ addTask }) {
  const [newTask, setNewTask] = useState("");
  const handleAddTask = () => {
    addTask(newTask);
    setNewTask("");
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;
