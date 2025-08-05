import React from "react";

export default function Logo2() {
  return (
    <svg
      width="29"
      height="32"
      viewBox="0 0 29 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 29C22.5081 29 29 22.5081 29 14.5C29 6.49187 22.5081 0 14.5 0C6.49187 0 0 6.49187 0 14.5C0 22.5081 6.49187 29 14.5 29Z"
        fill="#4F46E4"
      />
      <g filter="url(#filter0_d_154_26)">
        <path
          d="M8 16.5L11.5 13L7 9.5H12L14 5L16 9.5H21.5L8 23.5M14 20.5L20 14.5M8 19.5L13 14.5"
          stroke="white"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_154_26"
          x="2.5"
          y="4.5"
          width="23.5"
          height="27.3472"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_154_26"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_154_26"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
