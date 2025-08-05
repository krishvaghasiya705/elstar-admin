import React from 'react';

const Tooltip = ({ children, text }) => {
  return (
    <div className="relative inline-block group">
      {children}
      <span
        className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[140px] bg-gray-800 text-white text-center rounded-md py-[5px] absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2"
      >
        {text}
        <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-[5px] border-x-transparent border-t-[5px] border-t-gray-800"></span>
      </span>
    </div>
  );
};

export default Tooltip;
