import React from "react";

const CaseStudy = () => {
  return (
    <div className="flex w-full flex-col gap-y-5 overflow-hidden bg-red-200">
      <div className="flex w-full gap-5 bg-blue-300">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div key={`s_${i}`} className="h-[200px] w-full bg-green-300"></div>
          ))}
      </div>
      <div className="flex w-full gap-5 bg-blue-300">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div
              key={`s_${i}`}
              className="h-[200px] w-full bg-purple-400"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default CaseStudy;
