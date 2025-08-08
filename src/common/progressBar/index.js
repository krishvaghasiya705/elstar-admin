import React from "react";

const colorMap = {
  "green-500": "bg-green-500",
  "indigo-600": "bg-indigo-600",
  "red-500": "bg-red-500",
  "amber-500": "bg-amber-500",
  "gray-400": "bg-gray-400",
  "yellow-500": "bg-yellow-500",
  "purple-500": "bg-purple-500",
};

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
  const bgColorClass = colorMap[color] || "bg-gray-400";

  return (
    <div className={`flex items-center w-full ${containerClass}`}>
      <div
        className={`w-full relative overflow-hidden bg-gray-100 ${rounded}`}
        style={{ height }}
      >
        <div
          className={`absolute top-0 left-0 h-full ${rounded} ${bgColorClass}`}
          style={{ width: `${percent}%` }}
        />
      </div>
      {showLabel && (
        <div className="ml-2">
          <span
            className={`text-sm font-medium font-InterUi text-gray-500 whitespace-nowrap ${labelClass}`}
          >
            {label || `${percent}%`}
          </span>
        </div>
      )}
    </div>
  );
}
