import { useState } from "react";

const TaskForm = ({ onAddTask, onUpdateTask, taskToEdit, onCancelEdit }) => {
  const [task, setTask] = useState(taskToEdit?.title ?? "");

  const submitHandler = (e) => {
    e.preventDefault();

    const title = task.trim();
    if (!title) return;

    if (taskToEdit) {
      onUpdateTask(taskToEdit.id, title);
    } else {
      onAddTask(title);
    }

    setTask("");
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-wrap gap-2">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="What do you want to do?"
        aria-label="Task title"
        className="min-w-0 flex-1 rounded-md border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        {taskToEdit ? "Update Task" : "Add Task"}
      </button>
      {taskToEdit && (
        <button
          type="button"
          onClick={onCancelEdit}
          className="rounded-md border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default TaskForm;
