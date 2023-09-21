import { PortableTextBlock } from "sanity";

export type DiconoContent = {
  id: string;
  author: string;
  role: string;
  azienda: string;
  quote: PortableTextBlock[];
};
