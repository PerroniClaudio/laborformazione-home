import { DiconoContent } from "@/public/types/DiconoContent";
import React from "react";
import { PortableText } from "@portabletext/react";
import { ImQuotesLeft } from "react-icons/im";

type Props = {
  content: DiconoContent;
};

function DiconoCard({ content }: Props) {
  return (
    <div className="bg-secondary flex flex-col items-center text-center justify-between gap-4 p-16 rounded-3xl relative">
      <div className="text-center">
        <h3 className="font-bold">{content.author}</h3>
        <h3 className="text-primary">{content.role}</h3>
        <h3 className="italic">{content.azienda}</h3>
      </div>
      <PortableText value={content.quote} />

      <div className="absolute top-8 right-16 text-6xl text-gray-800">
        <ImQuotesLeft />
      </div>
    </div>
  );
}

export default DiconoCard;
