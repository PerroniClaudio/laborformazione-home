const corsi = {
  name: "corsi",
  title: "Corsi",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titolo",
      type: "string",
    },
    {
      name: "crsno",
      title: "Numero corso",
      type: "string",
    },
    {
      name: "category",
      title: "Categoria",
      type: "string",
      initialValue: "privacy",
      options: {
        list: [
          { title: "Area privacy", value: "privacy" },
          { title: "Area legale", value: "legale" },
          { title: "Cybersecurity", value: "cybersecurity" },
        ],
      },
    },
    {
      name: "duration",
      title: "Durata",
      type: "string",
    },
    {
      name: "date",
      title: "Data",
      type: "date",
    },
    {
      name: "language",
      title: "Lingua",
      type: "string",
    },
    {
      name: "type",
      title: "Tipo",
      type: "string",
      initialValue: "elearning",
      options: {
        list: [
          { title: "E-learning", value: "elearning" },
          { title: "Webinar", value: "webinar" },
        ],
      },
    },
    {
      name: "price",
      title: "Prezzo",
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

export default corsi;
