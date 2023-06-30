import { memo } from "react";

interface Props {
  type?: "left" | "right";
}
const SliderArrowIcon = memo(({ type = "left" }: Props) => {
  if (type === "right") {
    return (
      <svg
        width="23"
        height="43"
        viewBox="0 0 23 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.1736 0.448L22.3176 21.376L10.2216 42.304H0.669623L13.1016 21.376L0.669623 0.448H10.1736Z"
          fill="white"
        />
      </svg>
    );
  }

  return (
    <svg
      width="23"
      height="43"
      viewBox="0 0 23 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8264 42.552L0.682375 21.624L12.7784 0.695998H22.3304L9.89838 21.624L22.3304 42.552H12.8264Z"
        fill="white"
      />
    </svg>
  );
});

export default SliderArrowIcon;
