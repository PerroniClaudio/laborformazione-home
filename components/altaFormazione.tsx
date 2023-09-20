import { getAltaFormazione } from "@/sanity/sanity-utils";
import React from "react";
import SimpleCard from "./simpleCard";
import Heading from "./ui/heading";

type Props = {};

async function AltaFormazione({}: Props) {
  const content = await getAltaFormazione();

  return (
    <>
      <section className="w-full flex flex-col gap-2 items-center justify-center p-4 lg:p-8">
        <h3 className="hidden lg:block text-xl">CORSI DI ALTA FORMAZIONE</h3>
        <Heading
          content={content?.title}
          className="text-primary text-center text-2xl lg:text-6xl font-semibold"
        />
        <h4 className="text-lg text-center">{content?.subtitle}</h4>
      </section>

      <section className="grid gap-2 lg:gap-0 lg:grid-cols-3">
        <SimpleCard
          title="Area Privacy"
          url="https://laborformazione.it/aree-formative/?pagina=privacy">
          <img
            src="./PRIVACY.svg"
            alt="Privacy Icon"
            className="aspect-square h-32"
          />
        </SimpleCard>
        <div
          className="bg-cover bg-center bg-no-repeat hidden lg:block"
          style={{
            backgroundImage: `url("${content?.image_top}")`,
          }}></div>
        <SimpleCard
          title="Area legale"
          url="https://laborformazione.it/aree-formative/?pagina=legale">
          <img
            src="./LEGALE.svg"
            alt="Privacy Icon"
            className="aspect-square h-32"
          />
        </SimpleCard>
        <div
          className="bg-cover bg-center bg-no-repeat  hidden lg:block"
          style={{
            backgroundImage: `url("${content?.image_left}")`,
          }}></div>
        <SimpleCard
          title="Cyber security"
          url="https://laborformazione.it/aree-formative/?pagina=cybersecurity">
          <img
            src="./CYBER.svg"
            alt="Privacy Icon"
            className="aspect-square h-32"
          />
        </SimpleCard>
        <div
          className="bg-cover bg-center bg-no-repeat  hidden lg:block"
          style={{
            backgroundImage: `url("${content?.image_right}")`,
          }}></div>
      </section>
    </>
  );
}

export default AltaFormazione;
