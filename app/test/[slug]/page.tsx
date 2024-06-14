"use client";

import { useState } from "react";

const Page = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`${
              index <= rating ? "text-yellow-500" : "text-gray-300"
            }`}
            onMouseEnter={() => setRating(index)}
          >
            <span className="text-3xl">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default Page;
