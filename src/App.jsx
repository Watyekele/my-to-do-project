import { useState } from "react";
import "./App.css";
import TaskInput from "./Taskinput";
import TaskList from "./Tasklist";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
