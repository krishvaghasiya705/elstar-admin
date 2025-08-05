import React from "react";

export default function Activityicon({ widht, height }) {
  return (
    <svg
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={height}
      width={widht}
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
  );
}
