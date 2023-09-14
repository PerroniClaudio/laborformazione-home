import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  area: string;
  title: string;
  children: React.ReactNode;
  url: string;
  price: string;
  imageUrl: string;
  variant: "default" | "gulf";
};

function CourseCard({
  area,
  title,
  children,
  url,
  variant,
  price,
  imageUrl,
}: Props) {
  const backgroundClass = variant === "default" ? "bg-primary" : "bg-gulf-500";
  const textClass = variant === "default" ? "text-primary" : "text-gulf-500";
  const borderClass =
    variant === "default" ? "border-primary" : "border-gulf-500";

  switch (area) {
    case "privacy":
      area = "Area Privacy";
      break;
    case "legale":
      area = "Area Legale";
      break;
    case "cybersecurity":
      area = "Cybersecurity";
      break;
  }

  return (
    <div className="shadow-xl flex flex-col justify-between bg-secondary h-full">
      <div
        className="h-32 lg:h-60 bg-no-repeat bg-center bg-cover relative"
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}>
        <div
          className={`${backgroundClass} rounded-full p-2 px-8 text-white absolute bottom-0 left-8 transform translate-y-1/2 `}>
          {area}
        </div>
      </div>
      <div className="pt-8 pb-4 px-8 lg:p-8 lg:h-96">
        <Link href={url}>
          <h1
            className={`${textClass} underline lg:no-underline text-xl lg:text-3xl font-bold`}>
            {title}
          </h1>
        </Link>
        {children}
      </div>
      <div className="hidden lg:block px-8 pb-8">
        <div className={`border-b ${borderClass}`}></div>
        <div className="flex flex-row-reverse mt-4">
          <span className={`${textClass} font-semibold`}>{price}</span>
        </div>
      </div>

      <Link href={url} className="hidden lg:block">
        <Button variant={variant} className="w-full">
          Vai al dettaglio del corso
        </Button>
      </Link>
    </div>
  );
}

export default CourseCard;
