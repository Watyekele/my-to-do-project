import React, { useState } from "react";

function TaskInput({ addTask }) {
  const [newTask, setNewTask] = useState("");
  const handleAddTask = () => {
    addTask(newTask);
    setNewTask("");
  };
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex space-x-2">
        <input
          className="border border-full m-2"
          type="text"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
        <button onClick={handleAddTask} className="text-white bg-black p-2">
          Add Task
        </button>
      </div>
    </div>
  );
}

export default TaskInput;
