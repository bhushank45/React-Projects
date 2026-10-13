import { CircleCheckBig } from "lucide-react";

const Navbar = () => {
  return (
      <nav className="flex flex-wrap items-center justify-between gap-4 px-4 py-5">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center text-white rounded-xl bg-blue-600 p-2">
            <CircleCheckBig size={24} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">TaskFlow</h1>
          </div>
        </div>
        <div className="flex gap-1 bg-slate-200 rounded-md p-2">
          <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm">
            All
          </button>
          <button className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-blue-600">
            Active
          </button>
          <button className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-blue-600">
            Completed
          </button>
        </div>
      </nav>
  );
};

export default Navbar;
