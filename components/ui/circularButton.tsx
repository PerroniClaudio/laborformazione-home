import React from "react";

type Props = {
  variant: string;
  children: React.ReactNode;
};

enum Variants {
  white = "w-7 h-7 rounded-full  bg-white text-primary hover:bg-primary/90 hover:text-white",
  dark = "w-10 h-10 rounded-full  bg-gray-800 text-primary-foreground hover:bg-gray-800/90",
  primary = "w-10 h-10 rounded-full  bg-primary text-primary-foreground hover:bg-primary/90",
}

type VariantKeys = keyof typeof Variants;

function CircularButton({ variant, children }: Props) {
  const variantClass = Variants[variant as VariantKeys];

  return (
    <div>
      <button
        className={`${variantClass} focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 flex flex-col items-center justify-center`}>
        {children}
      </button>
    </div>
  );
}

export default CircularButton;
