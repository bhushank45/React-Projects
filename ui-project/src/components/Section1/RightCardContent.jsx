import React from "react";
import { ArrowRight } from "lucide-react";
const RightCardContent = (props) => {
  return (
    <div>
      <div className="absolute h-full w-full top-0 left-0 p-8  flex flex-col justify-between">
        <h2 className="h-12 w-12 rounded-full flex justify-center items-center bg-white font-semibold text-3xl">
          {props.id+1}
        </h2>
        <div>
          <p className="text-xl leading-relaxed text-white mb-10 text-shadow-2xs">
            {props.intro}
          </p>
          <div className="flex items-center justify-between">
            <button style={{backgroundColor:props.color}} className=" text-white font-medium px-6 py-2 rounded-full">
              {props.tag}
            </button>
            <button className="bg-blue-600 text-white font-medium px-2 py-2 rounded-full">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
