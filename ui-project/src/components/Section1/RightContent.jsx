import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div className=" p-6 h-full w-2/3 flex gap-5">
      {props.users.map(function(elem,idx){
        return ( <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag} /> )
      })}
    </div>
  );
};

export default RightContent;
