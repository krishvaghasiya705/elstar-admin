import React from "react";

export default function Sortupicon({ height, width }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
      ></path>
    </svg>
  );
}
