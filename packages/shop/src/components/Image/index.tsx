import classNames from "classnames";
import { memo } from "react";
import "./styles.scss";

interface ImageProps {
  src: string | undefined;
  width: string;
  height: string;
  alt?: string;
  radius?: "50%" | "0" | "4px" | "8px";
}

const Image = memo(({ src, width, height, alt, radius = "0" }: ImageProps) => {
  return (
    <div className="image">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ borderRadius: radius }}
        loading="lazy"
      />
    </div>
  );
});

export default Image;
