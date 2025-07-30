import React from "react";

export default function Chanalogicon({ widht, height }) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
      height={height}
      width={widht}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        stroke="currentColor"
      ></path>
    </svg>
  );
}
