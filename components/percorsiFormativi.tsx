import { getPercorsiFormativi } from "@/sanity/sanity-utils";
import React from "react";
import RoundedCard from "./roundedCard";
import { PortableText } from "@portabletext/react";
import Heading from "./ui/heading";

import { Reem_Kufi_Fun } from "next/font/google";
const rkf = Reem_Kufi_Fun({ subsets: ["latin"] });

type Props = {};

async function PercorsiFormativi({}: Props) {
  const content = await getPercorsiFormativi();

  return (
    <>
      <section className="w-full flex flex-col gap-2 items-center justify-center p-4 lg:p-8">
        <h3 className="hidden lg:block text-xl">CORSI DI ALTA FORMAZIONE</h3>
        <Heading
          content={content?.title}
          className="text-primary text-center text-3xl lg:text-6xl font-semibold"
        />
        <h3 className="block lg:hidden text-lg">ALTA FORMAZIONE</h3>
      </section>

      <section className="grid gap-8 p-4 lg:grid-cols-2 lg:p-0">
        <RoundedCard
          url="https://corsi.laborformazione.it/corsi/?pagina=online"
          title={content?.card_first_title}
          variant="default">
          <div
            className={`${rkf.className} text-primary-foreground text-xl  font-semibold text-center  flex flex-col items-center justify-center lg:text-primary lg:text-3xl lg:h-48`}>
            <PortableText value={content?.card_first_description} />
          </div>
        </RoundedCard>
        <RoundedCard
          url="https://corsi.laborformazione.it/aree-formative/?pagina=eccellenza"
          title={content?.card_second_title}
          variant="gulf">
          <div
            className={`${rkf.className} text-primary-foreground font-semibold text-center  flex flex-col items-center justify-center lg:h-48 lg:text-gulf-600 lg:text-3xl`}>
            <PortableText value={content?.card_second_description} />
          </div>
        </RoundedCard>
      </section>
    </>
  );
}

export default PercorsiFormativi;
