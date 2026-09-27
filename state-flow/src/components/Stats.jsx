import React from "react";

const Stats = (props) => {
  return (
    <div>
      <div>
        <h2>Total Clicks</h2>
        <p>How many times you clicked</p>
        <span>{props.totolClicks}</span>
      </div>
      <div>
        <h2>Status</h2>
        <p>Current count status</p>
        <span>
          {props.count > 0 ? "Positive" : props.count < 0 ? "Negative" : "Zero"}
        </span>
      </div>
    </div>
  );
};

export default Stats;
