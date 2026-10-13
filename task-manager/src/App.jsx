import { useState } from "react";
import Navbar from "./componets/Navbar";
import TaskForm from "./componets/TaskForm";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = (newTask) => {
    const copyArray = [...tasks];
    copyArray.push(newTask);
    setTasks(copyArray);
  };
  return (
    <div className="min-h-screen bg-white ">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Navbar />
        <main className="mt-8">
          <TaskForm onAddTask={addTask} />
        </main>
      </div>
    </div>
  );
};

export default App;
