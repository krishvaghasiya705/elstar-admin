import React from "react";

export default function CommonButton({
  text = "Click Me",
  variant = "default",
  size = "md",
  color = "gray",
  shape = "round",
  disabled = false,
  icon = null,
  active = false,
  loading = false,
  block = false,
  onClick,
  Styling,
  dotstyle,
  iconStyle
}) {
  const sizeClassMap = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-1 text-sm",
    md: "px-3 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  };

  const shapeClassMap = {
    round: "rounded-md",
    circle: "rounded-full",
    none: "rounded-none",
  };

  let baseClasses =
    "inline-flex items-center justify-center font-InterUi transition-all duration-150 focus:outline-none";

  let colorClasses = "";

  if (variant === "default") {
    colorClasses = `bg-white border border-gray-300 text-gray-700 hover:bg-gray-50`;
  } else if (variant === "solid") {
    colorClasses = `bg-${color}-600 text-white hover:bg-${color}-700`;
  } else if (variant === "twoTone") {
    colorClasses = `bg-${color}-100 text-${color}-800 border border-${color}-200 hover:bg-${color}-200`;
  } else if (variant === "plain") {
    colorClasses = `bg-transparent text-${color}-700 hover:underline`;
  }

  const fullWidth = block ? "w-full" : "";
  const activeRing = active
    ? "ring-2 ring-offset-2 ring-offset-white ring-blue-500"
    : "";
  const disabledState =
    disabled || loading ? "opacity-50 cursor-not-allowed" : "";

  const buttonClasses = `${Styling} ${baseClasses} ${sizeClassMap[size]} ${shapeClassMap[shape]} ${colorClasses} ${fullWidth} ${activeRing} ${disabledState}`;

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled || loading}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4 mr-2 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
      )}
      {dotstyle && <span className={`${dotstyle} rounded-full mr-[6px]`}></span>}
      {!loading && icon && <span className={`${iconStyle} mr-2`}>{icon}</span>}
      {!shape.includes("circle") && <span>{text}</span>}
    </button>
  );
}
