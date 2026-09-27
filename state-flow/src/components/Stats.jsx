import React from "react";

const Stats = (props) => {
  const status =
    props.count > 0 ? "Positive" : props.count < 0 ? "Negative" : "Zero";
  const statusColor =
    props.count > 0
      ? "text-green-400"
      : props.count < 0
        ? "text-red-400"
        : "text-slate-400";
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h2 className="text-sm font-medium text-slate-400 uppercase tracking-wider">
          Total Clicks
        </h2>
        <p className="text-sm text-slate-500 mt-2">
          How many times you clicked
        </p>
        <span className="block text-4xl font-bold mt-6">
          {props.totolClicks}
        </span>
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h2 className="text-sm font-medium text-slate-400 uppercase tracking-wider">
          Status
        </h2>
        <p className="text-sm text-slate-500 mt-2">Current count status</p>
        <span className={`block text-4xl font-bold mt-6 ${statusColor}`}>
          {status}
        </span>
      </div>
    </div>
  );
};

export default Stats;
