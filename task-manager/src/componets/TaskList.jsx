import { useState } from "react";
import { Search } from "lucide-react";
import TaskCard from "./TaskCard";

const TaskList = ({
  tasks,
  filter,
  onDeleteTask,
  onEdit,
  onToggleTask,
}) => {
  const [search, setSearch] = useState("");
  const visibleTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && !task.completed) ||
      (filter === "completed" && task.completed);
    return (
      matchesFilter &&
      task.title.toLowerCase().includes(search.trim().toLowerCase())
    );
  });

  return (
    <div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-2">
        <div className="flex justify-center items-center gap-3">
          <h2 className="text-xl font-semibold">My Tasks</h2>
          <p className="rounded-full bg-slate-200 px-2 font-semibold">
            {tasks.length}
          </p>
        </div>
        <label className="flex items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2">
          <Search size={18} className="text-slate-500 shrink-0" />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search tasks..."
            aria-label="Search tasks"
            className="w-full min-w-0 outline-none sm:w-48"
          />
        </label>
      </div>
      <div aria-live="polite">
        {visibleTasks.length > 0 ? (
          visibleTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={() => onDeleteTask(task.id)}
              onEdit={() => onEdit(task.id)}
              onToggle={() => onToggleTask(task.id)}
            />
          ))
        ) : (
          <p className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-10 text-center text-slate-500">
            {tasks.length === 0
              ? "No tasks yet. Add one above to get started."
              : "No tasks match your search or filter."}
          </p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
