import React from "react";

const Counter = (props) => {
  return (
    <div className="border border-slate-800 bg-slate-900 rounded-2xl p-10 text-center mb-6">
      <h2 className="text-sm tracking-[0.3em] text-slate-400 uppercase">Current Count</h2>
      <p className="text-7xl font-bold mt-6">{props.count}</p>
    </div>
  );
};

export default Counter;
