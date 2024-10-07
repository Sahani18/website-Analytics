import React, { useState } from "react";
import { trackClickEvent } from "../analytics/googleAnalytics";

function Button({ catagory, label }) {
  const [count, setCount] = useState(0);
  const handleChange = () => {
    setCount((count) => count + 1);
    trackClickEvent(catagory, label);
  };
  return (
    <>
      <p className="text-black mx-auto text-xl">{count}</p>
      <button
        onClick={handleChange}
        className="bg-green-400 border-black border-2 rounded-full p-2 hover:bg-green-600 hover:text-gray-800"
      >
        Event {label}
      </button>
    </>
  );
}

export default Button;
