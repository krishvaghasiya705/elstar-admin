import React from "react";

export default function Listingicon({ height, width }) {
  return (
    <svg
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 10h16M4 14h16M4 18h16"
        stroke="currentColor"
      ></path>
    </svg>
  );
}
