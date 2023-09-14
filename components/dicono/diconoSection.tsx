import { getDicono } from "@/sanity/sanity-utils";
import React from "react";
import DiconoCarousel from "./DiconoCarousel";
import Heading from "../ui/heading";

type Props = {};

async function DiconoSection({}: Props) {
  const content = await getDicono();
  return (
    <section className="hidden lg:block">
      <section className="w-full h-64 flex flex-col items-center justify-center">
        <Heading
          content="DICONO DI NOI"
          className="text-primary text-6xl font-semibold"
        />
      </section>
      <DiconoCarousel content={content} />
    </section>
  );
}

export default DiconoSection;
