import { memo } from "react";

const CodeIcon = memo(() => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 14L6 25L17 36M33 14L44 25L33 36M28 10L22 40"
        stroke="#ED8936"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default CodeIcon;
