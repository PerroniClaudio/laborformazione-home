import React from "react";
import { Reem_Kufi_Fun } from "next/font/google";
const headingFont = Reem_Kufi_Fun({ subsets: ["latin"] });

type Props = {
  className?: string;
  content: string;
};

function Heading({ className, content }: Props) {
  return <h1 className={`${headingFont.className} ${className}`}>{content}</h1>;
}

export default Heading;
