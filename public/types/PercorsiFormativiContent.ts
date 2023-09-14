import { PortableTextBlock } from "sanity";

export type PercorsiFormativiContent = {
  title: string;
  card_first_title: string;
  card_first_description: PortableTextBlock[];
  card_second_title: string;
  card_second_description: PortableTextBlock[];
};
