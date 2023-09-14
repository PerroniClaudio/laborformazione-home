import React from "react";

type Props = {
  src: string;
  height?: number;
  width?: number;
  className?: string;
  alt?: string;
};

function CustomIcon({
  src,
  height = 24,
  width = 24,
  alt = "Icon",
  className,
}: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      height={height}
      width={width}
    />
  );
}

export default CustomIcon;
