import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Heading from "./ui/heading";

type Props = {
  children: React.ReactNode;
  title: string;
  url: string;
  variant: "gulf" | "default";
};

function RoundedCard({ title, children, url, variant }: Props) {
  let titleClass = "";
  let cardClass = "";

  if (variant == "gulf") {
    titleClass =
      "text-4xl text-center font-semibold uppercase text-primary-foreground lg:text-gulf-400";
    cardClass =
      "flex flex-col justify-between gap-8 lg:gap-4 rounded-3xl py-12 bg-gulf-600 shadow lg:p-8 lg:bg-white lg:shadow-2xl lg:border lg:border-gray-100";
  } else {
    titleClass =
      "text-4xl text-center text-primary-foreground font-semibold uppercase lg:text-primary";
    cardClass =
      "flex flex-col justify-between gap-8 lg:gap-4 rounded-3xl py-12 bg-primary shadow lg:p-8 lg:bg-white lg:shadow-2xl lg:border lg:border-gray-100";
  }

  return (
    <div className={cardClass}>
      <Heading content={title} className={titleClass} />
      <div>{children}</div>

      <Link className="hidden lg:block" href={url}>
        <Button variant={variant} className="w-full text-2xl">
          Vai a tutti i corsi
        </Button>
      </Link>

      <Link className="block lg:hidden" href={url}>
        <Button variant="secondary" className="w-full text-2xl rounded-none">
          Vai a tutti i corsi
        </Button>
      </Link>
    </div>
  );
}

export default RoundedCard;
