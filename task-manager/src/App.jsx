import { useState } from "react";
import Navbar from "./componets/Navbar";
import TaskForm from "./componets/TaskForm";
import TaskList from "./componets/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const editingTask = tasks.find((task) => task.id === editingTaskId) ?? null;

  const addTask = (newTask) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: crypto.randomUUID(), title: newTask, completed: false },
    ]);
  };

  const updateTask = (taskId, title) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, title } : task,
      ),
    );
    setEditingTaskId(null);
  };

  const deleteTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    );
    if (editingTaskId === taskId) {
      setEditingTaskId(null);
    }
  };

  const toggleTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Navbar filter={filter} onFilterChange={setFilter} />
        <main className="mt-8">
          <TaskForm
            key={editingTask?.id ?? "new"}
            onAddTask={addTask}
            onUpdateTask={updateTask}
            taskToEdit={editingTask}
            onCancelEdit={() => setEditingTaskId(null)}
          />
          <TaskList
            tasks={tasks}
            filter={filter}
            onDeleteTask={deleteTask}
            onEdit={setEditingTaskId}
            onToggleTask={toggleTask}
          />
        </main>
      </div>
    </div>
  );
};

export default App;
