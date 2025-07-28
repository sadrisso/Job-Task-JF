import React from "react";

export default function Button({ text }) {
  return (
    <div>
      <button className="bg-[#B0DD1D] px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-green-400 text-xs">
        {text}
      </button>
    </div>
  );
}
