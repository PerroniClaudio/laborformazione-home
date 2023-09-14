const numeri = {
  name: "numeri",
  title: "Numeri",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titolo (in rosso)",
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

export default numeri;
