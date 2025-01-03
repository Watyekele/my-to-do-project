import React from "react";

function TaskList({ tasks, deleteTask }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="text-white flex justify-between items-center "
        >
          <span className="truncate w-3/4">{task}</span>
          <button
            onClick={() => deleteTask(index)}
            className="text-white bg-black p-2 ml-6"
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
export default TaskList;
