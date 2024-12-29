import React from "react";

function TaskList({ tasks, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => deleteTask(index)}></button>
        </li>
      ))}
    </ul>
  );
}
export default TaskList;