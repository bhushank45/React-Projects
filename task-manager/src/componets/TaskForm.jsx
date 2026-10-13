import { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    onAddTask(task);
    setTask("");
  };
  return (
    <form onSubmit={submitHandler} className="flex gap-2">
      <input
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        placeholder="What do you want to do ?"
        className="outline-none border rounded-md flex-1 px-4 py-3"
      />
      <button type="submit" className="bg-blue-600 text-white rounded-md px-5 py-3 font-semibold">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
