import { CircleCheckBig } from "lucide-react";

const filters = ["all", "active", "completed"];

const Navbar = ({ filter, onFilterChange }) => {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 px-4 py-5">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-xl bg-blue-600 p-2 text-white">
          <CircleCheckBig size={24} strokeWidth={2.5} />
        </div>
        <h1 className="text-xl font-bold tracking-tight">TaskFlow</h1>
      </div>
      <div
        role="group"
        aria-label="Task filters"
        className="flex gap-1 rounded-md bg-slate-200 p-2"
      >
        {filters.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => onFilterChange(value)}
            aria-pressed={filter === value}
            className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition ${
              filter === value
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-600 hover:bg-white hover:text-blue-600"
            }`}
          >
            {value}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
