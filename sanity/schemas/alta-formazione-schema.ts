const altaFormazione = {
  name: "altaFormazione",
  title: "Alta Formazione",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titolo (in rosso)",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Sottotitolo (in nero, sotto il titolo)",
      type: "string",
    },
    {
      name: "image_top",
      title: "Immagine (in mezzo)",
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
    {
      name: "image_left",
      title: "Immagine (in basso a sinistra)",
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
    {
      name: "image_right",
      title: "Immagine (in basso a destra)",
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

export default altaFormazione;
