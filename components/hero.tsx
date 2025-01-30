import React from "react";
import { getHero } from "@/sanity/sanity-utils";
import Heading from "./ui/heading";
import { Button } from "./ui/button";
import Link from "next/link";
type Props = {};

async function Hero({}: Props) {
  const content = await getHero();

  return (
    <section
      className="w-full min-h-[70vh] lg:min-h-[40vh] bg-no-repeat bg-center bg-cover relative"
      style={{
        backgroundImage: `url("${content?.image}")`,
      }}>
      <div className="absolute inset-0 text-white flex flex-col gap-8 justify-center bg-gray-800/60 px-8 lg:px-24">
        <div className="flex flex-col gap-2">
          <Heading
            content={content?.title}
            className="text-4xl lg:text-5xl font-semibold uppercase text-center lg:text-left"
          />
          <p className="text-center lg:text-left text-2xl font-light">
            {content?.subtitle}
          </p>
        </div>
        <Link className="flex lg:hidden w-full items-center justify-center" href={"https://corsi.laborformazione.it/corsi/?pagina=online"}>
          <Button className=" h-16 w-2/3 font-semibold text-xl uppercase mx-auto lg:mx-0">
            Vai a tutti i corsi
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
