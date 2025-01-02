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
        className="border border-full m-2"
        type="text"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
      />
      <button onClick={handleAddTask} className="bg-black text-white m-2">
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;
