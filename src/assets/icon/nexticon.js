import React from "react";

export default function Nexticon({ height, width }) {
  return (
    <svg
      strokeWidth="0"
      viewBox="0 0 20 20"
      aria-hidden="true"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      ></path>
    </svg>
  );
}
