import { ArrowBigLeft, ArrowLeft, ArrowRight } from "lucide-react";

const RightCard = () => {
  return (
    <div className="h-full w-80 overflow-hidden rounded-4xl relative bg-red-600">
      <img
        className="h-full w-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww"
        alt=""
      />
      <div className="absolute h-full w-full top-0 left-0 p-8  flex flex-col justify-between">
        <h2 className="h-12 w-12 rounded-full flex justify-center items-center bg-white font-semibold text-3xl">
          1
        </h2>
        <div>
          <p className="text-xl leading-normal text-white mb-10">
            We help teams plan better work, ship faster, and keep every project
            moving with clear priorities and focused execution.
          </p>
          <div className="flex items-center justify-between">
            <button className="bg-blue-600 text-white font-medium px-6 py-2 rounded-full">
              Satisfied
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

export default RightCard;
