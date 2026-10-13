import { Circle, Pencil, Trash2, CircleCheck } from "lucide-react";

const TaskCard = ({ task, onDelete, onEdit, onToggle }) => {
  return (
    <article className="mb-3 flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onToggle}
          aria-label={task.completed ? "Mark task active" : "Mark task complete"}
          aria-pressed={task.completed}
          className="rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {task.completed ? (
            <CircleCheck size={24} className="text-green-600" />
          ) : (
            <Circle size={24} className="text-slate-400" />
          )}
        </button>
        <h2
          className={
            task.completed
              ? "text-lg text-slate-400 line-through"
              : "text-lg font-semibold"
          }
        >
          {task.title}
        </h2>
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onEdit}
          aria-label={`Edit ${task.title}`}
          className="rounded-lg text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Pencil
            size={36}
            className="rounded-lg bg-blue-100 p-2"
          />
        </button>
        <button
          type="button"
          onClick={onDelete}
          aria-label={`Delete ${task.title}`}
          className="rounded-lg text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <Trash2
            size={36}
            className="rounded-lg bg-red-100 p-2"
          />
        </button>
      </div>
    </article>
  );
};

export default TaskCard;
