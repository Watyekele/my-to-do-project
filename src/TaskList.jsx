import React from "react";

function TaskList({ tasks, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className="text-white mr-2 ">
          {task}
          <button
            onClick={() => deleteTask(index)}
            className="text-white bg-black p-2"
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
export default TaskList;
