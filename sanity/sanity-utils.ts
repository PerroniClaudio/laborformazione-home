import { createClient, groq } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";
import { HeroContent } from "@/public/types/HeroContent";
import { AltaFormazioneContent } from "@/public/types/AltaFormazioneContent";
import { PercorsiFormativiContent } from "@/public/types/PercorsiFormativiContent";
import { NumeriContent } from "@/public/types/NumeriContent";
import { CoursesContent } from "@/public/types/CoursesContent";
import { DiconoContent } from "@/public/types/DiconoContent";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
});

export async function getHero(): Promise<HeroContent> {
  return client.fetch(
    groq`*[_type == "hero"][0]{
            title,
            subtitle,
            "image": image.asset->url
        }`
  );
}

export async function getAltaFormazione(): Promise<AltaFormazioneContent> {
  return client.fetch(
    groq`*[_type == "altaFormazione"][0]{
            title,
            subtitle,
            "image_top": image_top.asset->url,
            "image_left": image_left.asset->url,
            "image_right": image_right.asset->url,
        }`
  );
}

export async function getPercorsiFormativi(): Promise<PercorsiFormativiContent> {
  return client.fetch(
    groq`*[_type == "percorsiFormativi"][0]{
            title,
            card_first_title,
            card_first_description,
            card_second_title,
            card_second_description
        }`
  );
}

export async function getNumeri(): Promise<NumeriContent> {
  return client.fetch(
    groq`*[_type == "numeri"][0]{
                title,
                "image": image.asset->url
            }`
  );
}

export async function getCorsi(): Promise<CoursesContent[]> {
  return client.fetch(
    groq`*[_type == "corsi"]{
            title,
            category,
            duration,
            date,
            language,
            type,
            price,
            crsno,
            "image": image.asset->url
        }`
  );
}

export async function getDicono(): Promise<DiconoContent[]> {
  return client.fetch(
    groq`*[_type == "dicono"]{
            "id": _id,
            author,
            role,
            azienda,
            quote
        }`
  );
}
