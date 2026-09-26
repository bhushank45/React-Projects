import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div
      id="right"
      className=" p-6 h-full w-2/3 flex gap-5 overflow-x-auto flex-nowrap"
    >
      {props.users.map(function (elem, idx) {
        return (
          <RightCard
            key={idx}
            id={idx}
            color={elem.color}
            img={elem.img}
            intro={elem.intro}
            tag={elem.tag}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
