import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Heading from "./ui/heading";

type Props = {
  children: React.ReactNode;
  title: string;
  url: string;
};

function SimpleCard({ title, url, children }: Props) {
  return (
    <div className="bg-secondary flex flex-col items-center justify-between gap-4 p-8">
      <div className="flex lg:flex-col justify-between items-center w-full gap-4">
        <Heading
          content={title}
          className="text-4xl text-center font-semibold uppercase text-tertiary order-2 lg:order-1"
        />
        {children}
      </div>

      <Link href={url} className="w-full">
        <Button className="w-full">VAI A TUTTI I CORSI</Button>
      </Link>
    </div>
  );
}

export default SimpleCard;
