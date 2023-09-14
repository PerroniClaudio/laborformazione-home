import { getNumeri } from "@/sanity/sanity-utils";
import React from "react";
import Heading from "./ui/heading";

type Props = {};

async function NostriNumeri({}: Props) {
  const content = await getNumeri();

  return (
    <div className="hidden lg:block">
      <section className="w-full h-32 flex flex-col items-center justify-center">
        <Heading
          content={content?.title}
          className="text-primary text-6xl font-semibold"
        />
      </section>
      <img src={content?.image} alt={content?.title} />
    </div>
  );
}

export default NostriNumeri;
