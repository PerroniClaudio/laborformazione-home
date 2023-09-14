const hero = {
  name: "hero",
  title: "Sezione principale",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titolo",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Sottotitolo",
      type: "string",
    },
    {
      name: "image",
      title: "Immagine",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Testo sostitutivo",
          type: "string",
        },
      ],
    },
  ],
};

export default hero;
