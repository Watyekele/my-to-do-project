import { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
  };

  const deleteTask = (indexToDelete) =>
    setTasks(tasks.filter((_, index) => index !== indexToDelete));

  return (
    <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4 border border-gray-400 p-4 w-full max-w-lg max-h-lg shadow-lg">
        <h1 className=" text-3xl text-white ">To-Do List</h1>
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
