import React from "react";

export default function ProgressBar({
  value = 0,
  color = "green-500",
  height = "6px",
  rounded = "rounded-[4px]",
  showLabel = true,
  label = null,
  containerClass = "",
  labelClass = "",
}) {
  const percent = Math.max(0, Math.min(100, value));

  return (
    <div className={`flex items-center w-full ${containerClass}`}>
      <div
        className={`w-full relative overflow-hidden bg-gray-100 ${rounded}`}
        style={{ height }}
      >
        <div
          className={`absolute top-0 left-0 h-full ${rounded} bg-${color}`}
          style={{ width: `${percent}%` }}
        />
      </div>
      {showLabel && (
        <div className="ml-2">
          <span
            className={
              `text-sm font-medium font-InterUi text-gray-500 whitespace-nowrap ` +
              labelClass
            }
          >
            {label || `${percent}%`}
          </span>
        </div>
      )}
    </div>
  );
}
